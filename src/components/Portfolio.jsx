
import { motion } from "framer-motion";
import Reveal from "./Reveal";

import { ArrowUpRight, Sparkles } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "Restaurant",
    href: "/savora",
    title: "Savora",
    description:
      "A premium restaurant experience built around atmosphere, storytelling, and seamless reservations.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=90",
    accent: "text-[#d8a35d]",
    line: "bg-[#d8a35d]",
  },
  {
    number: "02",
    category: "Hospitality",
    href: "#",
    title: "Haven House",
    description:
      "A refined hospitality experience designed to showcase rooms, amenities, and bookings.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=90",
    accent: "text-cyan-300",
    line: "bg-cyan-400",
  },
  {
    number: "03",
    category: "Construction",
    href: "#",
    title: "Vertex Build",
    description:
      "A strong corporate presence designed for a modern construction and property brand.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90",
    accent: "text-violet-300",
    line: "bg-violet-400",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Portfolio() {
  return (
    <section
      id="work"
      className="section relative overflow-hidden px-6 py-32 md:px-10 lg:py-40"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.045] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* =========================================================
            HEADING
        ========================================================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto mb-24 max-w-5xl text-center"
        >
          {/* Eyebrow */}
          <motion.div
            variants={reveal}
            className="mb-7 flex items-center justify-center gap-3"
          >
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-px bg-cyan-400/60"
            />

            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              <Sparkles size={13} />
              Selected work
            </span>

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-px bg-cyan-400/60"
            />
          </motion.div>
          {/* Heading */}
          <h2 className="text-5xl font-semibold leading-[0.92] tracking-tight md:text-7xl lg:text-8xl">
            <motion.span
              initial={{
                opacity: 0,
                y: 50,
                filter: "blur(12px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block text-white"
            >
              Digital experiences
            </motion.span>

            <motion.span
              initial={{
                opacity: 0,
                y: 50,
                filter: "blur(12px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mt-3 inline-block font-serif italic"
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="bg-gradient-to-r from-white via-cyan-300 to-white bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                built to stand out.
              </motion.span>

              <motion.span
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                whileInView={{
                  width: "100%",
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.9,
                  duration: 1,
                  ease: "easeOut",
                }}
                className="absolute -bottom-3 left-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-transparent"
              />

              <motion.span
                initial={{
                  left: "0%",
                  opacity: 0,
                }}
                whileInView={{
                  left: "100%",
                  opacity: [0, 1, 0],
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 1,
                  duration: 1.4,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-[13px] h-1 w-16 -translate-x-1/2 rounded-full bg-cyan-300 blur-sm"
              />
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.55,
            }}
            className="mx-auto mt-10 max-w-2xl text-sm leading-relaxed text-white/40 md:text-base"
          >
            Modern digital experiences designed to make businesses look
            credible, connect with customers, and grow online.
          </motion.p>
        </motion.div>

        {/* =========================================================
            FEATURED PROJECT
        ========================================================= */}
        <motion.a
          href={projects[0].href}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative block overflow-hidden rounded-[2rem] border border-white/10 bg-[#090909]"
        >
          {/* Image */}
          <div className="relative h-[500px] overflow-hidden md:h-[650px]">
            <motion.img
              src={projects[0].image}
              alt="Savora restaurant website concept"
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.06 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/5" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent opacity-70" />

            {/* Top metadata */}
            <div className="absolute left-6 right-6 top-6 flex items-center justify-between md:left-8 md:right-8 md:top-8">
              <span className="rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-medium text-[#d8a35d] backdrop-blur-xl">
                Restaurant
              </span>

              <span className="text-xs tracking-[0.2em] text-white/50">
                01 / 03
              </span>
            </div>

            {/* Project content */}
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10 lg:p-12">
              <div className="max-w-2xl">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/50">
                  Featured project
                </p>

                <h3 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
                  Savora
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
                  A premium restaurant experience built around atmosphere,
                  storytelling, and seamless reservations.
                </p>

                <div className="mt-7 inline-flex items-center gap-3 text-sm font-medium text-white">
                  <span className="border-b border-white/30 pb-1 transition-colors duration-300 group-hover:border-white">
                    View live demo
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </div>
            </div>

            {/* Accent glow */}
            <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-[#d8a35d]/15 blur-[100px] transition-transform duration-1000 group-hover:scale-150" />
          </div>

          {/* Bottom line */}
          <div className="h-px w-0 bg-[#d8a35d] transition-all duration-1000 group-hover:w-full" />
        </motion.a>

        {/* =========================================================
            SECONDARY PROJECTS
        ========================================================= */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.slice(1).map((project, index) => (
            <Reveal
              key={project.title}
              direction={index === 0 ? "left" : "right"}
              delay={index === 0 ? 0 : index * 0.12}
            >
              <motion.a
                key={project.number}
                href={project.href}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative block overflow-hidden rounded-[2rem] border border-white/10 bg-[#090909]"
              >
                {/* Image */}
                <div className="relative h-[420px] overflow-hidden md:h-[500px]">
                  <motion.img
                    src={project.image}
                    alt={`${project.title} website concept`}
                    className="h-full w-full object-cover opacity-80"
                    whileHover={{ scale: 1.08 }}
                    transition={{
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                  {/* Number */}
                  <span className="absolute right-6 top-6 text-xs tracking-[0.2em] text-white/40">
                    {project.number} / 03
                  </span>

                  {/* Category */}
                  <span
                    className={`absolute left-6 top-6 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-medium backdrop-blur-xl ${project.accent}`}
                  >
                    {project.category}
                  </span>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <h3 className="text-4xl font-semibold tracking-tight text-white transition-transform duration-500 group-hover:translate-x-1 md:text-5xl">
                          {project.title}
                        </h3>

                        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/45">
                          {project.description}
                        </p>

                        <div className="mt-5 text-xs uppercase tracking-[0.2em] text-white/40">
                          Coming soon
                        </div>
                      </div>

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-white group-hover:text-black">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Glow */}
                  <div
                    className={`pointer-events-none absolute -bottom-24 -right-20 h-60 w-60 rounded-full ${project.line}/10 blur-[90px] transition-transform duration-1000 group-hover:scale-150`}
                  />
                </div>

                {/* Accent line */}
                <div
                  className={`h-px w-0 ${project.line} transition-all duration-700 group-hover:w-full`}
                />
              </motion.a>
            </Reveal>
          ))}
        </div>

        {/* =========================================================
            FOOTNOTE
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 text-xs text-white/20 md:flex-row"
        >
          <span>Selected work · emessWeb</span>

          <span>Concept experiences created for portfolio illustration.</span>
        </motion.div>
      </div>
    </section>
  );
}
