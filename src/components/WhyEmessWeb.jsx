import { motion } from "framer-motion";
import {
  Zap,
  Smartphone,
  ShieldCheck,
  MessageCircle,
  ArrowUpRight,
  Check,
} from "lucide-react";
import Reveal from "./Reveal";

const reasons = [
  {
    number: "01",
    icon: Zap,
    title: "Built for speed",
    description:
      "We focus on clean, efficient websites that feel fast and responsive across devices.",
    color: "#FF6B35",
    bg: "#FFE4D8",
    accent: "#FF6B35",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile first",
    description:
      "Your customers are everywhere. Your website should work beautifully wherever they find you.",
    color: "#168A9A",
    bg: "#DDF5F5",
    accent: "#168A9A",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Built to last",
    description:
      "Modern technologies and maintainable code make it easier to improve your website as you grow.",
    color: "#7867D8",
    bg: "#EAE6FF",
    accent: "#7867D8",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Direct collaboration",
    description:
      "You work directly with the people building your website, keeping communication simple and transparent.",
    color: "#D99200",
    bg: "#FFF0C9",
    accent: "#D99200",
  },
];

export default function WhyEmessWeb() {
  return (
    <section
      id="why"
      className="
        relative overflow-hidden
        bg-[#FFF9F2] px-6 py-24 text-[#171310]
        transition-colors duration-500
        dark:bg-[#171310]
        dark:text-[#FFF9F2]
        md:px-10 md:py-32
      "
    >
      {/* Background decoration */}
      <div
        className="
          pointer-events-none absolute -left-40 top-1/3
          h-96 w-96 rounded-full
          bg-[#FFB84D]/20 blur-[120px]
          dark:bg-[#FF6B35]/10
        "
      />

      <div
        className="
          pointer-events-none absolute -right-40 bottom-0
          h-96 w-96 rounded-full
          bg-[#7867D8]/15 blur-[120px]
          dark:bg-[#7867D8]/10
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
          {/* LEFT — VISUAL */}
          <Reveal direction="left">
            <div className="relative mx-auto w-full max-w-xl">
              {/* Main decorative glow */}
              <div
                className="
                  absolute left-1/2 top-1/2 h-80 w-80
                  -translate-x-1/2 -translate-y-1/2
                  rounded-full bg-[#FFB84D]/20 blur-3xl
                  dark:bg-[#FF6B35]/10
                "
              />

              {/* Decorative shapes */}
              <motion.div
                animate={{
                  rotate: [0, 8, -5, 0],
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none absolute -right-5 -top-7
                  z-20 hidden h-16 w-16 rotate-12
                  rounded-[1.2rem]
                  border-2 border-[#171310]
                  bg-[#7867D8]
                  shadow-[5px_5px_0_#171310]
                  dark:border-[#FFF9F2]
                  dark:shadow-[5px_5px_0_#FF6B35]
                  sm:block
                "
              />

              <motion.div
                animate={{
                  rotate: [0, -10, 0],
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  pointer-events-none absolute -bottom-6 -left-5
                  z-20 hidden h-11 w-11 rounded-full
                  border-2 border-[#171310]
                  bg-[#65D6D6]
                  dark:border-[#FFF9F2]
                  sm:block
                "
              />

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute -left-2 top-12 z-20 hidden
                  rounded-2xl border-2 border-[#171310]
                  bg-[#FFF9F2] p-4
                  shadow-[5px_5px_0_#171310]
                  dark:border-[#FFF9F2]
                  dark:bg-[#211914]
                  dark:shadow-[5px_5px_0_#FF6B35]
                  sm:block
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-xl border-2 border-[#171310]
                      bg-[#DDF5F5]
                      text-[#168A9A]
                      dark:border-[#FFF9F2]
                    "
                  >
                    <Check size={19} strokeWidth={2.5} />
                  </div>

                  <div>
                    <p className="text-xs font-bold">Project ready</p>

                    <p className="text-[11px] text-[#8F867E] dark:text-white/35">
                      Built with purpose
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Main workspace */}
              <div
                className="
                  relative z-10 rounded-[2rem]
                  border-2 border-[#171310]
                  bg-[#FFF9F2] p-3
                  shadow-[9px_9px_0_#171310]
                  dark:border-[#FFF9F2]
                  dark:bg-[#211914]
                  dark:shadow-[9px_9px_0_#FF6B35]
                "
              >
                {/* Browser header */}
                <div className="flex items-center gap-2 px-3 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B35]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFB84D]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#65D6D6]" />

                  <div
                    className="
                      ml-4 h-7 flex-1 rounded-lg
                      bg-[#F0EAE3]
                      dark:bg-white/10
                    "
                  />
                </div>

                {/* Dashboard */}
                <div
                  className="
                    overflow-hidden rounded-[1.5rem]
                    bg-[#F7F2EB]
                    dark:bg-[#171310]
                  "
                >
                  <div className="flex">
                    {/* Sidebar */}
                    <div
                      className="
                        hidden w-20 flex-shrink-0
                        border-r border-[#E5DDD5]
                        bg-[#FFF9F2] p-3
                        sm:block
                        dark:border-white/10
                        dark:bg-[#211914]
                      "
                    >
                      <div
                        className="
                          mx-auto mb-8 h-9 w-9 rounded-xl
                          bg-[#FF6B35]
                          shadow-[3px_3px_0_#171310]
                          dark:shadow-[3px_3px_0_#7867D8]
                        "
                      />

                      <div className="space-y-4">
                        <div className="mx-auto h-8 w-8 rounded-lg bg-[#FFE4D8]" />
                        <div className="mx-auto h-8 w-8 rounded-lg bg-[#F0EAE3] dark:bg-white/5" />
                        <div className="mx-auto h-8 w-8 rounded-lg bg-[#F0EAE3] dark:bg-white/5" />
                        <div className="mx-auto h-8 w-8 rounded-lg bg-[#F0EAE3] dark:bg-white/5" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="h-3 w-20 rounded-full bg-[#D8D0C8] dark:bg-white/15" />

                          <div className="mt-2 h-5 w-36 rounded-md bg-[#171310] dark:bg-[#FFF9F2]/80" />
                        </div>

                        <div className="h-8 w-8 rounded-full bg-[#DDF5F5]" />
                      </div>

                      {/* Stats */}
                      <div className="mt-6 grid grid-cols-3 gap-3">
                        <div
                          className="
                            rounded-xl bg-[#FFF9F2] p-3
                            shadow-sm dark:bg-[#211914]
                          "
                        >
                          <div className="h-2 w-10 rounded-full bg-[#FFE4D8]" />
                          <div className="mt-3 h-4 w-12 rounded bg-[#171310]/80 dark:bg-white/70" />
                        </div>

                        <div
                          className="
                            rounded-xl bg-[#FFF9F2] p-3
                            shadow-sm dark:bg-[#211914]
                          "
                        >
                          <div className="h-2 w-10 rounded-full bg-[#EAE6FF]" />
                          <div className="mt-3 h-4 w-12 rounded bg-[#171310]/80 dark:bg-white/70" />
                        </div>

                        <div
                          className="
                            rounded-xl bg-[#FFF9F2] p-3
                            shadow-sm dark:bg-[#211914]
                          "
                        >
                          <div className="h-2 w-10 rounded-full bg-[#DDF5F5]" />
                          <div className="mt-3 h-4 w-12 rounded bg-[#171310]/80 dark:bg-white/70" />
                        </div>
                      </div>

                      {/* Chart */}
                      <div
                        className="
                          mt-4 rounded-xl bg-[#FFF9F2] p-4
                          shadow-sm dark:bg-[#211914]
                        "
                      >
                        <div className="flex items-center justify-between">
                          <div className="h-2.5 w-20 rounded-full bg-[#D8D0C8] dark:bg-white/15" />

                          <div className="h-6 w-14 rounded-full bg-[#FFE4D8]" />
                        </div>

                        <div className="relative mt-5 h-28">
                          <div className="absolute bottom-0 left-0 h-16 w-3 rounded-t bg-[#FFE4D8]" />
                          <div className="absolute bottom-0 left-[14%] h-20 w-3 rounded-t bg-[#FFB84D]" />
                          <div className="absolute bottom-0 left-[28%] h-12 w-3 rounded-t bg-[#EAE6FF]" />
                          <div className="absolute bottom-0 left-[42%] h-24 w-3 rounded-t bg-[#7867D8]/60" />
                          <div className="absolute bottom-0 left-[56%] h-16 w-3 rounded-t bg-[#DDF5F5]" />
                          <div className="absolute bottom-0 left-[70%] h-28 w-3 rounded-t bg-[#168A9A]" />
                          <div className="absolute bottom-0 left-[84%] h-24 w-3 rounded-t bg-[#FF6B35]" />
                        </div>
                      </div>

                      {/* Bottom cards */}
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="h-16 rounded-xl bg-[#DDF5F5]" />
                        <div className="h-16 rounded-xl bg-[#EAE6FF]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating code card */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute -bottom-5 -right-2 z-20
                  rounded-2xl border-2 border-[#171310]
                  bg-[#FFF9F2] p-4
                  shadow-[5px_5px_0_#7867D8]
                  dark:border-[#FFF9F2]
                  dark:bg-[#211914]
                  dark:shadow-[5px_5px_0_#FF6B35]
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-xl border-2 border-[#171310]
                      bg-[#EAE6FF]
                      dark:border-[#FFF9F2]
                    "
                  >
                    <span className="font-mono text-sm font-bold text-[#7867D8]">
                      {"</>"}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs font-bold">Clean development</p>

                    <p className="text-[11px] text-[#8F867E] dark:text-white/35">
                      Modern & maintainable
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>

          {/* RIGHT — CONTENT */}
          <div>
            <Reveal direction="right">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#7867D8]" />

                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#7867D8]">
                    Why emessWeb
                  </p>
                </div>

                <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
                  Your website should work{" "}
                  <span className="text-[#A9A099] dark:text-white/30">
                    for your business.
                  </span>
                </h2>

                <p className="mt-7 max-w-xl text-base leading-8 text-[#756D66] dark:text-white/55 md:text-lg">
                  We don't build websites just to fill a screen. We build
                  digital experiences that communicate what your business does
                  and make it easier for customers to take the next step.
                </p>

                <motion.a
                  href="#contact"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    group mt-8 inline-flex items-center gap-2
                    rounded-full border-2 border-[#171310]
                    bg-[#171310] px-6 py-3.5
                    text-sm font-bold text-[#FFF9F2]
                    shadow-[4px_4px_0_#FF6B35]
                    transition-all
                    hover:bg-[#FF6B35]
                    hover:shadow-[4px_4px_0_#171310]
                    dark:border-[#FFF9F2]
                    dark:bg-[#FFF9F2]
                    dark:text-[#171310]
                    dark:shadow-[4px_4px_0_#FF6B35]
                    dark:hover:bg-[#FF6B35]
                    dark:hover:text-white
                    dark:hover:shadow-[4px_4px_0_#FFF9F2]
                  "
                >
                  Talk about your project
                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </motion.a>
              </div>
            </Reveal>

            {/* Reasons */}
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
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
                        y: -7,
                        rotate: index % 2 === 0 ? 0.5 : -0.5,
                      }}
                      transition={{ duration: 0.3 }}
                      className="
                        group relative h-full overflow-hidden
                        rounded-[1.5rem]
                        border-2 border-[#171310]
                        bg-[#FFF9F2] p-6
                        shadow-[5px_5px_0_#171310]
                        transition-all duration-500
                        dark:border-[#FFF9F2]
                        dark:bg-[#211914]
                        dark:shadow-[5px_5px_0_#FF6B35]
                      "
                    >
                      {/* Glow */}
                      <div
                        className="
                          pointer-events-none absolute -right-16 -top-16
                          h-32 w-32 rounded-full
                          opacity-0 blur-3xl
                          transition-all duration-500
                          group-hover:scale-150
                          group-hover:opacity-40
                        "
                        style={{
                          backgroundColor: reason.accent,
                        }}
                      />

                      <div className="relative">
                        <div className="mb-7 flex items-center justify-between">
                          <motion.div
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                            }}
                            className="
                              flex h-11 w-11 items-center justify-center
                              rounded-xl border-2 border-[#171310]
                              shadow-[3px_3px_0_#171310]
                              dark:border-[#FFF9F2]
                              dark:shadow-[3px_3px_0_#FF6B35]
                            "
                            style={{
                              backgroundColor: reason.bg,
                              color: reason.color,
                            }}
                          >
                            <Icon size={20} />
                          </motion.div>

                          <span className="text-xs font-black text-[#C8BFB7] dark:text-white/20">
                            {reason.number}
                          </span>
                        </div>

                        <div
                          className="mb-4 h-1 w-8 rounded-full"
                          style={{
                            backgroundColor: reason.accent,
                          }}
                        />

                        <h3 className="text-xl font-bold tracking-tight">
                          {reason.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-[#756D66] dark:text-white/50">
                          {reason.description}
                        </p>
                      </div>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <Reveal direction="up" delay={0.3}>
          <div
            className="
              mt-16 border-t-2 border-[#171310]/10 pt-6
              dark:border-white/10
            "
          >
            <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[#8F867E] dark:text-white/35">
                Design with purpose. Development with precision.
              </span>

              <span className="font-black text-[#C8BFB7] dark:text-white/20">
                emessWeb
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
