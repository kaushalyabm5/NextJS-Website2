"use client";

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
  return (
    <section 
      id="amenities" 
      className="py-20 md:py-28 bg-neutral-100 dark:bg-[#050505] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 border-t border-neutral-200 dark:border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3 block">
            Facility Architecture
          </span>
          <h2 className={`${saira.className} text-3xl sm:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white`}>
            Engineered for uncompromised workouts.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            Every square foot of One Life Fitness Chilaw is purposefully built to support maximum athletic performance and seamless recovery.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative h-[360px] rounded-3xl bg-neutral-900 overflow-hidden border border-neutral-200 dark:border-neutral-800/80 hover:border-red-600/60 transition-all duration-500 flex flex-col justify-between p-7 shadow-sm"
              >
                {/* Background Image Container using standard img tag to bypass Next.js hostname checks */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.bgImage}
                    alt={item.title}
                    className="w-full h-full object-cover object-center scale-100 group-hover:scale-110 transition-transform duration-700 opacity-30 dark:opacity-20 group-hover:opacity-40 dark:group-hover:opacity-35"
                  />
                  {/* Heavy Overlay Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/40 dark:from-[#0d0d0f] dark:via-[#0d0d0f]/90 dark:to-[#0d0d0f]/60" />
                </div>

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Top Row: Index Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-medium text-neutral-500 dark:text-neutral-500">
                      {item.id}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-neutral-200/60 dark:bg-neutral-800/80 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-800 dark:text-neutral-200 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`${saira.className} text-lg font-semibold text-neutral-900 dark:text-white tracking-tight`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Line */}
                <div className="relative z-10 pt-4 border-t border-neutral-300/60 dark:border-neutral-800/60 flex items-center gap-1 text-[11px] font-medium text-neutral-500 dark:text-neutral-500 group-hover:text-red-600 transition-colors">
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