import { AlertTriangle, Clock, XCircle, UserX } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: XCircle,
      title: "No Native Support",
      description: "Meraki provides no built-in tools to migrate devices between different dashboard regions. You're completely on your own.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: AlertTriangle,
      title: "High Risk of Human Error",
      description: "Manual migration involves dozens of steps per device. Even experienced admins make mistakes with configurations, networks, and settings.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "Extremely Time-Consuming",
      description: "Manually migrating 20 devices can take 8-12 hours. For larger deployments, it becomes a multi-day project requiring full attention.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: UserX,
      title: "Requires Deep Expertise",
      description: "Manual migration demands intimate knowledge of Meraki APIs, dashboard configurations, and troubleshooting skills most teams don't have.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="relative py-32 bg-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(239,68,68,0.1),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
            <span className="text-red-400 text-sm">The Problem</span>
          </div>
          <h2 className="text-5xl mb-6">
            Manual Migration is a <br />
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Complete Nightmare
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Migrating Meraki devices manually is tedious, error-prone, and incredibly frustrating. 
            Here's what you're up against.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-white/20 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative flex gap-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${problem.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <problem.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-3">{problem.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="relative bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="relative flex gap-6">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl mb-3 text-red-400">The Real Cost of Errors</h3>
              <p className="text-gray-300 leading-relaxed">
                A single configuration error during manual migration can cause network downtime, 
                security vulnerabilities, or complete device failure. The stakes are high, 
                and there's no safety net. One mistake can cost thousands in lost productivity and emergency fixes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
