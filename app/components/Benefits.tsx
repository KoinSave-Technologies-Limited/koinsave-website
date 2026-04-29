"use client";

import { DollarSign, Lock, Zap, Globe2, PiggyBank, TrendingUp } from 'lucide-react';
import Image from 'next/image';

import { Reveal } from './Reveal';

const Benefits = () => {
    const benefits = [
        {
            icon: <PiggyBank className="w-6 h-6" />,
            title: "Automated Savings",
            description: "Set it and forget it. Create custom rules to save automatically based on your spending patterns.",
            stat: "Smart",
            statLabel: "AI Powered",
            // TODO: Product team to confirm which features are now live (Automated Savings, Competitive Interest, USD Savings)
            comingSoon: true
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Competitive Interest",
            description: "Earn up to 15% annual interest on your savings. Watch your money grow while you sleep.",
            stat: "15%",
            statLabel: "Target Return",
            // TODO: Product team to confirm which features are now live (Automated Savings, Competitive Interest, USD Savings)
            comingSoon: true
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Instant Transfers",
            description: "Send money to any Nigerian bank account in seconds. No delays, no hassles.",
            stat: "Instant",
            statLabel: "Settlement"
        },
        {
            icon: <DollarSign className="w-6 h-6" />,
            title: "USD Savings",
            description: "Protect your wealth from inflation. Save in dollars and maintain your purchasing power.",
            stat: "Global",
            statLabel: "Access",
            // TODO: Product team to confirm which features are now live (Automated Savings, Competitive Interest, USD Savings)
            comingSoon: true
        },
        {
            icon: <Lock className="w-6 h-6" />,
            title: "Bank-Level Security",
            description: "Your money is protected by 256-bit AES encryption and held by our licensed banking partner, 9PSB."
        },
        {
            icon: <Globe2 className="w-6 h-6" />,
            title: "Bill Payments",
            description: "Pay for airtime, data, electricity, cable TV, and more. All in one place.",
            stat: "50+",
            statLabel: "Bill Types"
        }
    ];

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-125 h-125 bg-[#D1F468]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-100 h-100 bg-[#051B16]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <Reveal>
                    <div className="max-w-4xl mb-20 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF9D6] text-[#3A6B18] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-[#D1F468]/50">
                            Why Choose KoinSave
                        </div>
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-8 text-gray-900">
                            More than just a <span className="text-gray-800 italic font-light">savings app.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-500 font-light max-w-3xl leading-relaxed">
                            We&apos;re building the financial infrastructure for modern Africans. Every feature is designed to help you save more, spend smarter, and grow faster.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
                    {benefits.map((benefit, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div
                                className="group relative bg-linear-to-br from-white to-[#FAFAFA] rounded-3xl p-8 border border-gray-100 hover:border-[#D1F468] hover:shadow-2xl hover:shadow-[#D1F468]/10 transition-all duration-500 animate-fade-in-up overflow-hidden h-full"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-[#D1F468]/0 to-[#D1F468]/0 group-hover:from-[#D1F468]/5 group-hover:to-transparent transition-all duration-500 rounded-3xl" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-6 text-[#3A6B18] group-hover:bg-[#D1F468] group-hover:text-[#051B16] transition-all duration-500 shadow-sm">
                                        {benefit.icon}
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 text-[#051B16] flex items-center gap-2">
                                        {benefit.title}
                                        {benefit.comingSoon && (
                                            <span className="text-[10px] bg-[#D1F468] text-[#051B16] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">Coming Soon</span>
                                        )}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed font-light mb-6">
                                        {benefit.description}
                                    </p>

                                    {benefit.stat && (
                                        <div className="pt-6 border-t border-gray-100">
                                            <div className="text-2xl font-bold text-[#051B16] mb-1">{benefit.stat}</div>
                                            <div className="text-xs text-gray-400 uppercase tracking-wider font-bold">{benefit.statLabel}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.3}>
                    <div className="mt-20 bg-linear-to-br from-[#051B16] to-[#0a2e24] rounded-[3rem] p-12 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-100 h-100 bg-[#D1F468]/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D1F468] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-white/20">
                                    Premium Feature
                                </div>
                                <h3 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
                                    Save in USD, protect your future.
                                </h3>
                                <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                                    With inflation eroding the value of the Naira, smart savers are moving to USD. KoinSave makes it easy to save in dollars and preserve your purchasing power.
                                </p>
                                <a href="https://apps.apple.com/us/app/koinsave/id6748754614" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#D1F468] text-[#051B16] px-8 py-4 rounded-full font-bold hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-xl">
                                    Download App
                                </a>
                            </div>

                            <div className="relative h-75 md:h-100 overflow-visible">
                                <div className="absolute inset-0 rounded-3xl" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Image
                                        src="/koinsave-app.png"
                                        alt="KoinSave App"
                                        width={500}
                                        height={350}
                                        className="object-contain w-[120%] h-[120%] max-w-none rounded-2xl transform scale-110"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Benefits;

