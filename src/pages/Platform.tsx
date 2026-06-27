import React, { useEffect } from "react";
import PlatformSection from "../components/PlatformSection";
import NavigatorSection from "../components/NavigatorSection";
import IntelligenceSection from "../components/IntelligenceSection";
import { motion } from "motion/react";

const Platform = () => {
  useEffect(() => {
    document.title =
      "ThreatForge — Validation-Driven CTEM Platform | SecureX Labs";
    const description =
      "ThreatForge is a validation-driven Continuous Threat Exposure Management platform. It identifies what can actually be exploited, proves what can actually breach you, and prioritizes what reduces risk fastest. Book a demo or request a free PoC.";
    let meta = document.querySelector(
      'meta[name="description"]',
    ) as HTMLMetaElement | null;
    if (meta) {
      meta.setAttribute("content", description);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <div className="pt-32">
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-24"
          >
            <h1 className="text-6xl md:text-8xl font-semibold text-foreground tracking-tighter mb-8 leading-[0.9] text-gradient">
              The SecureXLabs <br />
              <span className="accent-gradient">Security Ecosystem.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-foreground-muted text-xl leading-relaxed">
              A comprehensive platform designed to unify your security
              operations, automate risk management, and provide actionable
              intelligence.
            </p>
          </motion.div>
        </div>
      </section>
      <PlatformSection />
      <NavigatorSection />
      <IntelligenceSection />
    </div>
  );
};

export default Platform;
