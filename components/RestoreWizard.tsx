import React, { useState } from 'react';
import { MerakiOrganization, MerakiNetwork, BackupFile, MerakiDeviceDetails } from '../types';
import { RestoreUploadStep } from './steps/restore/RestoreUploadStep';
import { RestoreConnectionStep } from './steps/restore/RestoreConnectionStep';
import { RestoreTargetStep } from './steps/restore/RestoreTargetStep';
import { RestoreReviewStep } from './steps/restore/RestoreReviewStep';
import { RestoreExecutionStep } from './steps/restore/RestoreExecutionStep';
import { RestoreResultsStep } from './steps/restore/RestoreResultsStep';

const steps = [
  { id: 1, name: 'Upload', description: 'Upload backup file' },
  { id: 2, name: 'Connect', description: 'Connect to destination' },
  { id: 3, name: 'Target', description: 'Select target org/network' },
  { id: 4, name: 'Review', description: 'Review and confirm' },
  { id: 5, name: 'Restore', description: 'Execute restore' },
  { id: 6, name: 'Results', description: 'View results' },
];

export interface RestoreData {
    backupFile: File | null;
    backupMetadata: { name: string; date: string; orgName: string } | null;
    parsedBackup: BackupFile | null;
    apiKey: string;
    region: 'in';
    organization: MerakiOrganization | null;
    network: MerakiNetwork | null;
    matchedDevices: MerakiDeviceDetails[]; // Devices from backup found in destination
    destinationDevices: MerakiDeviceDetails[]; // All devices in destination org
    restoreDeviceSuccessCount: number;
    restoreNetworkSuccessCount: number;
}

export function RestoreWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [restoreData, setRestoreData] = useState<RestoreData>({
    backupFile: null,
    backupMetadata: null,
    parsedBackup: null,
    apiKey: '',
    region: 'in',
    organization: null,
    network: null,
    matchedDevices: [],
    destinationDevices: [],
    restoreDeviceSuccessCount: 0,
    restoreNetworkSuccessCount: 0,
  });

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

  const handleReset = () => {
    setRestoreData({
      backupFile: null,
      backupMetadata: null,
      parsedBackup: null,
      apiKey: '',
      region: 'in',
      organization: null,
      network: null,
      matchedDevices: [],
      destinationDevices: [],
      restoreDeviceSuccessCount: 0,
      restoreNetworkSuccessCount: 0,
    });
    setCurrentStep(1);
  };

  const updateRestoreData = (data: Partial<RestoreData>) => {
    setRestoreData(prev => ({ ...prev, ...data }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <RestoreUploadStep data={restoreData} onUpdate={updateRestoreData} />;
      case 2:
        return <RestoreConnectionStep data={restoreData} onUpdate={updateRestoreData} />;
      case 3:
        return <RestoreTargetStep data={restoreData} onUpdate={updateRestoreData} />;
      case 4:
        return <RestoreReviewStep data={restoreData} onUpdate={updateRestoreData} onNext={handleNext} />;
      case 5:
        return <RestoreExecutionStep data={restoreData} onUpdate={updateRestoreData} onComplete={handleNext} />;
      case 6:
        return <RestoreResultsStep data={restoreData} onReset={handleReset} />;
      default:
        return null;
    }
  };
  
  function canProceedToNext() {
    switch (currentStep) {
      case 1:
        return !!restoreData.backupFile && !!restoreData.backupMetadata;
      case 2:
        return !!restoreData.apiKey;
      case 3:
        return !!restoreData.organization && !!restoreData.network;
      default:
        return false;
    }
  }

  const showNav = currentStep < 4;

  return (
     <div className="w-full max-w-6xl mx-auto p-6 space-y-6 overflow-y-auto">
      {/* Steps Indicator */}
      <nav aria-label="Restore steps">
        <ol className="flex items-center justify-between border border-[var(--color-border-primary)] rounded-[var(--radius-lg)] p-4 shadow-sm">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <li className="flex-1">
                <div className={`flex flex-col items-center text-center ${currentStep >= step.id ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-tertiary)]'}`}>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                    currentStep > step.id ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white'
                    : currentStep === step.id ? 'border-[var(--color-primary)]'
                    : 'border-[var(--color-border-primary)]'
                  }`}>
                    {currentStep > step.id ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    ) : (
                      <span className="font-bold">{step.id}</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm font-medium">{step.name}</p>
                  <p className="text-xs hidden md:block">{step.description}</p>
                </div>
              </li>
              {index < steps.length - 1 && (
                <div className={`h-0.5 w-full -mt-12 transition-colors ${currentStep > step.id ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-border-primary)]'}`} />
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
      
      {/* Step Content */}
      <div className="bg-[var(--color-surface)] p-8 rounded-[var(--radius-lg)] border border-[var(--color-border-primary)] min-h-[500px]">
        {renderStep()}
      </div>

      {/* Navigation Buttons */}
      {showNav && (
        <div className="flex justify-between pt-4">
          <button
            className="flex items-center px-4 py-2 border border-[var(--color-border-primary)] rounded-[var(--radius-md)] text-sm font-medium text-[var(--color-text-primary)] bg-[var(--color-surface)] hover:bg-[var(--color-surface-subtle)] disabled:opacity-50 transition-colors"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
            Back
          </button>
          <button 
            className="flex items-center px-4 py-2 border border-transparent rounded-[var(--radius-md)] text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] disabled:bg-gray-400 transition-colors"
            onClick={handleNext} 
            disabled={!canProceedToNext()}
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
          </button>
        </div>
      )}
    </div>
  );
}