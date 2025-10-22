import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Card } from '../../ui/card';
import { Globe, Key } from 'lucide-react';

interface RestoreConnectionStepProps {
  data: any;
  onUpdate: (data: any) => void;
}

export function RestoreConnectionStep({ data, onUpdate }: RestoreConnectionStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Connect to Destination Dashboard</h2>
        <p className="text-muted-foreground mt-2">
          Enter your API key for the dashboard where you want to restore the configuration (e.g., dashboard.meraki.in)
        </p>
      </div>

      <Card className="p-6 space-y-4 border-2 max-w-2xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <Globe className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <div>
            <h3>Destination Dashboard</h3>
            <p className="text-muted-foreground">dashboard.meraki.in</p>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="api-key">API Key</Label>
          <div className="relative">
            <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="api-key"
              type="password"
              placeholder="Enter destination API key"
              className="pl-10"
              value={data.apiKey}
              onChange={(e) => onUpdate({ apiKey: e.target.value })}
              autoComplete="new-password"
            />
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900 max-w-2xl mx-auto">
        <p className="text-green-900 dark:text-green-100">
          <strong>Note:</strong> Your API key is only used for this session and is never stored. 
          Make sure you have administrator access to the destination organization.
        </p>
      </Card>
    </div>
  );
}