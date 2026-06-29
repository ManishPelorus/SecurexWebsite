import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';
import { DottedSurface } from './ui/dotted-surface';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background System */}
      <div className="fixed inset-0 z-[-10] pointer-events-none overflow-hidden bg-background-base">
        {/* Layer 1: Dotted Surface Animation */}
        <DottedSurface className="opacity-40" />

        {/* Layer 2: Radial Gradient Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,48,255,0.1),transparent_70%)] blur-[60px]"
        />

        {/* Layer 3: Subtle Glows */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-250 h-250 bg-accent/10 blur-[180px] opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#0030FF]/5 blur-[150px] opacity-30" />
        
        {/* Layer 4: Noise Texture */}
        <div className="absolute inset-0 opacity-[0.01] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Layer 5: Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
