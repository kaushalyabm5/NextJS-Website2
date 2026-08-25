"use client";

import { Saira } from "next/font/google";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Zap, PhoneCall } from "lucide-react";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function CallToAction() {
  return (
    <section 
      id="cta" 
      className="py-20 md:py-28 bg-neutral-100 dark:bg-[#050505] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 border-t border-neutral-200 dark:border-neutral-900 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card Frame */}
        <div className="relative rounded-3xl bg-neutral-900 dark:bg-[#0d0d0f] border border-neutral-800 p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl">
          
          {/* Accent Glow Backdrops */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading & Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-600/10 border border-red-600/30 text-red-500 text-[11px] font-mono font-semibold uppercase tracking-wider mb-6">
                <Zap className="w-3.5 h-3.5 text-red-600" />
                <span>Begin Your Protocol</span>
              </div>

              <h2 className={`${saira.className} text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]`}>
                Ready to elevate your baseline performance?
              </h2>

              <p className="mt-6 text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
                Join One Life Fitness Chilaw today. Experience elite biomechanical gear, climate-controlled environments, and customized coaching plans tailored to your exact physique goals.
              </p>

              {/* Value Micro-Points */}
              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-neutral-300 font-mono">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-600" />
                  <span>No Lock-In Contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-600" />
                  <span>100% Climate Control</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-600" />
                  <span>Free Initial Audit</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Action Buttons */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col justify-end gap-4">
              
              {/* Primary Membership CTA */}
              <Link
                href="/register"
                className="w-full py-4 px-8 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-red-600/20 group"
              >
                <span>Claim Membership Pass</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              {/* Secondary Direct Phone/Consult CTA */}
              <a
                href="tel:+94770000000"
                className="w-full py-4 px-8 rounded-2xl bg-neutral-800/80 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-3 hover:text-white"
              >
                <PhoneCall className="w-4 h-4 text-red-500" />
                <span>Book Facility Tour</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}