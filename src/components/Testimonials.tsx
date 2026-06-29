import React from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "SecureXLabs has completely transformed our security operations. We've seen an 80% reduction in response time and a 50% increase in analyst productivity.",
      author: "Alex Rivera",
      role: "CISO, Global Finance Corp",
      image: "https://picsum.photos/seed/alex/100/100",
    },
    {
      quote:
        "The AI-driven risk intelligence is a game-changer. It identifies threats we would have missed and provides actionable remediation steps.",
      author: "Sarah Jenkins",
      role: "Director of Security, TechScale",
      image: "https://picsum.photos/seed/sarah-j/100/100",
    },
    {
      quote:
        "Compliance used to be a manual, painful process. With SecureXLabs, it's automated and continuous. We're always audit-ready.",
      author: "David Chen",
      role: "Compliance Lead, HealthSecure",
      image: "https://picsum.photos/seed/david-c/100/100",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tighter mb-8 leading-tight">
            Trusted by <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-300 via-white/95 to-slate-300">
              Industry Leaders.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-10 rounded-2xl glass glass-hover flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-slate-300/30 mb-8" />
              <p className="text-foreground-muted text-lg mb-12 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/[0.06] bg-background-elevated">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-full h-full object-cover grayscale opacity-80"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold text-sm tracking-tight">
                    {t.author}
                  </h4>
                  <p className="text-foreground-muted text-[10px] font-mono tracking-widest uppercase">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
