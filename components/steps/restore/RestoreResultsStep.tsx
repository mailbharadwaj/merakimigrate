import { Card } from '../../ui/card';
import { Button } from '../../ui/button';
import { Alert, AlertDescription } from '../../ui/alert';
import { CheckCircle2, Info, RefreshCw, Server, Network } from 'lucide-react';
import { RestoreData } from '../../RestoreWizard';

interface RestoreResultsStepProps {
  data: RestoreData;
  onReset: () => void;
}

export function RestoreResultsStep({ data, onReset }: RestoreResultsStepProps) {
  const { 
      organization,
      network,
      backupMetadata,
      matchedDevices,
      restoreDeviceSuccessCount,
      restoreNetworkSuccessCount
    } = data;
    
  return (
    <div className="space-y-6">
      <div className="text-center py-6">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-green-100`}>
          <CheckCircle2 className={`w-10 h-10 text-green-600`} />
        </div>
        <h2 className="text-2xl font-bold">Restore Process Complete</h2>
        <p className="text-muted-foreground mt-2">
          Configurations from '{backupMetadata?.orgName}' backup have been applied to '{organization?.name}'.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2 text-muted-foreground"><Server className="w-5 h-5"/>Device Restore</div>
            <p className="text-2xl font-bold">{restoreDeviceSuccessCount} / {matchedDevices.length}</p>
            <p className="text-sm text-muted-foreground">configurations restored</p>
        </Card>
        <Card className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2 text-muted-foreground"><Network className="w-5 h-5"/>Network Restore</div>
            <p className="text-2xl font-bold">{restoreNetworkSuccessCount}</p>
            <p className="text-sm text-muted-foreground">settings restored to "{network?.name}"</p>
        </Card>
      </div>
      
      {matchedDevices.length > 0 && (
          <Card className="p-6">
            <h3 className="mb-4">Restored Devices</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {matchedDevices.map((device) => (
                <div key={device.serial} className="flex items-center justify-between p-3 bg-green-50/50 rounded">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <div>
                      <p>{device.name}</p>
                      <p className="text-muted-foreground font-mono">{device.serial}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
      )}

      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          <strong>Next Steps:</strong> Please verify the restored configurations in the <a href={`https://dashboard.meraki.in/o/${organization?.id}/n/${network?.id}/manage/nodes/list`} target="_blank" rel="noopener noreferrer" className="underline font-semibold">destination dashboard</a> to ensure everything is working as expected.
        </AlertDescription>
      </Alert>

      <div className="flex gap-4 justify-center pt-4">
        <Button variant="outline" onClick={onReset} size="lg">
            <RefreshCw className="w-4 h-4 mr-2" />
            Start New Restore
        </Button>
      </div>
    </div>
  );
}