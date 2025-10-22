import { Button } from "../ui/button";
import { ArrowLeft, Zap } from "lucide-react";

interface TermsOfServiceProps {
  onBack: () => void;
}

export function TermsOfService({ onBack }: TermsOfServiceProps) {
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
        <h1 className="text-4xl mb-4 text-gray-900">Terms of Service</h1>
        <p className="text-gray-600 mb-12">Last updated: October 22, 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl mb-4 text-gray-900">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing or using MerakiMigrate's services ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms apply to all users of the Service, including without limitation users who are browsers, customers, merchants, and/or contributors of content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              MerakiMigrate provides an automated workflow service for migrating Cisco Meraki devices between different dashboard regions, specifically:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Automated device migration from dashboard.meraki.com to dashboard.meraki.in</li>
              <li>Configuration preservation and transfer</li>
              <li>Network assignment automation</li>
              <li>Migration verification and reporting</li>
              <li>Technical support during and after migration</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              MerakiMigrate is an independent service and is not affiliated with, endorsed by, or sponsored by Cisco Meraki.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">3. Account Registration and Security</h2>
            <h3 className="text-xl mb-3 text-gray-900">3.1 Account Creation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use our Service, you must provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h3 className="text-xl mb-3 text-gray-900">3.2 API Credentials</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Providing valid Meraki API credentials with appropriate permissions</li>
              <li>Ensuring you have authorization to perform migrations on the specified dashboards</li>
              <li>Maintaining the security of your API credentials</li>
              <li>Immediately notifying us of any unauthorized use of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">4. Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Migrate devices without proper authorization</li>
              <li>Attempt to gain unauthorized access to our systems or networks</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Use the Service to transmit viruses, malware, or harmful code</li>
              <li>Reverse engineer, decompile, or disassemble the Service</li>
              <li>Use automated systems to access the Service without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">5. Pricing and Payment</h2>
            <h3 className="text-xl mb-3 text-gray-900">5.1 Fees</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our pricing is based on the number of devices being migrated:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Starter Plan: $300 for up to 20 devices</li>
              <li>Professional Plan: $750 for 21-50 devices</li>
              <li>Enterprise Plan: Custom pricing for 50+ devices</li>
            </ul>

            <h3 className="text-xl mb-3 text-gray-900">5.2 Payment Terms</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payment is required before migration services are performed. We accept major credit cards and other payment methods as specified on our website. All fees are non-refundable except as required by law or as specified in our refund policy.
            </p>

            <h3 className="text-xl mb-3 text-gray-900">5.3 Price Changes</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify our pricing at any time. Price changes will not affect migrations already purchased.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">6. Service Level and Availability</h2>
            <h3 className="text-xl mb-3 text-gray-900">6.1 Service Availability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we strive to maintain 99.9% uptime, we do not guarantee uninterrupted access to the Service. We may need to suspend the Service for maintenance, updates, or unforeseen circumstances.
            </p>

            <h3 className="text-xl mb-3 text-gray-900">6.2 Success Rate</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We maintain a 99.9% migration success rate. In the rare event of a migration failure, we will work with you to resolve the issue or provide a full refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">7. Intellectual Property Rights</h2>
            <h3 className="text-xl mb-3 text-gray-900">7.1 Our Rights</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Service and its original content, features, and functionality are owned by MerakiMigrate and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>

            <h3 className="text-xl mb-3 text-gray-900">7.2 Your Rights</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain all rights to your data, device configurations, and content. By using our Service, you grant us a limited license to access and process your data solely for the purpose of providing migration services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">8. Warranties and Disclaimers</h2>
            <h3 className="text-xl mb-3 text-gray-900">8.1 Service Warranty</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We warrant that our Service will be performed in a professional and workmanlike manner. We will make reasonable efforts to ensure successful device migration and configuration preservation.
            </p>

            <h3 className="text-xl mb-3 text-gray-900">8.2 Disclaimers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>The Service will meet your specific requirements</li>
              <li>The Service will be uninterrupted, timely, secure, or error-free</li>
              <li>Results obtained from the Service will be accurate or reliable</li>
              <li>Any errors in the Service will be corrected</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">9. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL MERAKIMIGRATE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Your access to or use of (or inability to access or use) the Service</li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              <li>Network downtime or service interruptions</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SERVICE IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">10. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to indemnify, defend, and hold harmless MerakiMigrate and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Your access to or use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another party</li>
              <li>Your unauthorized migration of devices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">11. Data Protection and Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your use of the Service is also governed by our Privacy Policy. By using the Service, you consent to the collection and use of your information as described in our Privacy Policy.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your data, including encryption of API credentials and secure data transmission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">12. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the Service will cease immediately.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may terminate your account at any time by contacting us at <a href="mailto:sales@migratemeraki.com" className="text-blue-600 hover:text-blue-700">sales@migratemeraki.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">13. Governing Law and Dispute Resolution</h2>
            <h3 className="text-xl mb-3 text-gray-900">13.1 Governing Law</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which MerakiMigrate operates, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl mb-3 text-gray-900">13.2 Dispute Resolution</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Any disputes arising from these Terms or the Service shall first be attempted to be resolved through good faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with applicable arbitration rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">14. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any material changes by posting the new Terms on this page and updating the "Last updated" date.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your continued use of the Service after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">15. Severability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">16. Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and MerakiMigrate regarding the Service and supersede all prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">17. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-gray-900 mb-2"><strong>MerakiMigrate</strong></p>
              <p className="text-gray-700 mb-2">Email: <a href="mailto:sales@migratemeraki.com" className="text-blue-600 hover:text-blue-700">sales@migratemeraki.com</a></p>
              <p className="text-gray-700">Response Time: Within 48 hours</p>
            </div>
          </section>

          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-2xl mb-4 text-gray-900">18. Acknowledgment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              BY USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
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
