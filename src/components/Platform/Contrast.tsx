import React from "react";
import { motion } from "motion/react";

const Contrast = () => {
  const rows = [
    { left: "Vulnerability-centric", right: "Attack-path-centric" },
    { left: "CVSS-driven", right: "Exploitability-driven" },
    { left: "Periodic assessments", right: "Continuous validation" },
    { left: "Reactive", right: "Validation-first" },
    { left: "Static reports", right: "Real-time decision engine" },
  ];

  return (
    <section className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-slate-950/95 p-10">
        <div className="mx-auto max-w-6xl text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-sm uppercase tracking-widest text-white/70">
            Why ThreatForge
          </div>
          <h3 className="mt-4 text-4xl md:text-5xl font-semibold text-white">
            A Different Approach to Exposure
          </h3>
          <p className="mt-4 mx-auto max-w-3xl text-white/60 text-lg">
            This contrast shows why ThreatForge shifts teams away from
            theoretical vulnerability noise toward real, attack-path-first
            decision-making.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div className="space-y-4">
            {rows.map((row, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                className="flex items-center justify-between gap-6 rounded-2xl bg-slate-900/80 border border-white/[0.04] p-5"
              >
                <div>
                  <div className="text-sm font-semibold uppercase tracking-widest text-white/60">
                    Traditional Security
                  </div>
                  <div className="mt-1 text-base text-white/70">{row.left}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold uppercase tracking-widest text-accent">
                    ThreatForge
                  </div>
                  <div className="mt-1 text-base text-white font-semibold">
                    {row.right}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/95 p-8 border border-accent/8 shadow-md"
          >
            <div className="flex items-start gap-5">
              <div className="h-14 w-14 flex-shrink-0 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-2xl text-accent">
                ⚡
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-accent/80">
                  Contrast
                </p>
                <h4 className="mt-2 text-2xl md:text-3xl font-semibold text-white">
                  Modern exposure decisions, not legacy noise.
                </h4>
                <p className="mt-3 text-white/60 text-base">
                  This shift lets your team focus on the few exposures that
                  truly matter — instead of thousands of theoretical
                  vulnerabilities.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-base font-semibold text-black shadow"
                  >
                    Book a Demo
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full border border-white/12 bg-transparent px-5 py-2 text-sm font-semibold text-white/90"
                  >
                    Request a Free PoC
                  </a>
                </div>
                <p className="mt-4 text-xs text-white/50 italic">
                  *ThreatForge proves what can actually breach you — and shows
                  you the fastest way to close it.*
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contrast;
