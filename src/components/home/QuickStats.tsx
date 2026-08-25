"use client";

import { Saira } from "next/font/google";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const stats = [
  {
    id: 1,
    percentage: 100,
    value: "100%",
    label: "Climate Controlled",
    description: "Full A/C airflow optimization across all training zones.",
  },
  {
    id: 2,
    percentage: 85,
    value: "50+",
    label: "Bio-Mechanic Equipment",
    description: "Targeted strength machinery built for maximum isolation.",
  },
  {
    id: 3,
    percentage: 92,
    value: "1.2k+",
    label: "Active Members",
    description: "Thriving high-performance community in Chilaw.",
  },
  {
    id: 4,
    percentage: 75,
    value: "10+",
    label: "Certified Coaches",
    description: "Results-driven trainers providing specialized protocols.",
  },
];

// Helper to render radial dot progress indicators dynamically
function RadialDots({ percentage }: { percentage: number }) {
  const totalDots = 36;
  const activeDots = Math.round((percentage / 100) * totalDots);

  return (
    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
      {Array.from({ length: totalDots }).map((_, index) => {
        const angle = (index * 360) / totalDots;
        const rad = (angle * Math.PI) / 180;
        const radius = 42;
        const cx = 50 + radius * Math.cos(rad);
        const cy = 50 + radius * Math.sin(rad);
        const isActive = index < activeDots;

        return (
          <circle
            key={index}
            cx={cx}
            cy={cy}
            r="1.75"
            className={`transition-all duration-500 ${
              isActive
                ? "fill-red-600 drop-shadow-[0_0_3px_rgba(220,38,38,0.8)]"
                : "fill-neutral-300 dark:fill-neutral-800"
            }`}
          />
        );
      })}
    </svg>
  );
}

export default function QuickStats() {
  return (
    <section className="py-20 md:py-28 bg-neutral-100 dark:bg-[#050505] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-16 md:mb-20">
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
            <div key={stat.id} className="flex flex-col items-center text-center group">
              
              {/* Outer Circular Container with Radial Dots */}
              <div className="relative w-64 h-64 sm:w-56 sm:h-56 md:w-60 md:h-60 flex items-center justify-center">
                {/* SVG Dotted Ring */}
                <div className="absolute inset-0 p-2">
                  <RadialDots percentage={stat.percentage} />
                </div>

                {/* Inner Dark Circle */}
                <div className="w-[76%] h-[76%] rounded-full bg-white dark:bg-[#0d0d0f] border border-neutral-200 dark:border-neutral-800/80 shadow-md flex flex-col items-center justify-center p-4 transition-transform group-hover:scale-[1.02]">
                  <span className={`${saira.className} text-3xl sm:text-4xl font-medium tracking-tight text-neutral-900 dark:text-white`}>
                    {stat.value}
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