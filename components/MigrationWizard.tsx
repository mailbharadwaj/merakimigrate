import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SourceConnectionStep } from './steps/migration/SourceConnectionStep';
import { SourceOrganizationStep } from './steps/migration/SourceOrganizationStep';
import { DestinationSetupStep } from './steps/migration/DestinationSetupStep';
import { DestinationOrganizationStep } from './steps/migration/DestinationOrganizationStep';
import { BackupStep } from './steps/migration/BackupStep';
import { ReviewStep } from './steps/ReviewStep';
import { MigrationStep } from './steps/MigrationStep';
import { RestoreStep } from './steps/migration/RestoreStep';
import { ResultsStep } from './steps/ResultsStep';
import { getOrgDevices } from '../services/merakiService';

import { MerakiDeviceDetails, MerakiNetwork, MerakiOrganization, BackupFile } from '../types';

const steps = [
  { id: 1, name: 'Source', description: 'Connect .com dashboard' },
  { id: 2, name: 'Source Org', description: 'Select source organization' },
  { id: 3, name: 'Destination', description: 'Connect .in dashboard' },
  { id: 4, name: 'Dest Org & Net', description: 'Select destination' },
  { id: 5, name: 'Review', description: 'Review migration plan' },
  { id: 6, name: 'Backup', description: 'Automatic backup' },
  { id: 7, name: 'Migrate', description: 'Execute migration' },
  { id: 8, name: 'Restore', description: 'Restore configurations' },
  { id: 9, name: 'Results', description: 'View results' },
];

export interface MigrationData {
  sourceApiKey: string;
  destinationApiKey: string;
  sourceOrg: MerakiOrganization | null;
  destinationOrg: MerakiOrganization | null;
  destinationNetwork: MerakiNetwork | null;
  devicesToMigrate: MerakiDeviceDetails[];
  reviewConfirmation: string;

  // For backup/restore
  backupBlob: Blob | null; // This will be the full ZIP backup
  backupFilename: string;
  restoreData: BackupFile | null; // This is the in-memory JSON for the restore step

  // For results
  migrationSuccess: MerakiDeviceDetails[];
  migrationErrors: { device: MerakiDeviceDetails, error: string }[];
  restoreDeviceSuccessCount: number;
  restoreNetworkSuccessCount: number;
}

export function MigrationWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isFetchingReviewData, setIsFetchingReviewData] = useState(false);
  const [migrationData, setMigrationData] = useState<MigrationData>({
    sourceApiKey: '',
    destinationApiKey: '',
    sourceOrg: null,
    destinationOrg: null,
    destinationNetwork: null,
    devicesToMigrate: [],
    reviewConfirmation: '',
    backupBlob: null,
    backupFilename: '',
    restoreData: null,
    migrationSuccess: [],
    migrationErrors: [],
    restoreDeviceSuccessCount: 0,
    restoreNetworkSuccessCount: 0
  });

  // This effect will trigger when we are about to enter the Review step.
  useEffect(() => {
    if (currentStep === 5 && migrationData.sourceOrg && migrationData.devicesToMigrate.length === 0) {
      const fetchDevicesForReview = async () => {
        setIsFetchingReviewData(true);
        try {
          const devices = await getOrgDevices(migrationData.sourceApiKey, 'com', migrationData.sourceOrg!.id);
          updateMigrationData({ devicesToMigrate: devices });
        } catch (error) {
          console.error("Failed to fetch devices for review:", error);
          // Optionally, you could set an error state and display it in the ReviewStep
        } finally {
          setIsFetchingReviewData(false);
        }
      };
      fetchDevicesForReview();
    }
  }, [currentStep, migrationData.sourceOrg, migrationData.sourceApiKey, migrationData.devicesToMigrate.length]);


  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateMigrationData = (data: Partial<MigrationData>) => {
    setMigrationData(prev => ({ ...prev, ...data }));
  };
  
  const handleReset = () => {
    setMigrationData({
        sourceApiKey: '',
        destinationApiKey: '',
        sourceOrg: null,
        destinationOrg: null,
        destinationNetwork: null,
        devicesToMigrate: [],
        reviewConfirmation: '',
        backupBlob: null,
        backupFilename: '',
        restoreData: null,
        migrationSuccess: [],
        migrationErrors: [],
        restoreDeviceSuccessCount: 0,
        restoreNetworkSuccessCount: 0
    });
    setCurrentStep(1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <SourceConnectionStep data={migrationData} onUpdate={updateMigrationData} />;
      case 2: return <SourceOrganizationStep data={migrationData} onUpdate={updateMigrationData} />;
      case 3: return <DestinationSetupStep data={migrationData} onUpdate={updateMigrationData} />;
      case 4: return <DestinationOrganizationStep data={migrationData} onUpdate={updateMigrationData} />;
      case 5: return <ReviewStep data={migrationData} onUpdate={updateMigrationData} isLoading={isFetchingReviewData} />;
      case 6: return <BackupStep data={migrationData} onUpdate={updateMigrationData} onComplete={handleNext} />;
      case 7: return <MigrationStep data={migrationData} onUpdate={updateMigrationData} onComplete={handleNext} />;
      case 8: return <RestoreStep data={migrationData} onUpdate={updateMigrationData} onComplete={handleNext} />;
      case 9: return <ResultsStep data={migrationData} onReset={handleReset} />;
      default: return null;
    }
  };

  function canProceedToNext() {
    switch (currentStep) {
      case 1: return !!migrationData.sourceApiKey;
      case 2: return !!migrationData.sourceOrg;
      case 3: return !!migrationData.destinationApiKey;
      case 4: return !!migrationData.destinationOrg && !!migrationData.destinationNetwork;
      case 5: return migrationData.reviewConfirmation === "MIGRATE" && !isFetchingReviewData;
      default: return false;
    }
  }

  const isAutoStep = currentStep === 6 || currentStep === 7 || currentStep === 8 || currentStep === 9;

  return (
    <div className="w-full max-w-6xl mx-auto p-6 space-y-6">
      <nav aria-label="Migration steps">
        <p className="text-center text-sm text-gray-500 mb-2">
            Step {currentStep} of {steps.length}: {steps[currentStep-1].name}
        </p>
        <Progress value={progress} className="h-2" />
      </nav>

      <div className="bg-[var(--color-surface)] p-8 rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] min-h-[500px]">
        {renderStep()}
      </div>

      {!isAutoStep && (
        <div className="flex justify-between pt-4">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button onClick={handleNext} disabled={!canProceedToNext()}>
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
}