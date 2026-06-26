import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Send, User, Sparkles } from 'lucide-react';

const IntelligenceSection = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello, I'm Zin. How can I help you quantify your cyber risk today?" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm analyzing your request using the QBER model. Based on current threat vectors, your exposure in the SaaS sector is currently elevated by 14%."
      }]);
    }, 1000);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-mono tracking-widest uppercase mb-8"
            >
              Zin AI Assistant
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-semibold text-foreground tracking-tight mb-8 leading-[0.9] text-gradient">
              Intelligence at the <br />
              <span className="text-foreground-muted">Speed of Risk.</span>
            </h2>
            <p className="text-foreground-muted text-lg mb-12 leading-relaxed max-w-xl">
              Meet Zin, your dedicated AI risk analyst. Quantify threats, simulate attacks, and generate mitigation strategies in seconds.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Risk Quantification', icon: Sparkles },
                { label: 'Threat Intelligence', icon: Bot },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl glass glass-hover flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground font-semibold text-xs tracking-widest uppercase">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="glass rounded-3xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_2px_20px_rgba(0,0,0,0.4),0_0_40px_rgba(0,0,0,0.2)] h-[600px] flex flex-col">
              <div className="p-6 border-b border-white/[0.06] bg-white/[0.02] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-[0_0_15px_rgba(0,48,255,0.4)]">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-foreground font-semibold text-sm tracking-tight">Zin AI</div>
                    <div className="text-emerald-500 text-[10px] font-mono tracking-widest uppercase">Online</div>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-6">
                <AnimatePresence initial={false}>
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-background-elevated' : 'bg-accent shadow-[0_0_10px_rgba(0,48,255,0.3)]'}`}>
                        {msg.role === 'user' ? <User className="w-4 h-4 text-foreground-muted" /> : <Bot className="w-4 h-4 text-white" />}
                      </div>
                      <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-foreground text-background-base font-medium' : 'bg-background-elevated text-foreground-muted border border-white/[0.06]'}`}>
                        {msg.content}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="p-6 border-t border-white/[0.06] bg-white/[0.02]">
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask Zin about your risk..."
                    className="w-full bg-background-elevated border border-white/[0.06] rounded-xl py-4 px-6 text-foreground text-sm focus:outline-none focus:border-accent/50 transition-colors pr-16"
                  />
                  <button
                    onClick={handleSend}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-accent flex items-center justify-center hover:bg-accent-bright transition-colors shadow-[0_0_10px_rgba(0,48,255,0.3)]"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;