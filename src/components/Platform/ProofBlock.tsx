import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

// Custom hook for counting animation – ref now typed for HTMLDivElement
const useCountUp = (end: number, duration = 2000, startOnView = true) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null); // ✅ changed from HTMLSpanElement
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

const ProofBlock = () => {
  const { count: count1, ref: ref1 } = useCountUp(12000, 2200);
  const { count: count2, ref: ref2 } = useCountUp(15, 1800);
  const { count: count3, ref: ref3 } = useCountUp(3, 1500);

  const formatNumber = (num: number) =>
    new Intl.NumberFormat("en-US").format(num);

  return (
    <div className="mt-16 max-w-full px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[40px] border border-white/[0.08] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 shadow-[0_45px_140px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.1),_transparent_18%)]" />

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Header */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/60">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Live Validation
              </div>
              <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.02]">
                From 12,000 Alerts to 3 Real Threats.
              </h3>
              <p className="max-w-3xl text-white/60 text-lg leading-relaxed">
                In one enterprise engagement, 12,000 vulnerabilities were
                flagged "critical." After validation, only 15 were actually
                exploitable. Just 3 could lead to domain compromise.
              </p>
            </div>
          </div>

          {/* Animated count cards */}
          <div className="mt-3 grid gap-4 xl:grid-cols-[1.5fr_auto_1fr_auto_1fr] xl:items-center">
            {/* Card 1: 12,000 */}
            <motion.div
              ref={ref1} // ✅ now matches HTMLDivElement
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-[32px] border border-white/[0.08] bg-slate-900/95 p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              <p className="text-5xl md:text-6xl font-semibold text-white tracking-tight">
                {formatNumber(count1)}
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/50">
                Vulnerabilities flagged critical
              </p>
              <p className="mt-3 text-sm text-slate-300">
                ↓ 99.9% filtered out
              </p>
            </motion.div>

            <div className="hidden xl:flex xl:flex-col xl:items-center xl:justify-center">
              <span className="text-5xl text-slate-300">→</span>
            </div>

            {/* Card 2: 15 */}
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="rounded-[32px] border border-white/[0.08] bg-slate-900/95 p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              <p className="text-5xl md:text-6xl font-semibold text-white tracking-tight">
                {formatNumber(count2)}
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/50">
                Actually exploitable
              </p>
              <p className="mt-3 text-sm text-slate-300">
                ↓ 80% further reduced
              </p>
            </motion.div>

            <div className="hidden xl:flex xl:flex-col xl:items-center xl:justify-center">
              <span className="text-5xl text-slate-300">→</span>
            </div>

            {/* Card 3: 3 */}
            <motion.div
              ref={ref3}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="rounded-[32px] border border-white/[0.08] bg-slate-900/95 p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              <p className="text-5xl md:text-6xl font-semibold text-white tracking-tight">
                {formatNumber(count3)}
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/50">
                Could lead to domain compromise
              </p>
            </motion.div>
          </div>

          <p className="mt-4 mx-auto max-w-3xl text-center text-lg leading-relaxed text-white/70">
            ThreatForge pinpoints the vulnerabilities that demand immediate
            attention— then validates that every fix has been successfully
            implemented.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProofBlock;