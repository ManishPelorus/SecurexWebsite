"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

function HeroGeometric({
  badge = "Design Collective",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as any,
      },
    }),
  };

  return (
    <div className="relative min-h-[85vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900" />
      <div className="absolute left-0 top-12 h-80 w-80 rounded-full bg-slate-400/10 blur-3xl" />
      <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-slate-400/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle,_rgba(255,255,255,0.06),transparent_70%)] opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle,_rgba(148,163,184,0.08),transparent_60%)] blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full text-left">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] mb-4 sm:mb-6 md:mb-10"
          >
            <span className="text-xs uppercase tracking-[0.32em] text-white/60">
              {badge}
            </span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="max-w-full md:max-w-[70%]"
          >
            <h1
              className="font-semibold mb-5 tracking-tight"
              style={{
                fontSize: "clamp(3rem, 7vw + 0.2rem, 7rem)",
                lineHeight: 1.02,
              }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/85">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-slate-300 via-white/95 to-slate-300",
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="max-w-full md:max-w-[55%]"
          >
            <p
              className="text-white/60 mb-8 leading-relaxed font-medium tracking-wide"
              style={{
                fontSize: "clamp(1rem, 1.1vw + 0.4rem, 1.25rem)",
              }}
            >
              A premier Make-in-India cybersecurity firm built for modern
              enterprises. Our platform brings clarity to exposure, validates
              real risks, and helps your team focus on the actions that matter.
            </p>
            <div className="grid gap-4 sm:inline-flex sm:flex-nowrap">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Book a Demo
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-slate-600/40 bg-slate-700/20 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-600/30"
              >
                Request a Free PoC
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };
