import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle, Sparkles } from "lucide-react";
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
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/essuon-emmanuel-0b027a208/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BpNn1iPMESz24RhIjCCCJ3A%3D%3D",
  },
  {
    label: "X",
    href: "https://x.com/emess2g",
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#171310] px-6 pb-7 pt-20 text-[#FFF9F2] md:px-10 md:pt-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#FF6B35]/20 blur-3xl" />

      <div className="pointer-events-none absolute right-[-100px] top-10 h-80 w-80 rounded-full bg-[#7867D8]/20 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[-120px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#65D6D6]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Big CTA */}
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-[#FFF9F2]/15 bg-[#FFF9F2] px-7 py-12 text-[#171310] shadow-[8px_8px_0_#FF6B35] md:px-12 md:py-16 lg:px-16">
            {/* Decorative shapes */}
            <motion.div
              animate={{
                rotate: [0, 8, 0, -8, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-[#7867D8]"
            />

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[-30px] right-36 h-28 w-28 rounded-[2rem] bg-[#65D6D6]"
            />

            <div className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#171310] bg-[#FFB84D] shadow-[3px_3px_0_#171310] md:right-12 md:top-10">
              <Sparkles size={19} />
            </div>

            <div className="relative max-w-4xl">
              <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#756D66]">
                Have an idea?
              </p>

              <h2 className="max-w-4xl text-5xl font-black leading-[0.88] tracking-[-0.06em] md:text-7xl lg:text-8xl">
                Let's make
                <br />
                something{" "}
                <span className="relative inline-block text-[#FF6B35]">
                  worth
                  <svg
                    className="absolute -bottom-3 left-0 w-full"
                    viewBox="0 0 180 18"
                    fill="none"
                  >
                    <path
                      d="M4 11C50 3 125 4 176 10"
                      stroke="#171310"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                seeing.
              </h2>

              <p className="mt-7 max-w-xl text-base leading-relaxed text-[#756D66] md:text-lg">
                Tell us what you're building, what isn't working, or simply
                where you want to go. We'll figure out the next step together.
              </p>

              <motion.a
                href="#contact"
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group mt-9 inline-flex items-center gap-4 rounded-full border-2 border-[#171310] bg-[#171310] px-6 py-3.5 text-sm font-bold text-white shadow-[4px_4px_0_#7867D8] transition-all duration-300 hover:bg-[#FF6B35]"
              >
                Start a project
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#171310] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </motion.a>
            </div>
          </div>
        </Reveal>

        {/* Main footer */}
        <div className="mt-24 grid gap-14 lg:grid-cols-[1.6fr_0.7fr_0.7fr]">
          {/* Brand */}
          <Reveal direction="left">
            <div>
              <motion.a
                href="#"
                whileHover={{
                  x: 3,
                }}
                className="group inline-block text-4xl font-black tracking-[-0.06em]"
              >
                emess
                <span className="text-[#65D6D6]">Web</span>
                <span className="text-[#FF6B35] transition-transform duration-300 group-hover:translate-x-1">
                  .
                </span>
              </motion.a>

              <p className="mt-5 max-w-md text-base leading-relaxed text-white/45">
                Modern websites and digital experiences for businesses ready to
                build a stronger presence online.
              </p>

              {/* Socials */}
              <div className="mt-8 flex items-center gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={
                      social.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{
                      y: -5,
                      rotate: -3,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/15 bg-white/[0.04] text-white/50 transition-all duration-300 hover:border-[#FF6B35] hover:bg-[#FF6B35] hover:text-white"
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
              <div className="mb-6 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B35]" />

                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/50">
                  Explore
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                {links.Explore.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{
                      x: 5,
                    }}
                    className="group flex items-center gap-2 text-sm font-medium text-white/55 transition-colors hover:text-[#65D6D6]"
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
              <div className="mb-6 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#7867D8]" />

                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/50">
                  Company
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                {links.Company.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{
                      x: 5,
                    }}
                    className="group flex items-center gap-2 text-sm font-medium text-white/55 transition-colors hover:text-[#FFB84D]"
                  >
                    {link.label}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </motion.a>
                ))}
              </div>

              {/* Contact */}
              <div className="mt-8 space-y-4">
                <a
                  href="mailto:emess2g@gmail.com"
                  className="group flex items-center gap-3 text-xs text-white/40 transition-colors hover:text-[#65D6D6]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06]">
                    <Mail size={14} />
                  </span>
                  emess2g@gmail.com
                </a>

                <a
                  href="https://wa.me/233550862954"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-xs text-white/40 transition-colors hover:text-[#65D6D6]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06]">
                    <MessageCircle size={14} />
                  </span>
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom */}
        <Reveal direction="fade" delay={0.3}>
          <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/25">
              © {new Date().getFullYear()} emessWeb. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-xs text-white/25">
              <span>Designed & built by</span>

              <span className="font-bold text-white/50">emessWeb</span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B35]" />
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
