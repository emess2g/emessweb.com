import { motion } from "framer-motion";
import {
  Lightbulb,
  Palette,
  Code2,
  Rocket,
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Circle,
} from "lucide-react";
import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn your business, your audience, and what makes your brand different.",
    icon: Lightbulb,
    color: "#FF6B35",
    bg: "#FFE4D8",
    position: "left",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Ideas become a visual direction that feels clear, memorable, and unmistakably yours.",
    icon: Palette,
    color: "#7867D8",
    bg: "#EAE6FF",
    position: "right",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We turn the design into a fast, responsive experience with clean, reliable code.",
    icon: Code2,
    color: "#168A9A",
    bg: "#DDF5F5",
    position: "left",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Your new website goes live, ready to attract visitors and turn them into customers.",
    icon: Rocket,
    color: "#D99200",
    bg: "#FFF0C9",
    position: "right",
  },
];

function DiscoveryIllustration({ color }) {
  return (
    <div className="relative h-full w-full">
      <motion.div
        animate={{ rotate: [0, 8, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-8 top-8 h-20 w-20 rounded-full border-[3px]"
        style={{ borderColor: color }}
      />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="
          absolute right-8 top-5 flex h-14 w-14 items-center justify-center
          rounded-2xl border-2 border-[#171310]
          bg-white shadow-[4px_4px_0_#171310]
          dark:border-[#FFF9F2]
          dark:bg-[#211914]
          dark:shadow-[4px_4px_0_#FF6B35]
        "
      >
        <Sparkles size={22} style={{ color }} />
      </motion.div>

      <div
        className="
          absolute left-1/2 top-1/2 flex h-28 w-28
          -translate-x-1/2 -translate-y-1/2 items-center justify-center
          rounded-full border-[3px] border-[#171310]
          bg-white shadow-[7px_7px_0_#171310]
          dark:border-[#FFF9F2]
          dark:bg-[#211914]
          dark:shadow-[7px_7px_0_#FF6B35]
        "
      >
        <Lightbulb size={52} strokeWidth={1.6} style={{ color }} />
      </div>

      <div
        className="absolute bottom-7 left-8 h-3 w-3 rounded-full"
        style={{ backgroundColor: color }}
      />

      <div
        className="absolute bottom-8 right-10 h-16 w-16 rounded-[1.2rem]"
        style={{
          backgroundColor: color,
          opacity: 0.18,
        }}
      />
    </div>
  );
}

function DesignIllustration({ color }) {
  return (
    <div className="relative h-full w-full">
      <motion.div
        animate={{
          rotate: [0, 12, 0, -12, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute left-8 top-7 h-16 w-16 rounded-[1.2rem]"
        style={{ backgroundColor: color }}
      />

      <div
        className="
          absolute left-1/2 top-1/2 h-32 w-32
          -translate-x-1/2 -translate-y-1/2 rotate-[-6deg]
          rounded-[1.5rem] border-2 border-[#171310]
          bg-white p-4 shadow-[6px_6px_0_#171310]
          dark:border-[#FFF9F2]
          dark:bg-[#211914]
          dark:shadow-[6px_6px_0_#FF6B35]
        "
      >
        <div className="grid h-full grid-cols-2 gap-2">
          <div className="rounded-xl bg-[#FFB84D]" />
          <div className="rounded-xl bg-[#65D6D6]" />
          <div className="rounded-xl bg-[#7867D8]" />

          <div
            className="flex items-center justify-center rounded-xl"
            style={{ backgroundColor: color }}
          >
            <Palette size={22} className="text-white" />
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -7, 0], rotate: [4, 0, 4] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute right-8 top-10 flex h-11 w-11 items-center justify-center
          rounded-full border-2 border-[#171310]
          bg-[#FFB84D]
          dark:border-[#FFF9F2]
          dark:shadow-[3px_3px_0_#FF6B35]
        "
      >
        <Sparkles size={18} />
      </motion.div>

      <div
        className="absolute bottom-7 left-10 h-3 w-3 rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

function BuildIllustration({ color }) {
  return (
    <div className="relative h-full w-full">
      <div
        className="
          absolute left-1/2 top-1/2 w-40
          -translate-x-1/2 -translate-y-1/2
          rounded-[1.5rem] border-2 border-[#171310]
          bg-[#171310] p-3 shadow-[7px_7px_0_#168A9A]
          dark:border-[#FFF9F2]
          dark:bg-[#211914]
          dark:shadow-[7px_7px_0_#65D6D6]
        "
      >
        <div className="rounded-xl bg-white p-4 dark:bg-[#FFF9F2]">
          <div className="mb-4 flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#FF6B35]" />
            <span className="h-2 w-2 rounded-full bg-[#FFB84D]" />
            <span className="h-2 w-2 rounded-full bg-[#65D6D6]" />
          </div>

          <div className="space-y-2">
            <div className="h-2 w-20 rounded-full bg-[#171310]" />
            <div className="h-2 w-14 rounded-full bg-[#D5CEC7]" />

            <div
              className="mt-4 h-10 rounded-lg"
              style={{
                backgroundColor: color,
                opacity: 0.75,
              }}
            />
          </div>
        </div>
      </div>

      <motion.div
        animate={{ x: [0, 6, 0], y: [0, -5, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute left-8 top-8 flex h-12 w-12 items-center justify-center
          rounded-xl border-2 border-[#171310]
          bg-white shadow-[3px_3px_0_#171310]
          dark:border-[#FFF9F2]
          dark:bg-[#211914]
          dark:shadow-[3px_3px_0_#FF6B35]
        "
      >
        <Code2 size={22} style={{ color }} />
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-8 right-8"
      >
        <Circle size={34} style={{ color }} />
      </motion.div>
    </div>
  );
}

function LaunchIllustration({ color }) {
  return (
    <div className="relative h-full w-full">
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [-4, 3, -4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          absolute left-1/2 top-1/2 flex h-28 w-28
          -translate-x-1/2 -translate-y-1/2 items-center justify-center
          rounded-full border-2 border-[#171310]
          bg-white shadow-[7px_7px_0_#171310]
          dark:border-[#FFF9F2]
          dark:bg-[#211914]
          dark:shadow-[7px_7px_0_#FF6B35]
        "
      >
        <Rocket size={50} strokeWidth={1.7} style={{ color }} />
      </motion.div>

      <motion.div
        animate={{
          y: [8, -10, 8],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-[65%] h-16 w-2 -translate-x-1/2 rounded-full"
        style={{
          background: `linear-gradient(${color}, transparent)`,
        }}
      />

      <Sparkles size={22} className="absolute left-8 top-8" style={{ color }} />

      <Sparkles
        size={16}
        className="absolute right-10 top-16"
        style={{ color }}
      />

      <span
        className="absolute bottom-8 left-10 h-3 w-3 rounded-full"
        style={{ backgroundColor: color }}
      />

      <span className="absolute bottom-9 right-12 h-2 w-2 rounded-full bg-[#FF6B35]" />
    </div>
  );
}

function StepIllustration({ index, color }) {
  if (index === 0) {
    return <DiscoveryIllustration color={color} />;
  }

  if (index === 1) {
    return <DesignIllustration color={color} />;
  }

  if (index === 2) {
    return <BuildIllustration color={color} />;
  }

  return <LaunchIllustration color={color} />;
}

export default function Process() {
  return (
    <section
      id="process"
      className="
        relative overflow-hidden
        bg-[#FFF9F2] px-6 py-28 text-[#171310]
        transition-colors duration-500
        dark:bg-[#171310]
        dark:text-[#FFF9F2]
        md:px-10 md:py-36
      "
    >
      {/* Decorative background */}
      <div
        className="
          pointer-events-none absolute left-[-100px] top-40
          h-72 w-72 rounded-full bg-[#FFB84D]/20 blur-3xl
          dark:bg-[#FF6B35]/10
        "
      />

      <div
        className="
          pointer-events-none absolute bottom-20 right-[-120px]
          h-80 w-80 rounded-full bg-[#7867D8]/15 blur-3xl
          dark:bg-[#7867D8]/10
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <Reveal direction="left">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B35]" />

                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#756D66] dark:text-white/45">
                  How we work
                </p>
              </div>
            </Reveal>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-4xl text-5xl font-semibold leading-[0.88] tracking-[-0.06em] md:text-7xl lg:text-8xl"
            >
              <motion.span
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.7 },
                  },
                }}
              >
                From
              </motion.span>{" "}
              <motion.span
                className="relative inline-block"
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.7,
                      delay: 0.1,
                    },
                  },
                }}
              >
                idea
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 150 15"
                  fill="none"
                >
                  <path
                    d="M3 9C40 2 108 3 146 8"
                    stroke="#FF6B35"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.span>
              <br />
              <motion.span
                className="text-[#A9A099] dark:text-white/35"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      delay: 0.25,
                    },
                  },
                }}
              >
                to something
              </motion.span>{" "}
              <motion.span
                className="inline-block"
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: 0.8,
                  },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.8,
                      delay: 0.35,
                    },
                  },
                }}
              >
                real.
              </motion.span>
            </motion.h2>
          </div>

          <Reveal direction="up" delay={0.2}>
            <p className="max-w-md text-base leading-relaxed text-[#756D66] dark:text-white/55 md:text-lg">
              We keep the process simple. You bring the idea. We bring the
              strategy, design, technology, and attention to detail.
            </p>
          </Reveal>
        </div>

        {/* Journey */}
        <div className="relative mt-24 md:mt-32">
          {/* Winding desktop path */}
          <svg
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-[850px] w-full lg:block"
            viewBox="0 0 1200 850"
            fill="none"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M180 110
                 C390 110 390 300 600 300
                 C810 300 810 500 1020 500
                 C1120 500 1100 720 1000 760"
              className="stroke-[#D8D0C8] dark:stroke-white/10"
              strokeWidth="3"
              strokeDasharray="8 12"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            />

            <motion.path
              d="M180 110
                 C390 110 390 300 600 300
                 C810 300 810 500 1020 500
                 C1120 500 1100 720 1000 760"
              stroke="url(#processGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 0.8 }}
              viewport={{ once: true }}
              transition={{
                duration: 2.5,
                delay: 0.2,
                ease: "easeInOut",
              }}
            />

            <defs>
              <linearGradient id="processGradient" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#FF6B35" />
                <stop offset="0.35" stopColor="#7867D8" />
                <stop offset="0.7" stopColor="#168A9A" />
                <stop offset="1" stopColor="#E09A00" />
              </linearGradient>
            </defs>
          </svg>

          {/* Mobile line */}
          <div
            className="
              absolute bottom-10 left-[27px] top-10 w-[3px]
              rounded-full bg-[#DED6CE]
              dark:bg-white/10
              lg:hidden
            "
          />

          <div className="relative space-y-20 md:space-y-28">
            {steps.map((step, index) => {
              return (
                <Reveal
                  key={step.number}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 0.12}
                >
                  <div
                    className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-20 ${
                      index % 2 === 1 ? "lg:text-right" : ""
                    }`}
                  >
                    {/* Illustration */}
                    <div
                      className={`relative pl-16 lg:pl-0 ${
                        index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <motion.div
                        whileHover={{
                          rotate: index % 2 === 0 ? 2 : -2,
                          scale: 1.025,
                        }}
                        className="
                          relative h-64 overflow-hidden rounded-[2.5rem]
                          border-2 border-[#171310]
                          shadow-[8px_8px_0_#171310]
                          transition-shadow duration-300
                          dark:border-[#FFF9F2]
                          dark:shadow-[8px_8px_0_#FF6B35]
                          md:h-80
                        "
                        style={{
                          backgroundColor: step.bg,
                        }}
                      >
                        <StepIllustration index={index} color={step.color} />

                        {/* Step number */}
                        <span
                          className="absolute bottom-5 left-6 text-7xl font-black leading-none tracking-[-0.08em]"
                          style={{
                            color: step.color,
                            opacity: 0.14,
                          }}
                        >
                          {step.number}
                        </span>
                      </motion.div>

                      {/* Mobile number */}
                      <div
                        className="
                          absolute left-0 top-8 flex h-14 w-14
                          items-center justify-center rounded-full
                          border-2 border-[#171310]
                          bg-white text-sm font-black
                          shadow-[4px_4px_0_#171310]
                          dark:border-[#FFF9F2]
                          dark:bg-[#211914]
                          dark:shadow-[4px_4px_0_#FF6B35]
                          lg:hidden
                        "
                        style={{ color: step.color }}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* Text */}
                    <div
                      className={`relative ${
                        index % 2 === 1
                          ? "lg:order-1 lg:pr-12"
                          : "lg:order-2 lg:pl-12"
                      }`}
                    >
                      <div
                        className={`mb-5 flex items-center gap-3 ${
                          index % 2 === 1 ? "lg:justify-end" : ""
                        }`}
                      >
                        <span
                          className="text-xs font-black uppercase tracking-[0.22em]"
                          style={{ color: step.color }}
                        >
                          Step {step.number}
                        </span>

                        <span
                          className="h-2 w-2 rounded-full"
                          style={{
                            backgroundColor: step.color,
                          }}
                        />
                      </div>

                      <h3 className="text-4xl font-bold tracking-[-0.04em] md:text-5xl">
                        {step.title}
                      </h3>

                      <p
                        className={`mt-5 max-w-md text-base leading-relaxed text-[#756D66] dark:text-white/55 md:text-lg ${
                          index % 2 === 1 ? "lg:ml-auto" : ""
                        }`}
                      >
                        {step.description}
                      </p>

                      <motion.div
                        whileHover={{
                          x: index % 2 === 0 ? 5 : -5,
                        }}
                        className={`mt-7 inline-flex items-center gap-2 text-sm font-bold ${
                          index % 2 === 1 ? "lg:flex-row-reverse" : ""
                        }`}
                        style={{ color: step.color }}
                      >
                        {index === 0 && "Start with a conversation"}
                        {index === 1 && "Shape the visual direction"}
                        {index === 2 && "Bring the idea to life"}
                        {index === 3 && "Put it out into the world"}

                        <ArrowUpRight size={17} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Mobile connector arrow */}
                  {index < steps.length - 1 && (
                    <div className="ml-[15px] mt-8 lg:hidden">
                      <ArrowDown
                        size={20}
                        className="text-[#B8AEA5] dark:text-white/25"
                      />
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <Reveal direction="up" delay={0.4}>
          <div
            className="
              mt-28 flex flex-col items-start justify-between gap-6
              border-t-2 border-[#171310]/10 pt-8
              dark:border-white/10
              md:flex-row md:items-center
            "
          >
            <p className="max-w-xl text-lg font-medium leading-relaxed md:text-xl">
              Good websites don't happen by accident.
              <span className="text-[#A49A92] dark:text-white/35">
                {" "}
                They're shaped one thoughtful decision at a time.
              </span>
            </p>

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6B35] text-white">
                <Sparkles size={17} />
              </span>

              <span className="text-sm font-bold">Built with intention.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
