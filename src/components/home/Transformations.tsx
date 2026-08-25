"use client";

import { useState } from "react";
import { Saira } from "next/font/google";
import { TrendingUp, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const transformations = [
  {
    id: "01",
    name: "Kasun Perera",
    program: "12-Week Hypertrophy Protocol",
    duration: "3 Months",
    stat1: { label: "Lean Muscle", value: "+4.8 kg" },
    stat2: { label: "Body Fat", value: "-8.2%" },
    quote: "The bio-mechanical gear makes a massive difference in muscle isolation. Peak intensity without joint stress.",
    beforeImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "02",
    name: "Dilshan Fernando",
    program: "Tactical Conditioning & Shred",
    duration: "16 Weeks",
    stat1: { label: "Weight Shed", value: "-14.0 kg" },
    stat2: { label: "VO2 Max", value: "+22%" },
    quote: "Structured coaching and the climate-controlled floor kept my energy high even during peak Sri Lankan humidity.",
    beforeImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "03",
    name: "Shenal De Silva",
    program: "Powerlifting & Strength Architecture",
    duration: "6 Months",
    stat1: { label: "Deadlift Max", value: "+45 kg" },
    stat2: { label: "Squat Max", value: "+35 kg" },
    quote: "The target calibration on these isolators allowed me to break my strength plateaus safely.",
    beforeImg: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "04",
    name: "Nipuna Jayasinghe",
    program: "Body Composition Recomposition",
    duration: "20 Weeks",
    stat1: { label: "Waist Size", value: "-4.5 in" },
    stat2: { label: "Lean Mass", value: "+3.2 kg" },
    quote: "Combining scientific progressive overload with custom nutrition gave me lifetime structural results.",
    beforeImg: "https://images.unsplash.com/photo-1576678927484-cc909d519691?q=80&w=800&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.96,
    transition: {
      duration: 0.35,
      ease: [0.7, 0, 0.84, 0],
    },
  }),
};

export default function Transformations() {
  const [[page, direction], setPage] = useState([0, 0]);

  const currentIndex = Math.abs(page % transformations.length);
  const currentItem = transformations[currentIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <section 
      id="transformations" 
      className="py-20 md:py-28 bg-neutral-100 dark:bg-[#050505] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 border-t border-neutral-200 dark:border-neutral-900 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3 block">
            Proven Outcomes
          </span>
          <h2 className={`${saira.className} text-3xl sm:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white`}>
            Member transformations.
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Real biometric progression engineered through personalized coaching, targeted nutrition, and structured output.
          </p>
        </div>

        {/* Carousel Outer Container with Floating Side Navigation */}
        <div className="relative flex items-center justify-center">

          {/* Left Arrow Button */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous Transformation"
            className="absolute -left-4 sm:-left-12 md:-left-16 z-20 w-12 h-12 rounded-2xl bg-white/90 dark:bg-[#0d0d0f]/90 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white hover:border-red-600 hover:text-red-600 dark:hover:border-red-600 dark:hover:text-red-600 transition-all duration-300 backdrop-blur-md shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => paginate(1)}
            aria-label="Next Transformation"
            className="absolute -right-4 sm:-right-12 md:-right-16 z-20 w-12 h-12 rounded-2xl bg-white/90 dark:bg-[#0d0d0f]/90 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white hover:border-red-600 hover:text-red-600 dark:hover:border-red-600 dark:hover:text-red-600 transition-all duration-300 backdrop-blur-md shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Single Card Screen Display with Animated Transitions */}
          <div className="w-full relative min-h-[540px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full rounded-3xl bg-white dark:bg-[#0d0d0f] border border-neutral-200 dark:border-neutral-800/80 p-6 sm:p-10 shadow-xl"
              >
                {/* Top Meta Info */}
                <div className="flex items-center justify-between pb-6 border-b border-neutral-100 dark:border-neutral-800/60">
                  <div>
                    <h3 className={`${saira.className} text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white`}>
                      {currentItem.name}
                    </h3>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mt-0.5 block">
                      {currentItem.program} • {currentItem.duration}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-red-600/10 text-red-600 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                {/* Before / After Visual Container */}
                <div className="grid grid-cols-2 gap-4 my-6">
                  {/* Before Image */}
                  <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                    <img
                      src={currentItem.beforeImg}
                      alt={`${currentItem.name} Before`}
                      className="w-full h-full object-cover grayscale opacity-75"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/70 text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-300 backdrop-blur-sm">
                      Phase 01 / Before
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                    <img
                      src={currentItem.afterImg}
                      alt={`${currentItem.name} After`}
                      className="w-full h-full object-cover opacity-95"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-red-600/90 text-[10px] font-mono font-semibold uppercase tracking-wider text-white backdrop-blur-sm shadow-sm">
                      Phase 02 / Result
                    </div>
                  </div>
                </div>

                {/* Metrics Bar */}
                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-[#121215] border border-neutral-200/60 dark:border-neutral-800/60 mb-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-500 uppercase block">
                        {currentItem.stat1.label}
                      </span>
                      <span className={`${saira.className} text-base sm:text-lg font-bold text-neutral-900 dark:text-white`}>
                        {currentItem.stat1.value}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 border-l border-neutral-200 dark:border-neutral-800 pl-4">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-500 uppercase block">
                        {currentItem.stat2.label}
                      </span>
                      <span className={`${saira.className} text-base sm:text-lg font-bold text-neutral-900 dark:text-white`}>
                        {currentItem.stat2.value}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Member Quote */}
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 italic leading-relaxed text-center">
                  "{currentItem.quote}"
                </p>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {transformations.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage([idx, idx > currentIndex ? 1 : -1])}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-red-600"
                  : "w-2 bg-neutral-300 dark:bg-neutral-800 hover:bg-neutral-400 dark:hover:bg-neutral-700"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}