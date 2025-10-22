import { Button } from "../ui/button";
import { ArrowLeft, Zap } from "lucide-react";

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-gray-900">MerakiMigrate</span>
            </div>
            <Button variant="ghost" onClick={onBack} className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl mb-4 text-gray-900">Privacy Policy</h1>
        <p className="text-gray-600 mb-12">Last updated: October 22, 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl mb-4 text-gray-900">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to MerakiMigrate ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Meraki device migration service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">2. Information We Collect</h2>
            <h3 className="text-xl mb-3 text-gray-900">2.1 Information You Provide</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Contact information (name, email address, phone number)</li>
              <li>Meraki API credentials (encrypted and stored securely)</li>
              <li>Dashboard URLs and organization details</li>
              <li>Payment and billing information</li>
              <li>Device configuration data necessary for migration</li>
            </ul>

            <h3 className="text-xl mb-3 text-gray-900">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We automatically collect certain information when you use our service:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Log data (IP address, browser type, access times)</li>
              <li>Migration activity and progress logs</li>
              <li>Service usage statistics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>To provide and maintain our migration service</li>
              <li>To process your device migrations between Meraki dashboards</li>
              <li>To communicate with you about your migrations and our services</li>
              <li>To process payments and maintain billing records</li>
              <li>To improve our service and develop new features</li>
              <li>To detect, prevent, and address technical issues or security threats</li>
              <li>To comply with legal obligations and protect our legal rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>All API credentials are encrypted using AES-256 encryption</li>
              <li>Data transmission is secured using TLS/SSL protocols</li>
              <li>Access to customer data is restricted to authorized personnel only</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Secure data centers with physical and digital access controls</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">5. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>API credentials are deleted immediately after migration completion</li>
              <li>Migration logs are retained for 90 days for support purposes</li>
              <li>Billing records are retained for 7 years as required by law</li>
              <li>Account information is retained until you request deletion</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">6. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our service (e.g., payment processors, hosting providers)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">7. Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Data Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing where applicable</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              To exercise any of these rights, please contact us at <a href="mailto:sales@migratemeraki.com" className="text-blue-600 hover:text-blue-700">sales@migratemeraki.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">8. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings. Note that disabling cookies may limit your ability to use certain features of our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">9. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">10. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">12. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-900 mb-2"><strong>MerakiMigrate</strong></p>
              <p className="text-gray-700 mb-2">Email: <a href="mailto:sales@migratemeraki.com" className="text-blue-600 hover:text-blue-700">sales@migratemeraki.com</a></p>
              <p className="text-gray-700">Response Time: Within 48 hours</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">13. Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are committed to complying with applicable data protection laws, including GDPR (General Data Protection Regulation) and CCPA (California Consumer Privacy Act). We respect your privacy rights under these regulations.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Button onClick={onBack} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
