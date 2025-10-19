import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowRight, CheckCircle2, Zap, Shield } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Hero(props:any) {
  const startOtherApp = async () => {
    props.setIsHome(false)
    // try {
    //   // call control server to start second app
    //   const res = await fetch('http://localhost:5999/start-app2', { method: 'POST' });
    //   if (!res.ok) throw new Error('failed to start app');
    //   const data = await res.json();
    //   const url = data.url || 'http://localhost:5174';
    //   // open in new tab
    //   window.open(url, '_blank');
    // } catch (e) {
    //   // fallback: open the expected URL anyway
    //   window.open('http://localhost:5174', '_blank');
    // }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0),rgba(0,0,0,1))]"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl">Meraki Migration Workflow</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#how" className="text-gray-400 hover:text-white transition-colors">How it Works</a>
            <Button variant="outline" className="border-white/20 hover:bg-white/text-white" onClick={startOtherApp}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm">
              <Zap className="w-3 h-3 mr-1" />
              Automated Migration Platform
            </Badge>
            
            <h1 className="text-6xl lg:text-7xl tracking-tight">
              Migrate Meraki <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Without the Pain
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
              Automatically migrate devices from dashboard.meraki.com to dashboard.meraki.in 
              in minutes. Zero errors. Zero headaches. Zero technical skills required.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">100% automated - eliminate human errors</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">10 minutes vs 12 hours manual work</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">No technical expertise needed</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/50">
                Start Migration <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20  hover:bg-white/10 backdrop-blur-sm">
                View Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">99.9%</p>
                <p className="text-sm text-gray-500">Success Rate</p>
              </div>
              <div>
                <p className="text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">10min</p>
                <p className="text-sm text-gray-500">Avg. Time</p>
              </div>
              <div>
                <p className="text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">0</p>
                <p className="text-sm text-gray-500">Errors</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Glowing orbs */}
            <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
              <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-gray-900 to-gray-800">
                <ImageWithFallback
                  src="https://phoenixnap.com/glossary/wp-content/uploads/2024/03/what-is-a-computer-rack.jpg"
                  alt="Network infrastructure"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Migration Progress</span>
                  <span className="text-sm text-green-400">Active</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">18/20 devices migrated</span>
                    <span className="text-gray-400">90%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500">Est. completion: 2 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
