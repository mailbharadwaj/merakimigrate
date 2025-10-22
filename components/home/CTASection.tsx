import { Button } from "../ui/button";
import { ArrowRight, Mail, Zap } from "lucide-react";

export function CTASection() {
  return (
    <div className="relative py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-gray-200 rounded-full mb-8 backdrop-blur-sm">
            <Zap className="w-4 h-4 text-yellow-600" />
            <span className="text-sm text-gray-700">Start migrating in 5 minutes</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl mb-6 text-gray-900">
            Ready to Migrate <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Without the Hassle?
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop wasting time on manual migration. Let our automated workflow handle it in minutes 
            while you focus on what really matters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg px-8">
              Start Your Migration <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-300 text-gray-900 hover:bg-white/80 backdrop-blur-sm px-8"
              onClick={() => window.location.href = 'mailto:sales@migratemeraki.com'}
            >
              <Mail className="mr-2 w-5 h-5" /> Talk to Sales
            </Button>
          </div>
          
          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-gray-200">
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                <p className="text-5xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                  10min
                </p>
                <p className="text-gray-600">Average Migration Time</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                <p className="text-5xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                  99.9%
                </p>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                <p className="text-5xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                  0
                </p>
                <p className="text-gray-600">Human Errors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
