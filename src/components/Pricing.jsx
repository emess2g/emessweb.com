import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const plans = [
  {
    name: "Starter",
    description: "For businesses that need a professional online presence.",
    price: "From ₵1,500",
    accent: "violet",
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
    description: "For businesses ready for a stronger digital experience.",
    price: "From ₵3,500",
    popular: true,
    accent: "cyan",
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
    description: "For businesses with more complex requirements.",
    price: "Let's talk",
    accent: "amber",
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

const accentStyles = {
  violet: {
    border: "hover:border-violet-400/30",
    icon: "text-violet-400",
    glow: "bg-violet-400/10",
  },
  cyan: {
    border: "border-cyan-400/40 hover:border-cyan-400/60",
    icon: "text-cyan-400",
    glow: "bg-cyan-400/10",
  },
  amber: {
    border: "hover:border-amber-400/30",
    icon: "text-amber-400",
    glow: "bg-amber-400/10",
  },
};

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal direction="up">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Pricing
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Choose the level of{" "}
              <span className="text-black/25 dark:text-white/30">
                digital presence.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-black/50 dark:text-white/40">
              Start with what your business needs today and scale as your
              requirements grow.
            </p>
          </div>
        </Reveal>

        {/* Plans */}
        <div className="grid gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const accent = accentStyles[plan.accent];

            return (
              <Reveal
                key={plan.name}
                direction={index === 0 ? "left" : index === 1 ? "up" : "right"}
                delay={index * 0.12}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className={`group relative h-full overflow-hidden rounded-3xl border border-black/10 bg-black/[0.02] p-7 transition-all duration-500 dark:border-white/10 dark:bg-white/[0.03] ${accent.border} ${
                    plan.popular
                      ? "border-cyan-400/40 bg-cyan-400/[0.04] dark:bg-cyan-400/[0.05]"
                      : ""
                  }`}
                >
                  {/* Hover glow */}
                  <div
                    className={`pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${accent.glow}`}
                  />

                  <div className="relative">
                    {/* Popular badge */}
                    {plan.popular && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.3,
                          duration: 0.4,
                        }}
                        className="absolute right-0 top-0 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-black"
                      >
                        Popular
                      </motion.div>
                    )}

                    {/* Plan */}
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-2 w-2 rounded-full ${accent.icon.replace(
                          "text-",
                          "bg-",
                        )}`}
                      />

                      <h3 className="text-2xl font-semibold">{plan.name}</h3>
                    </div>

                    <p className="mt-3 min-h-[60px] max-w-sm text-sm leading-relaxed text-black/50 dark:text-white/40">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mt-8 text-3xl font-bold tracking-tight">
                      {plan.price}
                    </div>

                    {/* CTA */}
                    <a
                      href="#contact"
                      className={`group/button mt-8 flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-all duration-300 ${
                        plan.popular
                          ? "bg-black text-white hover:bg-cyan-400 hover:text-black dark:bg-white dark:text-black dark:hover:bg-cyan-400"
                          : "border border-black/10 text-black hover:border-black/20 hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:bg-white/5"
                      }`}
                    >
                      Start a Project
                      <ArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                      />
                    </a>

                    {/* Divider */}
                    <div className="my-8 h-px bg-black/10 dark:bg-white/10" />

                    <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-black/30 dark:text-white/30">
                      What's included
                    </p>

                    {/* Features */}
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{
                            opacity: 0,
                            x: -10,
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
                            delay: 0.25 + featureIndex * 0.04,
                          }}
                          className="flex items-start gap-3 text-sm text-black/55 dark:text-white/55"
                        >
                          <Check
                            size={17}
                            className={`mt-0.5 shrink-0 ${accent.icon}`}
                          />

                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Pricing disclaimer */}
        <Reveal direction="fade" delay={0.35}>
          <p className="mt-8 text-center text-xs text-black/25 dark:text-white/25">
            Final pricing depends on project scope, functionality, content,
            integrations, and requirements.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
