import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Card } from '../../ui/card';
import { Globe, Key } from 'lucide-react';

interface SourceConnectionStepProps {
  data: any;
  onUpdate: (data: any) => void;
}

export function SourceConnectionStep({ data, onUpdate }: SourceConnectionStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2>Connect to Source Dashboard</h2>
        <p className="text-muted-foreground mt-2">
          Enter your API key to connect to dashboard.meraki.com (the source you want to migrate from)
        </p>
      </div>

      <Card className="p-6 space-y-4 border-2 max-w-2xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
            <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3>Source Dashboard</h3>
            <p className="text-muted-foreground">dashboard.meraki.com</p>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="source-api-key">API Key</Label>
          <div className="relative">
            <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="source-api-key"
              type="password"
              placeholder="Enter source API key"
              className="pl-10"
              value={data.sourceApiKey}
              onChange={(e) => onUpdate({ sourceApiKey: e.target.value })}
            />
          </div>
        </div>
      </Card>

      <Card className="p-4 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900 max-w-2xl mx-auto">
        <p className="text-blue-900 dark:text-blue-100">
          <strong>Note:</strong> Your API key is only used for this session and is never stored. 
          Make sure you have administrator access to the source dashboard.
        </p>
      </Card>

      <Card className="p-4 border-blue-200 dark:border-blue-900 max-w-2xl mx-auto">
        <h3 className="mb-2">How to get your API Key:</h3>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
          <li>Log in to <strong>dashboard.meraki.com</strong></li>
          <li>Navigate to <strong>Organization → Settings</strong></li>
          <li>Scroll down to <strong>Dashboard API access</strong></li>
          <li>Click <strong>Enable access</strong> if not already enabled</li>
          <li>Click <strong>Generate new API key</strong></li>
          <li>Copy and paste the key above</li>
        </ol>
      </Card>
    </div>
  );
}
