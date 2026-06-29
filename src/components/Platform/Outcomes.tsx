import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

// Reusable count-up hook (same as in ProofBlock)
const useCountUp = (end: number, duration = 2000, startOnView = true) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (startOnView && isInView && !hasStarted) {
      setHasStarted(true);
      let startTime: number | null = null;
      const startValue = 0;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(startValue + (end - startValue) * eased);
        setCount(current);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(step);
    }
  }, [isInView, startOnView, end, duration, hasStarted]);

  return { count, ref };
};

const Outcomes = () => {
  // Define stats with numeric values and formatting
  const items = [
    { raw: 30, prefix: "+", suffix: "%", label: "More of your attack surface discovered, versus a CMDB-only view" },
    { raw: 99.5, prefix: "", suffix: "%", label: "Alert noise eliminated, so your SOC focuses only on validated risk" },
    { raw: 70, prefix: "", suffix: "%", label: "Reduction in breach probability through continuous validation" },
    { raw: 60, prefix: "–", suffix: "%", label: "Faster mean time to remediation with risk-ranked, automated guidance" },
  ];

  // Apply the hook to each stat
  const count1 = useCountUp(items[0].raw, 2200);
  const count2 = useCountUp(items[1].raw, 2000);
  const count3 = useCountUp(items[2].raw, 1800);
  const count4 = useCountUp(items[3].raw, 1900);

  const counts = [count1, count2, count3, count4];

  // Helper to format the number (no decimals for whole numbers, one decimal for 99.5)
  const formatStat = (num: number, item: typeof items[0]) => {
    const isFloat = num % 1 !== 0;
    const formatted = isFloat ? num.toFixed(1) : num.toString();
    return `${item.prefix}${formatted}${item.suffix}`;
  };

  return (
    <div className="mt-16 max-w-full px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[40px] border border-white/[0.08] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 shadow-[0_45px_140px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.08),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.06),_transparent_18%)]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/60">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Live Outcomes
            </div>
            <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.02]">
              Designed to Deliver Measurable Risk Reduction
            </h3>
          </div>

          <div className="mt-3 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {items.map((item, index) => {
              const { count, ref } = counts[index];
              return (
                <motion.div
                  key={item.label}
                  ref={ref}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  className="rounded-[32px] border border-white/[0.08] bg-slate-900/95 p-6 text-center shadow-[0_25px_80px_rgba(0,0,0,0.25)] hover:shadow-[0_30px_90px_rgba(0,0,0,0.35)] transition-shadow duration-300"
                >
                  <p className="text-5xl md:text-6xl font-semibold text-white tracking-tight">
                    {formatStat(count, item)}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-400">
                    Outcome
                  </p>
                  <p className="mt-4 text-white/60 text-base leading-relaxed">
                    {item.label}
                  </p>
                  {/* Tiny progress indicator (unique touch) */}
                  <div className="mt-4 h-0.5 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 1.2 }}
                      className="h-full rounded-full bg-accent/40"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outcomes;