"use client";

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Reveal } from '../components/Reveal';

const WaitlistPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', waitlistType: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      console.log('🚀 Submitting form:', formData);
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      console.log('📬 Response status:', res.status, res.statusText);
      
      const json = await res.json().catch((err) => {
        console.error('❌ Failed to parse JSON:', err);
        return {};
      });
      
      console.log('📦 Response body:', json);
      
      if (!res.ok) {
        const serverMessage = json?.error || json?.message || 'Failed to join waitlist.';
        console.error('❌ Server error:', serverMessage);
        setError(typeof serverMessage === 'string' ? serverMessage : JSON.stringify(serverMessage));
      } else {
        console.log('✅ Success! Setting success state.');
        setSuccess(true);
        setFormData({ name: '', email: '', waitlistType: '' });
      }
    } catch (err) {
      console.error('❌ Fetch error:', err);
      setError('Failed to join waitlist. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#111111]">
      <Navbar />
      <div className="pt-32 pb-12 container mx-auto px-4 flex flex-col items-center">
        <Reveal width="100%" className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-semibold mb-4">Join the Waitlist</h1>
            <p className="text-gray-600">
              Be the first to know. Enter your details below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D1F468] focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D1F468] focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="waitlistType" className="block text-sm font-medium text-gray-700 mb-2">
                Waitlist Type
              </label>
              <select
                id="waitlistType"
                name="waitlistType"
                value={formData.waitlistType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D1F468] focus:border-transparent"
              >
                <option value="">Select waitlist type</option>
                <option value="Android Waitlist">Android Waitlist</option>
                <option value="USD Waitlist">USD Waitlist</option>
              </select>
            </div>

            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}

            {success && (
              <p className="text-green-600 text-sm">✓ Successfully joined! Check your email.</p>
            )}

            <button
              type="submit"
              disabled={loading || success}
              className="w-full bg-[#051B16] text-white py-3 px-6 rounded-full font-medium hover:bg-[#051B16]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? 'Joining...' : success ? 'Joined!' : 'Join Waitlist'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  );
};

export default WaitlistPage;