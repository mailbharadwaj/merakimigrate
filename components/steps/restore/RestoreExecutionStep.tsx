import React, { useState, useEffect, useRef } from 'react';
import { Card } from '../../ui/card';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';
import { restoreDeviceConfiguration, restoreNetworkConfiguration } from '../../../services/merakiService';
import { RestoreData } from '../../RestoreWizard';
import { DeviceBackup, NetworkConfigBackup } from '../../../types';

interface RestoreExecutionStepProps {
  data: RestoreData;
  onUpdate: (data: Partial<RestoreData>) => void;
  onComplete: () => void;
}

export function RestoreExecutionStep({ data, onComplete, onUpdate }: RestoreExecutionStepProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isRestoring, setIsRestoring] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const hasRun = useRef(false);

  const log = (msg: string) => {
    setLogs(prevLogs => [...prevLogs, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  useEffect(() => {
    const startRestore = async () => {
      if (hasRun.current) return;
      hasRun.current = true;
      setIsRestoring(true);

      const { apiKey, network, matchedDevices, parsedBackup } = data;

      if (!parsedBackup || !network) {
        log("❌ Critical data missing. Cannot start restore.");
        setError("Could not start restore due to missing data. Please restart the wizard.");
        setIsRestoring(false);
        return;
      }
      
      log("--- Starting Configuration Restore ---");
      let deviceSuccessCount = 0;
      let networkSuccessCount = 0;

      try {
        // Phase 1: Restore Device-Specific Configurations
        if (matchedDevices.length > 0) {
            log(`\nFound ${matchedDevices.length} matching devices to restore...`);
            for (const deviceToRestore of matchedDevices) {
                const backupData = parsedBackup.devices.find(d => d.serial === deviceToRestore.serial);
                if (backupData) {
                    log(`- Restoring configuration for ${deviceToRestore.name} (${deviceToRestore.serial})...`);
                    const success = await restoreDeviceConfiguration(
                        apiKey, 'in', deviceToRestore.serial, backupData.config, log
                    );
                    if (success) deviceSuccessCount++;
                }
            }
        } else {
            log("\n⏩ No matching devices found in destination. Skipping device configuration restore.");
        }
        
        // Phase 2: Restore Network-Level Configurations
        const sourceNetworkIds = Object.keys(parsedBackup.networkConfigs);
        if (sourceNetworkIds.length > 0) {
            log(`\nPreparing to restore network-level configurations to "${network!.name}"...`);
            
            for (const netId of sourceNetworkIds) {
                const networkConfig = parsedBackup.networkConfigs[netId] as NetworkConfigBackup | undefined;
                if (networkConfig) {
                    log(`- Applying configurations from source network ${netId}...`);
                    const restoredCount = await restoreNetworkConfiguration(
                        apiKey, 'in', network!.id, networkConfig, log
                    );
                    networkSuccessCount += restoredCount;
                } else {
                    log(`- ⚠️ Could not find backup configuration for source network ${netId}.`);
                }
            }
        } else {
            log("\n⏩ No network configurations found in backup. Skipping network restore.");
        }
        
        setIsComplete(true);
        log('\n--- ✅ Restore phase complete! ---');
        onUpdate({ restoreDeviceSuccessCount: deviceSuccessCount, restoreNetworkSuccessCount: networkSuccessCount });
        setTimeout(() => onComplete(), 2000);

      } catch (err: any) {
        const errorMessage = 'A critical error occurred during restore: ' + (err.message || 'Unknown error');
        setError(errorMessage);
        log(`--- ❌ ${errorMessage} ---`);
        console.error('Restore error:', err);
      } finally {
        setIsRestoring(false);
      }
    };
    
    startRestore();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-4">
        {isComplete && !error && <CheckCircle2 className="w-8 h-8 text-green-500" />}
        {isComplete && error && <XCircle className="w-8 h-8 text-red-500" />}
        {isRestoring && <Loader2 className="w-8 h-8 animate-spin text-green-600" />}
        <h2 className="text-2xl font-bold">
            {isComplete ? 'Restore Complete' : 'Restoring Configurations'}
        </h2>
      </div>
      <p className="text-muted-foreground text-center">
        Applying backed-up settings to your devices and network.
      </p>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Live Restore Log</h3>
        <div className="h-80 bg-gray-900 text-white font-mono text-sm rounded-md p-4 overflow-y-auto">
          {logs.map((log, index) => (
            <div key={index} className="whitespace-pre-wrap">{log}</div>
          ))}
          {error && <div className="text-red-400 mt-2">{error}</div>}
        </div>
      </Card>
    </div>
  );
}