import React from "react";
import { motion } from "motion/react";

const IndustryPreview = () => {
  const industries = [
    {
      label: "Banking & Financial Services",
      details: "RBI, CERT-In, ISO 27001",
    },
    {
      label: "Government & Public Sector",
      details: "CERT-In, MeitY, critical infrastructure",
    },
    {
      label: "Healthcare",
      details: "DPDP, ransomware readiness, patient data",
    },
    {
      label: "Retail & E-Commerce",
      details: "PCI-DSS, API security, customer trust",
    },
  ];

  return (
    <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-[40px] border border-white/[0.08] bg-slate-950/95 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.25)]">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-center">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/60">
              INDUSTRY PREVIEW
            </span>
            <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.02]">
              Built for High-Stakes, Highly-Regulated Industries
            </h3>
            <p className="max-w-3xl text-white/60 text-lg leading-relaxed">
              ThreatForge is purpose-built to help regulated organizations
              reduce risk while staying compliant, resilient, and ready for
              modern attacks.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-slate-600/40 bg-slate-700/20 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-700/30"
            >
              Explore industry solutions →
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {industries.map((industry) => (
              <motion.a
                key={industry.label}
                href="#"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group rounded-[32px] border border-white/[0.08] bg-slate-900/95 p-4 transition hover:border-slate-600/40 hover:bg-slate-900"
              >
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-700/20 text-slate-300 font-semibold text-lg">
                  {industry.label
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 leading-tight">
                  {industry.label}
                </h4>
                <p className="text-sm text-white/60 leading-relaxed">
                  {industry.details}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryPreview;
