import React from "react";
import { ShieldCheck, Globe, Server } from "lucide-react";
import { motion } from "motion/react";

const SovereignDesign = () => {
  const items = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-accent" />,
      title: "Your data never leaves your boundary.",
      desc: "Deploy on-premise or in any cloud. Client data stays entirely within your environment — zero data processed in third-party systems.",
    },
    {
      icon: <Globe className="h-6 w-6 text-accent" />,
      title: "Built for Indian compliance mandates.",
      desc: "Validated exposures map directly to RBI, CERT-In, DPDP, and MeitY requirements alongside global standards like ISO 27001 and NIST.",
    },
    {
      icon: <Server className="h-6 w-6 text-accent" />,
      title: "Attacker-grade, in-house scan engine.",
      desc: "No reliance on third-party scanning data. ThreatForge executes real-world attacker techniques for true, adversary-grade validation.",
    },
  ];

  return (
    <div className="mt-16 max-w-full px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[40px] border border-accent/10 bg-slate-950/95 p-6 shadow-[0_45px_140px_rgba(0,0,0,0.45)]">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/70">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                Sovereign by Design
              </div>
              <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.02]">
                Sovereign by Design. Built in India, for India's Regulatory
                Reality.
              </h3>
              <p className="max-w-3xl text-white/60 text-lg leading-relaxed">
                This regional trust differentiator ensures your security is
                built around Indian boundaries, compliance, and enterprise
                sovereignty.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/[0.08] bg-slate-900/95 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.25)]">
              <div className="grid gap-5">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                    className="rounded-[28px] border border-white/[0.08] bg-slate-950/95 p-6"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/15">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {item.title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 rounded-[32px] border border-white/[0.08] bg-slate-900/95 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
            <p className="text-white/60 text-sm leading-relaxed">
              The Sovereign AI Navigator — an on-premise AI assistant —
              translates complex technical findings into clear business,
              financial, and regulatory impact for your leadership team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SovereignDesign;
