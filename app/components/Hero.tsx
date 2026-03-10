"use client";

import Image from 'next/image';
import Link from 'next/link';
import {
  RefreshCcw,
  ArrowRight,
} from 'lucide-react';
import Navbar from './Navbar';
import { Reveal } from './Reveal';

const Hero = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#111111] overflow-hidden relative selection:bg-[#D1F468] selection:text-black">

      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f5f5f5 1px, transparent 1px),
            linear-gradient(to bottom, #f5f5f5 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
        }}
      />

      <Navbar />

      <div className="relative z-10 pt-32 pb-12 container mx-auto px-4 flex flex-col items-center">
        <Reveal width="100%" className="flex flex-col items-center">



          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center leading-[1.1] mb-6 text-[#0A0A0A] max-w-6xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            The Smartest Way to Save & <br className="hidden md:block" />
            Bank with
            <span className="inline-flex items-center justify-center ml-3 align-middle -translate-y-1">
             <Image
  src="/logo-black.png"
  alt="KoinSave Icon"
  width={128}
  height={128}
  className="h-10 sm:h-14 md:h-16 w-auto object-contain"
  priority
/>
            </span>
          </h1>

          <p className="text-gray-600 text-center text-lg md:text-xl max-w-3xl mb-10 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Join thousands of People using KoinSave to automate their savings, pay bills & make international payments.
          </p>

           <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
             <a href="https://apps.apple.com/ca/app/koinsave/id6748754614" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#051B16] text-white px-7 py-3 rounded-full hover:bg-[#051B16]/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#051B16]/20 ring-1 ring-white/10">
               <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
               <div className="flex flex-col items-start leading-none gap-1">
                 <span className="text-[10px] font-medium opacity-80 uppercase tracking-wide">Download on the</span>
                 <span className="text-base font-bold">App Store</span>
               </div>
             </a>

             <Link href="/waitlist" className="flex items-center gap-3 bg-[#D1F468] text-[#051B16] px-7 py-3 rounded-full hover:bg-[#D1F468]/90 transition-all hover:scale-105 active:scale-95 shadow-xl border border-white">
               <ArrowRight className="w-5 h-5" />
               <span className="text-base font-bold">Join Android Waitlist</span>
             </Link>
           </div>


          <div className="relative w-full max-w-6xl mx-auto h-100 sm:h-125 md:h-162.5 flex justify-center items-center -mt-12 md:-mt-20 group perspective-1000">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 sm:w-125 sm:h-125 bg-[#D1F468] rounded-full blur-[100px] opacity-20 animate-pulse-slow" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 sm:w-125 sm:h-150 border border-[#051B16]/5 rounded-full animate-[spin_40s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-62.5 h-62.5 sm:w-125 sm:h-125 border border-[#D1F468]/30 rounded-full border-dashed animate-[spin_30s_linear_infinite_reverse]" />

            <div className="relative z-10 w-70 sm:w-100 md:w-150 transition-all duration-700 ease-out transform -rotate-15 hover:rotate-0 hover:scale-105 hover:-translate-y-2">
              <Image
                src="/card.png"
                alt="KoinSave Card"
                width={800}
                height={500}
                priority
                className="object-contain drop-shadow-2xl"
              />
            </div>

            <div className="absolute top-[20%] left-4 sm:top-[30%] sm:left-10 lg:left-20 z-20 animate-bounce-slower delay-300 scale-90 sm:scale-100">
              <div className="bg-[#D1F468] p-3 rounded-full shadow-xl border border-white hover:scale-110 transition-transform cursor-default">
                <div className="w-8 h-8 flex items-center justify-center text-[#051B16]">
                  <RefreshCcw className="w-5 h-5 animate-spin-slow" />
                </div>
              </div>
            </div>

            <div className="absolute top-[15%] right-4 sm:top-[20%] sm:right-20 lg:right-32 z-20 animate-bounce-slower delay-300 scale-90 sm:scale-100">
              <div className="bg-[#D1F468] p-3 rounded-full shadow-xl border border-white hover:scale-110 transition-transform cursor-default">
                <div className="w-8 h-8 flex items-center justify-center text-[#051B16]">
                  <RefreshCcw className="w-5 h-5 animate-spin-slow" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-[15%] right-4 sm:bottom-[20%] sm:right-10 lg:right-24 z-20 animate-bounce-slow delay-500 scale-90 sm:scale-100">
              <div className="bg-[#D1F468] p-3 rounded-full shadow-xl border border-white hover:scale-110 transition-transform cursor-default">
                <div className="w-8 h-8 flex items-center justify-center text-[#051B16]">
                  <RefreshCcw className="w-5 h-5 animate-spin-slow" />
                </div>
              </div>
            </div>

          </div>

          <div className="w-full h-8 bg-linear-to-t from-[#EDF9D6] to-transparent opacity-50 -mt-4 mb-2 rounded-b-full blur-xl" />

          <div className="w-full flex flex-col items-center gap-8 -mt-10 relative z-30">
            <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">Our brand partner (licensed by CBN)</p>
            <div className="flex justify-center opacity-80 transition-all duration-500">
              <Image
                src="/brand1.png"
                alt="Partner Brand"
                width={120}
                height={60}
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

        </Reveal>
      </div>

      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-slower {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-bounce-slower {
          animation: bounce-slower 5s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Hero;