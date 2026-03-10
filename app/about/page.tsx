"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import { ShieldCheck, Lightbulb, Compass, Globe, BarChart3 } from 'lucide-react';
import { Reveal } from '../components/Reveal';

export default function About() {
    return (
        <div className="min-h-screen bg-white text-[#051B16] font-sans selection:bg-[#D1F468] selection:text-black">
            <Navbar />

            <main className="pt-32">

                <section className="container mx-auto px-6 py-12">
                    <Reveal>
                        <div className="grid lg:grid-cols-12 gap-6 mb-6">
                            <div className="lg:col-span-8 bg-[#051B16] rounded-[3rem] p-10 md:p-16 text-white flex flex-col justify-end min-h-112.5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-80 h-80 bg-[#D1F468] opacity-10 rounded-full blur-[100px] -mr-40 -mt-20 group-hover:opacity-20 transition-opacity duration-700" />
                                <div className="relative z-10">
                                    <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-[#D1F468] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                                        Our Mission
                                    </div>
                                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
                                        Your go to <br />
                                        <span className="text-[#D1F468]">savings app.</span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-white/50 font-light max-w-xl leading-relaxed">
                                        We&apos;re bridging the gap between traditional savings and futuristic wealth management for every Nigerian.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:col-span-4 bg-[#EDF9D6] rounded-[3rem] p-10 flex flex-col justify-between group hover:shadow-xl transition-all duration-500">
                                <div className="space-y-6">
                                    <p className="text-xs font-bold uppercase tracking-widest text-[#3A6B18] opacity-60">Accessibility</p>
                                    <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                        Koinsave is for everyone, regardless of age, status, or location. Our platform is easy to navigate—you don&apos;t need to be a techie to figure things out.
                                    </p>
                                    <div className="space-y-3 pt-2">
                                        {[
                                            "High-security savings tiers",
                                            "USD wealth across borders",
                                            "Local price protection",
                                            "Smart automated rules"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-3 text-[11px] font-bold text-[#3A6B18]">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#3A6B18]" /> {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <StatBento number="2025" label="Years ahead in innovation" sub="Lead the market" />
                            <StatBento number="1,500" label="Monthly active users" sub="Growing community" />
                            <StatBento number="99.9%" label="Success transactions" sub="Bank-grade uptime" />
                        </div>
                    </Reveal>
                </section>

                <section className="pb-16 pt-12 bg-white overflow-hidden">
                    <div className="container mx-auto px-6">
                        <Reveal>
                            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                                <div className="max-w-2xl animate-fade-in-up">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#EDF9D6] text-[#3A6B18] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
                                        Our DNA
                                    </span>
                                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-6">
                                        What we <br />
                                        <span className="text-[#D1F468]">stand for</span>
                                    </h2>
                                    <p className="text-xl text-gray-500 font-light max-w-lg leading-relaxed">
                                        Centering our solutions around people, innovation, and unwavering trust. We build for the long term.
                                    </p>
                                </div>
                                <div className="hidden md:flex flex-col items-end text-right">
                                    <div className="w-16 h-16 rounded-2xl bg-[#051B16] flex items-center justify-center mb-4 transition-transform hover:rotate-12">
                                        <ShieldCheck className="w-8 h-8 text-[#D1F468]" />
                                    </div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Authenticity Matters</p>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 auto-rows-[minmax(250px,auto)] lg:auto-rows-[200px]">

                                {/* Trust - Full width on mobile, large on desktop */}
                                <div className="col-span-1 sm:col-span-2 lg:col-span-8 lg:row-span-2 bg-[#051B16] rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-8 lg:p-14 text-white flex flex-col justify-between group overflow-hidden relative min-h-[300px] lg:min-h-0">
                                    <div className="absolute top-0 right-0 w-48 h-48 lg:w-64 lg:h-64 bg-[#D1F468] opacity-5 rounded-full blur-[60px] lg:blur-[80px] -mr-16 lg:-mr-20 -mt-16 lg:-mt-20 group-hover:opacity-10 transition-opacity duration-700" />
                                    <div className="relative z-10">
                                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 lg:mb-8 border border-white/10 group-hover:scale-110 transition-transform">
                                            <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6 text-[#D1F468]" />
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6">Trust</h3>
                                        <p className="text-base sm:text-lg lg:text-xl text-white/50 font-light leading-relaxed max-w-none lg:max-w-md">
                                            Partnering with regulated institutions to secure your capital with the highest legal standards and technical security.
                                        </p>
                                    </div>
                                    <div className="relative z-10 flex items-center gap-3 lg:gap-4 text-[#D1F468] font-bold text-xs lg:text-sm">
                                        <div className="w-8 lg:w-10 h-px bg-[#D1F468] opacity-30" />
                                        Unwavering Commitment
                                    </div>
                                </div>

                                {/* Innovation */}
                                <div className="col-span-1 sm:col-span-1 lg:col-span-4 lg:row-span-1 bg-[#D1F468] rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-8 lg:p-10 flex flex-col justify-between group hover:shadow-2xl hover:shadow-[#D1F468]/20 transition-all duration-500 min-h-[200px]">
                                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                                        <Lightbulb className="w-4 h-4 lg:w-5 lg:h-5 text-black" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#051B16]">Innovation</h3>
                                        <p className="text-xs sm:text-sm lg:text-base text-[#051B16]/60 font-medium leading-relaxed">Finding creative ways to simplify your savings journey.</p>
                                    </div>
                                </div>

                                {/* Passion */}
                                <div className="col-span-1 sm:col-span-1 lg:col-span-4 lg:row-span-2 bg-[#FAFAFA] border border-gray-100 rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-8 lg:p-10 flex flex-col justify-end relative overflow-hidden group min-h-[300px] lg:min-h-0">
                                    <Compass className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 w-32 h-32 lg:w-48 lg:h-48 text-gray-50 group-hover:text-gray-100 transition-colors duration-700" />
                                    <div className="relative z-10">
                                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 lg:mb-8 border border-gray-50 group-hover:-rotate-6 transition-transform">
                                            <Compass className="w-5 h-5 lg:w-6 lg:h-6 text-[#3A6B18]" />
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4">Passion</h3>
                                        <p className="text-sm sm:text-base text-gray-500 font-light leading-relaxed">
                                            Navigating the unpredictable economy with dedication to your financial stability.
                                        </p>
                                    </div>
                                </div>

                                {/* Accessibility */}
                                <div className="col-span-1 sm:col-span-1 lg:col-span-5 lg:row-span-1 bg-[#1A2F2B] rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-8 lg:p-10 flex items-center gap-4 lg:gap-6 group hover:bg-[#051B16] transition-colors duration-500 min-h-[150px]">
                                    <div className="w-12 h-12 lg:w-14 lg:h-14 shrink-0 rounded-2xl bg-[#D1F468] flex items-center justify-center group-hover:rotate-12 transition-transform">
                                        <Globe className="w-6 h-6 lg:w-7 lg:h-7 text-[#051B16]" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">Accessibility</h3>
                                        <p className="text-xs sm:text-sm text-white/40 font-light uppercase tracking-widest">For every Nigerian</p>
                                    </div>
                                </div>

                                {/* Impact */}
                                <div className="col-span-1 sm:col-span-1 lg:col-span-3 lg:row-span-1 bg-[#EDF9D6] rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-8 lg:p-10 flex flex-col justify-center group min-h-[150px]">
                                    <BarChart3 className="w-6 h-6 lg:w-8 lg:h-8 text-[#3A6B18] mb-3 lg:mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#3A6B18]">Impact</h3>
                                    <p className="text-xs text-[#3A6B18]/60 font-bold uppercase tracking-tighter mt-1">Growth habits that last</p>
                                </div>

                            </div>
                        </Reveal>
                    </div>
                </section >

                <section className="py-16 md:py-24 container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        <Reveal>
                            <div className="lg:sticky lg:top-40 space-y-6 md:space-y-8 animate-fade-in-up">
                                <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-gray-900">The <span className="text-gray-800">Founder</span></h2>
                                <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-md">
                                    KoinSave was founded with a simple belief: that every Nigerian deserves access to stable, secure, and smart saving tools.
                                </p>
                            </div>
                        </Reveal>

                        <div className="space-y-12 md:space-y-16 mt-12 lg:mt-0">
                            <Reveal delay={0.2}>
                                <MemberProfile
                                    name="Ogooluwa Olafusi"
                                    role="Founder and CEO"
                                    image="/founder.png"
                                    quote="Building financial resilience for Nigerians, one Naira at a time."
                                />
                            </Reveal>
                        </div>
                    </div>
                </section >

            </main >

            <Footer />
        </div >
    );
}

function StatBento({ number, label, sub }: { number: string, label: string, sub: string }) {
    return (
        <div className="bg-white border border-gray-100 p-10 rounded-[2.5rem] flex flex-col justify-between hover:border-[#D1F468] hover:shadow-xl hover:shadow-[#D1F468]/10 transition-all duration-500 group">
            <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">{sub}</div>
                <h3 className="text-5xl font-bold text-[#051B16] group-hover:scale-110 transition-transform origin-left duration-500">{number}</h3>
            </div>
            <p className="text-sm font-semibold text-gray-700 mt-8 max-w-37.5 leading-tight">{label}</p>
        </div>
    );
}



function MemberProfile({ name, role, image, quote }: { name: string, role: string, image: string, quote: string }) {
    return (
        <div className="group">
            <div className="aspect-square relative rounded-[3rem] overflow-hidden mb-6 border border-gray-100 group-hover:shadow-2xl transition-all duration-700">
                <Image src={image} alt={name} fill className="object-cover transition-all duration-1000" unoptimized />
            </div>
            <div className="space-y-4">
                <h3 className="text-3xl font-bold">{name}</h3>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#3A6B18]">{role}</p>
                <p className="text-gray-400 italic text-lg font-light leading-relaxed border-l-2 border-[#D1F468]/30 pl-6 mt-6">
                    &quot;{quote}&quot;
                </p>
            </div>
        </div>
    );
}
