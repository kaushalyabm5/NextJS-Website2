"use client";

import { Saira } from "next/font/google";
import Link from "next/link";
import { ArrowUpRight, Award, ShieldCheck } from "lucide-react";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const trainers = [
  {
    id: "01",
    name: "Roshan Ranasinghe",
    role: "Head Performance & Hypertrophy Coach",
    specialty: "Biomechanical Strength & Load Calibration",
    experience: "10+ Yrs Exp",
    certifications: "NSCA-CSCS, ISSA Master Trainer",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "02",
    name: "Dinesh Abeywardena",
    role: "Tactical Conditioning Lead",
    specialty: "Metabolic Conditioning & VO2 Optimization",
    experience: "8+ Yrs Exp",
    certifications: "EXOS Performance Specialist",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "03",
    name: "Kavinda Wickramasinghe",
    role: "Athletic Mobility & Power Specialist",
    specialty: "Kinetic Chain & Plyometric Architecture",
    experience: "6+ Yrs Exp",
    certifications: "NASM-PES, FRC Mobility Specialist",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
  },
];

export default function TrainerTeaser() {
  return (
    <section 
      id="trainers" 
      className="py-20 md:py-28 bg-neutral-100 dark:bg-[#050505] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 border-t border-neutral-200 dark:border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3 block">
              Human Capital
            </span>
            <h2 className={`${saira.className} text-3xl sm:text-5xl font-medium tracking-tight text-neutral-900 dark:text-white`}>
              Master strength architects.
            </h2>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
            Direct access to certified performance coaches who track, analyze, and optimize every variable of your progression.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="group relative rounded-3xl bg-white dark:bg-[#0d0d0f] overflow-hidden border border-neutral-200 dark:border-neutral-800/80 hover:border-red-600/60 transition-all duration-500 flex flex-col justify-between shadow-sm"
            >
              {/* Image Frame with Gradient Overlay */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-neutral-900">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-[#0d0d0f] dark:via-transparent dark:to-transparent" />
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-200 backdrop-blur-md border border-neutral-700/50">
                  {trainer.experience}
                </div>
              </div>

              {/* Trainer Meta & Credentials */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-red-600 uppercase mb-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{trainer.role}</span>
                  </div>

                  <h3 className={`${saira.className} text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white tracking-tight`}>
                    {trainer.name}
                  </h3>

                  <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {trainer.specialty}
                  </p>
                </div>

                {/* Footer Certifications */}
                <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-500 dark:text-neutral-500">
                    <Award className="w-3.5 h-3.5 text-red-600" />
                    <span>{trainer.certifications}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-neutral-900 text-white relative overflow-hidden border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10 max-w-xl">
            <h4 className={`${saira.className} text-xl sm:text-2xl font-semibold text-white tracking-tight`}>
              Ready to work with a dedicated coach?
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Book your personal assessment session to analyze your current baseline and build a customized action plan.
            </p>
          </div>

          <Link
            href="/contact"
            className="relative z-10 px-6 py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold tracking-wide transition-colors inline-flex items-center gap-2 shrink-0 shadow-lg"
          >
            <span>Schedule Assessment</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}