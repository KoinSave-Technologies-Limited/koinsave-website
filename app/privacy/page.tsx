import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Reveal } from '../components/Reveal';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#111111]">
      <Navbar />

      <div className="bg-[#051B16] py-8 pt-32">
        <div className="container mx-auto px-4">
          <div className="text-sm text-white mb-2">
            <span>Home</span>
            <span className="mx-2">{'>'}</span>
            <span>Privacy Policy</span>
          </div>
          <h1 className="text-4xl font-semibold text-white">Privacy Policy</h1>
        </div>
      </div>

      <div className="pt-12 pb-12 container mx-auto px-4 max-w-4xl">
        <Reveal width="100%">
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-gray-600">
              Effective Date: 3rd July, 2025
            </p>
            <p>
              This Privacy Policy explains how KoinSave collects, uses, stores, and protects your personal information. By using our services, you consent to the practices described in this policy.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                KoinSave is committed to protecting your privacy. This Privacy Policy outlines how we handle your information when you use our website, mobile app, or other services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p><strong>Personal Identification Information:</strong> Name, phone number, email address, BVN, NIN, address, and date of birth.</p>
              <p><strong>Financial Information:</strong> Bank account details, transaction history, wallet balance, and card usage.</p>
              <p><strong>Technical Data:</strong> IP address, device type, operating system, browser type, and app usage logs.</p>
              <p><strong>Location Data:</strong> Device GPS and network location (if permitted).</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To verify your identity and comply with KYC/AML regulations.</li>
                <li>To process transactions and manage your account.</li>
                <li>To send updates, security alerts, and support messages.</li>
                <li>To improve service functionality and user experience.</li>
                <li>To detect fraud, unauthorized access, or abuse of services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Legal Basis for Processing</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consent:</strong> When you opt in to use specific features or receive communication.</li>
                <li><strong>Contract:</strong> To provide our core services (e.g., wallet, savings).</li>
                <li><strong>Legal Obligation:</strong> For compliance with regulatory requirements (e.g., CBN, NDIC, EFCC).</li>
                <li><strong>Legitimate Interest:</strong> To monitor and improve platform performance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Sharing & Disclosure</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not sell your data.</li>
                <li>We share necessary data with trusted third parties (e.g., banks, payment processors, KYC providers) to deliver services.</li>
                <li>We may disclose information if required by law or court order.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
              <p>
                We retain your data as long as your account is active and for a reasonable period thereafter for legal, accounting, and regulatory purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Cookies & Tracking Technologies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We use cookies to improve user experience, track preferences, and collect usage data.</li>
                <li>You can manage cookie settings in your browser or device.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data.</li>
                <li><strong>Correction:</strong> Request updates to inaccurate information.</li>
                <li><strong>Deletion:</strong> Request account and data deletion (subject to legal limitations).</li>
                <li><strong>Objection:</strong> Withdraw consent or object to certain processing activities.</li>
                <li><strong>Portability:</strong> Request your data in a structured digital format.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Data Security</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We use industry-standard security measures, including SSL encryption, firewalls, and tokenization.</li>
                <li>Access to data is limited to authorized personnel and partners only.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Children&apos;s Privacy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>KoinSave does not knowingly collect data from children under 18.</li>
                <li>If you believe a child has provided personal data, please contact us for immediate removal.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. International Transfers</h2>
              <p>
                If data is transferred outside Nigeria, we ensure it is protected under appropriate safeguards and compliant with data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Changes to this Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We may update this Privacy Policy periodically.</li>
                <li>Changes will be posted on our website/app and, where appropriate, communicated to you via email.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy, please contact us:
              </p>
              <p><strong>Email:</strong> support@koinsave.co</p>
            </section>
          </div>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPage;