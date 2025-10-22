import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, CheckCircle2, Zap, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),rgba(255,255,255,0))]"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl text-gray-900">MerakiMigrate</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#how" className="text-gray-600 hover:text-gray-900 transition-colors">How it Works</a>
            <Button variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200">
              <Zap className="w-3 h-3 mr-1" />
              Automated Migration Platform
            </Badge>
            
            <h1 className="text-6xl lg:text-7xl tracking-tight text-gray-900">
              Migrate Meraki <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Without the Pain
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
              Automatically migrate devices from dashboard.meraki.com to dashboard.meraki.in 
              in minutes. Zero errors. Zero headaches. Zero technical skills required.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">100% automated - eliminate human errors</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">10 minutes vs 12 hours manual work</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">No technical expertise needed</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg">
                Start Migration <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-50">
                View Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">99.9%</p>
                <p className="text-sm text-gray-500">Success Rate</p>
              </div>
              <div>
                <p className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">10min</p>
                <p className="text-sm text-gray-500">Avg. Time</p>
              </div>
              <div>
                <p className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">0</p>
                <p className="text-sm text-gray-500">Errors</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Glowing orbs */}
            <div className="absolute top-20 -left-20 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl"></div>
            
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 p-8 shadow-2xl">
              <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760013767150-da8e4ded6286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDY1NjEwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Network infrastructure"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Migration Progress</span>
                  <span className="text-sm text-green-600">Active</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-700">18/20 devices migrated</span>
                    <span className="text-gray-600">90%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
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
