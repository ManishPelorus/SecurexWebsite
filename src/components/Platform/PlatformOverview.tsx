import React from "react";
import { motion } from "motion/react";

const PlatformOverview = () => {
  const capabilities = [
    {
      title: "External Attack Surface Management (EASM)",
      desc: "Discover shadow IT, exposed assets, rogue APIs, and forgotten cloud resources — using an in-house scanning engine, not third-party data.",
    },
    {
      title: "Breach & Attack Simulation (BAS)",
      desc: "Validate your security controls through safe, full kill-chain simulations mapped to MITRE ATT&CK — without impacting production.",
    },
    {
      title: "AI Red Team",
      desc: "Autonomously generate novel attack campaigns that emulate advanced adversary behavior, driven by real threat intelligence.",
    },
    {
      title: "Compliance Intelligence",
      desc: "Map every finding automatically to 56+ frameworks — including ISO 27001, NIST, PCI-DSS, RBI, CERT-In, DPDP, and MeitY.",
    },
    {
      title: "Phishing Simulation",
      desc: "Measure human risk through realistic phishing campaigns, tracking opens, clicks, and credential submissions.",
    },
    {
      title: "Brand & Dark Web Monitoring",
      desc: "Identify leaked credentials, ransomware mentions, and brand impersonation before they are used against you.",
    },
  ];

  return (
    <div className="mt-16 max-w-full px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[40px] border border-white/[0.08] bg-slate-950/95 p-6 shadow-[0_45px_140px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.1),_transparent_15%)]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/60">
              Platform Overview
            </div>
            <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.02]">
              One Platform. Six Capabilities. Zero Gaps.
            </h3>
            <p className="mx-auto max-w-3xl text-white/60 text-lg leading-relaxed">
              ThreatForge combines six integrated capabilities into a single
              exposure management ecosystem — all correlated through one unified
              attack knowledge graph. No manual stitching. No correlation
              delays.
            </p>
          </div>

          <div className="mt-3 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group overflow-hidden rounded-[32px] border border-white/[0.08] bg-slate-900/95 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-slate-600/40"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-700/20 text-slate-300 ring-1 ring-slate-600/30">
                  <span className="text-lg font-semibold">{index + 1}</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  {capability.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {capability.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformOverview;
