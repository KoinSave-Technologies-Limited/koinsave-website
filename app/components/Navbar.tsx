"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-[#051B16]/5 transition-all duration-300">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <Image
                            src="/logo-black.png"
                            alt="KoinSave"
                            width={100}
                            height={32}
                            className="h-6 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-all relative group ${isActive ? 'text-[#051B16] font-semibold' : 'text-[#051B16]/60 hover:text-[#051B16]'
                                    }`}
                            >
                                {item.name}
                                <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D1F468] rounded-full transition-all
                                    ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100'}`}
                                />
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden md:block">
                    <Link href="https://apps.apple.com/ca/app/koinsave/id6748754614" className="bg-[#051B16] text-white px-6 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-[#051B16]/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#051B16]/10">
                        Download App
                        <ArrowRight className="w-3.5 h-3.5 mb-0.5" />
                    </Link>
                </div>

                <button
                    className="md:hidden p-2 text-[#051B16]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 overflow-hidden shadow-xl"
                    >
                        <div className="p-6 flex flex-col gap-6">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`text-lg font-medium transition-colors ${isActive ? 'text-[#051B16] font-bold' : 'text-[#051B16]/60'}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                            <Link href="/waitlist" className="bg-[#051B16] text-white px-6 py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#051B16]/90 w-full" onClick={() => setIsOpen(false)}>
                                Join Waitlist
                                <ArrowRight className="w-4 h-4 mb-0.5" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
