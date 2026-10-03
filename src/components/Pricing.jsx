import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Sparkles,
  Zap,
  Crown,
  WandSparkles,
} from "lucide-react";
import Reveal from "./Reveal";

const plans = [
  {
    name: "Starter",
    eyebrow: "Get online",
    description:
      "A polished foundation for businesses ready to establish a professional online presence.",
    price: "₵1,500+",
    icon: Zap,
    color: "#FF6B35",
    soft: "#FFE3D7",
    features: [
      "Professional business website",
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact / inquiry form",
      "Basic SEO setup",
      "Social media integration",
    ],
  },
  {
    name: "Growth",
    eyebrow: "Go further",
    description:
      "A stronger digital experience designed for businesses ready to look sharper and do more online.",
    price: "₵3,500+",
    icon: Crown,
    color: "#7867D8",
    soft: "#E9E4FF",
    popular: true,
    features: [
      "Everything in Starter",
      "Up to 10 pages",
      "Custom UI/UX design",
      "Advanced animations",
      "Performance optimization",
      "Analytics integration",
      "Blog / content section",
    ],
  },
  {
    name: "Custom",
    eyebrow: "Build bigger",
    description:
      "For ambitious projects that need custom functionality, integrations, or a more advanced digital product.",
    price: "Let's talk",
    icon: WandSparkles,
    color: "#168A9A",
    soft: "#DDF5F5",
    features: [
      "Everything in Growth",
      "Custom functionality",
      "Advanced integrations",
      "Custom dashboards",
      "Booking / ecommerce systems",
      "Third-party API integrations",
      "Ongoing development support",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#F7F2EB] px-6 py-28 text-[#171310] transition-colors duration-500 dark:bg-[#171310] dark:text-[#FFF9F2] md:px-10 md:py-36"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#FFB84D]/20 blur-3xl dark:bg-[#FF6B35]/10" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#7867D8]/15 blur-3xl dark:bg-[#7867D8]/10" />

      <div className="pointer-events-none absolute left-[45%] top-[42%] h-40 w-40 rounded-full border-[20px] border-[#65D6D6]/10 dark:border-[#65D6D6]/5" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <Reveal direction="left">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B35]" />

                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#756D66] dark:text-white/45">
                  Simple pricing
                </p>
              </div>
            </Reveal>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-8xl"
            >
              <motion.span
                className="inline-block"
                variants={{
                  hidden: {
                    opacity: 0,
                    x: -50,
                    rotate: -4,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    rotate: 0,
                    transition: {
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                Pick your
              </motion.span>{" "}
              <motion.span
                className="relative inline-block text-[#7867D8]"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                    rotate: 4,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    transition: {
                      duration: 0.7,
                      delay: 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                starting point.
                <svg
                  className="absolute -bottom-4 left-0 w-full"
                  viewBox="0 0 300 18"
                  fill="none"
                >
                  <path
                    d="M4 10C80 2 210 3 296 10"
                    stroke="#FF6B35"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.span>
            </motion.h2>
          </div>

          <Reveal direction="up" delay={0.25}>
            <div className="max-w-md">
              <p className="text-base leading-relaxed text-[#756D66] dark:text-white/55 md:text-lg">
                Every project is different. These packages give you a clear
                starting point, and we can shape the scope around what your
                business actually needs.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-bold">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171310] text-white dark:bg-[#FFF9F2] dark:text-[#171310]">
                  <Sparkles size={14} />
                </span>

                <span>No unnecessary extras. Just useful work.</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Pricing */}
        <div className="mt-20 grid gap-7 lg:grid-cols-3 lg:items-start">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <Reveal
                key={plan.name}
                direction={index === 0 ? "left" : index === 1 ? "up" : "right"}
                delay={index * 0.12}
              >
                <motion.div
                  whileHover={{
                    y: plan.popular ? -12 : -8,
                    rotate: plan.popular ? 0 : index === 0 ? -1 : 1,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className={`relative ${plan.popular ? "lg:-mt-8" : ""}`}
                >
                  {/* Popular floating label */}
                  {plan.popular && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 15,
                        rotate: -3,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        rotate: -3,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.35,
                      }}
                      className="absolute -right-2 -top-5 z-20 flex items-center gap-2 rounded-full border-2 border-[#171310] bg-[#FFB84D] px-4 py-2 text-xs font-black text-[#171310] shadow-[4px_4px_0_#171310] dark:border-[#FFF9F2] dark:shadow-[4px_4px_0_#FF6B35]"
                    >
                      <Sparkles size={13} />
                      MOST REQUESTED
                    </motion.div>
                  )}

                  {/* Main panel */}
                  <div
                    className={`relative overflow-hidden rounded-[2rem] border-2 border-[#171310] bg-[#FFF9F2] shadow-[7px_7px_0_#171310] transition-colors duration-500 dark:border-[#FFF9F2] dark:bg-[#211914] dark:shadow-[7px_7px_0_#FF6B35] ${
                      plan.popular
                        ? "shadow-[9px_9px_0_#171310] dark:shadow-[9px_9px_0_#FF6B35]"
                        : ""
                    }`}
                  >
                    {/* Color header */}
                    <div
                      className="relative h-28 overflow-hidden"
                      style={{
                        backgroundColor: plan.soft,
                      }}
                    >
                      {/* Decorative circle */}
                      <div
                        className="absolute -right-8 -top-10 h-36 w-36 rounded-full"
                        style={{
                          backgroundColor: plan.color,
                          opacity: 0.2,
                        }}
                      />

                      {/* Decorative rotating shape */}
                      <motion.div
                        animate={{
                          rotate: [0, 10, 0, -10, 0],
                        }}
                        transition={{
                          duration: 7,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute bottom-[-30px] left-8 h-20 w-20 rounded-[1.5rem] border-2 border-[#171310] bg-[#FFF9F2] dark:border-[#171310] dark:bg-[#211914]"
                      />

                      {/* Icon */}
                      <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#171310] bg-[#FFF9F2] shadow-[4px_4px_0_#171310] dark:bg-[#211914] dark:shadow-[4px_4px_0_#FF6B35]">
                        <Icon
                          size={25}
                          strokeWidth={1.8}
                          style={{ color: plan.color }}
                        />
                      </div>

                      {/* Number */}
                      <span
                        className="absolute right-6 top-7 text-6xl font-black tracking-[-0.08em]"
                        style={{
                          color: plan.color,
                          opacity: 0.15,
                        }}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <div className="p-7 md:p-8">
                      {/* Name */}
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p
                            className="text-xs font-black uppercase tracking-[0.18em]"
                            style={{ color: plan.color }}
                          >
                            {plan.eyebrow}
                          </p>

                          <h3 className="mt-2 text-3xl font-bold tracking-[-0.04em]">
                            {plan.name}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-4 min-h-[76px] text-sm leading-relaxed text-[#756D66] dark:text-white/50">
                        {plan.description}
                      </p>

                      {/* Price */}
                      <div className="mt-7">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#AAA19A] dark:text-white/35">
                          Investment
                        </p>

                        <div
                          className="mt-1 text-4xl font-black tracking-[-0.05em]"
                          style={{
                            color:
                              plan.name === "Custom" ? undefined : plan.color,
                          }}
                        >
                          <span
                            className={
                              plan.name === "Custom"
                                ? "text-[#171310] dark:text-[#FFF9F2]"
                                : ""
                            }
                          >
                            {plan.price}
                          </span>
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.a
                        href="#contact"
                        whileTap={{ scale: 0.97 }}
                        className={`group mt-8 flex items-center justify-between rounded-2xl border-2 px-5 py-4 text-sm font-bold transition-all duration-300 ${
                          plan.popular
                            ? "border-[#171310] bg-[#171310] text-white hover:bg-[#7867D8] dark:border-[#FFF9F2] dark:bg-[#FFF9F2] dark:text-[#171310] dark:hover:bg-[#7867D8] dark:hover:text-white"
                            : "border-[#171310] bg-[#FFF9F2] hover:bg-[#171310] hover:text-white dark:border-[#FFF9F2] dark:bg-[#211914] dark:hover:bg-[#FFF9F2] dark:hover:text-[#171310]"
                        }`}
                      >
                        <span>Start a project</span>

                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#171310] transition-transform duration-300 group-hover:rotate-45 dark:bg-[#171310] dark:text-[#FFF9F2]">
                          <ArrowUpRight size={16} />
                        </span>
                      </motion.a>

                      {/* Divider */}
                      <div className="my-8 h-[2px] bg-[#171310]/10 dark:bg-white/10" />

                      {/* Features heading */}
                      <div className="mb-5 flex items-center justify-between">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#756D66] dark:text-white/45">
                          What's included
                        </p>

                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{
                            backgroundColor: plan.color,
                          }}
                        />
                      </div>

                      {/* Features */}
                      <ul className="space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{
                              opacity: 0,
                              x: -12,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.4,
                              delay: 0.2 + featureIndex * 0.04,
                            }}
                            className="flex items-start gap-3 text-sm leading-relaxed text-[#514A45] dark:text-white/65"
                          >
                            <span
                              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                              style={{
                                backgroundColor: plan.soft,
                              }}
                            >
                              <Check
                                size={12}
                                strokeWidth={3}
                                style={{
                                  color: plan.color,
                                }}
                              />
                            </span>

                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom note */}
        <Reveal direction="up" delay={0.4}>
          <div className="mt-16 flex flex-col gap-5 border-t-2 border-[#171310]/10 pt-7 dark:border-white/10 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-[#756D66] dark:text-white/50">
              Final pricing depends on scope, functionality, content,
              integrations, and project requirements.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-bold"
            >
              Not sure what you need?
              <span className="text-[#FF6B35] transition-transform duration-300 group-hover:translate-x-1">
                Let's talk
              </span>
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
