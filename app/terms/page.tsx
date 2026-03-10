import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Reveal } from '../components/Reveal';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#111111]">
      <Navbar />

      <div className="bg-[#051B16] py-8 pt-32">
        <div className="container mx-auto px-4">
          <div className="text-sm text-white mb-2">
            <span>Home</span>
            <span className="mx-2">{'>'}</span>
            <span>Terms & Conditions</span>
          </div>
          <h1 className="text-4xl font-semibold text-white">Terms & Conditions</h1>
        </div>
      </div>

      <div className="pt-12 pb-12 container mx-auto px-4 max-w-4xl">
        <Reveal width="100%">

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-gray-600">
              Effective Date: 3rd July, 2025
            </p>
            <p>
              Welcome to KoinSave. These Terms (&apos;Terms&apos;) govern your use of our platform and services. By accessing or using KoinSave, you agree to these Terms. Please read them carefully.
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Definitions & Interpretation</h2>
              <p>&ldquo;KoinSave,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo; refers to KoinSave Limited.</p>
              <p>&ldquo;User,&rdquo; &ldquo;you,&rdquo; &ldquo;your&rdquo; means any person using our platform.</p>
              <p>&ldquo;Services&rdquo; include: Chequing accounts (₦); Virtual USD-backed cards; Savings accounts in Naira or USD-backed stable assets; Autosave features converting funds to USD assets.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must be at least 18 years old.</li>
                <li>You must have a valid government-issued ID.</li>
                <li>You must own and maintain a Nigerian bank account.</li>
                <li>You must complete KYC with BVN, phone number, and address.</li>
                <li>You must use KoinSave in compliance with all laws, including AML and CFT regulations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Account Registration & Operation</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate personal data during registration.</li>
                <li>You are responsible for protecting your login credentials.</li>
                <li>Notify us immediately of any unauthorized use or breach.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Services Overview</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>&ndash; Chequing Account (₦): Manage your everyday spending.</li>
                <li>&ndash; Virtual USD Card: Make online/international payments.</li>
                <li>&ndash; Savings Accounts: Store value in Naira or USD-backed options.</li>
                <li>&ndash; Autosave USD Feature: Automatically save in USD at intervals.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Deposits, Currency Conversion & Transactions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Deposit via bank transfer, debit card, or USSD.</li>
                <li>Conversions are based on market rates plus a fee.</li>
                <li>Transaction history is available in-app.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Fees & Charges</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Charges may apply to deposits, withdrawals, conversions, or specific services.</li>
                <li>All fees will be disclosed before any charge.</li>
                <li>Fees may change with prior notice.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Risk Disclosure</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>USD-backed assets carry market risks.</li>
                <li>No guaranteed returns or preservation of capital.</li>
                <li>Use services at your own risk.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Security & Data Protection</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We use encryption and other measures to secure your data.</li>
                <li>2FA is available and recommended.</li>
                <li>Refer to our Privacy Policy for full practices.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Third-Party Partners</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We work with banks, payment processors, and custodians.</li>
                <li>You may be subject to additional terms from these parties.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. User Obligations & Prohibited Activities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must not use the platform for illegal or fraudulent activity.</li>
                <li>Do not impersonate others or misrepresent information.</li>
                <li>Do not interfere with the platform or its operations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Account Suspension & Termination</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We may suspend/terminate your account for breaches or suspicious activity.</li>
                <li>You may close your account anytime by contacting support.</li>
                <li>Account closure may take up to 14 days.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Disclaimers & Limitation of Liability</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We are not liable for indirect or consequential damages.</li>
                <li>Liability is limited to the balance held in your account at the time of the issue.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All content and code on the platform belongs to KoinSave.</li>
                <li>You may not copy, modify, or reuse our assets without permission.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">14. Amendments to Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We may update these Terms at any time.</li>
                <li>You will be notified of major changes.</li>
                <li>Continued use implies acceptance.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">15. Governing Law & Dispute Resolution</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>These Terms are governed by Nigerian law.</li>
                <li>Disputes shall be handled in Nigerian courts, possibly through mediation/arbitration first.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">16. Privacy Policy & Cookies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We follow a separate Privacy Policy document.</li>
                <li>We use cookies to improve your experience and track usage trends.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">17. Referral & Bonus Programs (Optional)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Bonus eligibility requires valid referrals that meet minimum criteria.</li>
                <li>We may change or cancel referral programs at any time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">18. Contact Information</h2>
              <p>KoinSave Limited</p>
              <p><strong>Email:</strong> support@koinsave.co</p>
              <p><strong>Phone:</strong>+234 5678 2353</p>
            </section>
          </div>
        </Reveal>
      </div>

      <Footer />
    </div>
  );
};

export default TermsPage;