"use client";

import { useRef } from "react";
import { Saira } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const stats = [
  {
    id: 1,
    percentage: 100,
    numericTarget: 100,
    prefix: "",
    suffix: "%",
    label: "Climate Controlled",
    description: "Full A/C airflow optimization across all training zones.",
  },
  {
    id: 2,
    percentage: 85,
    numericTarget: 50,
    prefix: "",
    suffix: "+",
    label: "Bio-Mechanic Equipment",
    description: "Targeted strength machinery built for maximum isolation.",
  },
  {
    id: 3,
    percentage: 92,
    numericTarget: 1.2,
    prefix: "",
    suffix: "k+",
    isDecimal: true,
    label: "Active Members",
    description: "Thriving high-performance community in Chilaw.",
  },
  {
    id: 4,
    percentage: 75,
    numericTarget: 10,
    prefix: "",
    suffix: "+",
    label: "Certified Coaches",
    description: "Results-driven trainers providing specialized protocols.",
  },
];

const TOTAL_DOTS = 36;

function RadialDots({ statId, percentage }: { statId: number; percentage: number }) {
  const activeDots = Math.round((percentage / 100) * TOTAL_DOTS);

  return (
    <svg className="w-full h-full -rotate-90 overflow-visible" viewBox="0 0 100 100">
      <style>{`
        .red-glow-dot {
          fill: #ff0000 !important;
          opacity: 1 !important;
          filter: drop-shadow(0 0 2px #ff0000) drop-shadow(0 0 6px #dc2626);
          will-change: fill, opacity, filter;
        }
      `}</style>
      {Array.from({ length: TOTAL_DOTS }).map((_, index) => {
        const angle = (index * 360) / TOTAL_DOTS;
        const rad = (angle * Math.PI) / 180;
        const radius = 42;

        const cx = Number((50 + radius * Math.cos(rad)).toFixed(4));
        const cy = Number((50 + radius * Math.sin(rad)).toFixed(4));
        const isTargetActive = index < activeDots;

        return (
          <circle
            key={index}
            cx={cx}
            cy={cy}
            r="2"
            data-stat={statId}
            data-active={isTargetActive ? "true" : "false"}
            className="stat-dot transition-all duration-150 fill-neutral-300 dark:fill-neutral-800 opacity-30"
          />
        );
      })}
    </svg>
  );
}

export default function QuickStats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Header entrance animation
      gsap.from(".stats-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Animate Stats
      stats.forEach((stat) => {
        const cardSelector = `.stat-card-${stat.id}`;
        const numberEl = containerRef.current?.querySelector(`.stat-val-${stat.id}`);
        const dots = containerRef.current?.querySelectorAll<SVGCircleElement>(
          `circle[data-stat="${stat.id}"]`
        );

        if (!dots || !dots.length) return;

        const activeDotsCount = Math.round((stat.percentage / 100) * TOTAL_DOTS);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardSelector,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // 1. Fade Card Container
        tl.from(cardSelector, {
          y: 40,
          opacity: 0,
          scale: 0.95,
          duration: 0.6,
          ease: "power2.out",
        });

        // 2. Ultra-Smooth Red Bulb Animation
        const dotTracker = { count: 0 };
        tl.to(
          dotTracker,
          {
            count: activeDotsCount,
            duration: 1.2,
            ease: "power1.inOut",
            onUpdate: () => {
              const currentLimit = Math.floor(dotTracker.count);

              dots.forEach((dot, idx) => {
                const isTargetActive = dot.getAttribute("data-active") === "true";
                const shouldBeLit = idx < currentLimit && isTargetActive;

                if (shouldBeLit) {
                  if (!dot.classList.contains("red-glow-dot")) {
                    dot.classList.add("red-glow-dot");
                  }
                } else {
                  if (dot.classList.contains("red-glow-dot")) {
                    dot.classList.remove("red-glow-dot");
                  }
                }
              });
            },
          },
          "-=0.4"
        );

        // 3. Counter Number Animation
        if (numberEl) {
          const counterObj = { val: 0 };
          tl.to(
            counterObj,
            {
              val: stat.numericTarget,
              duration: 1.2,
              ease: "power2.out",
              onUpdate: () => {
                const formatted = stat.isDecimal
                  ? counterObj.val.toFixed(1)
                  : Math.round(counterObj.val).toString();
                numberEl.textContent = `${stat.prefix}${formatted}${stat.suffix}`;
              },
            },
            "-=1.2"
          );
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section 
      ref={containerRef} 
      className="py-20 md:py-28 bg-neutral-100 dark:bg-[#050505] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="stats-header mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2 block">
            Metrics & Capacity
          </span>
          <h2 className={`${saira.className} text-3xl sm:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white`}>
            Gym Overview
          </h2>
        </div>

        {/* Circular Radial Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 justify-items-center">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className={`stat-card-${stat.id} flex flex-col items-center text-center group`}
            >
              
              {/* Outer Circular Container with Radial Dots */}
              <div className="relative w-64 h-64 sm:w-56 sm:h-56 md:w-60 md:h-60 flex items-center justify-center">
                
                {/* SVG Dotted Ring */}
                <div className="absolute inset-0 p-2">
                  <RadialDots statId={stat.id} percentage={stat.percentage} />
                </div>

                {/* Inner Circle */}
                <div className="w-[76%] h-[76%] rounded-full bg-white dark:bg-[#0d0d0f] border border-neutral-200 dark:border-neutral-800/80 shadow-md flex flex-col items-center justify-center p-4 transition-transform group-hover:scale-[1.03] duration-300">
                  <span className={`stat-val-${stat.id} ${saira.className} text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white`}>
                    0
                  </span>
                  <span className="mt-1 text-[11px] font-medium text-neutral-500 dark:text-neutral-400 max-w-[120px] leading-tight">
                    {stat.label}
                  </span>
                </div>
              </div>

              {/* Bottom Description */}
              <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-500 max-w-[200px] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}