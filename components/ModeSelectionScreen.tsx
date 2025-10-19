import React from 'react';

// Icons as React Components
const DatabaseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-purple-600">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
);
const RefreshCwIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-green-600">
        <path d="M3 2v6h6"/>
        <path d="M21 12A9 9 0 0 0 6 5.3L3 8"/>
        <path d="M21 22v-6h-6"/>
        <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"/>
    </svg>
);
const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-blue-600">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);


interface ModeSelectionScreenProps {
  onSelectMode: (mode: 'migration' | 'backup' | 'restore') => void;
}

export function ModeSelectionScreen({ onSelectMode }: ModeSelectionScreenProps) {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-6 animate-fade-in">
        <div className="w-full max-w-5xl mx-auto space-y-8 animate-fade-slide-up">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-[var(--color-text-primary)]">Select Operation Mode</h2>
                <p className="text-[var(--color-text-secondary)] mt-2">
                Choose what you'd like to do with your Meraki devices
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* Migration Card */}
                <div 
                    className="bg-[var(--color-surface)] p-6 cursor-pointer rounded-[var(--radius-xl)] border border-[var(--color-border-primary)] hover:border-[var(--color-primary)] hover:shadow-lg transition-all group"
                    onClick={() => onSelectMode('migration')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && onSelectMode('migration')}
                >
                    <div className="space-y-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <ZapIcon />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Full Migration</h3>
                            <p className="text-[var(--color-text-secondary)] mt-2 text-sm">
                                Guided workflow to move devices from `.com` to `.in` dashboards.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-[var(--color-border-primary)]">
                            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                                <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                                Step-by-step process
                                </li>
                                <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                                Pre-migration checks
                                </li>
                                <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                                Automated device moves
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Backup Only Card */}
                <div 
                    className="bg-[var(--color-surface)] p-6 cursor-pointer rounded-[var(--radius-xl)] border border-[var(--color-border-primary)] hover:border-[var(--color-primary)] hover:shadow-lg transition-all group"
                    onClick={() => onSelectMode('backup')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && onSelectMode('backup')}
                >
                    <div className="space-y-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <DatabaseIcon />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Backup Only</h3>
                            <p className="text-[var(--color-text-secondary)] mt-2 text-sm">
                                Create a backup of device configurations without performing migration.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-[var(--color-border-primary)]">
                            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                                <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                                Export configurations
                                </li>
                                <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                                Save backup file
                                </li>
                                <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                                No device changes
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Restore Backup Card */}
                <div 
                    className="bg-[var(--color-surface)] p-6 cursor-pointer rounded-[var(--radius-xl)] border border-[var(--color-border-primary)] hover:border-[var(--color-primary)] hover:shadow-lg transition-all group"
                    onClick={() => onSelectMode('restore')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && onSelectMode('restore')}
                >
                    <div className="space-y-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <RefreshCwIcon />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Restore Backup</h3>
                            <p className="text-[var(--color-text-secondary)] mt-2 text-sm">
                                Restore device configurations from a previously created backup.
                            </p>
                        </div>
                        <div className="pt-4 border-t border-[var(--color-border-primary)]">
                            <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                                <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                                Upload backup file
                                </li>
                                <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                                Select devices
                                </li>
                                <li className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                                Apply configurations
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
