import { Zap, Shield, Sparkles, Globe2 } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function SolutionSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Fully Automated",
      description: "Our workflow handles everything automatically - from device discovery to final configuration. Zero manual intervention required.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Error-Free Migration",
      description: "Eliminate human errors completely. Our system ensures every setting, configuration, and network assignment is migrated perfectly.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Sparkles,
      title: "Anyone Can Use It",
      description: "No technical expertise needed. Our simple interface guides you through the process in just a few clicks.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe2,
      title: "Multi-Region Ready",
      description: "Currently supports migration from dashboard.meraki.com to dashboard.meraki.in, with more regions coming soon.",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="relative py-32 bg-white overflow-hidden" id="features">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.08),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
              <span className="text-blue-600 text-sm">The Solution</span>
            </div>
            <h2 className="text-5xl mb-6 text-gray-900">
              Automated Migration <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                That Just Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Our workflow automates the entire migration process from start to finish. 
              What used to take hours of careful manual work now completes in minutes with perfect accuracy.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="group flex gap-5 p-6 rounded-xl bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {/* Glowing effects */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-200/40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-white/80 backdrop-blur-xl border border-gray-200 p-8 shadow-xl">
                <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200">
                  <ImageWithFallback
                    src="https://meraki.cisco.com/wp-content/uploads/2021/12/product-tile-secure-sd-wan-hover-372x344-1.jpg"
                    alt="Automation workflow"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-2xl max-w-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                  <span className="text-sm text-gray-700">Live Migration</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm text-gray-900">18/20</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse" style={{ width: '90%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Time remaining</span>
                    <span className="text-green-600">2 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
