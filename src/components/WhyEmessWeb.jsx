import { motion } from "framer-motion";
import {
  Zap,
  Smartphone,
  ShieldCheck,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";

const reasons = [
  {
    number: "01",
    icon: Zap,
    title: "Built for speed",
    description:
      "We focus on clean, efficient websites that feel fast and responsive across devices.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
    glow: "bg-amber-400/10",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile first",
    description:
      "Your customers are everywhere. Your website should work beautifully wherever they find you.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    glow: "bg-cyan-400/10",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Built to last",
    description:
      "Modern technologies and maintainable code make it easier to improve your website as you grow.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    glow: "bg-emerald-400/10",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Direct collaboration",
    description:
      "You work directly with the people building your website, keeping communication simple and transparent.",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
    glow: "bg-violet-400/10",
  },
];

export default function WhyEmessWeb() {
  return (
    <section
      id="why"
      className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24 lg:py-28"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          {/* Left */}
          <Reveal direction="left">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Why emessWeb
              </p>

              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                Your website should work{" "}
                <span className="text-black/25 dark:text-white/30">
                  for your business.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-black/50 dark:text-white/40">
                We don't build websites just to fill a screen. We build digital
                experiences that communicate what your business does and make it
                easier for customers to take the next step.
              </p>

              <motion.a
                href="#contact"
                whileHover={{
                  x: 5,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3.5 text-sm font-semibold text-black transition-all hover:border-cyan-400/50 hover:bg-cyan-400/5 dark:border-white/15 dark:text-white"
              >
                Talk about your project
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>
            </div>
          </Reveal>

          {/* Right */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <Reveal
                  key={reason.title}
                  direction={index % 2 === 0 ? "up" : "right"}
                  delay={index * 0.1}
                >
                  <motion.div
                    whileHover={{
                      y: -8,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className={`group relative h-full overflow-hidden rounded-3xl border border-black/10 bg-black/[0.02] p-7 transition-all duration-500 dark:border-white/10 dark:bg-white/[0.03] hover:bg-black/[0.04] dark:hover:bg-white/[0.05] ${reason.border}`}
                  >
                    {/* Glow */}
                    <div
                      className={`pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-0 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-100 ${reason.glow}`}
                    />

                    <div className="relative">
                      <div className="mb-8 flex items-center justify-between">
                        <motion.div
                          whileHover={{
                            scale: 1.1,
                            rotate: 5,
                          }}
                          className={`flex h-11 w-11 items-center justify-center rounded-xl border ${reason.border} ${reason.bg} ${reason.color}`}
                        >
                          <Icon size={20} />
                        </motion.div>

                        <span className="text-xs font-medium text-black/20 dark:text-white/20">
                          {reason.number}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold">{reason.title}</h3>

                      <p className="mt-3 text-sm leading-relaxed text-black/50 dark:text-white/40">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <Reveal direction="up" delay={0.3}>
          <div className="mt-12 border-t border-black/10 pt-6 dark:border-white/10">
            <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
              <span className="text-black/30 dark:text-white/25">
                Design with purpose. Development with precision.
              </span>

              <span className="text-black/20 dark:text-white/20">emessWeb</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
