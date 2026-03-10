"use client";

import { useState } from 'react';
import { AlertTriangle, Trash2, ShieldAlert } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Reveal } from '../components/Reveal';

type Step = 'form' | 'confirm' | 'success';

export default function DeleteAccountPage() {
  const [step, setStep] = useState<Step>('form');
  const [formData, setFormData] = useState({ phone: '', password: '', reason: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirm');
  };

  const handleConfirmDelete = async () => {
    setStatus('loading');
    setErrorMessage('');
    try {
      const res = await fetch('/api/delete-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Request failed');
      setStep('success');
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    } finally {
      setStatus('idle');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#051B16] font-sans selection:bg-[#D1F468] selection:text-black overflow-x-hidden">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Left info panel */}
            <div className="lg:w-5/12 space-y-10 lg:sticky lg:top-40">
              <Reveal>
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3">
                    <span className="w-12 h-px bg-red-400"></span>
                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-red-500">Account Deletion</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight">
                    Delete your <br />
                    <span className="text-red-500">KoinSave account.</span>
                  </h1>

                  <p className="text-base text-gray-400 font-light leading-relaxed">
                    We&apos;re sorry to see you go. Before you proceed, please understand what happens when you delete your account.
                  </p>
                </div>

                <div className="space-y-4 mt-8">
                  {[
                    'All your personal data will be permanently deleted',
                    'Your savings balance will be settled before deletion',
                    'Transaction history will be removed after 90 days',
                    'This action cannot be undone',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5 shrink-0">
                        <AlertTriangle className="w-3 h-3 text-red-500" />
                      </div>
                      <p className="text-sm text-gray-500 font-light">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 rounded-2xl bg-amber-50 border border-amber-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Need help instead?</p>
                  <p className="text-sm text-amber-700 font-light">
                    If you&apos;re having issues with your account, our support team can help.{' '}
                    <a href="/contact" className="font-semibold underline hover:text-amber-900 transition-colors">Contact us</a>
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right form panel */}
            <div className="lg:w-7/12 w-full">
              <Reveal delay={0.15}>
                <div className="bg-white rounded-[3rem] p-8 md:p-14 border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]">

                  {step === 'form' && (
                    <>
                      <div className="mb-10">
                        <h2 className="text-2xl font-bold mb-2">Verify your identity</h2>
                        <p className="text-gray-400 text-sm">Enter your account credentials to proceed with deletion.</p>
                      </div>

                      <form onSubmit={handleFormSubmit} className="space-y-8">
                        <DeleteField
                          label="Phone Number"
                          name="phone"
                          type="tel"
                          placeholder="+234 800 000 0000"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />

                        <DeleteField
                          label="Password"
                          name="password"
                          type="password"
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />

                        <div className="space-y-3">
                          <label className="text-[11px] font-bold uppercase tracking-widest text-[#3A6B18]/60 ml-1">
                            Reason for leaving <span className="text-gray-300 normal-case tracking-normal font-normal">(optional)</span>
                          </label>
                          <textarea
                            name="reason"
                            rows={4}
                            value={formData.reason}
                            onChange={handleChange}
                            placeholder="Help us improve by sharing why you're leaving..."
                            className="w-full bg-[#F8F8F8] border-none rounded-3xl px-8 py-5 text-sm focus:ring-2 focus:ring-red-200 outline-none transition-all placeholder:text-gray-300 resize-none shadow-inner"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-red-500 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-red-600 hover:-translate-y-0.5 active:scale-95 transition-all shadow-lg shadow-red-500/20"
                        >
                          <Trash2 className="w-5 h-5" />
                          Continue to Delete Account
                        </button>
                      </form>
                    </>
                  )}

                  {step === 'confirm' && (
                    <div className="space-y-8">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center">
                          <ShieldAlert className="w-10 h-10 text-red-500" />
                        </div>
                        <h2 className="text-2xl font-bold">Are you absolutely sure?</h2>
                        <p className="text-gray-400 text-sm max-w-sm">
                          This will permanently delete your KoinSave account associated with{' '}
                          <span className="font-semibold text-[#051B16]">{formData.phone}</span>.
                          This action <span className="font-semibold text-red-500">cannot be reversed</span>.
                        </p>
                      </div>

                      {errorMessage && (
                        <div className="p-4 bg-red-50 text-red-700 rounded-2xl border border-red-100 text-sm font-medium text-center">
                          {errorMessage}
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={() => { setStep('form'); setErrorMessage(''); }}
                          className="flex-1 py-4 rounded-2xl border-2 border-gray-200 font-bold text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleConfirmDelete}
                          disabled={status === 'loading'}
                          className="flex-1 py-4 px-6 rounded-2xl bg-red-500 text-white font-bold inline-flex items-center justify-center gap-2 hover:bg-red-600 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-red-500/20"
                        >
                          {status === 'loading' ? 'Processing...' : (
                            <><Trash2 className="w-4 h-4 shrink-0" /><span>Yes, Delete My Account</span></>
                          )}
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 'success' && (
                    <div className="flex flex-col items-center text-center space-y-6 py-6">
                      <div className="w-20 h-20 rounded-full bg-[#EDF9D6] flex items-center justify-center">
                        <svg className="w-10 h-10 text-[#3A6B18]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold">Request Received</h2>
                      <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                        Your account deletion request has been submitted. We&apos;ll process it within <span className="font-semibold text-[#051B16]">7 business days</span> and send a confirmation to your registered contact.
                      </p>
                      <p className="text-xs text-gray-300 max-w-xs">
                        If you change your mind, contact us at{' '}
                        <a href="mailto:support@koinsave.co" className="text-[#3A6B18] font-semibold hover:underline">support@koinsave.co</a>{' '}
                        before processing is complete.
                      </p>
                      <a
                        href="/"
                        className="mt-4 inline-block bg-[#051B16] text-white px-10 py-4 rounded-full font-bold hover:bg-[#051B16]/90 hover:-translate-y-0.5 active:scale-95 transition-all"
                      >
                        Back to Home
                      </a>
                    </div>
                  )}

                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

interface DeleteFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function DeleteField({ label, ...props }: DeleteFieldProps) {
  return (
    <div className="space-y-3">
      <label className="text-[11px] font-bold uppercase tracking-widest text-[#3A6B18]/60 ml-1">{label}</label>
      <input
        className="w-full bg-[#F8F8F8] border-none rounded-full px-8 py-5 text-sm focus:ring-2 focus:ring-red-200 outline-none transition-all placeholder:text-gray-300 shadow-inner"
        {...props}
      />
    </div>
  );
}
