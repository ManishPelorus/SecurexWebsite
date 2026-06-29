import React from "react";
import { motion } from "motion/react";
import {
  AlertTriangle,
  Bell,
  ShieldCheck,
  Clipboard,
  BarChart2,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // <-- import

const WhyTraditional = () => {
  const navigate = useNavigate();

  // 🔹 Add a unique 'id' to each challenge (match the ones in SolutionsPage)
  const challenges = [
    {
      id: "unknown-assets",
      title: "Unknown assets remain exposed.",
      desc: "An estimated 80% of an organization's true attack surface — shadow IT, forgotten cloud buckets, rogue APIs — never appears in the CMDB. You can't defend what you can't see.",
      Icon: AlertTriangle,
    },
    {
      id: "scanner-noise",
      title: "Scanners generate noise, not direction.",
      desc: 'A single scan can flag tens of thousands of "critical" CVEs by technical severity, with no indication of which are actually reachable in your environment. Teams burn weeks triaging vulnerabilities no attacker could ever exploit.',
      Icon: Bell,
    },
    {
      id: "controls-unproven",
      title: "Security controls are assumed, not proven.",
      desc: 'Millions are spent on EDR, WAF, and SIEM — but almost no one validates whether those controls would actually stop a live attack. "Deployed" is not the same as "effective."',
      Icon: ShieldCheck,
    },
    {
      id: "manual-audit",
      title: "Audit evidence is collected by hand.",
      desc: "Compliance posture is reconstructed manually before each audit, with no continuous, real-time view of which controls are passing or failing against frameworks like ISO 27001, RBI, or DPDP.",
      Icon: Clipboard,
    },
    {
      id: "business-risk",
      title: "Technical findings don't translate to business risk.",
      desc: "A CVSS score tells a board nothing. Leadership needs to know which exposures threaten payment systems, customer data, and operational continuity — in financial and reputational terms, not severity ratings.",
      Icon: BarChart2,
    },
  ];

  // 🔹 Navigation handler
  const handleLearnMore = (id: string) => {
    navigate(`/solutions#challenge-${id}`);
  };

  return (
    <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/[0.04] bg-slate-950/80 p-6 lg:p-8 shadow-lg">
        <div className="grid gap-6 lg:grid-cols-2 items-start">
          {/* Left column – unchanged */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-slate-800/40 text-slate-300 text-xs font-mono tracking-widest uppercase">
              Why Traditional Security Fails
            </div>
            <h3 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.02] tracking-tight">
              Security Teams Have Tools.
              <br />
              Not Clarity.
            </h3>
            <p className="max-w-2xl text-white/60 text-lg">
              Modern enterprises are overwhelmed by vulnerability data, alerts,
              and compliance demands. The hard question is simple — what
              actually threatens your business right now?
            </p>
            <div className="relative mt-4">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-6 shadow-[0_30px_80px_rgba(2,6,23,0.6)]">
                <div className="flex items-start gap-4">
                  <div className="text-6xl md:text-7xl font-extrabold text-white/90 leading-none">
                    “
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                      What can actually breach us today?
                    </p>
                    <p className="mt-3 text-white/60">
                      Traditional security tools generate alerts. ThreatForge
                      validates risk.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <button className="inline-flex items-center gap-3 rounded-full bg-slate-700/20 border border-slate-600/40 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-slate-700/30 transition">
                    Learn why risk validation matters
                  </button>
                  <a className="text-sm text-white/60 hover:text-white transition" href="#">
                    See customer stories
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column – challenge cards with working Learn More */}
          <div className="space-y-4">
            {challenges.map((c, i) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="flex items-start gap-4 rounded-xl bg-slate-900/70 p-4 border border-white/[0.03] hover:translate-x-1 hover:shadow-lg transition-transform"
              >
                <div className="flex-shrink-0">
                  <div className="p-2 rounded-lg bg-slate-800/40">
                    <c.Icon className="w-6 h-6 text-slate-200" />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{c.title}</h4>
                  <p className="mt-1 text-white/60 text-sm">{c.desc}</p>
                  <button
                    onClick={() => handleLearnMore(c.id)}
                    className="mt-3 inline-flex items-center gap-1 rounded-full bg-slate-700/20 border border-slate-600/40 px-3 py-1 text-xs font-semibold text-white/90 hover:bg-slate-700/30 transition"
                  >
                    Learn more
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTraditional;