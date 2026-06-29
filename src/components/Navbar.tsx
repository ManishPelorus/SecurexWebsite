import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const platformLinks = [
    { name: 'ThreatForge', href: '/threatforge' },
    { name: 'DatraX', href: '/datrax' },
  ];

  const navLinks = [
    { name: 'Platform', href: '#', dropdown: true },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Research', href: '/resources' },
    { name: 'About', href: '/company' },
    { name: 'Contact', href: '/contact' },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background-base/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.12)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-1 flex justify-start">
            <Link
              to="/"
              className="flex items-center group relative"
            >
              <motion.img
                src="/images/logo/SecureX_logo_white.png"
                alt="SecureXLabs"
                className="h-8 w-auto object-contain"
                whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              />
              {/* Subtle glow behind logo */}
              <div className="absolute -inset-4 bg-accent/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full -z-10" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <div
                    className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-foreground-muted hover:text-foreground transition-colors cursor-pointer relative"
                    onMouseEnter={() => setPlatformOpen(true)}
                    onMouseLeave={() => setPlatformOpen(false)}
                  >
                    <span>{link.name}</span>
                    <motion.span
                      animate={{ rotate: platformOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.span>

                    {/* Active indicator line */}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent group-hover:w-full group-hover:left-0 transition-all duration-300" />

                    <AnimatePresence>
                      {platformOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{
                            duration: 0.2,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="absolute top-full left-0 mt-2 w-52 bg-background-base/90 backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-2xl py-2"
                          style={{ transformOrigin: 'top left' }}
                        >
                          {platformLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              className={`block px-4 py-2.5 text-sm transition-all ${
                                location.pathname === sub.href
                                  ? 'text-accent bg-white/[0.04]'
                                  : 'text-foreground-muted hover:text-foreground hover:bg-white/[0.03]'
                              }`}
                              onClick={() => setPlatformOpen(false)}
                            >
                              <span className="flex items-center gap-2">
                                {sub.name}
                                {location.pathname === sub.href && (
                                  <motion.span
                                    layoutId="activeDot"
                                    className="w-1.5 h-1.5 rounded-full bg-accent"
                                  />
                                )}
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className="relative px-3 py-2 rounded-lg text-sm font-medium transition-all text-foreground-muted hover:text-foreground"
                  >
                    {link.name}
                    {/* Underline hover effect */}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent group-hover:w-full group-hover:left-0 transition-all duration-300" />
                    {location.pathname === link.href && (
                      <motion.span
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-lg bg-white/[0.04] -z-10"
                        transition={{ type: 'spring', duration: 0.4 }}
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side: CTA & Mobile toggle */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex relative group items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white text-sm font-medium transition-all hover:bg-accent-bright shadow-[0_0_0_1px_rgba(0,48,255,0.4),0_4px_16px_rgba(0,48,255,0.25)] hover:shadow-[0_0_0_1px_rgba(0,48,255,0.6),0_8px_24px_rgba(0,48,255,0.35)] active:scale-[0.97]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get a Demo</span>
              <motion.span
                className="absolute inset-0 rounded-xl bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-foreground-muted hover:text-foreground hover:bg-white/[0.05] transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-background-base/95 backdrop-blur-2xl border-b border-white/[0.06]"
          >
            <div className="px-4 pt-4 pb-8 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => setPlatformOpen(!platformOpen)}
                        className="flex items-center justify-between w-full text-lg font-medium py-3 px-3 rounded-xl text-foreground-muted hover:text-foreground hover:bg-white/[0.03] transition-colors"
                      >
                        {link.name}
                        <motion.span
                          animate={{ rotate: platformOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {platformOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="pl-4 space-y-1 overflow-hidden"
                          >
                            {platformLinks.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.href}
                                className={`block py-2.5 px-3 rounded-xl text-base transition-colors ${
                                  location.pathname === sub.href
                                    ? 'text-accent bg-white/[0.04]'
                                    : 'text-foreground-muted hover:text-foreground hover:bg-white/[0.02]'
                                }`}
                                onClick={() => {
                                  setIsOpen(false);
                                  setPlatformOpen(false);
                                }}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.href}
                      className={`block py-3 px-3 rounded-xl text-lg font-medium transition-colors ${
                        location.pathname === link.href
                          ? 'text-accent bg-white/[0.04]'
                          : 'text-foreground-muted hover:text-foreground hover:bg-white/[0.02]'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 mt-4 w-full bg-accent text-white py-3.5 rounded-xl font-bold shadow-[0_0_0_1px_rgba(0,48,255,0.5),0_4px_16px_rgba(0,48,255,0.2)] active:scale-[0.97] transition-all"
              >
                <Sparkles className="w-4 h-4" />
                Get a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;