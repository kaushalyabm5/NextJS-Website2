"use client";

import { Saira } from "next/font/google";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const testimonials = [
  {
    id: "01",
    name: "Dr. Anura Bandara",
    role: "Medical Specialist & Athlete",
    comment: "The precision of the biomechanical muscle isolators is unlike any other facility in the region. Zero unnecessary strain on joints while maintaining high intensity.",
    rating: 5,
    verified: true,
  },
  {
    id: "02",
    name: "Sajith Alwis",
    role: "Tech Entrepreneur",
    comment: "Continuous 100% climate control makes mid-day training effortless even in peak humidity. The environment is engineered for high focus.",
    rating: 5,
    verified: true,
  },
  {
    id: "03",
    name: "Tharindu Wickramasinghe",
    role: "Competitive Powerlifter",
    comment: "Having direct access to structured progressive overload coaching helped me add 40kg to my compound totals in just under four months.",
    rating: 5,
    verified: true,
  },
  {
    id: "04",
    name: "Nirmal Jayasuriya",
    role: "Corporate Executive",
    comment: "The private keyless locker rooms and pristine shower facilities allow me to train early morning and head straight into client meetings.",
    rating: 5,
    verified: true,
  },
  {
    id: "05",
    name: "Mahesh Gunasekara",
    role: "HIIT Athlete",
    comment: "The functional turf zone and dedicated assault bikes set a new standard for tactical conditioning. Absolutely unmatched caliber.",
    rating: 5,
    verified: true,
  },
  {
    id: "06",
    name: "Charith Cooray",
    role: "Physiotherapist",
    comment: "I recommend One Life Fitness Chilaw to patients recovering from sports injuries. The equipment bio-mechanics ensure controlled targeting.",
    rating: 5,
    verified: true,
  },
];

export default function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="py-20 md:py-28 bg-neutral-100 dark:bg-[#050505] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 border-t border-neutral-200 dark:border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3 block">
              Member Validation
            </span>
            <h2 className={`${saira.className} text-3xl sm:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white`}>
              Verified experience.
            </h2>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
            Direct feedback from athletes, professionals, and members training inside our high-performance facility.
          </p>
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl bg-white dark:bg-[#0d0d0f] p-8 border border-neutral-200 dark:border-neutral-800/80 hover:border-red-600/60 transition-all duration-500 flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Header Row: Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-red-600">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-300 dark:text-neutral-800 group-hover:text-red-600/40 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-6 mt-8 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between">
                <div>
                  <h3 className={`${saira.className} text-sm font-semibold text-neutral-900 dark:text-white`}>
                    {item.name}
                  </h3>
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-500 block">
                    {item.role}
                  </span>
                </div>

                {item.verified && (
                  <div className="flex items-center gap-1 text-[10px] font-mono font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800/60 px-2 py-1 rounded-md border border-neutral-200/50 dark:border-neutral-700/50">
                    <CheckCircle2 className="w-3 h-3 text-red-600" />
                    <span>Verified</span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}