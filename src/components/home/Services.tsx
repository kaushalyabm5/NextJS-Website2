"use client";

import { Saira } from "next/font/google";
import Link from "next/link";
import { ArrowUpRight, Flame, Target, Trophy, Dumbbell } from "lucide-react";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const programs = [
  {
    id: "01",
    title: "Hypertrophy & Strength Engineering",
    tagline: "Muscle Isolation Protocol",
    description: "Biomechanical target training utilizing advanced load curves to maximize hypertrophy while protecting joint integrity.",
    features: ["Custom Split Design", "Progressive Overload Tracking", "Form Analysis"],
    icon: Dumbbell,
    bgImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "High-Intensity Tactical Conditioning",
    tagline: "Fat Loss & Endurance",
    description: "Engineered circuit structures designed to increase metabolic rate, elevate VO2 max, and shed body fat rapidly.",
    features: ["Heart Rate Monitoring", "Functional Movement", "Stamina Building"],
    icon: Flame,
    bgImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "1-on-1 Personalized Coaching",
    tagline: "Dedicated Athlete Management",
    description: "Direct access to master trainers who build, track, and adapt every set, rep, and recovery variable specifically for you.",
    features: ["Biometric Auditing", "Nutrition Strategy", "Weekly Check-Ins"],
    icon: Target,
    bgImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Athletic Performance & Mobility",
    tagline: "Functional Speed & Power",
    description: "Specialized movement mechanics focusing on explosive power, rotational force, and active kinetic recovery.",
    features: ["Plyometric Drills", "Joint Mobility Work", "Agility Optimization"],
    icon: Trophy,
    bgImage: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <section 
      id="programs" 
      className="py-20 md:py-28 bg-neutral-100 dark:bg-[#050505] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 border-t border-neutral-200 dark:border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3 block">
              Training Modules
            </span>
            <h2 className={`${saira.className} text-3xl sm:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white`}>
              Scientific workout protocols.
            </h2>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
            Choose a targeted discipline designed around performance metrics, specialized movement patterns, and measurable results.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className="group relative min-h-[420px] rounded-3xl bg-neutral-900 overflow-hidden border border-neutral-200 dark:border-neutral-800/80 hover:border-red-600/60 transition-all duration-500 flex flex-col justify-between p-8 sm:p-10 shadow-sm"
              >
                {/* Background Image Container with Gradient Overlays */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={program.bgImage}
                    alt={program.title}
                    className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 opacity-25 dark:opacity-20 group-hover:opacity-40 dark:group-hover:opacity-35"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/60 dark:from-[#0d0d0f] dark:via-[#0d0d0f]/95 dark:to-[#0d0d0f]/75" />
                </div>

                {/* Card Top: Index, Badge & Icon */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono font-semibold tracking-wider text-red-600 uppercase">
                      [{program.id}] {program.tagline}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-neutral-200/60 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-900 dark:text-white group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className={`${saira.className} text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white tracking-tight`}>
                    {program.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg">
                    {program.description}
                  </p>
                </div>

                {/* Card Bottom: Features & Action Link */}
                <div className="relative z-10 pt-6 mt-8 border-t border-neutral-300/60 dark:border-neutral-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  
                  {/* Bullet Feature Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    {program.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-neutral-200/80 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300 border border-neutral-300/40 dark:border-neutral-700/40"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Enroll Link */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-white group-hover:text-red-600 transition-colors shrink-0"
                  >
                    <span>Enroll Program</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}