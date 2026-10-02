import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";

const links = {
  Explore: [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "Why emessWeb", href: "#why" },
    { label: "Contact", href: "#contact" },
  ],
};

const socials = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/10 px-6 pb-8 pt-16 dark:border-white/10 md:px-10">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <Reveal direction="left">
            <div>
              <motion.a
                href="#"
                whileHover={{ x: 2 }}
                className="group inline-block text-2xl font-bold tracking-tight text-black dark:text-white"
              >
                emess
                <span className="text-cyan-400">Web</span>
                <span className="text-cyan-400 transition-transform duration-300 group-hover:translate-x-1">
                  .
                </span>
              </motion.a>

              <p className="mt-5 max-w-sm leading-relaxed text-black/40 dark:text-white/35">
                Modern websites and digital experiences for businesses ready to
                build a stronger presence online.
              </p>

              <motion.a
                href="#contact"
                whileHover={{ x: 5 }}
                className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-black transition-colors hover:text-cyan-500 dark:text-white dark:hover:text-cyan-400"
              >
                Start a project
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>

              {/* Socials */}
              <div className="mt-7 flex items-center gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/[0.02] text-black/40 transition-all hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/40 dark:hover:text-cyan-400"
                  >
                    {social.label === "Instagram" && (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle
                          cx="17.5"
                          cy="6.5"
                          r="1"
                          fill="currentColor"
                          stroke="none"
                        />
                      </svg>
                    )}

                    {social.label === "Facebook" && (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v5h4v-5h3l1-4h-4V9c0-.6.4-1 1-1Z" />
                      </svg>
                    )}

                    {social.label === "LinkedIn" && (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.75-2-5.5-4.7-5.5-2.15 0-3.1 1.18-3.63 2.01V8.5H9.2V21h3.47v-6.18c0-1.63.31-3.21 2.33-3.21 1.98 0 2 1.86 2 3.31V21H21v-7.15Z" />
                      </svg>
                    )}

                    {social.label === "X" && (
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="currentColor"
                      >
                        <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.6h1.73L8.26 4.26H6.4L17.8 19.6Z" />
                      </svg>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Explore */}
          <Reveal direction="up" delay={0.1}>
            <div>
              <h3 className="text-sm font-semibold text-black dark:text-white">
                Explore
              </h3>

              <div className="mt-5 flex flex-col gap-4">
                {links.Explore.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-2 text-sm text-black/40 transition-colors hover:text-cyan-500 dark:text-white/35 dark:hover:text-cyan-400"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Company */}
          <Reveal direction="right" delay={0.2}>
            <div>
              <h3 className="text-sm font-semibold text-black dark:text-white">
                Company
              </h3>

              <div className="mt-5 flex flex-col gap-4">
                {links.Company.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-2 text-sm text-black/40 transition-colors hover:text-cyan-500 dark:text-white/35 dark:hover:text-cyan-400"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </motion.a>
                ))}
              </div>

              {/* Contact shortcuts */}
              <div className="mt-7 space-y-3">
                <a
                  href="mailto:emess2g@gmail.com"
                  className="flex items-center gap-2 text-xs text-black/35 transition-colors hover:text-cyan-500 dark:text-white/30 dark:hover:text-cyan-400"
                >
                  <Mail size={14} />
                  emess2g@gmail.com
                </a>

                <a
                  href="https://wa.me/233550862954"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-black/35 transition-colors hover:text-cyan-500 dark:text-white/30 dark:hover:text-cyan-400"
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom */}
        <Reveal direction="fade" delay={0.3}>
          <div className="mt-16 flex flex-col gap-3 border-t border-black/10 pt-7 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-black/25 dark:text-white/25">
              © {new Date().getFullYear()} emessWeb. All rights reserved.
            </p>

            <p className="text-xs text-black/20 dark:text-white/20">
              Designed & built by emessWeb.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
