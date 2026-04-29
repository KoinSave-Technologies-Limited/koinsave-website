"use client";

import React from 'react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

import { Reveal } from './Reveal';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Tunde A.",
            // role: "Teacher",
            location: "Lagos",
            avatar: "/avatar-2.png",
            rating: 5,
            text: "KoinSave makes sending money and paying my bills very easy. The app is fast, clean, and I didn't need help figuring it out.",
            // highlight: "Joined Waitlist"
        },
        {
            name: "Aisha M.",
            // role: "Small Business Owner",
            location: "Abuja",
            avatar: "/avatar-1.png",
            rating: 5,
            text: "I've used KoinSave for bill payments a few times now and it just works. No stress, no delays. I like how straightforward everything is.",
            // highlight: "Early Access Member"
        },
        {
            name: "Samuel O.",
            // role: "Nurse",
            location: "Ibadan",
            avatar: "/avatar-3.png",
            rating: 5,
            text: "What I like about KoinSave is the simplicity. I can make transactions and settle my bills without jumping through hoops.",
            // highlight: "Security Advocate"
        }
    ];

    const stats = [
        { value: "1,500+", label: "Active Users" },
        { value: "5.0/5", label: "Community Rating" },
        { value: "99.9%", label: "Uptime Guarantee" }
    ];

    return (
        <section className="py-16 bg-linear-to-b from-[#FAFAFA] to-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-150 h-150 bg-[#D1F468]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <Reveal>
                    <div className="max-w-3xl mx-auto text-center mb-20 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF9D6] text-[#3A6B18] text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-[#D1F468]/50">
                            Testimonials
                        </div>
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-gray-900">
                            Trusted by <span className="text-gray-800 italic font-light">our growing</span> community.
                        </h2>
                        <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                            Don&apos;t just take our word for it. Here&apos;s what our users have to say about their experience with KoinSave.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div
                                className="group bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#D1F468] hover:shadow-2xl hover:shadow-[#D1F468]/10 transition-all duration-500 animate-fade-in-up relative h-full"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#D1F468] rounded-full flex items-center justify-center shadow-lg">
                                    <Quote className="w-6 h-6 text-[#051B16]" />
                                </div>

                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[#D1F468] text-[#D1F468]" />
                                    ))}
                                </div>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                                    &quot;{testimonial.text}&quot;
                                </p>

                                {/* <div className="inline-block bg-[#EDF9D6] text-[#3A6B18] px-3 py-1 rounded-full text-xs font-bold mb-6">
                                    {testimonial.highlight}
                                </div> */}

                                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 relative">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            fill
                                            sizes="48px"
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold text-[#051B16] text-sm">{testimonial.name}</div>
                                        <div className="text-xs text-gray-400">{testimonial.location}</div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.2}>
                    <div className="bg-linear-to-br from-[#051B16] to-[#0a2e24] rounded-[3rem] p-12 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-100 h-100 bg-[#D1F468]/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10">
                            <div className="text-center mb-12">
                                <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                                    Trusted by the community
                                </h3>
                                <p className="text-white/70 font-light">
                                    Join our growing community building their financial future
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                                {stats.map((stat, index) => (
                                    <div
                                        key={index}
                                        className="text-center animate-fade-in-up"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="text-4xl md:text-5xl font-bold text-[#D1F468] mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-white/60 text-sm uppercase tracking-wider font-bold">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section >
    );
};

export default Testimonials;
