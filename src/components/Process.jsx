import { motion } from "framer-motion";
import { Lightbulb, Palette, Code2, Rocket, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Discover",
    description:
      "We understand your business, audience, goals, and what makes your brand different.",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design",
    description:
      "We turn the strategy into a visual experience that feels clear, modern, and memorable.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build",
    description:
      "We develop the experience with responsive layouts, smooth interactions, and clean code.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "Your website goes live, optimized and ready to turn visitors into customers.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal direction="left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            Our process
          </p>
        </Reveal>

        <div className="mb-12 max-w-3xl md:mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl font-bold tracking-tight md:text-6xl"
          >
            <motion.span
              className="inline-block"
              variants={{
                hidden: {
                  opacity: 0,
                  x: -80,
                  y: 20,
                  rotate: -8,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              From{" "}
            </motion.span>

            <motion.span
              className="inline-block"
              variants={{
                hidden: {
                  opacity: 0,
                  x: 70,
                  y: -30,
                  rotate: 7,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
               idea
            </motion.span>

            <br />

            <motion.span
              className="inline-block"
              variants={{
                hidden: {
                  opacity: 0,
                  x: -50,
                  y: 40,
                  rotate: 6,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  transition: {
                    duration: 0.75,
                    delay: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              to{" "}
            </motion.span>

            <motion.span
              className="inline-block text-black/30 dark:text-white/35"
              variants={{
                hidden: {
                  opacity: 0,
                  x: 90,
                  y: 30,
                  rotate: -6,
                  scale: 0.9,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  transition: {
                    duration: 0.9,
                    delay: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              impact.
            </motion.span>
          </motion.h2>

          <Reveal direction="up" delay={0.35}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/50 dark:text-white/40">
              A simple process built around clarity, creativity, and execution.
            </p>
          </Reveal>
        </div>

        <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-16 hidden h-px bg-gradient-to-r from-violet-400/20 via-cyan-400/20 to-amber-400/20 lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal
                key={step.number}
                direction={index % 2 === 0 ? "up" : "down"}
                delay={index * 0.12}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="group relative h-full rounded-3xl border border-black/10 bg-black/[0.02] p-7 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${step.border} ${step.bg} ${step.color} transition-transform duration-500 group-hover:scale-110`}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <span className="text-sm text-black/20 dark:text-white/20">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold">{step.title}</h3>

                  <p className="mt-4 leading-relaxed text-black/50 dark:text-white/40">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <ArrowRight
                      size={18}
                      className="absolute bottom-7 right-7 text-black/15 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black/40 dark:text-white/15 dark:group-hover:text-white/40"
                    />
                  )}
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal direction="up" delay={0.4}>
          <div className="mt-12 flex flex-wrap items-center gap-3 text-sm text-black/40 dark:text-white/30">
            <span>Strategy</span>
            <ArrowRight size={14} />
            <span>Design</span>
            <ArrowRight size={14} />
            <span>Development</span>
            <ArrowRight size={14} />
            <span>Launch</span>

            <span className="ml-2 hidden h-1 w-1 rounded-full bg-black/20 dark:bg-white/20 md:block" />

            <span className="font-medium text-black/60 dark:text-white/50">
              Built with intention. Delivered with precision.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
