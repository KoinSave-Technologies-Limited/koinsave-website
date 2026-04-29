"use client";

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from './Reveal';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Is my money safe with KoinSave?",
            answer: "Absolutely. Your funds are held in segregated accounts with tier-1 Nigerian banks and protected by NDIC insurance. We use 256-bit encryption and comply with all CBN regulations. Your security is our top priority."
        },
        {
            question: "How fast are transfers?",
            answer: "Transfers to other Nigerian banks are processed instantly, typically completing in under 2 seconds. You'll receive real-time notifications for every transaction."
        },
        {
            question: "Are there any fees?",
            answer: "KoinSave is transparent about fees. Account opening and maintenance are completely free. We charge small fees for certain services like inter-bank transfers and bill payments, but these are clearly displayed before you confirm any transaction."
        },
        {
            question: "Is KoinSave licensed and regulated?",
            answer: "KoinSave is a technology platform, not a bank. Your funds are held and managed by 9PSB (9 Payment Service Bank), a CBN-licensed institution. KoinSave provides the app and technology layer — 9PSB handles the regulated financial services."
        }
    ];

    return (
        <section className="py-16 bg-linear-to-b from-white to-[#FAFAFA] relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-[#D1F468]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <Reveal>
                    <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF9D6] text-[#3A6B18] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-[#D1F468]/50">
                            FAQ
                        </div>
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-gray-900">
                            Questions? <span className="text-gray-800 italic font-light">We&apos;ve got answers.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                            Everything you need to know about KoinSave. Can&apos;t find what you&apos;re looking for? Contact our support team.
                        </p>
                    </div>
                </Reveal>

                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <Reveal key={index} delay={index * 0.05}>
                            <div
                                className="mb-4 animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-[#D1F468] hover:shadow-lg hover:shadow-[#D1F468]/10 transition-all duration-300 text-left group"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="text-lg md:text-xl font-bold text-[#051B16] pr-8 group-hover:text-[#3A6B18] transition-colors">
                                            {faq.question}
                                        </h3>
                                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index
                                            ? 'bg-[#D1F468] text-[#051B16]'
                                            : 'bg-gray-100 text-gray-400 group-hover:bg-[#EDF9D6] group-hover:text-[#3A6B18]'
                                            }`}>
                                            {openIndex === index ? (
                                                <Minus className="w-5 h-5" />
                                            ) : (
                                                <Plus className="w-5 h-5" />
                                            )}
                                        </div>
                                    </div>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                                            }`}
                                    >
                                        <p className="text-gray-600 leading-relaxed font-light">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </button>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.2}>
                    <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                        <p className="text-gray-500 mb-6">Still have questions?</p>
                        <a href="/contact" className="inline-block bg-[#051B16] text-white px-8 py-4 rounded-full font-bold hover:bg-[#051B16]/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#051B16]/20">
                            Contact Support
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default FAQ;
