import { Badge } from "../ui/badge";
import { Zap } from "lucide-react";

interface FooterProps {
  onNavigate: (page: "home" | "privacy" | "terms") => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-gray-900">MerakiMigrate</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-sm leading-relaxed">
              The fastest, safest way to migrate Meraki devices between dashboards. 
              Automated, error-free, and incredibly simple.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                dashboard.meraki.com
              </Badge>
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                dashboard.meraki.in
              </Badge>
              <Badge variant="outline" className="bg-pink-50 text-pink-700 border-pink-200">
                More regions soon
              </Badge>
            </div>
          </div>
          
          <div>
            <h4 className="text-gray-900 mb-6">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#how" className="text-gray-600 hover:text-gray-900 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="mailto:sales@migratemeraki.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="mailto:sales@migratemeraki.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("privacy")}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate("terms")}
                  className="text-gray-600 hover:text-gray-900 transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 MerakiMigrate. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Not affiliated with Cisco Meraki
          </p>
        </div>
      </div>
    </footer>
  );
}
