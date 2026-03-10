"use client";

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            // Redirect or show success message
            setTimeout(() => {
                setStatus('idle');
            }, 5000);

        } catch (error: any) {
            console.error('Contact Form Error:', error);
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] text-[#051B16] font-sans selection:bg-[#D1F468] selection:text-black overflow-x-hidden">
            <Navbar />

            <main className="pt-32 pb-16">
                <div className="container mx-auto px-6 max-w-7xl">

                    <div className="flex flex-col lg:flex-row gap-20 items-start">

                        <div className="lg:w-5/12 space-y-12 lg:sticky lg:top-40">
                            <Reveal>
                                <div className="space-y-8 animate-fade-in-up">
                                    <div className="inline-flex items-center gap-3">
                                        <span className="w-12 h-px bg-[#D1F468]"></span>
                                        <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#3A6B18]">Contact KoinSave</span>
                                    </div>

                                    <h1 className="text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">
                                        Have a question? <br />
                                        <span className="text-[#3A6B18]">We&apos;re here to help.</span>
                                    </h1>

                                    <p className="text-lg text-gray-400 font-light max-w-md leading-relaxed">
                                        Join thousands of Nigerians building their wealth.
                                        If you have any inquiries about your account or our services, our team is ready to assist.
                                    </p>
                                </div>

                                <div className="space-y-8 animate-fade-in-up mt-10" style={{ animationDelay: '0.1s' }}>
                                    <QuickContact
                                        icon={<Mail className="w-5 h-5" />}
                                        title="Email Address"
                                        value="support@koinsave.co"
                                        href="mailto:support@koinsave.co"
                                    />

                                    <QuickContact
                                        icon={<MapPin className="w-5 h-5" />}
                                        title="Our Presence"
                                        value="20 Oyinbogbola Street, Alimosho, Lagos, Nigeria"
                                    />
                                </div>

                            </Reveal>
                        </div>

                        <div className="lg:w-7/12 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                            <Reveal delay={0.2}>
                                <div className="bg-white rounded-[3.5rem] p-8 md:p-16 border border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]">
                                    <div className="mb-12">
                                        <h2 className="text-3xl font-bold mb-4">Send us a message</h2>
                                        <p className="text-gray-400 text-sm">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                                    </div>

                                    <form className="space-y-10" onSubmit={handleSubmit}>
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <ModernField
                                                label="Your Name"
                                                placeholder="Ogooluwa Olafusi"
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                            <ModernField
                                                label="Email address"
                                                placeholder="ogooluwaolafusi@example.com"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <ModernField
                                            label="Subject"
                                            placeholder="General Inquiry"
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />

                                        <div className="space-y-4">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-[#3A6B18]/60 ml-1">Message</label>
                                            <textarea
                                                rows={6}
                                                className="w-full bg-[#F8F8F8] border-none rounded-3xl px-8 py-6 text-sm focus:ring-2 focus:ring-[#D1F468] outline-none transition-all placeholder:text-gray-300 resize-none shadow-inner"
                                                placeholder="How can we help you grow your savings?"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <button
                                            disabled={status === 'loading'}
                                            type="submit"
                                            className="w-full md:w-auto bg-[#051B16] text-white px-12 py-6 rounded-3xl font-bold flex items-center justify-center gap-3 hover:bg-[#051B16]/90 hover:shadow-2xl hover:shadow-[#051B16]/20 hover:-translate-y-1 active:scale-95 transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                                            {status !== 'loading' && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                                        </button>

                                        {status === 'success' && (
                                            <div className="p-4 bg-green-50 text-green-700 rounded-xl border border-green-100 text-sm font-medium">
                                                Message sent successfully! We&apos;ll get back to you soon.
                                            </div>
                                        )}
                                        {status === 'error' && (
                                            <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 text-sm font-medium">
                                                {errorMessage || 'Something went wrong. Please try again or use the mailto link below.'}
                                            </div>
                                        )}
                                        {/* 
                                        <a
                                            href={`mailto:support@koinsave.co?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`}
                                            className="text-sm text-gray-400 underline hover:text-[#3A6B18] transition-colors"
                                            onClick={(e) => {
                                                if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                                                    e.preventDefault();
                                                    alert('Please fill all fields');
                                                }
                                            }}
                                        >
                                            Or send via your email client
                                        </a> */}
                                    </form>
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

function QuickContact({ icon, title, value, href }: { icon: React.ReactNode, title: string, value: string, href?: string }) {
    return (
        <div className="flex items-start gap-5 group">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-gray-50 flex items-center justify-center text-[#3A6B18] group-hover:bg-[#D1F468] transition-colors duration-300">
                {icon}
            </div>
            <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300 mb-1">{title}</p>
                {href ? (
                    <a href={href} className="text-lg font-bold hover:text-[#3A6B18] transition-colors line-clamp-1">{value}</a>
                ) : (
                    <p className="text-lg font-bold">{value}</p>
                )}
            </div>
        </div>
    );
}

interface ModernFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

function ModernField({ label, ...props }: ModernFieldProps) {
    return (
        <div className="space-y-4">
            <label className="text-[11px] font-bold uppercase tracking-widest text-[#3A6B18]/60 ml-1">{label}</label>
            <input
                className="w-full bg-[#F8F8F8] border-none rounded-full px-8 py-6 text-sm focus:ring-2 focus:ring-[#D1F468] outline-none transition-all placeholder:text-gray-300 shadow-inner"
                {...props}
            />
        </div>
    );
}
