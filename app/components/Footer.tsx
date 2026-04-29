import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#051B16] text-white py-16 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

                    <div className="lg:col-span-5 space-y-8">
                        <Reveal>
                            {/* <Image
                                src="/logo-white.png"
                                alt="KoinSave Logo"
                                width={160}
                                height={50}
                                className="h-10 w-auto object-contain mb-8"
                            /> */}
                            <h2 className="text-3xl md:text-4xl font-semibold leading-tight max-w-sm">
                                The future of saving <span className="text-[#D1F468]">starts right here.</span>
                            </h2>



                            <div className="flex gap-4 mt-6">
                                <SocialIcon Icon={XIcon} href="https://x.com/koinsave" />
                                <SocialIcon Icon={TikTokIcon} href="https://www.tiktok.com/@koinsave" />
                                <SocialIcon Icon={Instagram} href="https://www.instagram.com/koinsave.co" />
                                <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/company/koinsave/" />
                            </div>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-7 flex flex-col justify-end">
                        <Reveal delay={0.2}>
                            <p className="text-2xl md:text-4xl font-light text-gray-400 leading-[1.2] mb-12 max-w-2xl">
                                We&apos;re more than an app. We&apos;re a <span className="text-white font-semibold">financial sanctuary</span> built to shield your hard-earned wealth from the tides of inflation.
                            </p>

                            <div className="flex flex-wrap gap-6">
                                <a href="/about" className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold hover:bg-[#D1F468] hover:text-[#051B16] transition-all duration-300 flex items-center gap-3 group">
                                    Our Story
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a href="/contact" className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold hover:bg-[#D1F468] hover:text-[#051B16] transition-all duration-300 flex items-center gap-3 group">
                                    Support Desk
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-white/5">
                    <ContactInfo
                        icon={<Mail className="w-5 h-5 text-[#D1F468]" />}
                        label="Email us"
                        value="support@koinsave.co"
                    />
                    {/* TODO: Replace with confirmed phone number from product team */}
                    <ContactInfo
                        icon={<Phone className="w-5 h-5 text-[#D1F468]" />}
                        label="Call us"
                        value="+234 XXX XXXX XXXX"
                    />
                    <ContactInfo
                        icon={<MapPin className="w-5 h-5 text-[#D1F468]" />}
                        label="Office"
                        value="20 Oyinbogbola Street, Alimosho, Lagos, Nigeria"
                    />
                </div>

                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-xs text-gray-500 font-medium">
                        © {new Date().getFullYear()} KoinSave. Designed for the bold.
                    </div>

                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-sm text-white hover:text-[#D1F468] transition-colors font-medium">Privacy</Link>
                        <Link href="/terms" className="text-sm text-white hover:text-[#D1F468] transition-colors font-medium">Terms</Link>
                        <a href="#" className="text-sm text-gray-500 hover:text-[#D1F468] transition-colors">Cookies</a>
                    </div>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.03] leading-none translate-y-[30%] z-0">
                    <h2 className="text-[20vw] font-black tracking-tighter">
                        KOINSAVE
                    </h2>
                </div>

            </div>
        </footer>
    );
};


const SocialIcon = ({ Icon, href }: { Icon: React.ComponentType<{className?: string}>, href: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-[#D1F468] hover:text-[#051B16] transition-all duration-300 group">
        <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
    </a>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
    </svg>
);

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a8.73 8.73 0 0 1-3.18-3.02c-.01 1.05-.01 2.1-.01 3.14 0 1.95.03 3.91-.02 5.86-.05 1.53-.4 3.09-1.32 4.34-1.12 1.62-2.92 2.66-4.87 2.92-2 .32-4.17-.11-5.75-1.42a6.97 6.97 0 0 1-2.43-5.07c.04-1.92.74-3.83 2.05-5.23 1.34-1.48 3.32-2.33 5.31-2.28v4.05c-1.21-.14-2.5.15-3.41.97-.83.74-1.29 1.83-1.26 2.93.01 1.13.5 2.25 1.36 2.98.92.78 2.18.98 3.35.7 1.29-.29 2.37-1.33 2.62-2.61.1-.38.12-.76.12-1.15V.02z" />
    </svg>
);

const ContactInfo = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
            {icon}
        </div>
        <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-0.5">{label}</p>
            <p className="text-sm font-semibold text-white">{value}</p>
        </div>
    </div>
);

export default Footer;
