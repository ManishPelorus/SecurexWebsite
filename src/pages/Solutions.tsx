import React from 'react';
import SolutionsSection from '../components/SolutionsSection';
import TrustSection from '../components/TrustSection';
// import Testimonials from '../components/Testimonials';
import { motion } from 'motion/react';

const Solutions = () => {
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
              Tailored Security <br />
              <span className="accent-gradient">
                For Every Industry.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-foreground-muted text-xl leading-relaxed">
              SecureXLabs provides specialized security solutions designed to address the unique challenges of modern digital businesses.
            </p>
          </motion.div>
        </div>
      </section>
      <SolutionsSection />
      {/* <Testimonials /> */}
      <TrustSection />
    </div>
  );
};

export default Solutions;
