import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Card } from '../../ui/card';
import { Alert, AlertDescription } from '../../ui/alert';
import { Globe, Key, ExternalLink, Info } from 'lucide-react';
import { Button } from '../../ui/button';

interface DestinationSetupStepProps {
  data: any;
  onUpdate: (data: any) => void;
}

export function DestinationSetupStep({ data, onUpdate }: DestinationSetupStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2>Setup Destination Dashboard</h2>
        <p className="text-muted-foreground mt-2">
          Create an organization in dashboard.meraki.in and get your API key
        </p>
      </div>

      {/* Instructions Card */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          <strong>Important:</strong> Before proceeding, you need to create an organization in 
          dashboard.meraki.in if you haven't already. Follow the steps below.
        </AlertDescription>
      </Alert>

      {/* Step-by-step Instructions */}
      <Card className="p-6 border-2 border-green-200 dark:border-green-900">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <Globe className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h3>Destination Dashboard Setup</h3>
            <p className="text-muted-foreground">dashboard.meraki.in</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="mb-2">Step 1: Create Organization</h4>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
              <li>Open <strong>dashboard.meraki.in</strong> in a new tab</li>
              <li>Log in with your Cisco Meraki credentials</li>
              <li>Click <strong>Create a new organization</strong></li>
              <li>Enter organization name and configure settings</li>
              <li>Complete the organization setup</li>
            </ol>
            <Button 
              variant="outline" 
              className="mt-3"
              onClick={() => window.open('https://dashboard.meraki.in', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open dashboard.meraki.in
            </Button>
          </div>

          <div className="border-t pt-4">
            <h4 className="mb-2">Step 2: Generate API Key</h4>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
              <li>In dashboard.meraki.in, go to <strong>Organization → Settings</strong></li>
              <li>Scroll to <strong>Dashboard API access</strong></li>
              <li>Click <strong>Enable access</strong> if not enabled</li>
              <li>Click <strong>Generate new API key</strong></li>
              <li>Copy the API key and paste it below</li>
            </ol>
          </div>
        </div>
      </Card>

      {/* API Key Input */}
      <Card className="p-6 space-y-4 border-2 max-w-2xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <Key className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h3>Destination API Key</h3>
            <p className="text-muted-foreground">Enter the API key from dashboard.meraki.in</p>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="dest-api-key">API Key</Label>
          <div className="relative">
            <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="dest-api-key"
              type="password"
              placeholder="Enter destination API key"
              className="pl-10"
              value={data.destinationApiKey}
              onChange={(e) => onUpdate({ destinationApiKey: e.target.value })}
            />
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900 max-w-2xl mx-auto">
        <p className="text-green-900 dark:text-green-100">
          <strong>Note:</strong> Your API key is only used for this session and is never stored. 
          Make sure you have administrator access to create and manage devices in the destination organization.
        </p>
      </Card>
    </div>
  );
}
