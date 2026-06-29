import React from "react";
import { motion } from "motion/react";

const ProofBlock = () => {
  return (
    <div className="mt-16 max-w-full px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[40px] border border-white/[0.08] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 shadow-[0_45px_140px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.1),_transparent_18%)]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/60">
                Proof Block
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

          <div className="mt-3 grid gap-4 xl:grid-cols-[1.5fr_auto_1fr_auto_1fr] xl:items-center">
            <div className="rounded-[32px] border border-white/[0.08] bg-slate-900/95 p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <p className="text-5xl md:text-6xl font-semibold text-white tracking-tight">
                12,000
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/50">
                Vulnerabilities flagged critical
              </p>
              <p className="mt-3 text-sm text-slate-300">
                ↓ 99.9% filtered out
              </p>
            </div>

            <div className="hidden xl:flex xl:flex-col xl:items-center xl:justify-center">
              <span className="text-5xl text-slate-300">→</span>
            </div>

            <div className="rounded-[32px] border border-white/[0.08] bg-slate-900/95 p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <p className="text-5xl md:text-6xl font-semibold text-white tracking-tight">
                15
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/50">
                Actually exploitable
              </p>
              <p className="mt-3 text-sm text-slate-300">
                ↓ 80% further reduced
              </p>
            </div>

            <div className="hidden xl:flex xl:flex-col xl:items-center xl:justify-center">
              <span className="text-5xl text-slate-300">→</span>
            </div>

            <div className="rounded-[32px] border border-white/[0.08] bg-slate-900/95 p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <p className="text-5xl md:text-6xl font-semibold text-white tracking-tight">
                3
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/50">
                Could lead to domain compromise
              </p>
            </div>
          </div>

          <p className="mt-4 max-w-3xl text-white/60 text-lg leading-relaxed">
            ThreatForge pinpoints exactly which 3 require immediate action — and
            proves it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProofBlock;
