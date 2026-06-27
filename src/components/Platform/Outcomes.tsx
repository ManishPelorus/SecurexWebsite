import React from "react";
import { motion } from "motion/react";

const Outcomes = () => {
  const items = [
    {
      stat: "+30%",
      label: "More of your attack surface discovered, versus a CMDB-only view",
    },
    {
      stat: "99.5%",
      label:
        "Alert noise eliminated, so your SOC focuses only on validated risk",
    },
    {
      stat: "70%",
      label: "Reduction in breach probability through continuous validation",
    },
    {
      stat: "–60%",
      label:
        "Faster mean time to remediation with risk-ranked, automated guidance",
    },
  ];

  return (
    <div className="mt-16 max-w-full px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[40px] border border-white/[0.08] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 shadow-[0_45px_140px_rgba(0,0,0,0.45)]">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/70">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              Outcomes
            </div>
            <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.02]">
              Designed to Deliver Measurable Risk Reduction
            </h3>
          </div>

          <div className="mt-3 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {items.map((item, index) => (
              <motion.div
                key={item.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="rounded-[32px] border border-white/[0.08] bg-slate-900/95 p-6 text-center shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
              >
                <p className="text-5xl md:text-6xl font-semibold text-white tracking-tight">
                  {item.stat}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-accent/80">
                  Outcome
                </p>
                <p className="mt-4 text-white/60 text-base leading-relaxed">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outcomes;
