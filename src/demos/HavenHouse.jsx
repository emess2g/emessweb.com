
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Menu,
  X,
} from "lucide-react";

export default function HavenHouse() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


const navItems = [
  ["Rooms", "rooms"],
  ["Experience", "experience"],
  ["The House", "house"],
  ["Gallery", "gallery"],
  ["Journal", "journal"],
  ["Contact", "contact"],
];


  return (
    <main id="top" className="min-h-screen bg-[#F5F0E8] text-[#18342A]">
      {/* =========================================================
          NAVBAR
      ========================================================= */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between border border-[#18342A]/15 bg-[#F5F0E8]/90 px-5 py-4 shadow-[0_8px_30px_rgba(24,52,42,0.06)] backdrop-blur-md md:px-7">
          {/* Logo */}
          <button
            onClick={() => scrollTo("top")}
            className="group flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#18342A] bg-[#18342A] text-xs font-black text-[#F5F0E8]">
              H
            </span>

            <div className="text-left leading-none">
              <p className="font-serif text-xl font-bold tracking-[-0.04em]">
                Haven House
              </p>
              <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.24em] text-[#18342A]/50">
                Accra · Ghana
              </p>
            </div>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#18342A]/65 transition-colors hover:text-[#C76B45]"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Booking CTA */}
          <button
            onClick={() => scrollTo("contact")}
            className="hidden items-center gap-2 bg-[#C76B45] px-5 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-white transition-all hover:bg-[#18342A] md:flex"
          >
            Book your stay
            <ArrowUpRight size={15} />
          </button>

          {/* Mobile menu */}
          <button
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center border border-[#18342A]/15 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-2 max-w-7xl border border-[#18342A]/15 bg-[#F5F0E8] p-5 shadow-xl lg:hidden"
          >
            <div className="flex flex-col">
              {navItems.map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="border-b border-[#18342A]/10 py-4 text-left text-sm font-bold uppercase tracking-[0.12em]"
                >
                  {label}
                </button>
              ))}

              <button
                onClick={() => scrollTo("contact")}
                className="mt-5 flex items-center justify-between bg-[#C76B45] px-5 py-4 text-xs font-black uppercase tracking-[0.12em] text-white"
              >
                Book your stay
                <ArrowUpRight size={17} />
              </button>
            </div>
          </motion.div>
        )}
      </header>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        id="top"
        className="relative min-h-screen overflow-hidden bg-[#18342A]"
      >
        {/* Hero image */}
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90"
          alt="Warm contemporary luxury interior"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Image treatment */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#10251E]/85 via-[#18342A]/45 to-[#18342A]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10251E]/75 via-transparent to-[#10251E]/10" />

        {/* Architectural frame */}
        <div className="pointer-events-none absolute inset-5 border border-white/20 sm:inset-7 md:inset-10" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-14 pt-36 md:px-10 md:pb-16">
          <div className="grid w-full gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
            {/* Main hero copy */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-4xl"
            >
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-12 bg-[#E3B56A]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/65">
                  Boutique stay · Accra, Ghana
                </span>
              </div>

              <h1 className="font-serif text-6xl font-medium leading-[0.88] tracking-[-0.055em] text-[#F8F2E9] sm:text-7xl md:text-8xl lg:text-[8.5rem]">
                A quieter
                <br />
                <span className="italic text-[#E3B56A]">kind of luxury.</span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-white/65 md:text-lg">
                A considered home away from home, where warm architecture,
                thoughtful hospitality and the slower side of Accra come
                together.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("rooms")}
                  className="group flex items-center gap-3 bg-[#F5F0E8] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-[#18342A] transition-all hover:bg-[#E3B56A]"
                >
                  Explore rooms
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </button>

                <button
                  onClick={() => scrollTo("house")}
                  className="flex items-center gap-3 border border-white/30 px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  Discover Haven
                </button>
              </div>
            </motion.div>

            {/* Booking card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border border-white/20 bg-[#F5F0E8]/95 p-5 text-[#18342A] backdrop-blur-md"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#18342A]/45">
                    Plan your stay
                  </p>

                  <p className="mt-1 font-serif text-2xl font-bold">
                    Find your room
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#18342A] text-[#F5F0E8]">
                  <CalendarDays size={17} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="border border-[#18342A]/15 bg-white/50 p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#18342A]/45">
                    Check in
                  </p>
                  <p className="mt-2 text-sm font-bold">Select date</p>
                </div>

                <div className="border border-[#18342A]/15 bg-white/50 p-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#18342A]/45">
                    Check out
                  </p>
                  <p className="mt-2 text-sm font-bold">Select date</p>
                </div>
              </div>

              <div className="mt-2 border border-[#18342A]/15 bg-white/50 p-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#18342A]/45">
                  Guests
                </p>
                <p className="mt-2 text-sm font-bold">2 guests</p>
              </div>

              <button
                onClick={() => scrollTo("contact")}
                className="mt-3 flex w-full items-center justify-between bg-[#C76B45] px-5 py-4 text-xs font-black uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#18342A]"
              >
                Check availability
                <ArrowUpRight size={17} />
              </button>

              <p className="mt-4 text-center text-[9px] font-medium text-[#18342A]/40">
                Best available rate · Direct booking
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom location marker */}
        <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-white/45 md:flex">
          <ArrowDown size={15} className="animate-bounce" />
          <span className="text-[9px] font-bold uppercase tracking-[0.25em]">
            Scroll to explore
          </span>
        </div>
      </section>
      {/* =========================================================
          INTRO STRIP
      ========================================================= */}
      <section className="border-b border-[#18342A]/10 bg-[#E8DFD2] px-6 py-12 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl font-serif text-2xl leading-tight text-[#18342A] md:text-3xl">
            Not just somewhere to sleep.
            <span className="italic text-[#C76B45]">
              {" "}
              Somewhere to settle in.
            </span>
          </p>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#C76B45]" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#18342A]/50">
              Est. Accra
            </span>
          </div>
        </div>
      </section>
      {/* Placeholder sections */}
      {/* =========================================================
    ROOMS & SUITES
========================================================= */}
      <section
        id="rooms"
        className="relative overflow-hidden bg-[#F5F0E8] px-6 py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.5fr] md:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C76B45]">
                01 / Stay awhile
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#18342A]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#18342A]/45">
                  Three ways to stay
                </span>
              </div>
            </div>

            <div>
              <h2 className="max-w-4xl font-serif text-5xl font-medium leading-[0.94] tracking-[-0.045em] text-[#18342A] sm:text-6xl md:text-7xl">
                Rooms designed
                <br />
                <span className="italic text-[#C76B45]">
                  around the way you live.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#18342A]/55">
                Natural materials, generous light and thoughtful details make
                every room feel less like a hotel room and more like your own
                private corner of Accra.
              </p>
            </div>
          </div>

          {/* Featured room */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mt-16 grid overflow-hidden border border-[#18342A]/15 bg-[#E8DFD2] lg:grid-cols-[1.2fr_0.8fr]"
          >
            {/* Image */}
            <div className="group relative min-h-[480px] overflow-hidden lg:min-h-[620px]">
              <img
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=90"
                alt="Haven House Garden Suite"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#18342A]/55 via-transparent to-transparent" />

              <div className="absolute left-6 top-6 border border-white/30 bg-[#F5F0E8]/90 px-4 py-3 backdrop-blur-sm">
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-[#18342A]/50">
                  Featured
                </p>

                <p className="mt-1 font-serif text-lg font-bold text-[#18342A]">
                  Garden Suite
                </p>
              </div>

              <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                <span className="h-px w-10 bg-white/60" />
                <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
                  Ground floor · Private garden
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
              <div>
                <div className="flex items-start justify-between">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#C76B45]">
                    Room 01
                  </p>

                  <span className="font-serif text-xl italic text-[#18342A]/35">
                    01
                  </span>
                </div>

                <h3 className="mt-7 font-serif text-4xl font-bold leading-none tracking-[-0.04em] text-[#18342A] sm:text-5xl">
                  Garden
                  <br />
                  Suite
                </h3>

                <p className="mt-7 text-sm leading-7 text-[#18342A]/55">
                  A calm, light-filled retreat opening onto a private garden.
                  Designed for slow mornings, long afternoons and evenings spent
                  with the doors open to the breeze.
                </p>

                <div className="mt-9 grid grid-cols-2 border-y border-[#18342A]/10">
                  <div className="border-r border-[#18342A]/10 py-5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#18342A]/40">
                      Size
                    </p>
                    <p className="mt-2 text-sm font-bold">48 m²</p>
                  </div>

                  <div className="py-5 pl-5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#18342A]/40">
                      Guests
                    </p>
                    <p className="mt-2 text-sm font-bold">2 guests</p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["King bed", "Garden", "Rain shower", "Breakfast"].map(
                    (feature) => (
                      <span
                        key={feature}
                        className="border border-[#18342A]/10 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#18342A]/55"
                      >
                        {feature}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-10 flex items-center justify-between gap-5">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#18342A]/40">
                    From
                  </p>
                  <p className="mt-1 font-serif text-2xl font-bold text-[#18342A]">
                    $185
                    <span className="ml-1 text-xs font-sans font-medium text-[#18342A]/40">
                      / night
                    </span>
                  </p>
                </div>

                <button
                  onClick={() => scrollTo("contact")}
                  className="group flex items-center gap-3 bg-[#18342A] px-5 py-4 text-[10px] font-black uppercase tracking-[0.12em] text-[#F5F0E8] transition-colors hover:bg-[#C76B45]"
                >
                  Reserve
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Secondary rooms */}
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {/* Courtyard Room */}
            <motion.article
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="group overflow-hidden border border-[#18342A]/15 bg-[#E8DFD2]"
            >
              <div className="relative h-[390px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=90"
                  alt="Haven House Courtyard Room"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#18342A]/60 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/60">
                      Room 02
                    </p>
                    <h3 className="mt-1 font-serif text-3xl font-bold text-white">
                      Courtyard Room
                    </h3>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F0E8] text-[#18342A]">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-5 p-6">
                <div>
                  <p className="text-xs leading-5 text-[#18342A]/50">
                    Intimate, quiet and tucked around the heart of the house.
                  </p>
                </div>

                <p className="shrink-0 font-serif text-xl font-bold text-[#18342A]">
                  $145
                </p>
              </div>
            </motion.article>

            {/* Haven Residence */}
            <motion.article
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group overflow-hidden border border-[#18342A]/15 bg-[#E8DFD2]"
            >
              <div className="relative h-[390px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=90"
                  alt="Haven House Residence"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#18342A]/60 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/60">
                      Room 03
                    </p>
                    <h3 className="mt-1 font-serif text-3xl font-bold text-white">
                      Haven Residence
                    </h3>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E3B56A] text-[#18342A]">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-5 p-6">
                <div>
                  <p className="text-xs leading-5 text-[#18342A]/50">
                    More space, more privacy, with everything you need to settle
                    in.
                  </p>
                </div>

                <p className="shrink-0 font-serif text-xl font-bold text-[#18342A]">
                  $260
                </p>
              </div>
            </motion.article>
          </div>

          {/* Bottom statement */}
          <div className="mt-16 flex flex-col gap-5 border-t border-[#18342A]/15 pt-7 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl font-serif text-xl italic text-[#18342A]/65">
              “Come for the room. Stay for the feeling.”
            </p>

            <button
              onClick={() => scrollTo("contact")}
              className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#C76B45]"
            >
              View availability
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>
      {/* =========================================================
    EXPERIENCE
========================================================= */}
      <section
        id="experience"
        className="relative overflow-hidden bg-[#E8DFD2] px-6 py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr] md:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C76B45]">
                02 / The experience
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#18342A]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#18342A]/45">
                  Stay curious
                </span>
              </div>
            </div>

            <div>
              <h2 className="max-w-4xl font-serif text-5xl font-medium leading-[0.94] tracking-[-0.045em] text-[#18342A] sm:text-6xl md:text-7xl">
                Come for the room.
                <br />
                <span className="italic text-[#C76B45]">
                  Stay for everything around it.
                </span>
              </h2>
            </div>
          </div>

          {/* Large experience feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative mt-16 min-h-[650px] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2200&q=90"
              alt="Luxury hotel pool"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#10251E]/90 via-[#18342A]/25 to-transparent" />

            {/* Floating label */}
            <div className="absolute left-6 top-6 border border-white/30 bg-[#F5F0E8]/90 px-5 py-4 backdrop-blur-md">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#18342A]/45">
                At Haven
              </p>
              <p className="mt-1 font-serif text-xl font-bold text-[#18342A]">
                Slow afternoons
              </p>
            </div>

            {/* Main text */}
            <div className="absolute bottom-8 left-6 max-w-2xl md:bottom-12 md:left-12">
              <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#E3B56A]">
                The pool
              </p>

              <h3 className="font-serif text-5xl font-medium leading-[0.92] tracking-[-0.04em] text-[#F8F2E9] sm:text-6xl md:text-7xl">
                Let the day
                <br />
                <span className="italic text-[#E3B56A]">take its time.</span>
              </h3>

              <p className="mt-6 max-w-lg text-sm leading-7 text-white/60">
                A shaded pool, warm water and nowhere you need to be. The
                perfect place to lose an afternoon.
              </p>
            </div>
          </motion.div>

          {/* Experience stories */}
          <div className="mt-5 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Breakfast */}
            <motion.article
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="group relative min-h-[520px] overflow-hidden bg-[#18342A]"
            >
              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1400&q=90"
                alt="Fresh breakfast"
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#10251E] via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E3B56A]">
                  Every morning
                </p>

                <h3 className="mt-3 font-serif text-4xl font-bold text-[#F5F0E8]">
                  Breakfast,
                  <br />
                  slowly.
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
                  Fresh fruit, local bread, good coffee and something warm from
                  the kitchen. No buffet rush required.
                </p>
              </div>
            </motion.article>

            {/* Experiences list */}
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Wellness */}
              <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="group relative min-h-[250px] overflow-hidden bg-[#D4C8B8]"
              >
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85"
                  alt="Wellness experience"
                  className="absolute inset-0 h-full w-full object-cover opacity-70 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#18342A]/85 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#E3B56A]">
                    03
                  </span>

                  <h3 className="mt-1 font-serif text-2xl font-bold text-white">
                    Wellness
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/55">
                    Massage, movement and moments of stillness.
                  </p>
                </div>
              </motion.article>

              {/* Dining */}
              <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="group relative min-h-[250px] overflow-hidden bg-[#C76B45]"
              >
                <img
                  src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85"
                  alt="Haven House dining"
                  className="absolute inset-0 h-full w-full object-cover opacity-55 transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[#18342A]/35" />

                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#E3B56A]">
                    04
                  </span>

                  <h3 className="mt-1 font-serif text-2xl font-bold text-white">
                    Dining
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/70">
                    Seasonal plates inspired by the neighbourhood.
                  </p>
                </div>
              </motion.article>

              {/* Accra */}
              <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="group relative min-h-[250px] overflow-hidden bg-[#18342A] sm:col-span-2"
              >
                <img
                  src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=85"
                  alt="Accra cultural experience"
                  className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#18342A]/90 via-[#18342A]/45 to-transparent" />

                <div className="absolute bottom-6 left-6 max-w-md md:left-8">
                  <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#65D6D6]">
                    05 / Beyond the house
                  </span>

                  <h3 className="mt-2 font-serif text-3xl font-bold text-[#F5F0E8] md:text-4xl">
                    Meet Accra on your own terms.
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    Our team can point you towards galleries, markets,
                    restaurants, beaches and the places locals actually love.
                  </p>
                </div>

                <button
                  onClick={() => scrollTo("journal")}
                  className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:bg-[#E3B56A] hover:text-[#18342A]"
                >
                  <ArrowUpRight size={18} />
                </button>
              </motion.article>
            </div>
          </div>

          {/* Philosophy strip */}
          <div className="mt-20 grid gap-8 border-t border-[#18342A]/15 pt-8 md:grid-cols-[0.6fr_1.4fr]">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#C76B45]">
              Our philosophy
            </p>

            <p className="max-w-3xl font-serif text-3xl leading-tight tracking-[-0.03em] text-[#18342A] md:text-4xl">
              Luxury isn't about having more.
              <span className="italic text-[#C76B45]">
                {" "}
                It's about having exactly what you need.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section
        id="house"
        className="relative overflow-hidden bg-[#18342A] px-6 py-24 text-[#F5F0E8] md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A66B]">
                03 / The house
              </p>

              <h2 className="max-w-4xl text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-[6.5rem]">
                A house with
                <span className="block italic text-[#C76B45]">
                  a sense of place.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#BFCAC1] md:pb-2">
              Designed to feel less like a hotel and more like somewhere you
              discovered. Haven House is shaped by light, greenery, quiet
              corners, and the rhythm of Accra.
            </p>
          </motion.div>

          {/* Main architectural image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden border border-[#F5F0E8]/15"
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85"
              alt="Warm modern architecture at Haven House"
              className="h-[520px] w-full object-cover md:h-[680px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#18342A]/80 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-5 p-6 md:flex-row md:items-end md:justify-between md:p-10">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-[#C9A66B]">
                  Architecture
                </p>

                <h3 className="max-w-xl text-3xl font-light tracking-tight md:text-5xl">
                  Built around natural light,
                  <span className="italic"> not spectacle.</span>
                </h3>
              </div>

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#F5F0E8]/40 bg-[#F5F0E8]/10 backdrop-blur-sm">
                <ArrowDown size={20} strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          {/* Story */}
          <div className="grid gap-16 py-24 md:grid-cols-[0.8fr_1.2fr] md:items-start md:py-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A66B]">
                The story
              </p>

              <div className="mt-8 h-px w-20 bg-[#C76B45]" />

              <p className="mt-8 max-w-sm text-2xl font-light leading-snug text-[#F5F0E8]">
                Haven began with a simple idea:
                <span className="italic text-[#C76B45]">
                  {" "}
                  create somewhere you would want to stay yourself.
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-2xl"
            >
              <p className="text-lg leading-8 text-[#D7DED8] md:text-xl">
                Tucked away in one of Accra's quieter neighbourhoods, Haven
                House was imagined as a retreat from the pace of the city
                without ever feeling disconnected from it.
              </p>

              <p className="mt-7 text-base leading-8 text-[#AEBBB1]">
                Every room opens onto something green. Every shared space has
                been designed for lingering. Materials were chosen for how they
                age, textures for how they feel, and light was treated almost
                like a building material of its own.
              </p>

              <p className="mt-7 text-base leading-8 text-[#AEBBB1]">
                The result is deliberately understated — a place where mornings
                stretch longer, conversations happen without an agenda, and the
                best part of the day is sometimes doing absolutely nothing.
              </p>
            </motion.div>
          </div>

          {/* Architectural details */}
          <div className="grid gap-5 md:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden md:col-span-7"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"
                alt="Minimal interior with natural materials"
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-7">
                <p className="text-xs uppercase tracking-[0.25em] text-[#F5F0E8]/70">
                  01
                </p>
                <p className="mt-2 text-xl font-light">Natural materials</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative overflow-hidden md:col-span-5"
            >
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
                alt="Warmly lit boutique interior"
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-7">
                <p className="text-xs uppercase tracking-[0.25em] text-[#F5F0E8]/70">
                  02
                </p>
                <p className="mt-2 text-xl font-light">Quiet textures</p>
              </div>
            </motion.div>
          </div>

          {/* House principles */}
          <div className="mt-24 border-t border-[#F5F0E8]/15 pt-8 md:mt-32">
            <div className="grid gap-10 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Light",
                  text: "Morning light, open windows, and spaces that breathe.",
                },
                {
                  number: "02",
                  title: "Nature",
                  text: "Greenery woven through the house from entrance to garden.",
                },
                {
                  number: "03",
                  title: "Materials",
                  text: "Stone, timber, linen and clay chosen to age beautifully.",
                },
                {
                  number: "04",
                  title: "Stillness",
                  text: "Enough space to slow down without ever feeling isolated.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <p className="text-xs tracking-[0.2em] text-[#C76B45]">
                    {item.number}
                  </p>

                  <h4 className="mt-5 text-2xl font-light">{item.title}</h4>

                  <p className="mt-4 text-sm leading-7 text-[#AEBBB1]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mt-24 flex flex-col gap-8 border-t border-[#F5F0E8]/15 pt-10 md:mt-32 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-3xl text-3xl font-light leading-tight tracking-tight md:text-5xl">
              “The best spaces don't ask you to notice them.
              <span className="italic text-[#C9A66B]">
                {" "}
                They simply feel right.
              </span>
              ”
            </p>

            <button
              onClick={() => scrollTo("contact")}
              className="group flex w-fit items-center gap-3 border-b border-[#F5F0E8]/40 pb-2 text-sm uppercase tracking-[0.2em] transition hover:border-[#C76B45]"
            >
              Plan your stay
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </motion.div>
        </div>
      </section>
      <section
        id="gallery"
        className="overflow-hidden bg-[#F5F0E8] px-6 py-24 text-[#18342A] md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#C76B45]">
                04 / Around Haven
              </p>

              <h2 className="max-w-4xl text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-[6.5rem]">
                A few moments
                <span className="block italic text-[#18342A]/60">
                  worth remembering.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#6F655E] md:pb-2">
              The morning light. Bare feet by the pool. A table set for two.
              Nothing staged. Just the little details that make a stay stay with
              you.
            </p>
          </motion.div>

          {/* Editorial gallery */}
          <div className="mt-20 grid gap-5 md:grid-cols-12 md:gap-6">
            {/* Large left image */}
            <motion.figure
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="group md:col-span-7"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1800&q=85"
                  alt="Quiet pool surrounded by greenery"
                  className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[700px]"
                />

                <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F0E8] text-xs font-semibold">
                  01
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-7 pt-24 text-white">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                    Slow afternoons
                  </p>
                  <p className="mt-2 text-2xl font-light">The pool</p>
                </div>
              </div>
            </motion.figure>

            {/* Right stacked images */}
            <div className="flex flex-col gap-6 md:col-span-5 md:pt-24">
              <motion.figure
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7 }}
                className="group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85"
                    alt="Warm minimalist bedroom"
                    className="h-[330px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute bottom-5 left-5 text-white">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                      02 / Stay
                    </p>
                    <p className="mt-1 text-xl font-light">Quiet mornings</p>
                  </div>
                </div>
              </motion.figure>

              <motion.figure
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="group md:ml-16"
              >
                <div className="relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=85"
                    alt="Elegant dining table"
                    className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute bottom-5 left-5 text-white">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                      03 / Table
                    </p>
                    <p className="mt-1 text-xl font-light">Dinner, slowly</p>
                  </div>
                </div>
              </motion.figure>
            </div>

            {/* Full width detail */}
            <motion.figure
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="group relative md:col-span-8 md:col-start-3"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=85"
                  alt="Natural stone and warm interior details"
                  className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[540px]"
                />

                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent p-8 text-white md:p-10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/70">
                      04 / Details
                    </p>
                    <p className="mt-2 text-3xl font-light md:text-4xl">
                      Designed for the senses.
                    </p>
                  </div>
                </div>
              </div>
            </motion.figure>

            {/* Small offset images */}
            <motion.figure
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group md:col-span-4 md:mt-16"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
                  alt="Bright indoor lounge"
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <figcaption className="mt-4 flex justify-between text-xs uppercase tracking-[0.18em] text-[#756D66]">
                <span>05 / Lounge</span>
                <span>Haven House</span>
              </figcaption>
            </motion.figure>

            <motion.figure
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group md:col-span-5 md:col-start-8 md:mt-16"
            >
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=85"
                  alt="Relaxed outdoor seating"
                  className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <figcaption className="mt-4 flex justify-between text-xs uppercase tracking-[0.18em] text-[#756D66]">
                <span>06 / Garden</span>
                <span>Accra, Ghana</span>
              </figcaption>
            </motion.figure>
          </div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-24 border-t border-[#18342A]/15 pt-10 md:mt-32 md:flex md:items-end md:justify-between"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C76B45]">
                Come see for yourself
              </p>

              <h3 className="mt-5 max-w-2xl text-4xl font-light leading-tight tracking-tight md:text-6xl">
                Some places are better
                <span className="italic text-[#18342A]/60"> experienced.</span>
              </h3>
            </div>

            <button
              onClick={() => scrollTo("contact")}
              className="group mt-8 flex items-center gap-3 border-b border-[#18342A]/30 pb-2 text-sm uppercase tracking-[0.2em] transition hover:border-[#C76B45] md:mt-0"
            >
              Book your stay
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </motion.div>
        </div>
      </section>
      <section
        id="journal"
        className="overflow-hidden bg-[#E8DFD2] px-6 py-24 text-[#18342A] md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#C76B45]">
                05 / Guest journal
              </p>

              <h2 className="max-w-4xl text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-[6.5rem]">
                Notes from
                <span className="block italic text-[#18342A]/60">
                  around Accra.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#6F655E] md:pb-2">
              Places to eat, things to see, and small discoveries worth making.
              Consider this your local guide, written by people who call Accra
              home.
            </p>
          </motion.div>

          {/* Featured journal story */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="group relative mt-20 overflow-hidden bg-[#18342A] text-[#F5F0E8]"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[460px] overflow-hidden md:min-h-[620px]">
                <img
                  src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1600&q=85"
                  alt="Evening atmosphere in Accra"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#18342A]/70 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 md:bottom-10 md:left-10">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#F5F0E8]/70">
                    The city after dark
                  </p>

                  <p className="mt-3 text-2xl font-light md:text-3xl">
                    Accra comes alive slowly.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between p-8 md:p-12 lg:p-16">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#C9A66B]">
                    City guide · 08 min read
                  </p>

                  <h3 className="mt-8 max-w-xl text-4xl font-light leading-tight tracking-tight md:text-5xl">
                    A weekend in Accra,
                    <span className="italic text-[#C76B45]">
                      {" "}
                      without rushing.
                    </span>
                  </h3>

                  <p className="mt-8 max-w-lg text-base leading-8 text-[#BFCAC1]">
                    Start with coffee somewhere quiet. Spend the afternoon near
                    the coast. Find a table when the heat softens. Stay out late
                    enough to hear the city change.
                  </p>

                  <p className="mt-6 max-w-lg text-base leading-8 text-[#AEBBB1]">
                    We've put together the kind of itinerary we'd recommend to a
                    friend — a little food, a little culture, and plenty of room
                    for doing absolutely nothing.
                  </p>
                </div>

                <button
                  type="button"
                  className="group mt-12 flex w-fit items-center gap-3 border-b border-[#F5F0E8]/30 pb-2 text-sm uppercase tracking-[0.2em] transition hover:border-[#C76B45]"
                >
                  Read the journal
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </div>
            </div>
          </motion.article>

          {/* Journal cards */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                category: "Food & drink",
                title: "Three tables we'd book tonight.",
                text: "From laid-back lunches to dinners worth dressing up for.",
                image:
                  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
              },
              {
                category: "Neighbourhoods",
                title: "A slower morning in Osu.",
                text: "Coffee, galleries, independent shops and nowhere to be.",
                image:
                  "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85",
              },
              {
                category: "Culture",
                title: "Where to find the creative Accra.",
                text: "Studios, design, art and the people shaping the city.",
                image:
                  "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=85",
              },
            ].map((story, index) => (
              <motion.article
                key={story.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 bg-[#F5F0E8] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em]">
                    0{index + 2}
                  </div>
                </div>

                <div className="border-b border-[#18342A]/15 pb-7 pt-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C76B45]">
                    {story.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-light leading-tight tracking-tight">
                    {story.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#6F655E]">
                    {story.text}
                  </p>

                  <button
                    type="button"
                    className="group/link mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.18em]"
                  >
                    Explore
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Local philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-24 border-y border-[#18342A]/15 py-12 md:mt-32 md:py-16"
          >
            <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C76B45]">
                  Our local philosophy
                </p>
              </div>

              <p className="max-w-4xl text-3xl font-light leading-tight tracking-tight md:text-5xl">
                Don't just visit Accra.
                <span className="italic text-[#18342A]/60">
                  {" "}
                  Let the city become part of your stay.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Journal CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
          >
            <p className="max-w-md text-sm leading-7 text-[#6F655E]">
              Staying with us? Tell our hosts what you're interested in and
              we'll help you build a day around it.
            </p>

            <button
              onClick={() => scrollTo("contact")}
              className="group flex w-fit items-center gap-3 bg-[#18342A] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F0E8] transition hover:bg-[#C76B45]"
            >
              Plan my Accra stay
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </motion.div>
        </div>
      </section>
      <section
        id="guest-quote"
        className="relative overflow-hidden bg-[#F5F0E8] px-6 py-28 text-[#18342A] md:px-10 md:py-40"
      >
        {/* Decorative mark */}
        <div className="pointer-events-none absolute -right-16 top-10 text-[18rem] font-serif font-light leading-none text-[#C76B45]/10 md:text-[28rem]">
          “
        </div>

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C76B45]">
              A word from our guests
            </p>

            <blockquote className="mx-auto mt-12 max-w-5xl text-4xl font-light leading-[1.12] tracking-[-0.03em] md:text-6xl lg:text-7xl">
              “Haven House felt like the kind of place you discover once and
              immediately want to keep to yourself.”
            </blockquote>

            <div className="mt-12 flex flex-col items-center">
              <div className="mb-5 h-px w-12 bg-[#C9A66B]" />

              <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                Ama K.
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#756D66]">
                Weekend guest · London
              </p>
            </div>
          </motion.div>

          {/* Stay details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-24 grid max-w-4xl border-y border-[#18342A]/15 md:grid-cols-3"
          >
            <div className="px-6 py-8 text-center md:border-r md:border-[#18342A]/15">
              <p className="text-3xl font-light">4.9/5</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#756D66]">
                Guest rating
              </p>
            </div>

            <div className="border-y border-[#18342A]/15 px-6 py-8 text-center md:border-x-0 md:border-y-0">
              <p className="text-3xl font-light">98%</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#756D66]">
                Would return
              </p>
            </div>

            <div className="px-6 py-8 text-center md:border-l md:border-[#18342A]/15">
              <p className="text-3xl font-light">24/7</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#756D66]">
                Host support
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-[#C76B45] px-6 py-24 text-[#F5F0E8] md:px-10 md:py-32"
      >
        {/* Decorative shapes */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[1px] border-[#F5F0E8]/20 md:h-96 md:w-96" />

        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rotate-12 border border-[#18342A]/20 md:h-[28rem] md:w-[28rem]" />

        <div className="pointer-events-none absolute right-[12%] top-[18%] h-5 w-5 rounded-full bg-[#C9A66B] md:h-7 md:w-7" />

        <div className="pointer-events-none absolute bottom-[22%] left-[18%] h-3 w-3 rounded-full bg-[#18342A]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            {/* Main message */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#18342A]">
                06 / Your stay
              </p>

              <h2 className="mt-7 max-w-5xl text-6xl font-light leading-[0.9] tracking-[-0.05em] md:text-8xl lg:text-[9rem]">
                Your room
                <span className="block italic text-[#18342A]">is waiting.</span>
              </h2>

              <p className="mt-10 max-w-xl text-base leading-8 text-[#F5F0E8]/85 md:text-lg">
                Tell us when you'd like to come. We'll take care of the rest —
                from choosing your room to recommending where to spend your
                afternoon in Accra.
              </p>
            </motion.div>

            {/* Booking card */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-[#18342A] p-7 shadow-[10px_10px_0_#F5F0E8] md:p-9"
            >
              <div className="border-b border-[#F5F0E8]/15 pb-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[#C9A66B]">
                  Request a stay
                </p>

                <h3 className="mt-3 text-3xl font-light">
                  Let's find your dates.
                </h3>
              </div>

              <div className="mt-7 space-y-5">
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#AEBBB1]">
                    Check-in
                  </label>

                  <div className="flex items-center gap-3 border border-[#F5F0E8]/20 px-4 py-4">
                    <CalendarDays size={17} className="text-[#C9A66B]" />

                    <input
                      type="date"
                      className="w-full bg-transparent text-sm text-[#F5F0E8] outline-none [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#AEBBB1]">
                    Check-out
                  </label>

                  <div className="flex items-center gap-3 border border-[#F5F0E8]/20 px-4 py-4">
                    <CalendarDays size={17} className="text-[#C9A66B]" />

                    <input
                      type="date"
                      className="w-full bg-transparent text-sm text-[#F5F0E8] outline-none [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-[#AEBBB1]">
                    Guests
                  </label>

                  <select
                    defaultValue="2"
                    className="w-full appearance-none border border-[#F5F0E8]/20 bg-transparent px-4 py-4 text-sm text-[#F5F0E8] outline-none"
                  >
                    <option value="1" className="bg-[#18342A]">
                      1 guest
                    </option>
                    <option value="2" className="bg-[#18342A]">
                      2 guests
                    </option>
                    <option value="3" className="bg-[#18342A]">
                      3 guests
                    </option>
                    <option value="4" className="bg-[#18342A]">
                      4 guests
                    </option>
                  </select>
                </div>

                <button
                  type="button"
                  className="group mt-3 flex w-full items-center justify-center gap-3 bg-[#F5F0E8] px-6 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#18342A] transition hover:bg-[#C9A66B]"
                >
                  Check availability
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </div>

              <p className="mt-5 text-center text-[10px] leading-5 text-[#AEBBB1]">
                No payment required · We'll confirm your stay personally.
              </p>
            </motion.div>
          </div>

          {/* Contact strip */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-24 grid gap-8 border-t border-[#F5F0E8]/25 pt-8 md:grid-cols-3"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#18342A]">
                Email
              </p>

              <a
                href="mailto:hello@havenhouse.com"
                className="mt-2 block text-lg font-light transition hover:text-[#18342A]"
              >
                hello@havenhouse.com
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#18342A]">
                Call
              </p>

              <a
                href="tel:+233550000000"
                className="mt-2 block text-lg font-light transition hover:text-[#18342A]"
              >
                +233 55 000 0000
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#18342A]">
                Location
              </p>

              <p className="mt-2 text-lg font-light">Accra, Ghana</p>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="overflow-hidden bg-[#18342A] px-6 text-[#F5F0E8] md:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Main footer statement */}
          <div className="border-b border-[#F5F0E8]/15 py-24 md:py-32">
            <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr] md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A66B]">
                  Haven House
                </p>

                <h2 className="mt-7 max-w-5xl text-6xl font-light leading-[0.88] tracking-[-0.05em] md:text-8xl lg:text-[9rem]">
                  Stay a little
                  <span className="block italic text-[#C76B45]">longer.</span>
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[#AEBBB1]">
                A quiet boutique stay in Accra, designed for slow mornings,
                thoughtful spaces, and discovering the city at your own pace.
              </p>
            </div>
          </div>

          {/* Footer navigation */}
          <div className="grid gap-12 border-b border-[#F5F0E8]/15 py-12 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-1">
              <button
                onClick={() => scrollTo("top")}
                className="text-3xl font-light tracking-[-0.04em]"
              >
                haven<span className="text-[#C76B45]">.</span>
              </button>

              <p className="mt-5 max-w-xs text-sm leading-7 text-[#AEBBB1]">
                Boutique hospitality, quietly done.
              </p>
            </div>

            {/* Explore */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A66B]">
                Explore
              </p>

              <div className="mt-5 flex flex-col gap-3">
                {[
                  ["Rooms", "rooms"],
                  ["Experience", "experience"],
                  ["The House", "house"],
                  ["Gallery", "gallery"],
                  ["Journal", "journal"],
                ].map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="w-fit text-sm text-[#D7DED8] transition hover:text-[#C76B45]"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Stay */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A66B]">
                Stay
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <button
                  onClick={() => scrollTo("contact")}
                  className="w-fit text-sm text-[#D7DED8] transition hover:text-[#C76B45]"
                >
                  Book your stay
                </button>

                <button
                  onClick={() => scrollTo("contact")}
                  className="w-fit text-sm text-[#D7DED8] transition hover:text-[#C76B45]"
                >
                  Check availability
                </button>

                <button
                  onClick={() => scrollTo("contact")}
                  className="w-fit text-sm text-[#D7DED8] transition hover:text-[#C76B45]"
                >
                  Contact us
                </button>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A66B]">
                Find us
              </p>

              <div className="mt-5 space-y-3 text-sm text-[#D7DED8]">
                <p>Accra, Ghana</p>

                <a
                  href="mailto:hello@havenhouse.com"
                  className="block transition hover:text-[#C76B45]"
                >
                  hello@havenhouse.com
                </a>

                <a
                  href="tel:+233550000000"
                  className="block transition hover:text-[#C76B45]"
                >
                  +233 55 000 0000
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col gap-5 py-7 text-[10px] uppercase tracking-[0.16em] text-[#819187] md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Haven House. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-6">
              <span>Accra · Ghana</span>
              <span>Slow stays. Good days.</span>
            </div>

            <p>
              Designed & built by{" "}
              <span className="text-[#C76B45]">emessWeb</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

