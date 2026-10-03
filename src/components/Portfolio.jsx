import { motion } from "framer-motion";
import { ArrowUpRight, MoveUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "Restaurant",
    title: "Savora",
    description:
      "A premium restaurant experience built around atmosphere, storytelling, and seamless reservations.",
    href: "/savora",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=90",
    services: ["Strategy", "Web Design", "Development"],
    year: "2026",
    accent: "#FF6B35",
  },
  {
    number: "02",
    category: "Hospitality",
    title: "Haven House",
    description:
      "A refined digital presence created to showcase rooms, amenities, and the experience of staying there.",
    href: "/haven-house",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=90",
    services: ["Art Direction", "Web Design", "Development"],
    year: "2026",
    accent: "#168A9A",
  },
  {
    number: "03",
    category: "Construction",
    title: "Vertex Build",
    description:
      "A confident corporate website designed for a modern construction and property brand.",
    href: "/vertex-build",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90",
    services: ["Brand Direction", "Web Design", "Development"],
    year: "2026",
    accent: "#7867D8",
  },
];

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

function ProjectImage({ project, featured = false }) {
  return (
    <div
      className={`group/image relative overflow-hidden rounded-[1.5rem] border-2 border-[#171310] bg-[#E7E2DA] shadow-[6px_6px_0_#171310] transition-all duration-500 dark:border-[#FFF9F2] dark:shadow-[6px_6px_0_#FF6B35] ${
        featured ? "aspect-[16/9] md:aspect-[16/8]" : "aspect-[4/3]"
      }`}
    >
      <motion.img
        src={project.image}
        alt={`${project.title} project`}
        className="h-full w-full object-cover"
        whileHover={{ scale: 1.045 }}
        transition={{
          duration: 1,
          ease,
        }}
      />

      {/* Image overlay */}
      <div className="absolute inset-0 bg-[#171310]/10 transition-colors duration-500 group-hover/image:bg-transparent" />

      {/* Project label */}
      <div className="absolute left-5 top-5 flex items-center gap-3 md:left-7 md:top-7">
        <span className="flex h-9 min-w-9 items-center justify-center rounded-full border-2 border-[#171310] bg-[#FFF9F2] px-2 text-[10px] font-black text-[#171310] shadow-[3px_3px_0_#171310] dark:border-[#FFF9F2] dark:bg-[#211914] dark:text-[#FFF9F2] dark:shadow-[3px_3px_0_#FF6B35]">
          {project.number}
        </span>

        <span className="rounded-full border border-white/30 bg-[#171310]/50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      {/* Hover button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{ scale: 1.05 }}
        className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#171310] bg-[#FFF9F2] text-[#171310] opacity-0 shadow-[4px_4px_0_#171310] transition-all duration-500 group-hover/image:scale-100 group-hover/image:opacity-100 md:bottom-7 md:right-7"
      >
        <ArrowUpRight size={18} />
      </motion.div>

      {/* Accent corner */}
      <div
        className="absolute bottom-0 left-0 h-2 w-24"
        style={{
          backgroundColor: project.accent,
        }}
      />
    </div>
  );
}

function ProjectMeta({ project, featured = false }) {
  return (
    <div
      className={`grid gap-6 ${
        featured
          ? "md:grid-cols-[1fr_auto] md:items-end"
          : "md:grid-cols-[1fr_auto]"
      }`}
    >
      <div>
        <div className="flex items-center gap-3">
          <h3
            className={`font-semibold tracking-[-0.04em] text-[#171310] dark:text-[#FFF9F2] ${
              featured ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"
            }`}
          >
            {project.title}
          </h3>

          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{
              backgroundColor: project.accent,
            }}
          />
        </div>

        <p
          className={`mt-4 leading-relaxed text-[#756D66] dark:text-white/55 ${
            featured ? "max-w-2xl text-sm md:text-base" : "max-w-lg text-sm"
          }`}
        >
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
          {project.services.map((service) => (
            <span
              key={service}
              className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8C877F] dark:text-white/40"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-end justify-between gap-8 md:flex-col md:items-end md:justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A09A92] dark:text-white/30">
          {project.year}
        </span>

        <span className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#4F4A44] transition-colors duration-300 hover:text-[#FF6B35] dark:text-white/65 dark:hover:text-[#FF6B35]">
          View project
          <MoveUpRight
            size={14}
            className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#F4F1EC] px-6 py-32 text-[#171310] transition-colors duration-500 dark:bg-[#171310] dark:text-[#FFF9F2] md:px-10 lg:py-40"
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#FFB84D]/15 blur-3xl dark:bg-[#FF6B35]/10" />

      <div className="pointer-events-none absolute -right-32 top-[42%] h-80 w-80 rounded-full bg-[#7867D8]/10 blur-3xl dark:bg-[#7867D8]/10" />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[7%] top-36 hidden h-14 w-14 rounded-2xl border-2 border-[#171310] bg-[#FFB84D] shadow-[4px_4px_0_#171310] dark:border-[#FFF9F2] dark:shadow-[4px_4px_0_#FF6B35] md:block"
      />

      <motion.div
        animate={{
          y: [0, 12, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-[30%] left-[4%] hidden h-9 w-9 rounded-full bg-[#65D6D6] md:block"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="mb-28"
        >
          <motion.div
            variants={fadeUp}
            className="mb-8 flex items-center gap-4"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8C877F] dark:text-white/35">
              04
            </span>

            <span className="h-px w-12 bg-[#C9C3BA] dark:bg-white/15" />

            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#77716A] dark:text-white/45">
              Selected work
            </span>

            <span className="h-2 w-2 rounded-full bg-[#FF6B35]" />
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <motion.h2
              variants={fadeUp}
              className="max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.055em] text-[#171310] dark:text-[#FFF9F2] md:text-7xl lg:text-[7rem]"
            >
              Designed for the screen.
              <span className="relative block font-serif italic font-normal text-[#7867D8]">
                Built for the business.
                <svg
                  className="absolute -bottom-3 left-0 h-3 w-64 md:w-80"
                  viewBox="0 0 320 14"
                  fill="none"
                >
                  <path
                    d="M3 9C78 2 225 2 317 8"
                    stroke="#FF6B35"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="max-w-sm text-sm leading-7 text-[#6F6B65] dark:text-white/50 md:text-base lg:pb-2"
            >
              A selection of websites and digital experiences created for
              businesses that want to be taken seriously online.
            </motion.p>
          </div>
        </motion.header>

        {/* =========================================================
            FEATURED PROJECT
        ========================================================= */}

        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="border-t-2 border-[#D4CFC7] pt-6 dark:border-white/10"
        >
          <a href={projects[0].href} className="group block">
            <ProjectImage project={projects[0]} featured />

            <div className="mt-7">
              <ProjectMeta project={projects[0]} featured />
            </div>
          </a>
        </motion.article>

        {/* =========================================================
            DIVIDER
        ========================================================= */}

        <div className="my-32 flex items-center gap-5">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#99938A] dark:text-white/30">
            More work
          </span>

          <div className="h-[2px] flex-1 bg-[#D4CFC7] dark:bg-white/10" />

          <span className="h-2.5 w-2.5 rounded-full bg-[#7867D8]" />
        </div>

        {/* =========================================================
            SECONDARY PROJECTS
        ========================================================= */}

        <div className="grid gap-20 md:grid-cols-2 md:gap-x-8 md:gap-y-28">
          {projects.slice(1).map((project, index) => (
            <motion.article
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{
                delay: index * 0.12,
              }}
              className={index === 1 ? "md:mt-28" : ""}
            >
              <a href={project.href} className="group block">
                <ProjectImage project={project} />

                <div className="mt-6">
                  <ProjectMeta project={project} />
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* =========================================================
            CTA
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
          }}
          className="relative mt-32 overflow-hidden border-t-2 border-[#D4CFC7] pt-8 dark:border-white/10"
        >
          {/* CTA decorative shape */}
          <div className="pointer-events-none absolute right-10 top-12 hidden h-16 w-16 rounded-full border-[10px] border-[#FFB84D]/40 md:block" />

          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#99938A] dark:text-white/35">
                Have a project?
              </span>

              <h3 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.04em] text-[#171310] dark:text-[#FFF9F2] md:text-4xl">
                Let's build something{" "}
                <span className="text-[#FF6B35]">worth seeing.</span>
              </h3>
            </div>

            <div className="flex md:justify-end">
              <a
                href="#contact"
                className="group inline-flex items-center gap-4 border-b-2 border-[#AAA39A] pb-3 text-xs font-black uppercase tracking-[0.18em] text-[#4F4A44] transition-all duration-300 hover:border-[#FF6B35] hover:text-[#FF6B35] dark:border-white/20 dark:text-white/65 dark:hover:border-[#FF6B35] dark:hover:text-[#FF6B35]"
              >
                Start a project
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#C8C2B9] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-[#171310] dark:border-white/20">
                  <ArrowUpRight size={14} />
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
