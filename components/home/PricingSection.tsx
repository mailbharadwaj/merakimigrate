import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Check, ArrowRight, Sparkles, TrendingUp } from "lucide-react";

export function PricingSection() {
  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small deployments",
      price: "$300",
      devices: "Up to 20 devices",
      features: [
        "Fully automated migration",
        "Configuration preservation",
        "Network assignment",
        "Email support",
        "Migration verification",
        "Success guarantee"
      ],
      popular: false,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      description: "For medium-sized networks",
      price: "$750",
      devices: "21-50 devices",
      features: [
        "Everything in Starter",
        "Priority migration queue",
        "Dedicated support",
        "Pre-migration validation",
        "Post-migration report",
        "90-day support"
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      description: "For large deployments",
      price: "Custom",
      devices: "50+ devices",
      features: [
        "Everything in Professional",
        "Custom migration schedule",
        "Dedicated migration engineer",
        "24/7 support",
        "On-demand migrations",
        "Multi-region support"
      ],
      popular: false,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="relative py-32 bg-black overflow-hidden" id="pricing">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <span className="text-purple-400 text-sm">Pricing</span>
          </div>
          <h2 className="text-5xl mb-6">
            Simple, Transparent <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              One-Time Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Pay only for what you need. No hidden fees, no subscriptions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="relative group">
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className={`bg-gradient-to-r ${tier.gradient} text-white border-0 shadow-lg px-4 py-1`}>
                    <Sparkles className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className={`relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border ${tier.popular ? 'border-purple-500/50' : 'border-white/10'} rounded-3xl p-8 hover:border-white/20 transition-all duration-300`}>
                {tier.popular && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-5 rounded-3xl`}></div>
                )}
                
                <div className="relative">
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${tier.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
                      <div className="text-2xl">
                        {index === 0 ? "🚀" : index === 1 ? "⚡" : "💎"}
                      </div>
                    </div>
                    <h3 className="text-2xl mb-2">{tier.name}</h3>
                    <p className="text-gray-500 mb-6">{tier.description}</p>
                    <div className="mb-2">
                      <span className="text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        {tier.price}
                      </span>
                    </div>
                    <p className="text-gray-400">{tier.devices}</p>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`w-5 h-5 bg-gradient-to-br ${tier.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${tier.popular ? `bg-gradient-to-r ${tier.gradient} hover:opacity-90 text-white border-0 shadow-lg` : 'bg-white/5 hover:bg-white/10 border border-white/20'}`}
                    size="lg"
                  >
                    {tier.price === "Custom" ? "Contact Sales" : "Get Started"} 
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Volume discount banner */}
        <div className="relative bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 backdrop-blur-sm border border-orange-500/20 rounded-3xl p-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative flex flex-col md:flex-row gap-8 items-center">
            <div className={`w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl`}>
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl mb-3">
                Volume Discounts Available
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Need to migrate 100+ devices? We offer custom pricing and dedicated support for large-scale migrations. 
                Our volume pricing can save you up to 40% compared to our standard rates.
              </p>
              <Button variant="outline" className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10">
                Request Custom Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            💡 Compare this to the cost of 8-12 hours of admin time, potential downtime, and risk of errors. 
            <br />
            <span className="text-gray-400">Our automated solution pays for itself immediately.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
