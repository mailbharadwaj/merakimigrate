import React, { useState, useEffect, useRef } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Alert, AlertDescription } from '../ui/alert';
import { Loader2, CheckCircle2, XCircle, RefreshCw, ArrowRight, AlertTriangle } from 'lucide-react';
import { removeDeviceFromNetwork, claimDevicesToInventory, unclaimDevicesFromInventory, addDevicesToNetwork } from '../../services/merakiService';
import { MigrationData } from '../MigrationWizard';
import { MerakiDeviceDetails } from '../../types';

interface MigrationStepProps {
  data: MigrationData;
  onUpdate: (data: Partial<MigrationData>) => void;
  onComplete: () => void;
}

export function MigrationStep({ data, onUpdate, onComplete }: MigrationStepProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isMigrating, setIsMigrating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showRetry, setShowRetry] = useState(false);
  const hasRun = useRef(false);

  const log = (msg: string) => {
    setLogs(prevLogs => [...prevLogs, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const startMigration = async () => {
    if (hasRun.current && !showRetry) return; // Prevent re-running if not a retry
    hasRun.current = true;
    setIsMigrating(true);
    setShowRetry(false);
    setError(null);

    log("--- Starting Device Migration ---");

    const {
        sourceApiKey,
        destinationApiKey,
        sourceOrg,
        destinationOrg,
        destinationNetwork,
        devicesToMigrate
    } = data;
    
    const handleFailure = (errorMessage: string, isCritical: boolean = true) => {
        log(`--- ❌ ${isCritical ? 'A critical error occurred during migration: ' : ''}${errorMessage} ---`);
        setError(errorMessage);
        setIsMigrating(false);
        setShowRetry(true);
    }
    
    if (!sourceOrg || !destinationOrg || !destinationNetwork || devicesToMigrate.length === 0) {
        handleFailure("Critical data missing. Cannot start migration.");
        return;
    }

    const success: MerakiDeviceDetails[] = [];
    const errors: { device: MerakiDeviceDetails, error: string }[] = [];
    const serialsToMigrate = devicesToMigrate.map(d => d.serial);

    // --- Step 1: Remove devices from their source networks ---
    log(`Preparing to remove ${devicesToMigrate.length} devices from their source networks...`);
    const removalPromises = devicesToMigrate.map(device => {
      if (!device.networkId) {
        log(`  - ⏩ Device ${device.name} (${device.serial}) is not in a network, skipping removal.`);
        return Promise.resolve({ serial: device.serial, success: true });
      }
      log(`  - Removing ${device.name} (${device.serial}) from network ${device.networkId}...`);
      return removeDeviceFromNetwork(sourceApiKey, 'com', device.networkId, device.serial)
        .then(() => {
          log(`    ✅ Successfully removed from network.`);
          return { serial: device.serial, success: true };
        })
        .catch(e => {
          const message = e instanceof Error ? e.message : String(e);
          // This is not always a fatal error, might just mean it was already removed.
          log(`    ⚠️ Failed to remove ${device.name} from source network. It might be already unassigned. Continuing...`);
          return { serial: device.serial, success: true }; // Treat as success to continue
        });
    });

    await Promise.all(removalPromises);
    log("\nAll devices processed for network removal.");

    // --- Step 2: Unclaim from source inventory ---
    try {
        log(`\nUnclaiming ${serialsToMigrate.length} devices from source organization "${sourceOrg.name}"...`);
        await unclaimDevicesFromInventory(sourceApiKey, 'com', sourceOrg.id, serialsToMigrate);
        log(`  ✅ Devices unclaimed from source inventory successfully.`);
    } catch (e: any) {
        handleFailure(e.message);
        return;
    }

    // --- Step 3: Wait for Meraki Cloud Sync ---
    log(`\nWaiting 30 seconds for Meraki cloud to synchronize inventory...`);
    await new Promise(resolve => setTimeout(resolve, 30000));

    // --- Step 4: Claim to destination inventory ---
    try {
        log(`\nClaiming ${serialsToMigrate.length} devices to destination organization "${destinationOrg.name}"...`);
        await claimDevicesToInventory(destinationApiKey, 'in', destinationOrg.id, serialsToMigrate);
        log(`  ✅ Devices claimed to destination inventory successfully.`);
    } catch (e: any) {
        handleFailure(e.message);
        return;
    }

    // --- Step 5: Add to destination network ---
    log(`\nAdding ${serialsToMigrate.length} devices to destination network "${destinationNetwork.name}"...`);
    try {
        await addDevicesToNetwork(destinationApiKey, 'in', destinationNetwork.id, serialsToMigrate);
        log(`  ✅ Successfully added all devices to the destination network.`);
        success.push(...devicesToMigrate);
    } catch (e: any) {
        handleFailure(e.message);
        return;
    }

    onUpdate({ migrationSuccess: success, migrationErrors: errors });
    setIsComplete(true);
    log('\n--- ✅ Migration phase complete! ---');
    setTimeout(() => onComplete(), 2000);
  };

  useEffect(() => {
    startMigration();
  }, []);

  const handleRetry = () => {
    setLogs([]);
    startMigration();
  }

  const handleSkip = () => {
    log("⏩ User skipped migration step. Assuming devices were manually moved. Proceeding to restore...");
    // Assume all devices were successfully moved so the restore step can attempt to run on all of them.
    onUpdate({ migrationSuccess: data.devicesToMigrate, migrationErrors: [] });
    onComplete();
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-4">
        {isComplete && !error && <CheckCircle2 className="w-8 h-8 text-green-500" />}
        {error && <XCircle className="w-8 h-8 text-red-500" />}
        {isMigrating && <Loader2 className="w-8 h-8 animate-spin text-blue-600" />}
        <h2 className="text-2xl font-bold">
            {isComplete ? 'Migration Phase Complete' : error ? 'Migration Failed' : 'Migrating Devices'}
        </h2>
      </div>
      <p className="text-muted-foreground text-center">
        {isMigrating ? 'Moving devices from the source dashboard to the destination. This may take a few moments.' : 'The migration process has paused.'}
      </p>

      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Live Migration Log</h3>
        <div className="h-80 bg-gray-900 text-white font-mono text-sm rounded-md p-4 overflow-y-auto">
          {logs.map((log, index) => (
            <div key={index} className="whitespace-pre-wrap">{log}</div>
          ))}
        </div>
      </Card>
      
      {showRetry && (
        <div className="mt-6 text-center space-y-4 animate-fade-in">
            <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
            </Alert>
            <div className="flex justify-center gap-4">
                <Button variant="outline" onClick={handleRetry}>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Retry Step
                </Button>
                <Button onClick={handleSkip}>
                    Skip to Restore
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </div>
            <p className="text-sm text-muted-foreground">
                If you have manually fixed the issue in the Meraki dashboard, you can skip to the restore step.
            </p>
        </div>
      )}
    </div>
  );
}