"use client";

import Link from "next/link";
import { Dumbbell, MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      
      {/* Top CTA Banner */}
      <div className="border-b border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">
              Ready to start your transformation?
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              Visit One Life Fitness in Chilaw or claim your free day pass today.
            </p>
          </div>
          <Link
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg text-sm font-semibold bg-red-600 hover:bg-red-700 text-white transition-all flex items-center gap-2 shadow-md shadow-red-600/20 shrink-0"
          >
            Claim Free Pass <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Links & Info Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="p-2 rounded-xl bg-red-600 text-white group-hover:scale-105 transition-transform">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="text-lg font-extrabold tracking-tight uppercase">
                ONE LIFE <span className="text-red-600">FITNESS</span>
              </span>
            </Link>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">
              Chilaw's premier high-performance fitness destination. Engineered with world-class bio-mechanical equipment, climate-controlled environments, and elite coaching.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-600 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/trainers" className="hover:text-red-600 transition-colors">Coaches & Trainers</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-red-600 transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-600 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Opening Hours
            </h4>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-200 block">Weekdays</span>
                  5:30 AM – 10:00 PM
                </div>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900 dark:text-neutral-200 block">Weekends</span>
                  6:00 AM – 8:00 PM
                </div>
              </li>
            </ul>
          </div>

          {/* Location & Contact Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Location
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-600 dark:text-neutral-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>One Life Fitness, Chilaw, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <span>+94 7X XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-600 shrink-0" />
                <span>info@onelifefitness.lk</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Rights */}
        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
          <p>© 2026 One Life Fitness Chilaw. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed for Peak Performance
          </p>
        </div>
      </div>
    </footer>
  );
}