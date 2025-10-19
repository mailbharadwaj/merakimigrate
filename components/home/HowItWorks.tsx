import { Upload, Settings, Rocket } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Connect Dashboards",
      description: "Simply provide your API credentials for both source (dashboard.meraki.com) and destination (dashboard.meraki.in) dashboards.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      icon: Settings,
      title: "Select Devices",
      description: "Choose which devices you want to migrate. Our system automatically detects all configurations, networks, and settings.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Click Migrate",
      description: "Hit the migrate button and relax. Our automated workflow handles everything - device claiming, configuration, network assignment, and verification.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="relative py-32 bg-black overflow-hidden" id="how">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <span className="text-green-400 text-sm">Simple Process</span>
          </div>
          <h2 className="text-5xl mb-6">
            3 Steps to <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Complete Migration
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            So simple, anyone can do it. No technical knowledge required.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-[calc(50%+60px)] w-[calc(100%-120px)] h-0.5 bg-gradient-to-r from-white/20 to-white/20">
                  <div className="absolute right-0 w-2 h-2 bg-white/40 rounded-full -translate-y-[3px]"></div>
                </div>
              )}
              
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300 h-full">
                {/* Step number watermark */}
                <div className="absolute top-8 right-8 text-7xl opacity-5">
                  {step.number}
                </div>
                
                <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-8 shadow-2xl`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm text-gray-500">Step {step.number}</span>
                  </div>
                  <h3 className="text-2xl mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Time comparison */}
        <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl mb-4">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">12 hours</span>
                {" "}→{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">10 minutes</span>
              </h3>
              <p className="text-xl text-gray-400 mb-6">
                What takes 8-12 hours manually is done in under 10 minutes with our automated workflow.
              </p>
              <p className="text-gray-500">
                Spend your time on what matters, not tedious migration tasks. Focus on growing your network, not maintaining it.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="text-gray-400">Manual Migration</span>
                <span className="text-red-400">8-12 hours</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                <span className="text-gray-300">Automated Migration</span>
                <span className="text-green-400">~10 minutes</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="text-gray-400">Time Saved</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">98%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
