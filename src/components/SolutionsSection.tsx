import React from 'react';
import { Shield, Zap, Globe, Lock, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const SolutionsSection = () => {
  const solutions = [
    { title: 'SaaS Security', desc: 'Secure your cloud-native applications and data with automated posture management and threat detection.', icon: Globe },
    { title: 'Fintech Compliance', desc: 'Meet rigorous regulatory requirements with automated compliance monitoring and risk quantification.', icon: Lock },
    { title: 'AI Infrastructure', desc: 'Protect your AI/ML models and data pipelines from adversarial attacks and data leakage.', icon: Zap },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-mono tracking-widest uppercase mb-8"
          >
            Tailored Security Solutions
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-semibold text-foreground tracking-tight mb-8 text-gradient">
            Built for Every <br />
            <span className="text-foreground-muted">Industry Challenge.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group p-12 rounded-2xl glass glass-hover hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-xl bg-accent/10 flex items-center justify-center mb-10 group-hover:bg-accent/20 transition-colors">
                <solution.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 tracking-tight">{solution.title}</h3>
              <p className="text-foreground-muted text-base leading-relaxed font-medium mb-10">
                {solution.desc}
              </p>
              <button className="flex items-center gap-2 text-foreground font-semibold text-xs tracking-widest uppercase hover:text-accent transition-colors">
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;