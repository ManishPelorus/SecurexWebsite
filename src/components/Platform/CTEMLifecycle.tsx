import React from "react";
import { motion } from "motion/react";

const CTEMLifecycle = () => {
  const steps = [
    {
      step: "1",
      label: "Discover",
      detail:
        "Find every asset and exposure — shadow IT, rogue APIs, forgotten cloud resources.",
    },
    {
      step: "2",
      label: "Prioritize",
      detail:
        "Filter by real exploitability and business impact, not CVSS noise.",
    },
    {
      step: "3",
      label: "Validate",
      detail:
        "Simulate real attacks mapped to MITRE ATT&CK to prove what can actually be exploited.",
    },
    {
      step: "4",
      label: "Remediate",
      detail:
        "Deliver risk-ranked fixes where one action can collapse an attack chain.",
    },
    {
      step: "5",
      label: "Verify",
      detail: "Re-test after every fix to confirm the attack path is closed.",
    },
  ];

  return (
    <div className="mt-16 max-w-full px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[40px] border border-white/[0.08] bg-slate-950/95 p-6 shadow-[0_45px_140px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.12),_transparent_20%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.1),_transparent_15%)]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/70">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              The CTEM Lifecycle
            </div>
            <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.02]">
              Continuous Threat Exposure Management in Action
            </h3>
            <p className="max-w-3xl mx-auto text-white/60 text-lg leading-relaxed lg:mx-0">
              For every exposure it finds, ThreatForge runs a continuous,
              closed-loop cycle:
            </p>
          </div>

          <div className="mt-2 overflow-hidden rounded-[32px] border border-white/[0.08] bg-slate-900/95 p-6">
            <div className="grid gap-4 md:grid-cols-[repeat(5,auto)] md:items-center md:justify-between">
              {steps.map((item, index) => (
                <div
                  key={item.step}
                  className="relative rounded-[28px] border border-white/[0.08] bg-slate-950/90 p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-lg font-semibold text-white ring-1 ring-white/10">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {item.label}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2 rounded-[32px] border border-accent/20 bg-slate-900/95 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
            <p className="text-xl font-semibold text-white">
              Most tools stop at "remediate." ThreatForge closes the loop — it
              proves the fix actually worked.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTEMLifecycle;
