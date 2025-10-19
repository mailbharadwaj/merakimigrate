import { useState, useEffect } from 'react';
import { Card } from '../../ui/card';
import { Label } from '../../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Building2, CheckCircle2, Loader2 } from 'lucide-react';
// FIX: Use correct relative path for merakiService import.
import { getOrganizations } from '../../../services/merakiService';
import { MerakiOrganization } from '../../../types';

interface SourceOrganizationStepProps {
  data: any;
  onUpdate: (data: any) => void;
}

export function SourceOrganizationStep({ data, onUpdate }: SourceOrganizationStepProps) {
  const [organizations, setOrganizations] = useState<MerakiOrganization[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchOrgs = async () => {
      setLoading(true);
      setError(null);
      try {
        const orgs = await getOrganizations(data.sourceApiKey, 'com', signal);
        if (!signal.aborted) {
          setOrganizations(orgs);
        }
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          setError('Failed to fetch source organizations. Please check your source API key and try again.');
          console.error(err);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    if (data.sourceApiKey) {
      fetchOrgs();
    } else {
      setLoading(false);
      setError("Source API Key not provided. Please go back to the first step.");
    }
    
    return () => {
      controller.abort();
    };
  }, [data.sourceApiKey]);

  const handleSourceChange = (value: string) => {
    const org = organizations.find(o => o.id === value);
    if (org) {
      onUpdate({ sourceOrg: org });
    }
  };
  
  if (loading) {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            <p className="mt-4 text-muted-foreground">Fetching source organizations...</p>
        </div>
    );
  }

  if (error) {
    return <div className="text-center p-4 bg-red-50 text-red-600 rounded-lg">{error}</div>;
  }


  return (
    <div className="space-y-6">
      <div>
        <h2>Select Source Organization</h2>
        <p className="text-muted-foreground mt-2">
          Choose the organization you want to migrate devices from
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <Building2 className="w-5 h-5" />
            <Label>Source Organization (dashboard.meraki.com)</Label>
          </div>
          
          <Select value={data.sourceOrg?.id || ''} onValueChange={handleSourceChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select source organization" />
            </SelectTrigger>
            <SelectContent>
              {organizations.map((org) => (
                <SelectItem key={org.id} value={org.id}>
                  {org.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {data.sourceOrg && (
            <Card className="p-4 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div className="flex-1">
                  <p className="text-blue-900 dark:text-blue-100">
                    Selected: {data.sourceOrg.name}
                  </p>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
