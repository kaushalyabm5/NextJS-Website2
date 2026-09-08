"use client";

import { useRef } from "react";
import { Saira } from "next/font/google";
import { 
  Dumbbell, 
  Wind, 
  UserCheck, 
  Zap, 
  ShieldCheck, 
  Clock, 
  ShowerHead, 
  Activity 
} from "lucide-react";
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

const amenities = [
  {
    id: "01",
    title: "Bio-Mechanic Muscle Isolators",
    description: "World-class strength equipment engineered to optimize load distribution and target precise muscle groups.",
    icon: Dumbbell,
    bgImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Continuous 100% Climate Control",
    description: "Industrial-grade HVAC systems maintaining optimal temperature and active oxygen circulation across all floors.",
    icon: Wind,
    bgImage: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Elite Certified Personal Coaches",
    description: "One-on-one tailored periodization programs designed around your body composition and athletic goals.",
    icon: UserCheck,
    bgImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Dedicated Functional & HIIT Zone",
    description: "Specialized turf area equipped for kettlebell tracks, plyometrics, agility training, and explosive conditioning.",
    icon: Zap,
    bgImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "Heavy Cardio Suite",
    description: "High-end treadmills, stairmasters, and assault bikes integrated with real-time biometric tracking monitors.",
    icon: Activity,
    bgImage: "https://images.unsplash.com/photo-1576678927484-cc909d519691?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "06",
    title: "Extended Performance Hours",
    description: "Flexible operational schedules from early morning to late night built around busy professional lifestyles.",
    icon: Clock,
    bgImage: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "07",
    title: "Private Showers & Locker Rooms",
    description: "Pristine, secure individual changing facilities and keyless electronic locker systems for absolute peace of mind.",
    icon: ShowerHead,
    bgImage: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "08",
    title: "Sanitized Equipment Protocols",
    description: "Strict hourly hygiene enforcement and medical-grade sanitization across every bench, bar, and handle.",
    icon: ShieldCheck,
    bgImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Amenities() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!targetRef.current || !trackRef.current) return;

      const track = trackRef.current;
      
      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        return -(trackWidth - window.innerWidth + 64);
      };

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none", // Direct 1:1 scroll link
        scrollTrigger: {
          trigger: targetRef.current,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: true, // Direct tracking without inertia/smooth lag
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.kill();
      };
    },
    { scope: targetRef }
  );

  return (
    <section 
      ref={targetRef}
      id="amenities" 
      className="relative h-screen w-full bg-neutral-100 dark:bg-[#050505] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 overflow-hidden flex flex-col justify-center border-t border-neutral-200 dark:border-neutral-900"
    >
      {/* Section Header */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 mb-8 shrink-0">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2 block">
            Facility Architecture
          </span>
          <h2 className={`${saira.className} text-2xl sm:text-4xl font-medium tracking-tight text-neutral-900 dark:text-white`}>
            Engineered for uncompromised workouts.
          </h2>
        </div>
      </div>

      {/* Horizontal Cards Track */}
      <div className="w-full overflow-hidden">
        <div 
          ref={trackRef} 
          className="flex gap-6 px-4 sm:px-6 lg:px-8 w-max will-change-transform"
        >
          {amenities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative w-[300px] sm:w-[350px] h-[400px] shrink-0 rounded-2xl bg-neutral-950 overflow-hidden border border-neutral-300 dark:border-neutral-800 hover:border-red-600/80 transition-all duration-300 flex flex-col justify-between p-7 shadow-lg"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                  <img
                    src={item.bgImage}
                    alt={item.title}
                    className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-500 opacity-50 dark:opacity-40 group-hover:opacity-75 dark:group-hover:opacity-60"
                  />
                  {/* Enhanced Contrast Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/30" />
                </div>

                {/* Card Top Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-neutral-300 bg-neutral-900/80 px-2.5 py-1 rounded-full border border-neutral-700/60 backdrop-blur-md">
                    {item.id}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-neutral-900/80 border border-neutral-700/80 backdrop-blur-md flex items-center justify-center text-neutral-100 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="relative z-10 mt-auto">
                  <h3 className={`${saira.className} text-xl font-bold text-white tracking-tight drop-shadow-sm`}>
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-neutral-300 leading-relaxed font-normal drop-shadow-sm">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="relative z-10 mt-5 pt-3.5 border-t border-neutral-700/50 flex items-center gap-1 text-[11px] font-medium text-neutral-400 group-hover:text-red-500 transition-colors duration-300">
                  <span>Standard Equipment</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-current ml-auto" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}