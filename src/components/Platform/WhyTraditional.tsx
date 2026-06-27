import React from "react";
import { motion } from "motion/react";

const WhyTraditional = () => {
  const challenges = [
    {
      title: "Unknown assets remain exposed.",
      desc: "An estimated 80% of an organization's true attack surface — shadow IT, forgotten cloud buckets, rogue APIs — never appears in the CMDB. You can't defend what you can't see.",
    },
    {
      title: "Scanners generate noise, not direction.",
      desc: 'A single scan can flag tens of thousands of "critical" CVEs by technical severity, with no indication of which are actually reachable in your environment. Teams burn weeks triaging vulnerabilities no attacker could ever exploit.',
    },
    {
      title: "Security controls are assumed, not proven.",
      desc: 'Millions are spent on EDR, WAF, and SIEM — but almost no one validates whether those controls would actually stop a live attack. "Deployed" is not the same as "effective."',
    },
    {
      title: "Audit evidence is collected by hand.",
      desc: "Compliance posture is reconstructed manually before each audit, with no continuous, real-time view of which controls are passing or failing against frameworks like ISO 27001, RBI, or DPDP.",
    },
    {
      title: "Technical findings don't translate to business risk.",
      desc: "A CVSS score tells a board nothing. Leadership needs to know which exposures threaten payment systems, customer data, and operational continuity — in financial and reputational terms, not severity ratings.",
    },
  ];

  return (
    <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-[40px] border border-white/[0.08] bg-slate-950/90 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-mono tracking-widest uppercase">
              Why Traditional Security Fails
            </div>
            <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.02]">
              Security Teams Have Tools. Not Clarity.
            </h3>
            <p className="max-w-2xl text-white/60 text-lg leading-relaxed">
              Modern enterprises are overwhelmed by vulnerability data, security
              alerts, and compliance requirements. Yet they still struggle to
              answer the one question that matters:
            </p>

            <div className="relative overflow-hidden rounded-[32px] border border-white/[0.1] bg-slate-900/95 p-4 shadow-[0_25px_80px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_35%)]" />
              <div className="relative z-10">
                <p className="text-4xl md:text-[3.4rem] font-semibold text-white leading-tight tracking-[-0.03em]">
                  <span className="text-accent">“</span>What can actually breach
                  us today?<span className="text-accent">”</span>
                </p>
                <p className="mt-4 max-w-xl text-white/60 text-base leading-relaxed">
                  Traditional security tools generate alerts. ThreatForge
                  validates risk.
                </p>
                <button className="mt-3 inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/10 hover:text-white">
                  Learn why risk validation matters
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {challenges.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="rounded-3xl border border-white/[0.06] bg-slate-900/95 p-4"
              >
                <h4 className="text-lg font-semibold text-white mb-3">
                  {c.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {c.desc}
                </p>
                <button className="mt-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
                  Learn more
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTraditional;
