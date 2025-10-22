import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Card } from '../../ui/card';
import { Alert, AlertDescription } from '../../ui/alert';
import { UploadCloud, FileArchive, CheckCircle2, XCircle } from 'lucide-react';
import JSZip from 'jszip';

interface RestoreUploadStepProps {
  data: any;
  onUpdate: (data: any) => void;
}

export function RestoreUploadStep({ data, onUpdate }: RestoreUploadStepProps) {
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setError(null);
    onUpdate({ backupFile: null, backupMetadata: null });
    
    if (acceptedFiles.length === 0) {
      setError("No file selected.");
      return;
    }
    const file = acceptedFiles[0];
    if (file.type !== 'application/zip' && !file.name.endsWith('.zip')) {
      setError("Invalid file type. Please upload a .zip backup file.");
      return;
    }

    onUpdate({ backupFile: file });
    
    // Peek inside the zip to get metadata
    try {
        const zip = await JSZip.loadAsync(file);
        const orgDetailsFile = zip.file('organization/details.json');
        if (!orgDetailsFile) {
            throw new Error("Missing 'organization/details.json'. This does not appear to be a valid Meraki backup file.");
        }
        const orgDetailsContent = await orgDetailsFile.async('string');
        const orgDetails = JSON.parse(orgDetailsContent);

        onUpdate({
            backupMetadata: {
                name: file.name,
                date: new Date(file.lastModified).toLocaleString(),
                orgName: orgDetails.name || 'Unknown Organization',
            }
        });

    } catch(e) {
        const msg = e instanceof Error ? e.message : 'Could not read backup file.';
        setError(`Error processing file: ${msg}`);
        onUpdate({ backupFile: null, backupMetadata: null });
    }

  }, [onUpdate]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/zip': ['.zip'] },
    multiple: false,
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Upload Backup File</h2>
        <p className="text-muted-foreground mt-2">
          Select or drag-and-drop the .zip backup file you want to restore from.
        </p>
      </div>

      <Card 
        {...getRootProps()} 
        className={`p-12 text-center border-2 border-dashed cursor-pointer transition-colors ${isDragActive ? 'border-primary bg-primary/10' : 'hover:border-primary/50'}`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                <UploadCloud className="w-8 h-8 text-muted-foreground" />
            </div>
            {isDragActive ? (
                <p>Drop the file here ...</p>
            ) : (
                <p>Drag 'n' drop a .zip file here, or click to select file</p>
            )}
        </div>
      </Card>
      
      {error && (
        <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {data.backupMetadata && (
        <Alert className="border-green-300 bg-green-50">
            <CheckCircle2 className="h-4 w-4 text-green-700" />
            <AlertDescription className="text-green-800">
                <h3 className="font-semibold mb-2">Backup File Loaded</h3>
                <div className="grid grid-cols-3 gap-2 text-sm">
                    <div><strong>Filename:</strong></div>
                    <div className="col-span-2 font-mono">{data.backupMetadata.name}</div>
                    <div><strong>Source Org:</strong></div>
                    <div className="col-span-2">{data.backupMetadata.orgName}</div>
                    <div><strong>Created:</strong></div>
                    <div className="col-span-2">{data.backupMetadata.date}</div>
                </div>
            </AlertDescription>
        </Alert>
      )}

    </div>
  );
}