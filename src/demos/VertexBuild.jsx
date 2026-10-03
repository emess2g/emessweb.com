
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  Building2,
  Ruler,
  HardHat,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  "Projects",
  "Services",
  "Process",
  "About",
  "Testimonials",
  "Contact",
];

export default function VertexBuild() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#EDE9E2] text-[#171717]">
      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between border-2 border-[#171717] bg-[#F7F4EE] px-5 py-4 shadow-[4px_4px_0_#171717]">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="group flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center bg-[#FF6B35] text-[#171717]">
              <Building2 size={21} strokeWidth={2.5} />
            </span>

            <span className="text-left">
              <span className="block text-[15px] font-black uppercase leading-none tracking-[-0.03em]">
                Vertex
              </span>
              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.25em] text-[#716B64]">
                Build
              </span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-xs font-bold uppercase tracking-[0.16em] transition-colors hover:text-[#FF6B35]"
              >
                {item}
              </button>
            ))}

            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 bg-[#171717] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-all hover:bg-[#FF6B35] hover:text-[#171717]"
            >
              Start a project
              <ArrowUpRight size={15} />
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center border-2 border-[#171717] md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-3 max-w-7xl border-2 border-[#171717] bg-[#F7F4EE] p-5 shadow-[4px_4px_0_#171717] md:hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="border-b border-[#171717]/15 py-4 text-left text-sm font-black uppercase tracking-[0.12em]"
                >
                  {item}
                </button>
              ))}

              <button
                onClick={() => scrollTo("contact")}
                className="mt-5 flex items-center justify-center gap-2 bg-[#FF6B35] px-5 py-4 text-xs font-black uppercase tracking-[0.12em]"
              >
                Start a project
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </header>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40"
      >
        {/* Architectural grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(#171717 1px, transparent 1px), linear-gradient(90deg, #171717 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Decorative construction lines */}
        <div className="pointer-events-none absolute left-[7%] top-[24%] hidden h-32 w-32 border-l border-t border-[#171717]/30 md:block" />

        <div className="pointer-events-none absolute right-[8%] top-[28%] hidden h-44 w-44 rounded-full border border-[#171717]/20 md:block" />

        <div className="pointer-events-none absolute bottom-[13%] left-[12%] hidden h-px w-48 bg-[#FF6B35]/60 md:block" />

        <div className="relative mx-auto max-w-7xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-2.5 w-2.5 bg-[#FF6B35]" />

            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#6D675F]">
              Construction / Architecture / Development
            </span>
          </motion.div>

          {/* Main Hero */}
          <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-5xl text-[clamp(3.7rem,8vw,8rem)] font-black uppercase leading-[0.83] tracking-[-0.075em]"
              >
                We build
                <br />
                <span className="relative inline-block">
                  spaces
                  <span className="absolute -bottom-2 left-0 h-2 w-[85%] bg-[#FF6B35] md:-bottom-4 md:h-3" />
                </span>
                <br />
                that last.
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
                className="mt-10 max-w-xl"
              >
                <p className="text-base leading-7 text-[#625C55] md:text-lg">
                  Vertex Build delivers considered construction, renovation, and
                  development projects — combining precise execution with
                  architecture that belongs where it stands.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <button
                  onClick={() => scrollTo("projects")}
                  className="group flex items-center gap-3 border-2 border-[#171717] bg-[#171717] px-6 py-4 text-xs font-black uppercase tracking-[0.1em] text-white shadow-[4px_4px_0_#FF6B35] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                >
                  Explore our work
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:rotate-45"
                  />
                </button>

                <button
                  onClick={() => scrollTo("contact")}
                  className="flex items-center gap-3 border-2 border-[#171717] bg-transparent px-6 py-4 text-xs font-black uppercase tracking-[0.1em] transition-colors hover:bg-[#171717] hover:text-white"
                >
                  Start a conversation
                </button>
              </motion.div>
            </div>

            {/* Right architectural visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-[#171717] bg-[#CFC8BE] shadow-[8px_8px_0_#171717]">
                {/* Replace this image with final Vertex project photography */}
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern architectural interior"
                  className="h-full w-full object-cover grayscale-[20%]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/60 via-transparent to-transparent" />

                {/* Project label */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                      Featured Project
                    </p>

                    <p className="mt-1 text-xl font-black uppercase tracking-[-0.03em] text-white">
                      House / 014
                    </p>
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center bg-[#FF6B35] text-[#171717]">
                    <ArrowUpRight size={20} />
                  </span>
                </div>

                {/* Corner marker */}
                <div className="absolute left-4 top-4 flex items-center gap-2">
                  <span className="h-2 w-2 bg-[#FF6B35]" />
                  <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white">
                    06°41' N
                  </span>
                </div>
              </div>

              {/* Floating specification card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-5 -left-4 hidden w-48 border-2 border-[#171717] bg-[#F7F4EE] p-4 shadow-[5px_5px_0_#FF6B35] sm:block md:-left-8"
              >
                <div className="mb-3 flex items-center justify-between">
                  <Ruler size={17} />
                  <span className="text-[8px] font-black uppercase tracking-[0.18em] text-[#777068]">
                    Project data
                  </span>
                </div>

                <p className="text-2xl font-black tracking-[-0.05em]">
                  4,850
                  <span className="ml-1 text-xs">SQ FT</span>
                </p>

                <div className="mt-3 h-px bg-[#171717]/15" />

                <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#777068]">
                  Residential / Accra
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="mt-20 grid border-y-2 border-[#171717] sm:grid-cols-3"
          >
            <div className="flex items-center gap-4 border-b-2 border-[#171717] py-6 sm:border-b-0 sm:border-r-2 sm:px-7">
              <span className="text-4xl font-black tracking-[-0.07em]">
                18+
              </span>
              <span className="max-w-20 text-[9px] font-bold uppercase leading-4 tracking-[0.14em] text-[#716B64]">
                Years building
              </span>
            </div>

            <div className="flex items-center gap-4 border-b-2 border-[#171717] py-6 sm:border-b-0 sm:border-r-2 sm:px-7">
              <span className="text-4xl font-black tracking-[-0.07em]">
                120+
              </span>
              <span className="max-w-20 text-[9px] font-bold uppercase leading-4 tracking-[0.14em] text-[#716B64]">
                Projects completed
              </span>
            </div>

            <div className="flex items-center gap-4 py-6 sm:px-7">
              <span className="text-4xl font-black tracking-[-0.07em]">14</span>
              <span className="max-w-20 text-[9px] font-bold uppercase leading-4 tracking-[0.14em] text-[#716B64]">
                Cities reached
              </span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 right-6 hidden items-center gap-3 md:flex">
          <span className="text-[8px] font-black uppercase tracking-[0.25em] text-[#716B64]">
            Scroll to explore
          </span>
          <div className="h-10 w-px bg-[#171717]" />
        </div>
      </section>
      {/* =========================================================
          INTRO STRIP
      ========================================================= */}
      <section className="border-y-2 border-[#171717] bg-[#171717] px-5 py-8 text-[#F7F4EE] md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <HardHat className="text-[#FF6B35]" size={28} />

            <p className="max-w-xl text-sm font-medium leading-6 text-white/70">
              From first sketch to final handover, we bring structure,
              craftsmanship, and accountability to every build.
            </p>
          </div>

          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FF6B35]">
            Built with intention
          </span>
        </div>
      </section>
      {/* =========================================================
          PLACEHOLDER SECTIONS
          These give the navigation working targets while we build
          the rest of the homepage.
      ========================================================= */}
      <section
        id="process"
        className="relative overflow-hidden bg-[#EDE9E2] px-5 py-24 md:px-8 md:py-32"
      >
        {/* Blueprint-style background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#171717 1px, transparent 1px), linear-gradient(90deg, #171717 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 bg-[#FF6B35]" />

                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#716B64]">
                  04 / How we build
                </p>
              </div>

              <p className="mt-7 max-w-xs text-sm leading-6 text-[#625C55]">
                A clear process keeps ambitious projects moving. Every stage has
                a purpose, a team, and a measurable outcome.
              </p>
            </div>

            <h2 className="text-5xl font-black uppercase leading-[0.85] tracking-[-0.07em] md:text-7xl lg:text-8xl">
              From idea
              <br />
              <span className="text-[#FF6B35]">to reality.</span>
            </h2>
          </div>

          {/* =========================================================
        PROCESS TIMELINE
    ========================================================= */}
          <div className="relative mt-20">
            {/* Desktop line */}
            <div className="pointer-events-none absolute left-0 right-0 top-[58px] hidden h-px bg-[#171717]/25 lg:block" />

            <div className="grid gap-5 lg:grid-cols-4">
              {/* Step 01 */}
              <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="group relative"
              >
                <div className="relative z-10 flex h-[116px] items-start justify-between border-2 border-[#171717] bg-[#FF6B35] p-5 shadow-[5px_5px_0_#171717] transition-transform group-hover:-translate-y-1">
                  <span className="text-4xl font-black tracking-[-0.08em]">
                    01
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center border-2 border-[#171717]">
                    <Ruler size={17} />
                  </span>
                </div>

                <div className="border-x-2 border-b-2 border-[#171717] bg-[#F7F4EE] p-6">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#FF6B35]">
                    Discover
                  </p>

                  <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.05em]">
                    Understand
                    <br />
                    the brief.
                  </h3>

                  <p className="mt-5 text-sm leading-6 text-[#625C55]">
                    We listen, inspect the site, understand the goals, establish
                    the scope, and identify the opportunities before anything
                    gets built.
                  </p>

                  <div className="mt-7 border-t border-[#171717]/15 pt-4">
                    <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#777068]">
                      Site / Brief / Budget / Scope
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* Step 02 */}
              <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className="relative z-10 flex h-[116px] items-start justify-between border-2 border-[#171717] bg-[#7867D8] p-5 text-white shadow-[5px_5px_0_#171717] transition-transform group-hover:-translate-y-1">
                  <span className="text-4xl font-black tracking-[-0.08em]">
                    02
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center border-2 border-white">
                    <Building2 size={17} />
                  </span>
                </div>

                <div className="border-x-2 border-b-2 border-[#171717] bg-[#F7F4EE] p-6">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#7867D8]">
                    Design
                  </p>

                  <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.05em]">
                    Draw the
                    <br />
                    solution.
                  </h3>

                  <p className="mt-5 text-sm leading-6 text-[#625C55]">
                    Architects and technical teams translate the brief into
                    plans, specifications, materials, and a clear construction
                    strategy.
                  </p>

                  <div className="mt-7 border-t border-[#171717]/15 pt-4">
                    <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#777068]">
                      Concept / Plans / Materials / Approvals
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* Step 03 */}
              <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="group relative"
              >
                <div className="relative z-10 flex h-[116px] items-start justify-between border-2 border-[#171717] bg-[#65D6D6] p-5 shadow-[5px_5px_0_#171717] transition-transform group-hover:-translate-y-1">
                  <span className="text-4xl font-black tracking-[-0.08em]">
                    03
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center border-2 border-[#171717]">
                    <HardHat size={17} />
                  </span>
                </div>

                <div className="border-x-2 border-b-2 border-[#171717] bg-[#F7F4EE] p-6">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#168A9A]">
                    Build
                  </p>

                  <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.05em]">
                    Make it
                    <br />
                    real.
                  </h3>

                  <p className="mt-5 text-sm leading-6 text-[#625C55]">
                    Our site teams coordinate trades, materials, schedules,
                    safety, quality, and construction from the first foundation
                    to the final finish.
                  </p>

                  <div className="mt-7 border-t border-[#171717]/15 pt-4">
                    <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#777068]">
                      Structure / Services / Finishes / Quality
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* Step 04 */}
              <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="group relative"
              >
                <div className="relative z-10 flex h-[116px] items-start justify-between border-2 border-[#171717] bg-[#FFB84D] p-5 shadow-[5px_5px_0_#171717] transition-transform group-hover:-translate-y-1">
                  <span className="text-4xl font-black tracking-[-0.08em]">
                    04
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center border-2 border-[#171717]">
                    <ArrowUpRight size={17} />
                  </span>
                </div>

                <div className="border-x-2 border-b-2 border-[#171717] bg-[#F7F4EE] p-6">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#A16B00]">
                    Deliver
                  </p>

                  <h3 className="mt-3 text-2xl font-black uppercase tracking-[-0.05em]">
                    Hand over
                    <br />
                    with confidence.
                  </h3>

                  <p className="mt-5 text-sm leading-6 text-[#625C55]">
                    Final inspections, documentation, handover, and the details
                    that turn a completed construction project into a finished
                    space.
                  </p>

                  <div className="mt-7 border-t border-[#171717]/15 pt-4">
                    <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#777068]">
                      Inspection / Handover / Documentation
                    </p>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>

          {/* =========================================================
        PROJECT CONTROL PANEL
    ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mt-16 grid overflow-hidden border-2 border-[#171717] bg-[#171717] text-[#F7F4EE] shadow-[7px_7px_0_#FF6B35] lg:grid-cols-[1fr_0.75fr]"
          >
            {/* Left */}
            <div className="p-7 md:p-10">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FF6B35]">
                Project control
              </p>

              <h3 className="mt-5 max-w-2xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-5xl">
                No surprises.
                <br />
                Just clear
                <br />
                <span className="text-white/35">progress.</span>
              </h3>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/50">
                Construction projects move through hundreds of decisions. Our
                job is to keep those decisions visible, coordinated, and
                connected to the original brief.
              </p>
            </div>

            {/* Right dashboard */}
            <div className="border-t-2 border-white/15 p-7 lg:border-l-2 lg:border-t-0 md:p-10">
              <div className="space-y-5">
                {[
                  ["01", "Budget tracking", "ON TRACK", "#65D6D6"],
                  ["02", "Site schedule", "ON TRACK", "#FFB84D"],
                  ["03", "Quality control", "ACTIVE", "#FF6B35"],
                  ["04", "Client reporting", "WEEKLY", "#7867D8"],
                ].map(([number, label, status, color]) => (
                  <div
                    key={number}
                    className="flex items-center justify-between border-b border-white/10 pb-5"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[9px] font-black" style={{ color }}>
                        {number}
                      </span>

                      <span className="text-xs font-bold uppercase tracking-[0.08em]">
                        {label}
                      </span>
                    </div>

                    <span className="text-[8px] font-black uppercase tracking-[0.15em] text-white/40">
                      {status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <div className="mb-2 flex justify-between text-[8px] font-black uppercase tracking-[0.15em] text-white/40">
                  <span>Project progress</span>
                  <span>72%</span>
                </div>

                <div className="h-2 border border-white/20 p-[2px]">
                  <div className="h-full w-[72%] bg-[#FF6B35]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Closing */}
          <div className="mt-16 flex flex-col gap-6 border-t-2 border-[#171717] pt-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-2xl text-2xl font-black uppercase leading-tight tracking-[-0.04em] md:text-3xl">
              Four stages.
              <br />
              One accountable team.
              <span className="text-[#FF6B35]"> One finished space.</span>
            </p>

            <button
              onClick={() => scrollTo("contact")}
              className="flex w-fit items-center gap-3 border-b-2 border-[#171717] pb-2 text-[10px] font-black uppercase tracking-[0.16em] transition-colors hover:border-[#FF6B35] hover:text-[#FF6B35]"
            >
              Start with your brief
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        className="relative overflow-hidden bg-[#F7F4EE] px-6 py-24 md:px-10 md:py-32"
      >
        {/* Background details */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute left-[8%] top-20 h-32 w-32 border border-[#171717]/10" />
          <div className="absolute right-[12%] top-[35%] h-48 w-48 rounded-full border border-[#FF6B35]/20" />
          <div className="absolute bottom-20 left-[42%] h-px w-48 bg-[#171717]/10" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 grid gap-8 md:grid-cols-[0.8fr_1.5fr] md:items-end">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#FF6B35]">
                05 / Client perspective
              </p>

              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#7867D8]" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#6F655E]">
                  Built together
                </span>
              </div>
            </div>

            <div>
              <h2 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.055em] text-[#171717] sm:text-6xl md:text-7xl">
                The work speaks.
                <br />
                <span className="relative inline-block text-[#FF6B35]">
                  So do our clients.
                  <svg
                    className="absolute -bottom-3 left-0 h-4 w-full"
                    viewBox="0 0 420 18"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M4 12C82 4 161 16 230 9C294 3 349 10 416 5"
                      stroke="#171717"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
            </div>
          </div>

          {/* Main testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="grid overflow-hidden border-2 border-[#171717] bg-[#171717] shadow-[8px_8px_0_#FF6B35] md:grid-cols-[1.25fr_0.75fr]"
          >
            {/* Quote */}
            <div className="relative flex min-h-[430px] flex-col justify-between overflow-hidden p-8 sm:p-12 md:p-14">
              {/* Giant quote mark */}
              <div className="pointer-events-none absolute -right-2 -top-12 text-[16rem] font-black leading-none text-[#FF6B35]/10">
                “
              </div>

              <div className="relative">
                <div className="mb-8 flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-[#65D6D6]" />
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-white/50">
                    Residential / Accra
                  </span>
                </div>

                <blockquote className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-[#FFF9F2] sm:text-4xl md:text-5xl">
                  “Vertex gave us confidence from the first drawing to the final
                  handover. Every detail was considered, every stage was
                  communicated.”
                </blockquote>
              </div>

              <div className="relative mt-12 flex items-end justify-between gap-6">
                <div>
                  <p className="text-base font-black text-[#FFF9F2]">
                    Kwame &amp; Ama Mensah
                  </p>
                  <p className="mt-1 text-sm text-white/45">
                    Private Residential Client
                  </p>
                </div>

                <div className="hidden text-right sm:block">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                    Project
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#65D6D6]">
                    Ridge House / 014
                  </p>
                </div>
              </div>
            </div>

            {/* Project image / metadata */}
            <div className="relative min-h-[360px] overflow-hidden border-t-2 border-[#FFF9F2]/10 md:border-l-2 md:border-t-0">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="Modern residential architecture"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/90 via-[#171717]/20 to-transparent" />

              <div className="absolute left-6 top-6 border-2 border-[#171717] bg-[#FFB84D] px-4 py-3 shadow-[4px_4px_0_#171717]">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#171717]">
                  Completed
                </p>
                <p className="mt-1 text-lg font-black text-[#171717]">2024</p>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-end justify-between gap-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">
                      The Ridge House
                    </p>
                    <p className="mt-1 text-xl font-black text-white">
                      4,850 SQ FT
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust / project facts */}
          <div className="mt-12 grid border-y-2 border-[#171717] sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: "120+",
                label: "Projects delivered",
                accent: "#FF6B35",
              },
              {
                value: "18+",
                label: "Years of experience",
                accent: "#7867D8",
              },
              {
                value: "14",
                label: "Cities reached",
                accent: "#65D6D6",
              },
              {
                value: "98%",
                label: "Client satisfaction",
                accent: "#FFB84D",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative px-6 py-8 ${
                  index !== 3 ? "border-b-2 sm:border-r-2 lg:border-b-0" : ""
                } ${
                  index === 1 ? "sm:border-b-2 lg:border-b-0" : ""
                } border-[#171717]`}
              >
                <span
                  className="mb-5 block h-2.5 w-10"
                  style={{ backgroundColor: item.accent }}
                />

                <p className="text-4xl font-black tracking-[-0.05em] text-[#171717]">
                  {item.value}
                </p>

                <p className="mt-2 max-w-[150px] text-xs font-bold uppercase leading-relaxed tracking-[0.12em] text-[#6F655E]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Client collaboration strip */}
          <div className="mt-16 overflow-hidden border-2 border-[#171717] bg-[#E7E1D8]">
            <div className="flex flex-col md:flex-row">
              <div className="flex shrink-0 items-center border-b-2 border-[#171717] bg-[#171717] px-6 py-5 md:w-56 md:border-b-0 md:border-r-2">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FFF9F2]">
                  Trusted across
                </p>
              </div>

              <div className="grid flex-1 grid-cols-2 sm:grid-cols-4">
                {[
                  "Residential",
                  "Commercial",
                  "Hospitality",
                  "Development",
                ].map((type, index) => (
                  <div
                    key={type}
                    className={`flex min-h-[90px] items-center justify-center px-5 ${
                      index !== 3 ? "border-r-2" : ""
                    } border-[#171717]`}
                  >
                    <span className="text-center text-sm font-black uppercase tracking-[0.1em] text-[#171717]">
                      {type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Closing CTA */}
          <div className="mt-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-2xl font-black leading-tight tracking-[-0.03em] text-[#171717] sm:text-3xl">
                A good client relationship should last longer than the build.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#6F655E]">
                We keep communication clear, decisions documented, and the
                finished result aligned with the original vision.
              </p>
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex shrink-0 items-center gap-3 border-2 border-[#171717] bg-[#FF6B35] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-[#171717] shadow-[5px_5px_0_#171717] transition-all hover:-translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0_#171717]"
            >
              Start a conversation
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="relative overflow-hidden bg-[#F7F4EE] px-5 py-24 md:px-8 md:py-32"
      >
        {/* Background construction marks */}
        <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full border border-[#171717]/10" />
        <div className="pointer-events-none absolute right-16 top-36 h-40 w-40 rounded-full border border-[#FF6B35]/20" />

        <div className="relative mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 bg-[#FF6B35]" />

                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#716B64]">
                  01 / Selected projects
                </p>
              </div>

              <h2 className="mt-6 max-w-4xl text-5xl font-black uppercase leading-[0.87] tracking-[-0.07em] md:text-7xl lg:text-8xl">
                Spaces
                <br />
                <span className="text-[#FF6B35]">worth</span> building.
              </h2>
            </div>

            <div className="md:pb-2">
              <p className="max-w-md text-sm leading-7 text-[#625C55] md:text-base">
                Every project starts with a clear idea and ends with something
                tangible. We work across residential, commercial, hospitality,
                and development projects.
              </p>
            </div>
          </div>

          {/* =========================================================
        FEATURED PROJECT
    ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group mt-16"
          >
            <div className="relative overflow-hidden border-2 border-[#171717] bg-[#D5CEC4] shadow-[8px_8px_0_#171717]">
              <div className="relative aspect-[16/9] overflow-hidden md:aspect-[2/1]">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85"
                  alt="Modern residential architecture"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                {/* Image treatment */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/80 via-[#171717]/10 to-transparent" />

                {/* Project number */}
                <div className="absolute left-5 top-5 flex items-center gap-3 md:left-7 md:top-7">
                  <span className="bg-[#FF6B35] px-3 py-2 text-[9px] font-black uppercase tracking-[0.15em]">
                    VB / 014
                  </span>

                  <span className="hidden bg-[#171717]/80 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm sm:block">
                    Completed 2025
                  </span>
                </div>

                {/* Project information */}
                <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8">
                  <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/60">
                        Residential / Accra, Ghana
                      </p>

                      <h3 className="mt-2 text-4xl font-black uppercase leading-none tracking-[-0.06em] text-white md:text-6xl">
                        The Ridge House
                      </h3>
                    </div>

                    <button className="flex w-fit items-center gap-3 border-2 border-white bg-[#F7F4EE] px-5 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-[#171717] transition-all hover:bg-[#FF6B35]">
                      View project
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project facts */}
            <div className="grid border-x-2 border-b-2 border-[#171717] sm:grid-cols-3">
              <div className="border-b-2 border-[#171717] px-5 py-4 sm:border-b-0 sm:border-r-2">
                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#777068]">
                  Area
                </p>
                <p className="mt-1 text-sm font-black uppercase">4,850 SQ FT</p>
              </div>

              <div className="border-b-2 border-[#171717] px-5 py-4 sm:border-b-0 sm:border-r-2">
                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#777068]">
                  Scope
                </p>
                <p className="mt-1 text-sm font-black uppercase">
                  Full Construction
                </p>
              </div>

              <div className="px-5 py-4">
                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#777068]">
                  Duration
                </p>
                <p className="mt-1 text-sm font-black uppercase">14 Months</p>
              </div>
            </div>
          </motion.div>

          {/* =========================================================
        PROJECT GRID
    ========================================================= */}
          <div className="mt-20 grid gap-10 md:grid-cols-2">
            {/* Project 02 */}
            <motion.article
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="group md:mt-16"
            >
              <div className="relative overflow-hidden border-2 border-[#171717] bg-[#C9C2B8] shadow-[6px_6px_0_#FF6B35]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1100&q=85"
                    alt="Modern commercial building"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/70 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 bg-[#F7F4EE] px-3 py-2 text-[9px] font-black uppercase tracking-[0.15em]">
                    VB / 011
                  </span>

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/60">
                      Commercial / Airport City
                    </p>

                    <h3 className="mt-2 text-3xl font-black uppercase leading-none tracking-[-0.05em] text-white md:text-4xl">
                      Meridian Offices
                    </h3>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-5">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#777068]">
                    Commercial
                  </p>

                  <p className="mt-2 text-sm font-black uppercase">
                    Architecture + Build
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center border-2 border-[#171717] transition-colors group-hover:bg-[#FF6B35]">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </motion.article>

            {/* Project 03 */}
            <motion.article
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="relative overflow-hidden border-2 border-[#171717] bg-[#C9C2B8] shadow-[6px_6px_0_#7867D8]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85"
                    alt="Luxury hospitality interior"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/70 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 bg-[#7867D8] px-3 py-2 text-[9px] font-black uppercase tracking-[0.15em] text-white">
                    VB / 008
                  </span>

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/60">
                      Hospitality / East Legon
                    </p>

                    <h3 className="mt-2 text-3xl font-black uppercase leading-none tracking-[-0.05em] text-white md:text-4xl">
                      House No. 8
                    </h3>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-5">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#777068]">
                    Hospitality
                  </p>

                  <p className="mt-2 text-sm font-black uppercase">
                    Interior + Renovation
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center border-2 border-[#171717] transition-colors group-hover:bg-[#7867D8] group-hover:text-white">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            </motion.article>
          </div>

          {/* =========================================================
        SMALL PROJECT STRIP
    ========================================================= */}
          <div className="mt-20 border-y-2 border-[#171717]">
            <div className="grid sm:grid-cols-3">
              <div className="group flex items-center justify-between border-b-2 border-[#171717] px-5 py-6 transition-colors hover:bg-[#FF6B35] sm:border-b-0 sm:border-r-2">
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#777068] group-hover:text-[#171717]/60">
                    VB / 005
                  </p>
                  <p className="mt-2 text-sm font-black uppercase">
                    Palm Residence
                  </p>
                </div>

                <ArrowUpRight size={18} />
              </div>

              <div className="group flex items-center justify-between border-b-2 border-[#171717] px-5 py-6 transition-colors hover:bg-[#65D6D6] sm:border-b-0 sm:border-r-2">
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#777068]">
                    VB / 003
                  </p>
                  <p className="mt-2 text-sm font-black uppercase">
                    Atlas Retail
                  </p>
                </div>

                <ArrowUpRight size={18} />
              </div>

              <div className="group flex items-center justify-between px-5 py-6 transition-colors hover:bg-[#FFB84D]">
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#777068]">
                    VB / 001
                  </p>
                  <p className="mt-2 text-sm font-black uppercase">
                    Cantonment Villa
                  </p>
                </div>

                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="mt-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-2xl font-black uppercase leading-tight tracking-[-0.04em] md:text-3xl">
              Good buildings don't just fill space.
              <span className="text-[#FF6B35]"> They define it.</span>
            </p>

            <button
              onClick={() => scrollTo("contact")}
              className="flex w-fit items-center gap-3 border-b-2 border-[#171717] pb-2 text-[10px] font-black uppercase tracking-[0.16em] transition-colors hover:border-[#FF6B35] hover:text-[#FF6B35]"
            >
              Discuss your project
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </section>
      <section
        id="services"
        className="relative overflow-hidden bg-[#DCD6CC] px-5 py-24 md:px-8 md:py-32"
      >
        {/* Architectural background lines */}
        <div className="pointer-events-none absolute inset-y-0 left-[12%] hidden w-px bg-[#171717]/10 md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-[12%] hidden w-px bg-[#171717]/10 md:block" />

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 bg-[#FF6B35]" />

                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#716B64]">
                  02 / What we do
                </p>
              </div>

              <p className="mt-8 max-w-xs text-sm leading-6 text-[#625C55]">
                One team from first concept through final handover. Every
                discipline works together toward the same result.
              </p>
            </div>

            <h2 className="text-5xl font-black uppercase leading-[0.86] tracking-[-0.07em] md:text-7xl lg:text-8xl">
              From ground
              <br />
              <span className="text-[#FF6B35]">to finished.</span>
            </h2>
          </div>

          {/* =========================================================
        SERVICES LIST
    ========================================================= */}
          <div className="mt-20 border-t-2 border-[#171717]">
            {/* Service 01 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group grid border-b-2 border-[#171717] py-8 md:grid-cols-[90px_1fr_0.8fr_80px] md:items-center md:gap-8 md:py-10"
            >
              <span className="text-sm font-black text-[#FF6B35]">01</span>

              <h3 className="mt-4 text-3xl font-black uppercase tracking-[-0.05em] transition-transform group-hover:translate-x-2 md:mt-0 md:text-5xl">
                General
                <br className="hidden md:block" /> Construction
              </h3>

              <p className="mt-5 max-w-md text-sm leading-6 text-[#625C55] md:mt-0">
                Complete construction delivery, from site preparation and
                structural work to finishes, installations, and final handover.
              </p>

              <div className="mt-6 flex h-12 w-12 items-center justify-center border-2 border-[#171717] transition-all group-hover:bg-[#FF6B35] md:mt-0 md:justify-self-end">
                <ArrowUpRight size={19} />
              </div>
            </motion.div>

            {/* Service 02 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.08, duration: 0.5 }}
              className="group grid border-b-2 border-[#171717] py-8 md:grid-cols-[90px_1fr_0.8fr_80px] md:items-center md:gap-8 md:py-10"
            >
              <span className="text-sm font-black text-[#7867D8]">02</span>

              <h3 className="mt-4 text-3xl font-black uppercase tracking-[-0.05em] transition-transform group-hover:translate-x-2 md:mt-0 md:text-5xl">
                Architecture
                <br className="hidden md:block" /> & Planning
              </h3>

              <p className="mt-5 max-w-md text-sm leading-6 text-[#625C55] md:mt-0">
                Spatial planning, architectural development, technical drawings,
                and design coordination that turn ideas into buildable
                solutions.
              </p>

              <div className="mt-6 flex h-12 w-12 items-center justify-center border-2 border-[#171717] transition-all group-hover:bg-[#7867D8] group-hover:text-white md:mt-0 md:justify-self-end">
                <ArrowUpRight size={19} />
              </div>
            </motion.div>

            {/* Service 03 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.16, duration: 0.5 }}
              className="group grid border-b-2 border-[#171717] py-8 md:grid-cols-[90px_1fr_0.8fr_80px] md:items-center md:gap-8 md:py-10"
            >
              <span className="text-sm font-black text-[#168A9A]">03</span>

              <h3 className="mt-4 text-3xl font-black uppercase tracking-[-0.05em] transition-transform group-hover:translate-x-2 md:mt-0 md:text-5xl">
                Renovation
                <br className="hidden md:block" /> & Restoration
              </h3>

              <p className="mt-5 max-w-md text-sm leading-6 text-[#625C55] md:mt-0">
                Thoughtful transformations for existing spaces — improving
                function, extending lifespan, and giving old structures a new
                purpose.
              </p>

              <div className="mt-6 flex h-12 w-12 items-center justify-center border-2 border-[#171717] transition-all group-hover:bg-[#65D6D6] md:mt-0 md:justify-self-end">
                <ArrowUpRight size={19} />
              </div>
            </motion.div>

            {/* Service 04 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.24, duration: 0.5 }}
              className="group grid border-b-2 border-[#171717] py-8 md:grid-cols-[90px_1fr_0.8fr_80px] md:items-center md:gap-8 md:py-10"
            >
              <span className="text-sm font-black text-[#E39A21]">04</span>

              <h3 className="mt-4 text-3xl font-black uppercase tracking-[-0.05em] transition-transform group-hover:translate-x-2 md:mt-0 md:text-5xl">
                Project
                <br className="hidden md:block" /> Management
              </h3>

              <p className="mt-5 max-w-md text-sm leading-6 text-[#625C55] md:mt-0">
                Clear schedules, budgets, procurement, contractors, and site
                coordination — keeping complex builds moving in the right
                direction.
              </p>

              <div className="mt-6 flex h-12 w-12 items-center justify-center border-2 border-[#171717] transition-all group-hover:bg-[#FFB84D] md:mt-0 md:justify-self-end">
                <ArrowUpRight size={19} />
              </div>
            </motion.div>
          </div>

          {/* =========================================================
        TECHNICAL DRAWING PANEL
    ========================================================= */}
          <div className="mt-16 grid overflow-hidden border-2 border-[#171717] bg-[#F7F4EE] shadow-[7px_7px_0_#171717] lg:grid-cols-[1fr_0.9fr]">
            {/* Drawing */}
            <div className="relative min-h-[420px] overflow-hidden border-b-2 border-[#171717] bg-[#E8E3DA] lg:border-b-0 lg:border-r-2">
              {/* Grid */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(#171717 1px, transparent 1px), linear-gradient(90deg, #171717 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Floor plan */}
              <div className="absolute left-[12%] top-[16%] h-[68%] w-[72%] border-2 border-[#171717]">
                <div className="absolute left-[45%] top-0 h-[52%] w-px bg-[#171717]" />

                <div className="absolute bottom-0 left-[25%] h-[42%] w-px bg-[#171717]" />

                <div className="absolute bottom-[32%] left-0 h-px w-[45%] bg-[#171717]" />

                <div className="absolute bottom-[32%] right-0 h-px w-[55%] bg-[#171717]" />

                <div className="absolute left-[45%] top-[52%] h-px w-[55%] bg-[#171717]" />

                {/* Door arcs */}
                <div className="absolute left-[38%] top-[49%] h-16 w-16 rounded-full border-b border-[#FF6B35]" />

                <div className="absolute bottom-[29%] left-[19%] h-12 w-12 rounded-full border-r border-[#7867D8]" />

                {/* Room labels */}
                <span className="absolute left-[12%] top-[15%] text-[7px] font-bold uppercase tracking-[0.15em] text-[#716B64]">
                  Living
                </span>

                <span className="absolute right-[12%] top-[18%] text-[7px] font-bold uppercase tracking-[0.15em] text-[#716B64]">
                  Kitchen
                </span>

                <span className="absolute bottom-[18%] left-[10%] text-[7px] font-bold uppercase tracking-[0.15em] text-[#716B64]">
                  Bedroom 01
                </span>

                <span className="absolute bottom-[18%] right-[12%] text-[7px] font-bold uppercase tracking-[0.15em] text-[#716B64]">
                  Bedroom 02
                </span>
              </div>

              {/* Dimension lines */}
              <div className="absolute left-[12%] right-[16%] top-[10%] flex items-center">
                <span className="h-px flex-1 bg-[#171717]" />
                <span className="px-2 text-[7px] font-black">18.40 M</span>
                <span className="h-px flex-1 bg-[#171717]" />
              </div>

              <div className="absolute bottom-[11%] left-[7%] top-[16%] flex flex-col items-center">
                <span className="w-px flex-1 bg-[#171717]" />
                <span className="rotate-[-90deg] px-2 text-[7px] font-black">
                  12.80 M
                </span>
                <span className="w-px flex-1 bg-[#171717]" />
              </div>

              {/* Drawing label */}
              <div className="absolute bottom-5 left-5 border-2 border-[#171717] bg-[#F7F4EE] px-4 py-3">
                <p className="text-[8px] font-black uppercase tracking-[0.18em]">
                  Drawing / VB-014
                </p>
                <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.15em] text-[#716B64]">
                  Ground floor plan
                </p>
              </div>

              <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border-2 border-[#171717] bg-[#FF6B35] text-xs font-black">
                N
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-between p-7 md:p-10">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FF6B35]">
                  One team. One process.
                </p>

                <h3 className="mt-6 text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-5xl">
                  Good construction
                  <br />
                  starts long before
                  <br />
                  the first brick.
                </h3>

                <p className="mt-7 max-w-lg text-sm leading-7 text-[#625C55]">
                  Planning, documentation, materials, people, timelines — the
                  work behind the work is what keeps a project predictable. We
                  take care of those details so the finished building can speak
                  for itself.
                </p>
              </div>

              <div className="mt-12 border-t-2 border-[#171717] pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-[0.18em]">
                    Built around your brief
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center bg-[#171717] text-white">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom service statement */}
          <div className="mt-16 grid gap-8 border-t-2 border-[#171717] pt-8 md:grid-cols-2 md:items-end">
            <p className="text-2xl font-black uppercase leading-tight tracking-[-0.04em] md:text-3xl">
              We don't just manage
              <br />
              <span className="text-[#FF6B35]">the build.</span>
              <br />
              We own the outcome.
            </p>

            <div className="md:justify-self-end">
              <button
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-3 border-b-2 border-[#171717] pb-2 text-[10px] font-black uppercase tracking-[0.16em] transition-colors hover:border-[#FF6B35] hover:text-[#FF6B35]"
              >
                Tell us what you're building
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="relative overflow-hidden bg-[#171717] px-5 py-24 text-[#F7F4EE] md:px-8 md:py-32"
      >
        {/* Architectural decoration */}
        <div className="pointer-events-none absolute right-[-80px] top-20 h-[420px] w-[420px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute right-[-20px] top-36 h-[300px] w-[300px] rounded-full border border-[#FF6B35]/20" />

        <div className="relative mx-auto max-w-7xl">
          {/* Section label */}
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 bg-[#FF6B35]" />

            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/45">
              03 / About Vertex
            </p>
          </div>

          {/* Main statement */}
          <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="max-w-6xl text-5xl font-black uppercase leading-[0.84] tracking-[-0.07em] md:text-7xl lg:text-8xl">
              Built by people
              <br />
              who care about
              <br />
              <span className="text-[#FF6B35]">the details.</span>
            </h2>

            <div className="lg:pb-2">
              <p className="text-base leading-7 text-white/60 md:text-lg">
                Vertex Build is a construction and development company focused
                on creating spaces that are practical, considered, and built to
                endure.
              </p>

              <p className="mt-5 text-sm leading-6 text-white/40">
                We bring architects, engineers, craftsmen, contractors, and
                clients around one table — because great buildings happen when
                everyone is working toward the same vision.
              </p>
            </div>
          </div>

          {/* =========================================================
        STATISTICS
    ========================================================= */}
          <div className="mt-20 grid border-y-2 border-white/15 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-b-2 border-white/15 px-5 py-8 sm:border-r-2 lg:border-b-0">
              <p className="text-5xl font-black tracking-[-0.07em] text-[#FF6B35] md:text-6xl">
                18+
              </p>

              <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                Years of experience
              </p>
            </div>

            <div className="border-b-2 border-white/15 px-5 py-8 lg:border-b-0 lg:border-r-2">
              <p className="text-5xl font-black tracking-[-0.07em] md:text-6xl">
                120+
              </p>

              <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                Projects completed
              </p>
            </div>

            <div className="border-b-2 border-white/15 px-5 py-8 sm:border-r-2 lg:border-b-0">
              <p className="text-5xl font-black tracking-[-0.07em] text-[#65D6D6] md:text-6xl">
                14
              </p>

              <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                Cities reached
              </p>
            </div>

            <div className="px-5 py-8">
              <p className="text-5xl font-black tracking-[-0.07em] text-[#7867D8] md:text-6xl">
                98%
              </p>

              <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                Client satisfaction
              </p>
            </div>
          </div>

          {/* =========================================================
        STORY / IMAGE
    ========================================================= */}
          <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden border-2 border-white/20 shadow-[8px_8px_0_#FF6B35]">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85"
                  alt="Architect working on construction plans"
                  className="h-full w-full object-cover grayscale-[35%]"
                />

                <div className="absolute inset-0 bg-[#171717]/20" />

                {/* Image label */}
                <div className="absolute bottom-5 left-5 border-2 border-[#171717] bg-[#F7F4EE] px-4 py-3 text-[#171717]">
                  <p className="text-[8px] font-black uppercase tracking-[0.18em]">
                    Built on experience
                  </p>

                  <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.15em] text-[#716B64]">
                    Vertex Build / Since 2008
                  </p>
                </div>

                {/* Coordinate */}
                <div className="absolute right-5 top-5 text-right">
                  <p className="text-[8px] font-black uppercase tracking-[0.18em] text-white">
                    05°33' N
                  </p>

                  <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.15em] text-white/60">
                    00°12' W
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FF6B35]">
                Our approach
              </p>

              <h3 className="mt-5 max-w-xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] md:text-5xl">
                Every project
                <br />
                is a promise
                <br />
                <span className="text-white/35">we intend to keep.</span>
              </h3>

              <div className="mt-8 max-w-xl space-y-5 text-sm leading-7 text-white/55">
                <p>
                  Construction is more than putting materials together. It's
                  coordinating people, solving problems, respecting budgets, and
                  making thousands of decisions before a client ever walks
                  through the finished door.
                </p>

                <p>
                  That's why we keep our process direct. Clear communication,
                  experienced teams, honest timelines, and attention to the
                  details that others might overlook.
                </p>
              </div>

              {/* Principles */}
              <div className="mt-10 grid border-t border-white/15 sm:grid-cols-2">
                <div className="border-b border-white/15 py-5 sm:border-r sm:pr-6">
                  <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#65D6D6]">
                    01
                  </span>

                  <p className="mt-2 text-sm font-black uppercase">
                    Precision over shortcuts
                  </p>
                </div>

                <div className="border-b border-white/15 py-5 sm:pl-6">
                  <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#7867D8]">
                    02
                  </span>

                  <p className="mt-2 text-sm font-black uppercase">
                    People before process
                  </p>
                </div>

                <div className="border-b border-white/15 py-5 sm:border-b-0 sm:border-r sm:pr-6">
                  <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#FFB84D]">
                    03
                  </span>

                  <p className="mt-2 text-sm font-black uppercase">
                    Details that endure
                  </p>
                </div>

                <div className="py-5 sm:pl-6">
                  <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#FF6B35]">
                    04
                  </span>

                  <p className="mt-2 text-sm font-black uppercase">
                    Accountability always
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =========================================================
        TIMELINE
    ========================================================= */}
          <div className="mt-24 border-t-2 border-white/15 pt-10">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40">
                  The Vertex timeline
                </p>

                <p className="mt-5 max-w-xs text-2xl font-black uppercase leading-tight tracking-[-0.04em]">
                  A practice built one project at a time.
                </p>
              </div>

              <div className="divide-y divide-white/15 border-y border-white/15">
                <div className="grid gap-4 py-6 sm:grid-cols-[100px_1fr] sm:items-center">
                  <span className="text-2xl font-black text-[#FF6B35]">
                    2008
                  </span>

                  <p className="text-sm leading-6 text-white/55">
                    Vertex begins with a small construction team and a simple
                    principle: build it properly.
                  </p>
                </div>

                <div className="grid gap-4 py-6 sm:grid-cols-[100px_1fr] sm:items-center">
                  <span className="text-2xl font-black text-[#7867D8]">
                    2014
                  </span>

                  <p className="text-sm leading-6 text-white/55">
                    Architecture and project management become part of the
                    firm's integrated delivery model.
                  </p>
                </div>

                <div className="grid gap-4 py-6 sm:grid-cols-[100px_1fr] sm:items-center">
                  <span className="text-2xl font-black text-[#65D6D6]">
                    2020
                  </span>

                  <p className="text-sm leading-6 text-white/55">
                    Vertex expands into commercial and hospitality developments
                    across multiple cities.
                  </p>
                </div>

                <div className="grid gap-4 py-6 sm:grid-cols-[100px_1fr] sm:items-center">
                  <span className="text-2xl font-black text-[#FFB84D]">
                    Today
                  </span>

                  <p className="text-sm leading-6 text-white/55">
                    A multidisciplinary team delivering ambitious spaces from
                    concept through completion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing statement */}
          <div className="mt-20 border-t-2 border-white/15 pt-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <p className="max-w-3xl text-2xl font-black uppercase leading-tight tracking-[-0.04em] md:text-4xl">
                We believe the best buildings are the ones people still
                appreciate
                <span className="text-[#FF6B35]"> years later.</span>
              </p>

              <button
                onClick={() => scrollTo("contact")}
                className="flex w-fit shrink-0 items-center gap-3 border-2 border-[#F7F4EE] px-5 py-3 text-[9px] font-black uppercase tracking-[0.16em] transition-all hover:bg-[#FF6B35] hover:text-[#171717]"
              >
                Work with Vertex
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* FINAL CTA */}
      <section
        id="contact"
        className="relative overflow-hidden bg-[#FF6B35] px-6 py-24 md:px-10 md:py-32"
      >
        {/* Architectural grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(#171717 1px, transparent 1px), linear-gradient(90deg, #171717 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Decorative geometry */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[3px] border-[#171717]/20" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 border-[3px] border-[#171717]/15" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            {/* Main statement */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-8 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#171717]" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-[#171717]/70">
                  06 / Start a project
                </span>
              </div>

              <h2 className="max-w-5xl text-6xl font-black leading-[0.86] tracking-[-0.06em] text-[#171717] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
                Have a space
                <br />
                <span className="relative inline-block">
                  in mind?
                  <svg
                    className="absolute -bottom-5 left-0 h-6 w-full"
                    viewBox="0 0 430 24"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M5 16C72 7 132 20 205 11C273 2 339 14 425 6"
                      stroke="#171717"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <p className="mt-10 max-w-xl text-lg font-medium leading-8 text-[#171717]/70">
                Tell us what you're building, where you're building it, and what
                success looks like. We'll take it from there.
              </p>
            </motion.div>

            {/* Contact panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="border-2 border-[#171717] bg-[#171717] p-7 shadow-[8px_8px_0_#FFF9F2] sm:p-9"
            >
              <div className="mb-10 flex items-start justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-white/40">
                    Project enquiries
                  </p>

                  <p className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#FFF9F2]">
                    Let's build something.
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#65D6D6] text-[#171717]">
                  <ArrowUpRight size={21} />
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:hello@vertexbuild.com"
                  className="group flex items-center justify-between border-b border-white/15 py-4 transition-colors hover:border-[#FF6B35]"
                >
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                      Email
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#FFF9F2]">
                      hello@vertexbuild.com
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-white/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#FF6B35]"
                  />
                </a>

                <a
                  href="tel:+233550000000"
                  className="group flex items-center justify-between border-b border-white/15 py-4 transition-colors hover:border-[#65D6D6]"
                >
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                      Phone
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#FFF9F2]">
                      +233 55 000 0000
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-white/40 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#65D6D6]"
                  />
                </a>

                <div className="border-b border-white/15 py-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">
                    Studio
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#FFF9F2]">
                    Accra, Ghana
                  </p>
                </div>
              </div>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group mt-8 flex w-full items-center justify-between border-2 border-[#FFF9F2] bg-[#FFF9F2] px-5 py-4 text-sm font-black uppercase tracking-[0.08em] text-[#171717] transition-all hover:bg-[#FFB84D]"
              >
                Tell us about your project
                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>
            </motion.div>
          </div>

          {/* Bottom project markers */}
          <div className="mt-20 flex flex-col gap-5 border-t-2 border-[#171717]/30 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#171717]/55">
              Architecture / Construction / Development
            </p>

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#171717]" />
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#171717]/55">
                Accra · Ghana · 05°33′N 00°12′W
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden bg-[#171717] text-[#FFF9F2]">
        {/* Blueprint grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(#FFF9F2 1px, transparent 1px), linear-gradient(90deg, #FFF9F2 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Decorative architectural lines */}
        <div className="pointer-events-none absolute right-[8%] top-16 hidden h-72 w-72 border border-white/10 lg:block">
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-white/10" />
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          {/* Top footer statement */}
          <div className="grid gap-12 border-b border-white/15 pb-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center border-2 border-[#FF6B35] text-sm font-black text-[#FF6B35]">
                  VB
                </span>

                <span className="text-xs font-black uppercase tracking-[0.2em] text-white/45">
                  Vertex Build
                </span>
              </div>

              <h2 className="max-w-4xl text-5xl font-black leading-[0.88] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
                We build
                <br />
                <span className="text-[#FF6B35]">spaces that last.</span>
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-sm text-sm leading-7 text-white/45">
                Construction, architecture and development delivered with
                precision, accountability and a long-term view.
              </p>

              <button
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="group mt-7 inline-flex items-center gap-3 border-2 border-[#FFF9F2] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] transition-all hover:bg-[#FFF9F2] hover:text-[#171717]"
              >
                Back to top
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* Footer navigation */}
          <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
            {/* Brand / location */}
            <div>
              <p className="text-3xl font-black tracking-[-0.04em]">
                vertex<span className="text-[#FF6B35]">.</span>
              </p>

              <p className="mt-5 max-w-xs text-sm leading-7 text-white/40">
                Building thoughtful spaces for people, businesses and
                communities across Ghana.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#65D6D6]" />
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/45">
                  Accra, Ghana
                </span>
              </div>
            </div>

            {/* Explore */}
            <div>
              <p className="mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#FF6B35]">
                Explore
              </p>

              <div className="flex flex-col items-start gap-4">
                {[
                  ["Projects", "projects"],
                  ["Services", "services"],
                  ["Process", "process"],
                  ["About", "about"],
                  ["Contact", "contact"],
                ].map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() =>
                      document.getElementById(id)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                    className="group flex items-center gap-2 text-sm font-bold text-white/55 transition-colors hover:text-[#FFF9F2]"
                  >
                    {label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <p className="mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#7867D8]">
                Capabilities
              </p>

              <div className="flex flex-col gap-4 text-sm font-bold text-white/55">
                <span>General Construction</span>
                <span>Architecture &amp; Planning</span>
                <span>Renovation</span>
                <span>Project Management</span>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#65D6D6]">
                Get in touch
              </p>

              <div className="space-y-5">
                <a href="mailto:hello@vertexbuild.com" className="group block">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-white/30">
                    Email
                  </span>
                  <span className="mt-1 block text-sm font-bold text-white/65 transition-colors group-hover:text-[#65D6D6]">
                    hello@vertexbuild.com
                  </span>
                </a>

                <a href="tel:+233550000000" className="group block">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-white/30">
                    Phone
                  </span>
                  <span className="mt-1 block text-sm font-bold text-white/65 transition-colors group-hover:text-[#FF6B35]">
                    +233 55 000 0000
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Blueprint / project strip */}
          <div className="relative overflow-hidden border border-white/10 bg-[#211F1D]">
            <div className="grid md:grid-cols-[1fr_auto_1fr]">
              <div className="border-b border-white/10 p-5 md:border-b-0 md:border-r">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/25">
                  Studio coordinates
                </p>
                <p className="mt-2 font-mono text-xs text-white/50">
                  05°33′N / 00°12′W
                </p>
              </div>

              <div className="flex items-center justify-center border-b border-white/10 px-8 py-5 md:border-b-0 md:border-r">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#FFB84D]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/50">
                    Architecture / Construction
                  </span>
                </div>
              </div>

              <div className="p-5 md:text-right">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/25">
                  Established
                </p>
                <p className="mt-2 font-mono text-xs text-white/50">
                  2008 — Present
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-5 pt-8 text-[10px] font-bold uppercase tracking-[0.15em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Vertex Build. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="transition-colors hover:text-white/60">
                Instagram
              </a>

              <a href="#" className="transition-colors hover:text-white/60">
                LinkedIn
              </a>

              <span className="text-[#FF6B35]">
                Designed &amp; built by emessWeb.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
