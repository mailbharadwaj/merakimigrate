import React, { useState, useEffect } from 'react';
import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Alert, AlertDescription } from '../../ui/alert';
import { Loader2, ArrowRight, Building, Server, AlertTriangle, CheckCircle, HelpCircle } from 'lucide-react';
import { parseBackupZip, getOrgDevices } from '../../../services/merakiService';

interface RestoreReviewStepProps {
  data: any;
  onUpdate: (data: any) => void;
  onNext: () => void;
}

export function RestoreReviewStep({ data, onUpdate, onNext }: RestoreReviewStepProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const analyzeAndMatch = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const log = (msg: string) => console.log(`[Restore Analysis] ${msg}`);
                
                // 1. Parse the backup file
                const parsedBackup = await parseBackupZip(data.backupFile, log);
                onUpdate({ parsedBackup });

                // 2. Fetch devices from destination org
                const destinationDevices = await getOrgDevices(data.apiKey, 'in', data.organization.id);
                onUpdate({ destinationDevices });

                // 3. Find matches based on serial number
                const backupSerials = new Set(parsedBackup.devices.map(d => d.serial));
                const matchedDevices = destinationDevices.filter(d => backupSerials.has(d.serial));
                onUpdate({ matchedDevices });

            } catch(e) {
                const msg = e instanceof Error ? e.message : 'An unknown error occurred during analysis.';
                setError(msg);
            } finally {
                setIsLoading(false);
            }
        };

        analyzeAndMatch();
    }, []);


    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-full">
                <Loader2 className="w-8 h-8 animate-spin text-green-600" />
                <p className="mt-4 text-muted-foreground">Analyzing backup file and destination organization...</p>
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-full">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <p className="mt-4 font-semibold">Analysis Failed</p>
                <p className="mt-2 text-red-700 bg-red-50 p-4 rounded-md">{error}</p>
            </div>
        );
    }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Review Restore Plan</h2>
        <p className="text-muted-foreground mt-2">
          This is a final summary. The following actions will be performed.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 items-center">
        {/* Source */}
        <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
                <Building className="w-6 h-6 text-blue-600" />
                <h3 className="font-semibold text-lg">Source (from Backup)</h3>
            </div>
            <div className="space-y-2 text-sm">
                <p><strong className="text-muted-foreground">Organization:</strong> {data.parsedBackup?.sourceOrgName}</p>
                <p><strong className="text-muted-foreground">Devices in Backup:</strong> {data.parsedBackup?.devices.length}</p>
                <p><strong className="text-muted-foreground">Networks in Backup:</strong> {Object.keys(data.parsedBackup?.networkConfigs || {}).length}</p>
            </div>
        </Card>
        
        <ArrowRight className="w-12 h-12 text-primary mx-auto my-2 hidden md:block" />

        {/* Destination */}
        <Card className="p-6">
             <div className="flex items-center gap-3 mb-4">
                <Building className="w-6 h-6 text-green-600" />
                <h3 className="font-semibold text-lg">Destination</h3>
            </div>
             <div className="space-y-2 text-sm">
                <p><strong className="text-muted-foreground">Dashboard:</strong> dashboard.meraki.in</p>
                <p><strong className="text-muted-foreground">Organization:</strong> {data.organization?.name}</p>
                <p><strong className="text-muted-foreground">Network:</strong> {data.network?.name}</p>
            </div>
        </Card>
      </div>

       <Card className="p-6">
        <h3 className="font-semibold mb-4">Restore Actions</h3>
        <div className="space-y-4">
            <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5"/>
                <div>
                    <p><strong>Device Configurations:</strong> Settings for <strong>{data.matchedDevices.length} devices</strong> from the backup will be restored to matching devices found in the destination organization.</p>
                    <p className="text-xs text-muted-foreground">Matching is based on serial number. Devices in the backup but not in the destination will be ignored.</p>
                </div>
            </div>
             <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5"/>
                <div>
                    <p><strong>Network Configurations:</strong> All network-level settings from the backup (e.g., SSIDs, VLANs, Firewall rules) will be applied to the target network: <strong>"{data.network?.name}"</strong>.</p>
                     <p className="text-xs text-muted-foreground">This may overwrite existing settings on the target network.</p>
                </div>
            </div>
        </div>
      </Card>


      <Alert variant="destructive" className="bg-red-50 border-red-200">
        <AlertTriangle className="h-4 w-4 !text-red-600" />
        <AlertDescription className="text-red-800">
            <strong>Warning:</strong> This action may overwrite existing configurations on the destination devices and network. This action cannot be undone.
        </AlertDescription>
      </Alert>
      
      <div className="flex justify-center pt-4">
        <Button onClick={onNext} size="lg">
            <Server className="w-4 h-4 mr-2" />
            Confirm and Start Restore
        </Button>
      </div>

    </div>
  );
}