import React from "react";
import { Shield, Zap, Globe, Lock, ShieldCheck, Server } from "lucide-react";
import { motion } from "motion/react";

const PlatformSection = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as any,
      },
    }),
  };

  const features = [
    {
      icon: Shield,
      title: "Discover",
      desc: "Unknown assets across your true perimeter.",
    },
    {
      icon: Zap,
      title: "Validate",
      desc: "Real-world exploitability, not theoretical severity.",
    },
    {
      icon: Globe,
      title: "Eliminate",
      desc: "The attack paths that actually lead to breach.",
    },
    {
      icon: Lock,
      title: "Prove",
      desc: "Your security controls work — continuously add this data and replace that data.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-mono tracking-widest uppercase mb-4"
          >
            Validation-Driven CTEM Platform
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-semibold text-foreground tracking-tight mb-4 text-gradient">
            Stop Chasing Vulnerabilities
            <br />
            <span className="text-foreground-muted">
              {" "}
              Start Eliminating Breach Paths
            </span>
          </h2>
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="max-w-full md:max-w-[60%] mx-auto text-center"
          >
            <p
              className="text-white/40 mb-4 sm:mb-5 leading-relaxed font-light tracking-wide"
              style={{
                fontSize: "clamp(0.95rem, 1.2vw + 0.3rem, 1.4rem)",
              }}
            >
              ThreatForge is a validation-driven CTEM platform. It continuously
              discovers your real attack surface, proves what's actually
              exploitable, and shows you the few fixes that eliminate the most
              risk, so you stop guessing whether your defenses actually work.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group p-5 rounded-2xl glass glass-hover hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-foreground-muted text-sm leading-relaxed font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[40px] border border-white/[0.08] bg-slate-950/90 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-mono tracking-widest uppercase">
                Why Traditional Security Fails
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.02]">
                  Security Teams Have Tools. Not Clarity.
                </h3>
                <p className="max-w-2xl text-white/60 text-lg leading-relaxed">
                  Modern enterprises are overwhelmed by vulnerability data,
                  security alerts, and compliance requirements. Yet they still
                  struggle to answer the one question that matters:
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[32px] border border-white/[0.1] bg-slate-900/95 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.4)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_35%)]" />
                <div className="relative z-10">
                  <p className="text-4xl md:text-[3.4rem] font-semibold text-white leading-tight tracking-[-0.03em]">
                    <span className="text-accent">“</span>What can actually
                    breach us today?<span className="text-accent">”</span>
                  </p>
                  <p className="mt-4 max-w-xl text-white/60 text-base leading-relaxed">
                    Traditional security tools generate alerts. ThreatForge
                    validates risk.
                  </p>
                  <button className="mt-4 inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent/5 px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent/10 hover:text-white">
                    Learn why risk validation matters
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {[
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
              ].map((challenge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="rounded-3xl border border-white/[0.06] bg-slate-900/95 p-6"
                >
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {challenge.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {challenge.desc}
                  </p>
                  <button className="mt-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
                    Learn more
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-full px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] border border-white/[0.08] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 shadow-[0_45px_140px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.1),_transparent_18%)]" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/70">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
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
                <p className="mt-3 text-sm text-accent">↓ 99.9% filtered out</p>
              </div>

              <div className="hidden xl:flex xl:flex-col xl:items-center xl:justify-center">
                <span className="text-5xl text-accent">→</span>
              </div>

              <div className="rounded-[32px] border border-white/[0.08] bg-slate-900/95 p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                <p className="text-5xl md:text-6xl font-semibold text-white tracking-tight">
                  15
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/50">
                  Actually exploitable
                </p>
                <p className="mt-3 text-sm text-accent">
                  ↓ 80% further reduced
                </p>
              </div>

              <div className="hidden xl:flex xl:flex-col xl:items-center xl:justify-center">
                <span className="text-5xl text-accent">→</span>
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
              ThreatForge pinpoints exactly which 3 require immediate action —
              and proves it.
            </p>
          </div>
        </div>
      </div>

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
                {[
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
                    detail:
                      "Re-test after every fix to confirm the attack path is closed.",
                  },
                ].map((item, index) => (
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
                    {index < 4 && (
                      <div className="pointer-events-none absolute right-[-1.5rem] top-1/2 hidden h-8 w-16 -translate-y-1/2 items-center justify-center text-accent md:flex">
                        <span className="text-3xl">→</span>
                      </div>
                    )}
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

      <div className="mt-16 max-w-full px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] border border-white/[0.08] bg-slate-950/95 p-6 shadow-[0_45px_140px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.1),_transparent_15%)]" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/70">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                Platform Overview
              </div>
              <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.02]">
                One Platform. Six Capabilities. Zero Gaps.
              </h3>
              <p className="mx-auto max-w-3xl text-white/60 text-lg leading-relaxed">
                ThreatForge combines six integrated capabilities into a single
                exposure management ecosystem — all correlated through one
                unified attack knowledge graph. No manual stitching. No
                correlation delays.
              </p>
            </div>

            <div className="mt-3 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {[
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
              ].map((capability, index) => (
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
                  className="group overflow-hidden rounded-[32px] border border-white/[0.08] bg-slate-900/95 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-accent/30"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/15">
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

      <div className="mt-16 max-w-full px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] border border-white/[0.08] bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 shadow-[0_45px_140px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.1),_transparent_15%)]" />
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
              {[
                {
                  stat: "+30%",
                  label:
                    "More of your attack surface discovered, versus a CMDB-only view",
                },
                {
                  stat: "99.5%",
                  label:
                    "Alert noise eliminated, so your SOC focuses only on validated risk",
                },
                {
                  stat: "70%",
                  label:
                    "Reduction in breach probability through continuous validation",
                },
                {
                  stat: "–60%",
                  label:
                    "Faster mean time to remediation with risk-ranked, automated guidance",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.stat}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
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

      <div className="mt-16 max-w-full px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] border border-accent/10 bg-slate-950/95 p-6 shadow-[0_45px_140px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.12),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.1),_transparent_15%)]" />
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
                  {[
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
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1 + 0.2,
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      }}
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

      <div className="mt-16 max-w-full px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[40px] border border-white/[0.08] bg-slate-950/95 p-6 shadow-[0_45px_140px_rgba(0,0,0,0.45)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.1),_transparent_15%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/70">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                Why ThreatForge
              </div>
              <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.02]">
                A Different Approach to Exposure
              </h3>
              <p className="mx-auto max-w-3xl text-white/60 text-lg leading-relaxed">
                This contrast shows why ThreatForge shifts teams away from
                theoretical vulnerability noise toward real, attack-path-first
                decision-making.
              </p>
            </div>

            <div className="mt-3 grid gap-4 lg:grid-cols-[0.95fr_1.05fr] items-start">
              <div className="rounded-[32px] border border-white/[0.08] bg-slate-900/95 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.25)]">
                <div className="grid gap-4">
                  {[
                    {
                      title: "Vulnerability-centric",
                      label: "Attack-path-centric",
                    },
                    { title: "CVSS-driven", label: "Exploitability-driven" },
                    {
                      title: "Periodic assessments",
                      label: "Continuous validation",
                    },
                    { title: "Reactive", label: "Validation-first" },
                    {
                      title: "Static reports",
                      label: "Real-time decision engine",
                    },
                  ].map((row, index) => (
                    <motion.div
                      key={row.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="grid gap-2 rounded-3xl border border-white/[0.06] bg-slate-950/95 p-5 sm:grid-cols-[1fr_1fr]"
                    >
                      <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                        Traditional Security
                      </div>
                      <div className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                        ThreatForge
                      </div>
                      <div className="text-base text-white/70">{row.title}</div>
                      <div className="text-base text-white">{row.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-[32px] border border-accent/20 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-center gap-3 text-accent mb-6">
                  <div className="h-12 w-12 rounded-full border border-accent/20 bg-accent/10 flex items-center justify-center text-2xl">
                    ⚡
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-accent/80">
                      Contrast
                    </p>
                    <h4 className="text-2xl font-semibold text-white">
                      Modern exposure decisions, not legacy noise.
                    </h4>
                  </div>
                </div>
                <p className="text-white/60 text-base leading-relaxed">
                  This shift lets your team focus on the few exposures that
                  truly matter — instead of thousands of theoretical
                  vulnerabilities.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[40px] border border-white/[0.08] bg-slate-950/95 p-8 shadow-[0_30px_120px_rgba(0,0,0,0.25)]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-center">
            <div className="space-y-4">
              <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.32em] text-accent font-semibold">
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
                className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent/15"
              >
                Explore industry solutions →
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
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
              ].map((industry) => (
                <motion.a
                  key={industry.label}
                  href="#"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-[32px] border border-white/[0.08] bg-slate-900/95 p-6 transition hover:border-accent/30 hover:bg-slate-900"
                >
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent font-semibold text-lg">
                    {industry.label
                      .split(" ")
                      .map((word) => word[0])
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

      <div className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[40px] border border-white/[0.08] bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-10 shadow-[0_35px_140px_rgba(0,0,0,0.35)]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-center">
            <div className="space-y-5">
              <div className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-xs uppercase tracking-[0.32em] text-accent font-semibold">
                Closing CTA
              </div>
              <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.02]">
                Not All Vulnerabilities Are Exploitable. ThreatForge Reveals the
                Ones That Are.
              </h3>
              <p className="max-w-3xl text-white/70 text-lg leading-relaxed">
                Start with a free proof-of-concept on your own environment.
                We'll show you the real attack paths that exist in your
                infrastructure today — before you make any commitment.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accent/90"
                >
                  Book a Demo
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Request a Free PoC
                </a>
              </div>
            </div>
            <div className="rounded-[32px] border border-white/[0.08] bg-slate-900/95 p-6 text-center shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
              <p className="text-sm uppercase tracking-[0.32em] text-white/60 mb-4">
                ThreatForge proves what can actually breach you — and shows you
                the fastest way to close it.
              </p>
              <div className="mx-auto max-w-[12rem] rounded-[28px] bg-white/5 p-5 text-left">
                <p className="text-white font-semibold leading-tight">
                  Real attack-path discovery. No guesswork.
                </p>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  Validate threats in your own environment, then act with
                  confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
