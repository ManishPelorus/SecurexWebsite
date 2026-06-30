import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Github, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/[0.06] pt-32 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center mb-8 group">
              <img
                src="/images/logo/SecureX_logo_white.png"
                alt="SecureXLabs"
                className="h-8 w-auto object-contain transition-opacity group-hover:opacity-80"
              />
            </Link>
            <p className="text-foreground-muted text-lg max-w-sm mb-12 leading-relaxed">
              The AI platform for cyber risk management. Quantify, prioritize,
              and respond at the speed of risk.
            </p>
            <div className="flex gap-6">
              {[
                {
                  name: "Twitter",
                  href: "https://twitter.com/",
                  icon: Twitter,
                },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/",
                  icon: Linkedin,
                },
                // { name: "GitHub", href: "https://github.com/", icon: Github },
                // {
                //   name: "YouTube",
                //   href: "https://www.youtube.com/",
                //   icon: Youtube,
                // },
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/",
                  icon: Instagram,
                },
              ].map((s) => {
                const Icon = s.icon as any;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="text-foreground-muted hover:text-foreground transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{s.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h5 className="text-foreground font-semibold text-[10px] font-mono tracking-widest uppercase mb-8">
                Platform
              </h5>
              <ul className="space-y-4 text-foreground-muted text-[10px] font-mono tracking-widest uppercase">
                <li>
                  <Link
                    to="/threatforge"
                    className="hover:text-accent transition-colors"
                  >
                    ThreatForge
                  </Link>
                </li>
                <li>
                  <Link
                    to="/datrax"
                    className="hover:text-accent transition-colors"
                  >
                    DatraX
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-foreground font-semibold text-[10px] font-mono tracking-widest uppercase mb-8">
                Resources
              </h5>
              <ul className="space-y-4 text-foreground-muted text-[10px] font-mono tracking-widest uppercase">
                <li>
                  <Link
                    to="/resources"
                    className="hover:text-accent transition-colors"
                  >
                    Research
                  </Link>
                </li>
                <li>
                  <Link
                    to="/case-studies"
                    className="hover:text-accent transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-accent transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="hover:text-accent transition-colors"
                  >
                    Guides
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-foreground font-semibold text-[10px] font-mono tracking-widest uppercase mb-8">
                Company
              </h5>
              <ul className="space-y-4 text-foreground-muted text-[10px] font-mono tracking-widest uppercase">
                <li>
                  <Link
                    to="/company"
                    className="hover:text-accent transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="hover:text-accent transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-accent transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/company"
                    className="hover:text-accent transition-colors"
                  >
                    Legal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground-muted text-[10px] font-mono tracking-widest uppercase">
            © 2026 SecureXLabs Security Platform. All rights reserved.
          </p>
          <div className="flex gap-12 text-foreground-muted text-[10px] font-mono tracking-widest uppercase">
            <Link
              to="/privacy"
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Terms
            </Link>
            <Link
              to="/cookies"
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
