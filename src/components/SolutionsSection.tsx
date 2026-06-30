// pages/Solutions.tsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
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
  RefreshCw,
} from 'lucide-react';

// ---- Data: Traditional Challenges (5) ----
const traditionalChallenges = [
  {
    id: 'unknown-assets',
    title: 'Unknown assets remain exposed',
    icon: AlertTriangle,
    fullDesc: `You cannot defend what you cannot see. An estimated 80% of an organization's true attack surface lives outside the asset inventory — shadow IT spun up by a business unit, forgotten cloud storage buckets, staging servers left internet-facing, rogue APIs, expired-but-live subdomains, and acquired infrastructure that was never fully mapped.

Traditional asset management relies on the CMDB, which only reflects what was deliberately recorded. Attackers don't limit themselves to your known inventory — they hunt for the assets you've forgotten. Continuous external attack surface management (EASM) closes this gap by independently and continuously discovering everything that is internet-facing and attributable to your organization, including the assets no one told you about.`,
  },
  {
    id: 'scanner-noise',
    title: 'Scanners generate noise, not direction',
    icon: Bell,
    fullDesc: `A single vulnerability scan can return tens of thousands of findings flagged "critical" based purely on CVSS score. But CVSS measures theoretical severity in isolation — it does not account for whether a vulnerability is actually reachable in your environment, whether a compensating control already neutralizes it, or whether it sits on a path that leads anywhere valuable.

The consequence is that security teams spend weeks triaging vulnerabilities that no real attacker could ever exploit, while the handful of genuinely dangerous exposures get lost in the noise. A CVSS 9.8 on an unreachable internal host is not your top priority; a CVSS 6.5 sitting on a live path to your crown jewels is. Exploitability-based prioritization fixes this inversion.`,
  },
  {
    id: 'controls-unproven',
    title: 'Security controls are assumed, not proven',
    icon: ShieldCheck,
    fullDesc: `Organizations invest millions in EDR, XDR, WAF, firewalls, network segmentation, and SIEM — and then assume those controls work. "We deployed EDR, so we're protected." "MFA is enabled, so identity is covered." "Segmentation is configured, so lateral movement is contained."

But deployed is not the same as effective. Real attackers routinely bypass controls that were assumed to be airtight — ransomware evades EDR in specific scenarios, token theft sidesteps MFA, and misconfigured segmentation lets an attacker pivot from a user network straight to critical servers. The only way to know whether a control actually stops an attack is to safely run the attack and watch what happens. That is what breach and attack simulation (BAS) does — and why control validation is now a core requirement of any serious security program.`,
  },
  {
    id: 'manual-audit',
    title: 'Audit evidence is collected by hand',
    icon: Clipboard,
    fullDesc: `For most organizations, compliance is a fire drill. In the weeks before an audit, teams manually reconstruct evidence screenshots, spreadsheets, exported logs to demonstrate that controls were in place. There is no continuous, real-time view of which controls are currently passing or failing against frameworks like ISO 27001, NIST, PCI-DSS, RBI, CERT-In, or the DPDP Act.

This is expensive, error-prone, and always out of date the moment it's compiled. Continuous compliance intelligence replaces the fire drill with an always-current view: every validated exposure is automatically correlated to the relevant control across every applicable framework, with audit-ready evidence generated as a byproduct of normal operation rather than a special project.`,
  },
  {
    id: 'business-risk',
    title: "Technical findings don't translate to business risk",
    icon: BarChart2,
    fullDesc: `A CVSS score means nothing to a board. "We have 4,000 critical vulnerabilities" communicates neither urgency nor priority to the people who allocate budget and own risk. Leadership needs to understand exposure in their language: which risks threaten payment systems, customer data, regulatory standing, and operational continuity — and what the financial and reputational consequences would be.

The gap between the SOC and the boardroom is one of the most expensive failures in cybersecurity, because it leads to misallocated budget and unmanaged risk. Closing it requires translating raw technical findings into quantified business, financial, and regulatory impact — the bridge between "we found a vulnerability" and "this exposure could lead to a customer-data breach affecting our largest revenue channel."`,
  },
];

// ---- Data: CTEM Lifecycle Steps (5) ----
const ctemSteps = [
  {
    id: 'discover',
    title: 'Discover',
    icon: RefreshCw,
    fullDesc: `The lifecycle begins with complete visibility. ThreatForge continuously discovers every asset and exposure attributable to your organization across both the external and internal attack surface. This includes the assets your inventory already knows about and, critically, the ones it doesn't: shadow IT, forgotten cloud instances, exposed APIs, expired subdomains, and unmanaged internet-facing services.

Discovery is continuous, not periodic. The moment a new asset appears — a developer spins up a cloud instance, a marketing team launches a microsite it enters the discovery engine and is assessed. There is no waiting for the next quarterly scan.`,
  },
  {
    id: 'prioritize',
    title: 'Prioritize',
    icon: RefreshCw,
    fullDesc: `Discovery without prioritization just produces a longer list. ThreatForge filters findings by real exploitability and business impact rather than raw CVSS score. It asks the questions that actually matter: Is this exposure reachable? Does it sit on a path to something valuable? What business asset would it ultimately threaten?

The result is a ranked set of exposures that reflects genuine risk to the organization — isolating the threats that pose an immediate, quantifiable danger from the thousands of theoretical findings that don't.`,
  },
  {
    id: 'validate',
    title: 'Validate',
    icon: RefreshCw,
    fullDesc: `This is where ThreatForge departs most sharply from traditional tooling. Rather than assuming a vulnerability is exploitable or a control is effective, the platform proves it. Using breach and attack simulation (BAS) and AI-driven attack techniques mapped to the MITRE ATT&CK framework, ThreatForge safely executes real attacker behavior against your environment testing whether a given exposure can actually be exploited, and whether your existing controls stop it.

These simulations run safely, without impacting production, and cover the full kill chain: initial access, privilege escalation, lateral movement, and data exfiltration. The output is empirical — not "this might be exploitable" but "this is exploitable, here is the path, and here is the control that failed to stop it."`,
  },
  {
    id: 'remediate',
    title: 'Remediate',
    icon: RefreshCw,
    fullDesc: `ThreatForge translates validated findings into specific, risk-ranked remediation actions. Because the platform understands attack paths rather than isolated vulnerabilities, it can identify the single fixes that deliver the most risk reduction where closing one misconfiguration or removing one exposed port collapses an entire attack chain.

This is remediation prioritized by breach impact, not by severity count. Instead of "patch all 4,000 criticals," your team gets "fix these 3 things first, because doing so eliminates the highest-probability breach scenarios in your environment."`,
  },
  {
    id: 'verify',
    title: 'Verify',
    icon: RefreshCw,
    fullDesc: `Most security tools stop at remediation and assume the fix worked validating it only at the next scan cycle or audit, weeks or months later. ThreatForge closes the loop. The moment a fix is applied, the platform automatically re-tests the attack path to confirm it is actually closed.

Most tools stop at "remediate." ThreatForge closes the loop it proves the fix actually worked.

This closed-loop verification is what makes the model genuinely continuous. Every cycle leaves your environment provably less breachable, with evidence to show for it and the cycle never stops running.`,
  },
];

// ---- Top 3 solution cards ----
const solutionCards = [
  { title: 'SaaS Security', desc: 'Secure your cloud-native applications and data with automated posture management and threat detection.', icon: Globe },
  { title: 'Fintech Compliance', desc: 'Meet rigorous regulatory requirements with automated compliance monitoring and risk quantification.', icon: Lock },
  { title: 'AI Infrastructure', desc: 'Protect your AI/ML models and data pipelines from adversarial attacks and data leakage.', icon: Zap },
];

// ---- Reusable Carousel component ----
const Carousel = ({
  items,
  sectionId,
  title,
  subtitle,
}: {
  items: Array<{ id: string; title: string; icon: any; fullDesc: string }>;
  sectionId: string;
  title: string;
  subtitle: string;
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  // Listen for hash changes
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash.startsWith(sectionId)) {
      const id = hash.replace(`${sectionId}-`, '');
      const index = items.findIndex((item) => item.id === id);
      if (index !== -1) {
        setCurrentSlide(index);
        // Smooth scroll to this carousel after a tiny delay
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location, items, sectionId]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    const id = items[index].id;
    navigate(`/solutions#${sectionId}-${id}`, { replace: true });
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % items.length;
    setDirection(1);
    goToSlide(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + items.length) % items.length;
    setDirection(-1);
    goToSlide(prev);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="mt-16 scroll-mt-24" id={sectionId}>
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-mono tracking-widest uppercase mb-4">
          {sectionId === 'traditional' ? 'Why Traditional Security Fails' : 'The CTEM Lifecycle'}
        </span>
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
          {title}
        </h2>
        <p className="text-white/60 text-lg max-w-3xl mx-auto mt-4">{subtitle}</p>
      </div>

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
                {React.createElement(items[currentSlide].icon, {
                  className: 'w-8 h-8 text-slate-200',
                })}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {items[currentSlide].title}
              </h3>
            </div>
            <div className="text-white/80 leading-relaxed whitespace-pre-line text-base md:text-lg">
              {items[currentSlide].fullDesc}
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800/80 text-white/60 hover:text-white hover:bg-slate-700 transition-colors z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-800/80 text-white/60 hover:text-white hover:bg-slate-700 transition-colors z-10"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="flex justify-center gap-2 mt-6 pb-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentSlide ? 1 : -1);
                goToSlide(idx);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-accent w-8' : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ---- Main Solutions Page ----
const SolutionsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-20">
      {/* Top 3 solution cards */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-mono tracking-widest uppercase mb-4">
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
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 md:p-12 rounded-2xl bg-slate-900/80 border border-white/[0.08] hover:border-white/20 transition-all hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors">
                <card.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">{card.title}</h3>
              <p className="text-white/60 text-base leading-relaxed mb-8">{card.desc}</p>
              <button className="flex items-center gap-2 text-white/80 font-semibold text-xs tracking-widest uppercase hover:text-accent transition-colors">
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Carousel 1: Traditional Challenges */}
      <Carousel
        items={traditionalChallenges}
        sectionId="traditional"
        title="Why Traditional Security Fails"
        subtitle="Explore each challenge in detail and see how ThreatForge addresses it."
      />

      {/* Carousel 2: CTEM Lifecycle */}
      <Carousel
        items={ctemSteps}
        sectionId="ctem"
        title="The CTEM Lifecycle"
        subtitle="A continuous, closed-loop cycle that proves your security posture improves with every iteration."
      />
    </div>
  );
};

export default SolutionsPage;