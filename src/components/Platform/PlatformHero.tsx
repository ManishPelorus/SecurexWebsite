import React from "react";
import { Shield, Zap, Globe, Lock } from "lucide-react";
import { motion } from "motion/react";

const PlatformHero = () => {
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
    <section className="mt-20 relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24">
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
          <div className="max-w-full md:max-w-[60%] mx-auto text-center">
            <p
              className="text-white/40 mb-4 sm:mb-5 leading-relaxed font-light tracking-wide"
              style={{ fontSize: "clamp(0.95rem, 1.2vw + 0.3rem, 1.4rem)" }}
            >
              ThreatForge is a validation-driven CTEM platform. It continuously
              discovers your real attack surface, proves what's actually
              exploitable, and shows you the few fixes that eliminate the most
              risk, so you stop guessing whether your defenses actually work.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              className="group p-4 rounded-2xl glass glass-hover hover:-translate-y-2"
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
    </section>
  );
};

export default PlatformHero;
