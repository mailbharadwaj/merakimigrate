import React, { useState, useEffect } from 'react';
import { User } from './types';
import * as auth from './services/authService';
import LoginScreen from './components/LoginScreen';
import { ModeSelectionScreen } from './components/ModeSelectionScreen';
// FIX: Import MigrationWizard component. The file was missing, it is now created.
import { MigrationWizard } from './components/MigrationWizard';
import { BackupWizard } from './components/BackupWizard';
import { Toaster } from './components/ui/sonner';
import { Button } from './components/ui/button';
import { LogOut, LayoutGrid } from 'lucide-react';

import { Hero } from "./components/home/Hero";
import { ProblemSection } from "./components/home/ProblemSection";
import { SolutionSection } from "./components/home/SolutionSection";
import { HowItWorks } from "./components/home/HowItWorks";
import { PricingSection } from "./components/home/PricingSection";
import { CTASection } from "./components/home/CTASection";
import { Footer } from "./components/home/Footer";

type ToolMode = 'selection' | 'migration' | 'backup' | 'restore';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isHome, setIsHome] = useState<boolean>(true);
  const [isInitializing, setIsInitializing] = useState(true);
  const [toolMode, setToolMode] = useState<ToolMode>('selection');

  useEffect(() => {
    const currentUser = auth.getCurrentUser();
    setUser(currentUser);
    setIsInitializing(false);
  }, []);

  const handleLogin = (loggedInUser: User) => {
    auth.login(loggedInUser);
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    auth.logout();
    setUser(null);
    setToolMode('selection');
    setIsHome(true)
  };
  
  const handleSelectToolMode = (mode: ToolMode) => {
    setToolMode(mode);
  }

  const renderToolContent = () => {
    switch(toolMode) {
      case 'migration':
        return <MigrationWizard />;
      case 'backup':
        return <BackupWizard />;
      case 'restore':
        return (
            <div className="text-center p-8 bg-card rounded-lg border max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold">Restore Feature</h2>
                <p className="text-muted-foreground mt-2">This feature is under development and will be available soon.</p>
            </div>
        );
      case 'selection':
      default:
        return <ModeSelectionScreen onSelectMode={handleSelectToolMode} />;
    }
  }
  
  if (isInitializing) {
    return <div className="min-h-screen" />; // Simple loading state
  }
  
  
  if (!user) {
    if(isHome) {
      return(
        <div className="min-h-screen bg-black text-white">
          <Hero setIsHome={setIsHome}/>
          <ProblemSection />
          <SolutionSection />
          <HowItWorks />
          <PricingSection />
          <CTASection />
          <Footer />
        </div>
      )
    } else {
      return <LoginScreen onLogin={handleLogin} />;
    }
  }

  return (
    <div className="min-h-screen bg-[var(--color-surface-subtle)] text-[var(--color-text-primary)]">
        <header className="flex items-center justify-between p-4 border-b border-[var(--color-border-primary)] bg-[var(--color-surface)] shadow-sm sticky top-0 z-10">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white"><rect x="16" y="16" width="6" height="6" rx="1"></rect><rect x="2" y="16" width="6" height="6" rx="1"></rect><rect x="9" y="2" width="6" height="6" rx="1"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
                </div>
                <h1 className="text-lg font-semibold">Meraki Migration Tool</h1>
            </div>
            <div className="flex items-center gap-4">
                {toolMode !== 'selection' && (
                    <Button variant="outline" size="sm" onClick={() => setToolMode('selection')}>
                        <LayoutGrid className="w-4 h-4 mr-2" />
                        Back to Mode Selection
                    </Button>
                )}
                <span className="text-sm text-[var(--color-text-secondary)]">Welcome, {user.username}</span>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                </Button>
            </div>
        </header>
        <main className="p-4 md:p-8">
            {renderToolContent()}
        </main>
        <Toaster />
    </div>
  );
}

export default App;
