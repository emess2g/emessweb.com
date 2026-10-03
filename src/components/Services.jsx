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
    color: "#7867D8",
    bg: "#EAE6FF",
    accent: "#7867D8",
  },
  {
    number: "02",
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, responsive websites built with modern technologies and scalable architecture.",
    color: "#FF6B35",
    bg: "#FFE4D8",
    accent: "#FF6B35",
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Mobile Experience",
    description:
      "A seamless experience across phones, tablets, laptops, and everything in between.",
    color: "#168A9A",
    bg: "#DDF5F5",
    accent: "#168A9A",
  },
  {
    number: "04",
    icon: Search,
    title: "SEO Foundations",
    description:
      "Technical foundations that make your website easier for search engines to understand.",
    color: "#D99200",
    bg: "#FFF0C9",
    accent: "#D99200",
  },
  {
    number: "05",
    icon: Gauge,
    title: "Performance",
    description:
      "Optimized websites that load quickly and give visitors a smooth experience.",
    color: "#65AFAF",
    bg: "#DDF5F5",
    accent: "#168A9A",
  },
  {
    number: "06",
    icon: Wrench,
    title: "Maintenance",
    description:
      "Ongoing updates, improvements, monitoring, and technical support after launch.",
    color: "#FF6B35",
    bg: "#FFE4D8",
    accent: "#FF6B35",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="
        relative overflow-hidden
        bg-[#F7F2EB] px-6 py-24 text-[#171310]
        transition-colors duration-500
        dark:bg-[#211914]
        dark:text-[#FFF9F2]
        md:px-10 md:py-28
      "
    >
      {/* Background decoration */}
      <div
        className="
          pointer-events-none absolute -left-40 top-20
          h-96 w-96 rounded-full
          bg-[#FFB84D]/20 blur-[120px]
          dark:bg-[#FF6B35]/10
        "
      />

      <div
        className="
          pointer-events-none absolute -right-40 bottom-20
          h-96 w-96 rounded-full
          bg-[#7867D8]/15 blur-[120px]
          dark:bg-[#7867D8]/10
        "
      />

      {/* Decorative floating shapes */}
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
          pointer-events-none absolute right-[8%] top-24
          hidden h-16 w-16 rotate-12 rounded-[1.2rem]
          border-2 border-[#171310]
          bg-[#FFB84D]
          shadow-[5px_5px_0_#171310]
          dark:border-[#FFF9F2]
          dark:shadow-[5px_5px_0_#FF6B35]
          md:block
        "
      />

      <motion.div
        animate={{
          rotate: [0, -12, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none absolute bottom-40 left-[4%]
          hidden h-10 w-10 rounded-full
          border-2 border-[#171310]
          bg-[#65D6D6]
          dark:border-[#FFF9F2]
          md:block
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal direction="left" className="mb-14 max-w-4xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B35]" />

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#756D66] dark:text-white/45">
              What we do
            </p>
          </div>

          <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
            Everything your business needs{" "}
            <span className="text-[#A9A099] dark:text-white/30">
              to stand out online.
            </span>
          </h2>

          <div className="mt-7 flex items-start gap-4">
            <div className="mt-2 h-10 w-1.5 shrink-0 rounded-full bg-[#FF6B35]" />

            <p className="max-w-2xl text-base leading-relaxed text-[#756D66] dark:text-white/55 md:text-lg">
              From the first idea to launch and beyond, we create digital
              experiences that make your business look credible and ready for
              growth.
            </p>
          </div>
        </Reveal>

        {/* Services */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    rotate: index % 2 === 0 ? 0.5 : -0.5,
                    transition: { duration: 0.3 },
                  }}
                  className="
                    group relative h-full overflow-hidden
                    rounded-[2rem]
                    border-2 border-[#171310]
                    bg-[#FFF9F2]
                    p-7
                    shadow-[7px_7px_0_#171310]
                    transition-all duration-500
                    dark:border-[#FFF9F2]
                    dark:bg-[#171310]
                    dark:shadow-[7px_7px_0_#FF6B35]
                  "
                >
                  {/* Color glow */}
                  <div
                    className="
                      pointer-events-none absolute -right-20 -top-20
                      h-48 w-48 rounded-full opacity-0 blur-3xl
                      transition-all duration-700
                      group-hover:scale-125
                      group-hover:opacity-40
                    "
                    style={{
                      backgroundColor: service.accent,
                    }}
                  />

                  <div className="relative">
                    {/* Top row */}
                    <div className="mb-12 flex items-center justify-between">
                      <motion.div
                        whileHover={{
                          rotate: 5,
                          scale: 1.08,
                        }}
                        transition={{ duration: 0.25 }}
                        className="
                          flex h-14 w-14 items-center justify-center
                          rounded-2xl border-2 border-[#171310]
                          shadow-[3px_3px_0_#171310]
                          dark:border-[#FFF9F2]
                          dark:shadow-[3px_3px_0_#FF6B35]
                        "
                        style={{
                          backgroundColor: service.bg,
                          color: service.color,
                        }}
                      >
                        <Icon size={24} strokeWidth={1.8} />
                      </motion.div>

                      <span className="text-sm font-black tracking-tight text-[#C8BFB7] dark:text-white/20">
                        {service.number}
                      </span>
                    </div>

                    {/* Small visual line */}
                    <div className="mb-5 flex items-center gap-2">
                      <span
                        className="h-1.5 w-9 rounded-full"
                        style={{
                          backgroundColor: service.accent,
                        }}
                      />

                      <span className="h-1.5 w-1.5 rounded-full bg-[#D8D0C8] dark:bg-white/15" />

                      <span className="h-1.5 w-1.5 rounded-full bg-[#D8D0C8] dark:bg-white/15" />
                    </div>

                    <h3 className="text-2xl font-bold tracking-[-0.03em]">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-7 text-[#756D66] dark:text-white/50">
                      {service.description}
                    </p>

                    {/* Learn more */}
                    <div
                      className="
                        mt-8 flex items-center gap-2
                        text-sm font-bold
                        text-[#A49A92]
                        transition-colors duration-300
                        group-hover:text-[#171310]
                        dark:text-white/30
                        dark:group-hover:text-[#FFF9F2]
                      "
                    >
                      <span>Learn more</span>

                      <ArrowUpRight
                        size={16}
                        className="
                          transition-transform duration-300
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </div>

                    {/* Bottom accent */}
                    <div
                      className="
                        absolute bottom-[-28px] left-0
                        h-1.5 w-0 rounded-full
                        transition-all duration-500
                        group-hover:w-full
                      "
                      style={{
                        backgroundColor: service.accent,
                      }}
                    />
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom statement */}
        <Reveal direction="up" delay={0.35}>
          <div
            className="
              mt-14 flex flex-col gap-5
              border-t-2 border-[#171310]/10
              pt-7
              dark:border-white/10
              sm:flex-row sm:items-center sm:justify-between
            "
          >
            <p className="text-sm text-[#8F867E] dark:text-white/35">
              Strategy, design, development and everything in between.
            </p>

            <a
              href="#contact"
              className="
                group flex items-center gap-2
                text-sm font-bold
                text-[#171310]
                transition-colors
                hover:text-[#FF6B35]
                dark:text-[#FFF9F2]
                dark:hover:text-[#FF6B35]
              "
            >
              Start a conversation
              <ArrowUpRight
                size={16}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
