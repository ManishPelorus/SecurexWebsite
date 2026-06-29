// routes/solutions.tsx
import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Shield,
  Zap,
  Globe,
  Lock,
  ChevronRight,
  ChevronLeft,
  AlertTriangle,
  Bell,
  ShieldCheck,
  Clipboard,
  BarChart2,
} from "lucide-react";

// ----- Full descriptions for each challenge -----
const challengeData = [
  {
    id: "unknown-assets",
    title: "Unknown assets remain exposed",
    icon: AlertTriangle,
    fullDesc: `You cannot defend what you cannot see. An estimated 80% of an organization's true attack surface lives outside the asset inventory — shadow IT spun up by a business unit, forgotten cloud storage buckets, staging servers left internet-facing, rogue APIs, expired-but-live subdomains, and acquired infrastructure that was never fully mapped.

Traditional asset management relies on the CMDB, which only reflects what was deliberately recorded. Attackers don't limit themselves to your known inventory — they hunt for the assets you've forgotten. Continuous external attack surface management (EASM) closes this gap by independently and continuously discovering everything that is internet-facing and attributable to your organization, including the assets no one told you about.`,
  },
  {
    id: "scanner-noise",
    title: "Scanners generate noise, not direction",
    icon: Bell,
    fullDesc: `A single vulnerability scan can return tens of thousands of findings flagged "critical" based purely on CVSS score. But CVSS measures theoretical severity in isolation — it does not account for whether a vulnerability is actually reachable in your environment, whether a compensating control already neutralizes it, or whether it sits on a path that leads anywhere valuable.

The consequence is that security teams spend weeks triaging vulnerabilities that no real attacker could ever exploit, while the handful of genuinely dangerous exposures get lost in the noise. A CVSS 9.8 on an unreachable internal host is not your top priority; a CVSS 6.5 sitting on a live path to your crown jewels is. Exploitability-based prioritization fixes this inversion.`,
  },
  {
    id: "controls-unproven",
    title: "Security controls are assumed, not proven",
    icon: ShieldCheck,
    fullDesc: `Organizations invest millions in EDR, XDR, WAF, firewalls, network segmentation, and SIEM — and then assume those controls work. "We deployed EDR, so we're protected." "MFA is enabled, so identity is covered." "Segmentation is configured, so lateral movement is contained."

But deployed is not the same as effective. Real attackers routinely bypass controls that were assumed to be airtight — ransomware evades EDR in specific scenarios, token theft sidesteps MFA, and misconfigured segmentation lets an attacker pivot from a user network straight to critical servers. The only way to know whether a control actually stops an attack is to safely run the attack and watch what happens. That is what breach and attack simulation (BAS) does — and why control validation is now a core requirement of any serious security program.`,
  },
  {
    id: "manual-audit",
    title: "Audit evidence is collected by hand",
    icon: Clipboard,
    fullDesc: `For most organizations, compliance is a fire drill. In the weeks before an audit, teams manually reconstruct evidence — screenshots, spreadsheets, exported logs — to demonstrate that controls were in place. There is no continuous, real-time view of which controls are currently passing or failing against frameworks like ISO 27001, NIST, PCI-DSS, RBI, CERT-In, or the DPDP Act.

This is expensive, error-prone, and always out of date the moment it's compiled. Continuous compliance intelligence replaces the fire drill with an always-current view: every validated exposure is automatically correlated to the relevant control across every applicable framework, with audit-ready evidence generated as a byproduct of normal operation rather than a special project.`,
  },
  {
    id: "business-risk",
    title: "Technical findings don't translate to business risk",
    icon: BarChart2,
    fullDesc: `A CVSS score means nothing to a board. "We have 4,000 critical vulnerabilities" communicates neither urgency nor priority to the people who allocate budget and own risk. Leadership needs to understand exposure in their language: which risks threaten payment systems, customer data, regulatory standing, and operational continuity — and what the financial and reputational consequences would be.

The gap between the SOC and the boardroom is one of the most expensive failures in cybersecurity, because it leads to misallocated budget and unmanaged risk. Closing it requires translating raw technical findings into quantified business, financial, and regulatory impact — the bridge between "we found a vulnerability" and "this exposure could lead to a customer-data breach affecting our largest revenue channel."`,
  },
];

// ----- Top 3 solution cards (keep as in original) -----
const solutionCards = [
  {
    title: "SaaS Security",
    desc: "Secure your cloud-native applications and data with automated posture management and threat detection.",
    icon: Globe,
  },
  {
    title: "Fintech Compliance",
    desc: "Meet rigorous regulatory requirements with automated compliance monitoring and risk quantification.",
    icon: Lock,
  },
  {
    title: "AI Infrastructure",
    desc: "Protect your AI/ML models and data pipelines from adversarial attacks and data leakage.",
    icon: Zap,
  },
];

const SolutionsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Map hash to slide index
  const getSlideIndexFromHash = (hash: string) => {
    const id = hash.replace("#challenge-", "");
    const index = challengeData.findIndex((c) => c.id === id);
    return index !== -1 ? index : 0;
  };

  // On mount and hash changes, set slide and scroll to carousel
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const index = getSlideIndexFromHash(hash);
      setCurrentSlide(index);
      // Scroll to carousel after a small delay to let DOM settle
      setTimeout(() => {
        carouselRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [location.hash]);

  // Navigation handlers
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    // Update URL hash without causing a full page reload
    const id = challengeData[index].id;
    navigate(`/solutions#challenge-${id}`, { replace: true });
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % challengeData.length;
    goToSlide(next);
  };

  const prevSlide = () => {
    const prev =
      (currentSlide - 1 + challengeData.length) % challengeData.length;
    goToSlide(prev);
  };

  // Slide transition variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  // Track direction for animation
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    nextSlide();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevSlide();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-20">
      {/* ---------- SECTION 1: TOP 3 CARDS ---------- */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-mono tracking-widest uppercase mb-4">
            Tailored Security Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            Built for Every <br />
            <span className="text-foreground-muted">Industry Challenge.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutionCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group p-8 md:p-12 rounded-2xl bg-slate-900/80 border border-white/[0.08] hover:border-white/20 transition-all hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors">
                <card.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                {card.title}
              </h3>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                {card.desc}
              </p>
              <button className="flex items-center gap-2 text-white/80 font-semibold text-xs tracking-widest uppercase hover:text-accent transition-colors">
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- SECTION 2: CHALLENGE SLIDER ---------- */}
      <section ref={carouselRef} className="scroll-mt-24">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-mono tracking-widest uppercase mb-4">
            In‑Depth Breakdown
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Why Traditional Security Fails
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto mt-4">
            Explore each challenge in detail and see how ThreatForge addresses
            it.
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative rounded-3xl border border-white/[0.08] bg-slate-900/80 p-6 shadow-[0_45px_140px_rgba(0,0,0,0.45)] overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start gap-6 p-6 md:p-10"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-800/60">
                  {React.createElement(challengeData[currentSlide].icon, {
                    className: "w-8 h-8 text-slate-200",
                  })}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {challengeData[currentSlide].title}
                </h3>
              </div>
              <div className="text-white/80 leading-relaxed whitespace-pre-line text-base md:text-lg">
                {challengeData[currentSlide].fullDesc}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800/80 text-white/60 hover:text-white hover:bg-slate-700 transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800/80 text-white/60 hover:text-white hover:bg-slate-700 transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6 pb-2">
            {challengeData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentSlide ? 1 : -1);
                  goToSlide(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "bg-accent w-8"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
