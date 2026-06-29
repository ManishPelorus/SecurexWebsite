import React from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-16 md:p-24 rounded-3xl glass border border-white/[0.06] overflow-hidden"
        >
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tighter mb-8 leading-tight">
              Stay Ahead of the <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-slate-300 via-white/95 to-slate-300">
                Threat Landscape.
              </span>
            </h2>
            <p className="text-foreground-muted text-lg mb-12 leading-relaxed">
              Join 10,000+ security professionals receiving our weekly research
              and intelligence updates.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 bg-background-elevated border border-white/[0.06] rounded-xl px-6 py-4 text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-slate-600/50 transition-colors"
              />
              <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold text-xs tracking-widest uppercase transition-all hover:bg-gray-100 flex items-center justify-center gap-2 group shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.3)] active:scale-[0.98]">
                Subscribe{" "}
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
            <p className="mt-6 text-foreground-muted text-[10px] font-mono tracking-widest uppercase">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-slate-400/10 blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-400/10 blur-[150px] translate-x-1/2 translate-y-1/2" />
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
