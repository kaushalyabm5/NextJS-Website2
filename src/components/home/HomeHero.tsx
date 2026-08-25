"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
import { Saira } from "next/font/google";

// Import your image directly from src
import heroBg from "@/assets/home-img/homeHero.png";

// Load Saira font specifically for the title
const saira = Saira({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 bg-white dark:bg-black text-neutral-950 dark:text-neutral-50 transition-colors duration-300 min-h-[calc(100vh-80px)] flex items-center justify-center">
      
      {/* Background Image with Crisp Visibility */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg}
          alt="One Life Fitness Hero Background"
          fill
          priority
          className="object-cover object-center opacity-70 dark:opacity-65"
        />
        {/* Soft Vignette Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/30 to-white/80 dark:from-black/70 dark:via-black/40 dark:to-black" />
      </div>

      {/* Crimson Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/15 dark:bg-red-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10 w-full">

        {/* Main Headline with Saira Font */}
        <h1 className={`${saira.className} text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.08] max-w-7xl`}>
          Engineered for <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-700">
            Peak Human Performance.
          </span>
        </h1>

        {/* Subtitle / Description */}
        <p className="mt-5 text-base sm:text-lg md:text-[1rem] text-neutral-600 dark:text-neutral-400 max-w-2xl font-normal leading-relaxed">
          One Life Fitness combines elite bio-mechanical equipment, scientific training methodologies, and a high-performance environment in Chilaw.
        </p>

        {/* Primary CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg text-sm font-semibold bg-red-600 hover:bg-red-700 text-white transition-all shadow-md shadow-red-600/25 flex items-center justify-center gap-2 group"
          >
            Claim Free Day Pass
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="#membership"
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg text-sm font-semibold border border-neutral-900 dark:border-neutral-800 bg-black dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 text-neutral-100 dark:text-neutral-200 transition-all backdrop-blur-md flex items-center justify-center"
          >
            View Membership Plans
          </Link>
        </div>

        {/* Minimal Feature Bar */}
        <div className="mt-14 pt-6 border-t border-neutral-200 dark:border-neutral-800/60 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="p-4 rounded-xl border border-neutral-200/60 dark:border-neutral-800/40 bg-neutral-50/50 dark:bg-neutral-900/20 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider">
              <Shield className="w-4 h-4 text-red-600" /> Bio-Mechanic Focus
            </div>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">Precision machinery built for maximum muscle activation.</p>
          </div>

          <div className="p-4 rounded-xl border border-neutral-200/60 dark:border-neutral-800/40 bg-neutral-50/50 dark:bg-neutral-900/20 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider">
              <Shield className="w-4 h-4 text-red-600" /> Climate Controlled
            </div>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">Continuous 100% A/C airflow optimization across all zones.</p>
          </div>

          <div className="p-4 rounded-xl border border-neutral-200/60 dark:border-neutral-800/40 bg-neutral-50/50 dark:bg-neutral-900/20 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wider">
              <Shield className="w-4 h-4 text-red-600" /> Expert Protocol
            </div>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">Certified personal coaches focused on measurable results.</p>
          </div>
        </div>

      </div>
    </section>
  );
}