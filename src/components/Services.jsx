import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Gauge,
  Smartphone,
  Search,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    number: "01",
    icon: Palette,
    title: "Web Design",
    description:
      "Clean, modern interfaces designed around your brand, customers, and business goals.",
    color: "text-violet-400",
    border: "hover:border-violet-400/30",
    iconBg: "bg-violet-400/10",
    iconBorder: "border-violet-400/20",
    glow: "bg-violet-400/10",
    hoverText: "group-hover:text-violet-400",
  },
  {
    number: "02",
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, responsive websites built with modern technologies and scalable architecture.",
    color: "text-cyan-400",
    border: "hover:border-cyan-400/30",
    iconBg: "bg-cyan-400/10",
    iconBorder: "border-cyan-400/20",
    glow: "bg-cyan-400/10",
    hoverText: "group-hover:text-cyan-400",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Mobile Experience",
    description:
      "A seamless experience across phones, tablets, laptops, and everything in between.",
    color: "text-emerald-400",
    border: "hover:border-emerald-400/30",
    iconBg: "bg-emerald-400/10",
    iconBorder: "border-emerald-400/20",
    glow: "bg-emerald-400/10",
    hoverText: "group-hover:text-emerald-400",
  },
  {
    number: "04",
    icon: Search,
    title: "SEO Foundations",
    description:
      "Technical foundations that make your website easier for search engines to understand.",
    color: "text-amber-400",
    border: "hover:border-amber-400/30",
    iconBg: "bg-amber-400/10",
    iconBorder: "border-amber-400/20",
    glow: "bg-amber-400/10",
    hoverText: "group-hover:text-amber-400",
  },
  {
    number: "05",
    icon: Gauge,
    title: "Performance",
    description:
      "Optimized websites that load quickly and give visitors a smooth experience.",
    color: "text-blue-400",
    border: "hover:border-blue-400/30",
    iconBg: "bg-blue-400/10",
    iconBorder: "border-blue-400/20",
    glow: "bg-blue-400/10",
    hoverText: "group-hover:text-blue-400",
  },
  {
    number: "06",
    icon: Wrench,
    title: "Maintenance",
    description:
      "Ongoing updates, improvements, monitoring, and technical support after launch.",
    color: "text-rose-400",
    border: "hover:border-rose-400/30",
    iconBg: "bg-rose-400/10",
    iconBorder: "border-rose-400/20",
    glow: "bg-rose-400/10",
    hoverText: "group-hover:text-rose-400",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24 lg:py-28"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal direction="left" className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            What we do
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Everything your business needs{" "}
            <span className="text-black/30 dark:text-white/30">
              to stand out online.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/50 dark:text-white/45">
            From the first idea to launch and beyond, we create digital
            experiences that make your business look credible and ready for
            growth.
          </p>
        </Reveal>

        {/* Services */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={service.number}
                direction={
                  index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"
                }
                delay={index * 0.08}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  className={`group relative h-full overflow-hidden rounded-3xl border border-black/10 bg-black/[0.02] p-7 transition-all duration-500 dark:border-white/10 dark:bg-white/[0.03] ${service.border} hover:bg-black/[0.04] dark:hover:bg-white/[0.05]`}
                >
                  {/* Glow */}
                  <div
                    className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full blur-3xl opacity-0 transition-all duration-700 group-hover:scale-125 group-hover:opacity-100 ${service.glow}`}
                  />

                  {/* Card content */}
                  <div className="relative">
                    <div className="mb-10 flex items-center justify-between">
                      <motion.div
                        whileHover={{
                          rotate: 5,
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.25 }}
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${service.iconBorder} ${service.iconBg} ${service.color}`}
                      >
                        <Icon size={22} strokeWidth={1.8} />
                      </motion.div>

                      <span className="text-sm text-black/20 dark:text-white/20">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold">{service.title}</h3>

                    <p className="mt-4 leading-relaxed text-black/50 dark:text-white/40">
                      {service.description}
                    </p>

                    {/* Learn more */}
                    <div
                      className={`mt-8 flex items-center gap-2 text-sm text-black/30 transition-colors duration-300 dark:text-white/30 ${service.hoverText}`}
                    >
                      <span>Learn more</span>

                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>

                    {/* Bottom accent */}
                    <div
                      className={`absolute bottom-[-28px] left-0 h-px w-0 transition-all duration-500 group-hover:w-full ${service.color.replace(
                        "text-",
                        "bg-",
                      )}`}
                    />
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom statement */}
        <Reveal direction="up" delay={0.35}>
          <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-black/35 dark:text-white/30">
              Strategy, design, development and everything in between.
            </p>

            <a
              href="#contact"
              className="group flex items-center gap-2 text-sm font-medium text-black transition-colors hover:text-cyan-500 dark:text-white dark:hover:text-cyan-400"
            >
              Start a conversation
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
