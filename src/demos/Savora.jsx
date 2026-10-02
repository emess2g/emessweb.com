import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Star,
  X,
} from "lucide-react";

const menuItems = [
  {
    name: "Truffle Mushroom Risotto",
    category: "Signature",
    description:
      "Creamy arborio rice, wild mushrooms, parmesan and fresh herbs.",
    price: "185",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Grilled Sea Bass",
    category: "From the Sea",
    description:
      "Charred sea bass, roasted vegetables, lemon butter and herbs.",
    price: "240",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Savora Steak",
    category: "From the Grill",
    description:
      "Premium grilled beef, roasted potatoes and signature pepper sauce.",
    price: "290",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Chocolate Ganache",
    category: "Dessert",
    description: "Dark chocolate ganache, vanilla cream and toasted hazelnuts.",
    price: "95",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Citrus Burrata",
    category: "Signature",
    description:
      "Creamy burrata, seasonal citrus, basil oil and toasted sourdough.",
    price: "145",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "Charred Prawns",
    category: "From the Sea",
    description: "Fire-grilled prawns, garlic butter, herbs and smoked lemon.",
    price: "210",
    image:
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1000&q=85",
  },
];

const categories = [
  "All",
  "Signature",
  "From the Sea",
  "From the Grill",
  "Dessert",
];

const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85",
    label: "The room",
    size: "large",
  },
  {
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85",
    label: "The table",
    size: "small",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=85",
    label: "The experience",
    size: "small",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=85",
    label: "The craft",
    size: "wide",
  },
];

export default function Savora() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredMenu =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const closeMenu = () => setMenuOpen(false);

  const handleReservation = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#120d09] text-[#f7efe5]">
      {/* ================= NAVIGATION ================= */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#120d09]/90 shadow-2xl shadow-black/20 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <motion.a
            href="#"
            whileHover={{ x: 3 }}
            className="relative z-50 text-2xl font-semibold tracking-tight"
          >
            SAVORA<span className="text-[#d8a35d]">.</span>
          </motion.a>

          <div className="hidden items-center gap-9 text-sm text-white/55 md:flex">
            {[
              ["Menu", "#menu"],
              ["Our Story", "#about"],
              ["Experience", "#experience"],
              ["Visit", "#visit"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="group relative py-2 transition hover:text-white"
              >
                {label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#d8a35d] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <motion.a
            href="#reserve"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="hidden rounded-full bg-[#d8a35d] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#edc487] md:block"
          >
            Reserve a Table
          </motion.a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 text-white md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={menuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile backdrop */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
                className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
              />

              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                className="fixed left-4 right-4 top-20 z-40 rounded-3xl border border-white/10 bg-[#1a120d]/95 p-6 shadow-2xl backdrop-blur-xl md:hidden"
              >
                <div className="flex flex-col gap-2">
                  {[
                    ["Menu", "#menu"],
                    ["Our Story", "#about"],
                    ["Experience", "#experience"],
                    ["Visit", "#visit"],
                  ].map(([label, href], index) => (
                    <motion.a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                      className="rounded-xl px-4 py-3 text-sm text-white/65 transition hover:bg-white/5 hover:text-white"
                    >
                      {label}
                    </motion.a>
                  ))}

                  <motion.a
                    href="#reserve"
                    onClick={closeMenu}
                    className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#d8a35d] px-5 py-3.5 text-sm font-semibold text-black"
                  >
                    Reserve a Table
                    <ArrowUpRight size={16} />
                  </motion.a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
      {/* ================= HERO ================= */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0d0805]">
        {/* =========================================================
      BACKGROUND IMAGE
  ========================================================== */}
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <motion.img
            animate={{
              scale: [1, 1.018, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=90"
            alt="Savora restaurant interior"
            className="h-full w-full object-cover object-center"
          />
        </motion.div>

        {/* =========================================================
      CINEMATIC COLOR TREATMENT
  ========================================================== */}

        {/* Overall darkness */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Left reading area */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0805] via-[#120b07]/90 to-[#120b07]/20" />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0805] via-transparent to-black/20" />

        {/* Subtle right-side vignette */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent" />

        {/* =========================================================
      AMBIENT GOLD LIGHT
  ========================================================== */}

        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-48 top-1/4 h-[34rem] w-[34rem] rounded-full bg-[#d8a35d]/10 blur-[130px]"
        />

        <motion.div
          animate={{
            opacity: [0.1, 0.24, 0.1],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-40 top-0 h-[32rem] w-[32rem] rounded-full bg-[#d8a35d]/10 blur-[140px]"
        />

        {/* =========================================================
      LEFT VERTICAL BRAND MARK
  ========================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 lg:block"
        >
          <div className="flex -rotate-90 items-center gap-4 origin-center">
            <span className="h-px w-12 bg-[#d8a35d]/60" />

            <span className="text-[9px] font-medium uppercase tracking-[0.45em] text-white/30">
              Savora · Est. 2024
            </span>
          </div>
        </motion.div>

        {/* =========================================================
      MAIN CONTENT
  ========================================================== */}

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-32 md:px-10">
          <div className="grid w-full items-center lg:grid-cols-[1fr_auto]">
            {/* -----------------------------------------------------
          HERO COPY
      ------------------------------------------------------ */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-5xl"
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-8 flex items-center gap-4"
              >
                <span className="h-px w-12 bg-[#d8a35d]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.45em] text-[#d8a35d]">
                  Modern dining · Accra
                </span>
              </motion.div>

              {/* Heading */}
              <h1 className="max-w-5xl text-[4.5rem] font-semibold leading-[0.84] tracking-[-0.065em] text-white sm:text-7xl md:text-8xl lg:text-[9.2rem]">
                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.05,
                    delay: 0.32,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block"
                >
                  Taste.
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.05,
                    delay: 0.46,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block font-serif font-normal italic text-[#d8a35d]"
                >
                  Experience.
                </motion.span>
              </h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.72,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-9 max-w-lg text-sm leading-7 text-white/55 sm:text-base md:text-lg"
              >
                An elevated dining experience where bold flavors, beautiful
                spaces, and unforgettable moments come together.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.88,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-10 flex flex-col gap-3 sm:flex-row"
              >
                <motion.a
                  href="#reserve"
                  whileHover={{
                    y: -3,
                    boxShadow: "0 20px 55px rgba(216,163,93,0.22)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#d8a35d] px-7 py-4 text-sm font-semibold text-black transition-colors duration-300 hover:bg-[#e5b875]"
                >
                  Reserve a Table
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </motion.a>

                <motion.a
                  href="#menu"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.09]"
                >
                  Explore the Menu
                  <ArrowDown
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* =====================================================
          FLOATING EDITORIAL DETAIL
      ====================================================== */}

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 1.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-16 hidden lg:block lg:w-[250px] xl:w-[280px]"
            >
              <div className="border-l border-white/15 pl-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d8a35d]" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/40">
                    Tonight at Savora
                  </span>
                </div>

                <p className="font-serif text-2xl leading-tight text-white/85">
                  Where every table becomes part of the story.
                </p>

                <div className="mt-7 h-px w-full bg-white/10" />

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                    Tables
                  </span>

                  <span className="font-serif text-sm italic text-[#d8a35d]">
                    Available
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =========================================================
      BOTTOM INFORMATION RAIL
  ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute bottom-7 left-0 right-0 z-10"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="border-t border-white/10 pt-5">
              <div className="flex flex-col gap-4 text-[10px] uppercase tracking-[0.2em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
                {/* Location */}
                <div className="flex items-center gap-3">
                  <MapPin
                    size={13}
                    strokeWidth={1.5}
                    className="text-[#d8a35d]"
                  />

                  <span>12 Oxford Street · Osu · Accra</span>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-3">
                  <Clock
                    size={14}
                    strokeWidth={1.5}
                    className="text-[#d8a35d]"
                  />

                  <span>Open daily · 12PM — 11PM</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
      SCROLL INDICATOR
  ========================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
          className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[8px] font-medium uppercase tracking-[0.45em] text-white/30">
              Scroll
            </span>

            <div className="relative h-11 w-px overflow-hidden bg-white/10">
              <motion.div
                animate={{
                  y: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-0 top-0 h-1/2 w-full bg-[#d8a35d]"
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom cinematic fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0d0805] to-transparent" />
      </section>

      {/* ================= INTRO ================= */}
      <section id="about" className="bg-[#0d0805] px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem]">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85"
                alt="Savora dining experience"
                className="h-[500px] w-full object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-4 rounded-2xl border border-white/10 bg-[#1a100b]/95 p-6 shadow-2xl backdrop-blur-xl md:-right-8"
            >
              <p className="text-3xl font-semibold text-[#d8a35d]">12+</p>

              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
                Years of craft
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d8a35d]">
              Our story
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              More than
              <br />
              <span className="font-serif italic text-[#d8a35d]">a meal.</span>
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-7 text-white/45 md:text-base">
              <p>
                Savora was created around a simple idea: great food deserves an
                equally memorable setting.
              </p>

              <p>
                Our kitchen brings together modern techniques, seasonal
                ingredients, and flavors inspired by cultures from around the
                world.
              </p>

              <p>
                From the first plate to the final conversation, every detail is
                designed to make your evening feel effortless.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl font-semibold text-white">4.9</p>
                <p className="mt-1 text-xs text-white/35">Guest rating</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">35+</p>
                <p className="mt-1 text-xs text-white/35">Signature dishes</p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-white">7 days</p>
                <p className="mt-1 text-xs text-white/35">Open weekly</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ================= MENU ================= */}

      <section
        id="menu"
        className="relative overflow-hidden bg-[#120d09] px-6 py-24 md:px-10 md:py-32"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-48 top-1/4 h-[36rem] w-[36rem] rounded-full bg-[#d8a35d]/[0.045] blur-[140px]" />
        <div className="pointer-events-none absolute -left-48 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#d8a35d]/[0.025] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#d8a35d]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d8a35d]">
                  Our menu
                </span>
              </div>

              <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-[#f7efe5] md:text-7xl lg:text-8xl">
                Crafted with
                <span className="block font-serif font-normal italic text-[#d8a35d]">
                  intention.
                </span>
              </h2>
            </div>

            <div className="max-w-sm md:pb-2 md:text-right">
              <p className="text-sm leading-7 text-white/40">
                Seasonal ingredients, bold flavors and thoughtful presentation
                come together in every plate.
              </p>

              <div className="mt-5 flex items-center gap-3 md:justify-end">
                <span className="h-1 w-1 rounded-full bg-[#d8a35d]" />

                <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                  Seasonal selection
                </span>
              </div>
            </div>
          </motion.div>

          {/* Category navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-14 overflow-x-auto pb-2"
          >
            <div className="flex min-w-max items-center gap-2 border-b border-white/10 pb-3">
              {categories.map((category) => {
                const active = activeCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className="group relative px-4 py-3 text-xs font-medium"
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        active
                          ? "text-[#d8a35d]"
                          : "text-white/30 group-hover:text-white/70"
                      }`}
                    >
                      {category}
                    </span>

                    {active && (
                      <motion.span
                        layoutId="activeMenuCategory"
                        className="absolute bottom-[-13px] left-0 right-0 h-px bg-[#d8a35d]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Menu */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-x-12 md:grid-cols-2"
            >
              {menuItems
                .filter(
                  (item) =>
                    activeCategory === "All" ||
                    item.category === activeCategory,
                )
                .map((item, index) => (
                  <motion.article
                    key={item.name}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative border-b border-white/[0.08] py-8 md:py-9"
                  >
                    <div className="flex gap-5 md:gap-7">
                      {/* Number */}
                      <div className="pt-1">
                        <span className="text-[9px] font-medium tracking-[0.25em] text-white/20 transition-colors duration-300 group-hover:text-[#d8a35d]/60">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Main content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-6">
                          <div className="min-w-0">
                            <h3 className="text-xl font-medium tracking-tight text-[#f7efe5] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#d8a35d] md:text-2xl">
                              {item.name}
                            </h3>

                            {item.description && (
                              <p className="mt-2 max-w-md text-sm leading-6 text-white/30 transition-colors duration-300 group-hover:text-white/45">
                                {item.description}
                              </p>
                            )}
                          </div>

                          {/* Price */}
                          <span className="shrink-0 pt-0.5 font-serif text-lg italic text-[#d8a35d] md:text-xl">
                            ₵{item.price}
                          </span>
                        </div>

                        {/* Meta */}
                        <div className="mt-6 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                              Savora
                            </span>

                            <span className="h-px w-5 bg-white/10" />

                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/15">
                              {item.category}
                            </span>
                          </div>

                          <motion.span
                            initial={{ opacity: 0, x: -8 }}
                            className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#d8a35d] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                          >
                            Details
                            <ArrowRight size={12} />
                          </motion.span>
                        </div>
                      </div>
                    </div>

                    {/* Animated gold line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-[#d8a35d]"
                    />
                  </motion.article>
                ))}
            </motion.div>
          </AnimatePresence>

          {/* Bottom information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 border-t border-white/10 pt-8"
          >
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d8a35d]" />

                  <p className="text-sm text-white/50">
                    Our menu changes with the seasons.
                  </p>
                </div>

                <p className="mt-2 pl-[18px] text-xs text-white/25">
                  Ask our team about today's specials and seasonal additions.
                </p>
              </div>

              <motion.a
                href="#reserve"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 text-sm font-semibold text-[#d8a35d]"
              >
                Reserve your table
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d8a35d]/20 transition-colors duration-300 group-hover:border-[#d8a35d]/50">
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= EDITORIAL GALLERY ================= */}
      <section className="relative overflow-hidden bg-[#0d0805] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#d8a35d]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d8a35d]">
                  Inside Savora
                </span>
              </div>

              <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-[#f7efe5] md:text-7xl lg:text-8xl">
                More than
                <span className="block font-serif font-normal italic text-[#d8a35d]">
                  a meal.
                </span>
              </h2>
            </div>

            <div className="max-w-sm md:pb-2 md:text-right">
              <p className="text-sm leading-7 text-white/40">
                A closer look at the spaces, people and details that make an
                evening at Savora feel different.
              </p>

              <div className="mt-5 flex items-center gap-3 md:justify-end">
                <span className="h-1 w-1 rounded-full bg-[#d8a35d]" />
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                  Scroll to explore
                </span>
              </div>
            </div>
          </motion.div>

          {/* Editorial grid */}
          <div className="grid gap-5 md:grid-cols-12">
            {/* FEATURED IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9 }}
              className="group relative md:col-span-7"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#19100c]">
                <motion.img
                  src={gallery[0].image}
                  alt={gallery[0].label}
                  initial={{ scale: 1.04 }}
                  whileHover={{ scale: 1.09 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full w-full object-cover"
                />

                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/10" />

                {/* Hover glow */}
                <div className="absolute inset-0 bg-[#d8a35d]/0 transition-colors duration-700 group-hover:bg-[#d8a35d]/[0.04]" />

                {/* Number */}
                <div className="absolute left-6 top-6 flex items-center gap-3 md:left-8 md:top-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#d8a35d]">
                    01
                  </span>

                  <span className="h-px w-8 bg-white/30 transition-all duration-500 group-hover:w-14 group-hover:bg-[#d8a35d]" />
                </div>

                {/* Hover indicator */}
                <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/10 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100 md:right-8 md:top-8">
                  <ArrowUpRight
                    size={16}
                    className="text-white transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                  <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-white/40">
                    The space
                  </p>

                  <h3 className="text-3xl font-medium tracking-tight text-white md:text-5xl">
                    {gallery[0].label}
                  </h3>

                  <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
                        A space created for long conversations, slow evenings
                        and unforgettable moments.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Gold border reveal */}
                <div className="absolute left-0 top-0 h-px w-0 bg-[#d8a35d] transition-all duration-700 group-hover:w-full" />
                <div className="absolute bottom-0 right-0 h-px w-0 bg-[#d8a35d] transition-all duration-700 group-hover:w-full" />
              </div>
            </motion.div>

            {/* RIGHT STACK */}
            <div className="grid gap-5 md:col-span-5">
              {gallery.slice(1, 3).map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.12,
                  }}
                  className="group relative"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#19100c]">
                    <motion.img
                      src={item.image}
                      alt={item.label}
                      whileHover={{ scale: 1.08 }}
                      transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    {/* Number */}
                    <div className="absolute left-5 top-5 flex items-center gap-3">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#d8a35d]">
                        {String(index + 2).padStart(2, "0")}
                      </span>

                      <span className="h-px w-5 bg-white/20 transition-all duration-500 group-hover:w-10 group-hover:bg-[#d8a35d]" />
                    </div>

                    {/* Arrow */}
                    <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/10 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                      <ArrowUpRight
                        size={14}
                        className="text-white transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>

                    {/* Label */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="mb-1 text-[9px] uppercase tracking-[0.25em] text-white/35">
                        {index === 0 ? "The kitchen" : "The table"}
                      </p>

                      <h3 className="text-2xl font-medium text-white md:text-3xl">
                        {item.label}
                      </h3>
                    </div>
                  </div>

                  <div className="absolute left-0 top-0 h-px w-0 bg-[#d8a35d] transition-all duration-700 group-hover:w-full" />
                </motion.div>
              ))}
            </div>

            {/* WIDE FEATURE */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="group relative md:col-span-12"
            >
              <div className="relative aspect-[16/7] overflow-hidden bg-[#19100c]">
                <motion.img
                  src={gallery[3].image}
                  alt={gallery[3].label}
                  whileHover={{ scale: 1.055 }}
                  transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-black/10" />

                {/* Number */}
                <div className="absolute left-6 top-6 flex items-center gap-3 md:left-9 md:top-9">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#d8a35d]">
                    04
                  </span>

                  <span className="h-px w-8 bg-white/30 transition-all duration-500 group-hover:w-14 group-hover:bg-[#d8a35d]" />
                </div>

                {/* Arrow */}
                <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/10 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100 md:right-9 md:top-9">
                  <ArrowUpRight
                    size={16}
                    className="text-white transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-10 lg:p-12">
                  <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                      <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-white/40">
                        The experience
                      </p>

                      <h3 className="text-3xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">
                        {gallery[3].label}
                      </h3>
                    </div>

                    <p className="max-w-sm text-sm leading-6 text-white/45">
                      From the first ingredient to the final plate, our kitchen
                      believes the smallest details are what make the biggest
                      memories.
                    </p>
                  </div>
                </div>

                {/* Borders */}
                <div className="absolute left-0 top-0 h-px w-0 bg-[#d8a35d] transition-all duration-700 group-hover:w-full" />
                <div className="absolute bottom-0 right-0 h-px w-0 bg-[#d8a35d] transition-all duration-700 group-hover:w-full" />
              </div>
            </motion.div>
          </div>

          {/* Closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.25 }}
            className="mt-16 flex items-center gap-5"
          >
            <span className="h-px flex-1 bg-white/10" />

            <div className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-[#d8a35d]" />

              <span className="font-serif text-sm italic text-white/30">
                Taste the moment.
              </span>

              <span className="h-1 w-1 rounded-full bg-[#d8a35d]" />
            </div>

            <span className="h-px flex-1 bg-white/10" />
          </motion.div>
        </div>
      </section>
      {/* ================= EXPERIENCE ================= */}
      <section
        id="experience"
        className="relative overflow-hidden bg-[#120b07] px-6 py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 flex items-center justify-between border-b border-white/10 pb-5"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8a35d]">
              The Experience
            </span>

            <span className="text-xs text-white/25">Savora · Accra</span>
          </motion.div>

          {/* Main editorial composition */}
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="group relative min-h-[520px] overflow-hidden rounded-[2rem] md:min-h-[650px]"
            >
              <motion.img
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.04 }}
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1400&q=85"
                alt="Savora dining experience"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Cinematic overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-[#d8a35d]/5 mix-blend-overlay" />

              {/* Image caption */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                    The room
                  </p>

                  <p className="mt-2 text-sm text-white/80">
                    Designed for lingering.
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Gold accent */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "28%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute left-0 top-0 w-px bg-[#d8a35d]"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative px-2 py-6 lg:px-8 lg:py-12"
            >
              {/* Decorative number */}
              <span className="pointer-events-none absolute -right-2 -top-8 select-none text-[9rem] font-serif leading-none text-white/[0.025] md:text-[12rem]">
                02
              </span>

              <div className="relative">
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.35,
                    type: "spring",
                    stiffness: 160,
                  }}
                  className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#d8a35d]/30 bg-[#d8a35d]/10"
                >
                  <Star
                    className="text-[#d8a35d]"
                    size={20}
                    strokeWidth={1.5}
                  />
                </motion.div>

                <p className="mb-4 text-sm uppercase tracking-[0.2em] text-white/30">
                  More than dinner
                </p>

                <h2 className="max-w-xl text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
                  Made for
                  <span className="block font-serif font-normal italic text-[#d8a35d]">
                    long conversations.
                  </span>
                </h2>

                <div className="mt-8 h-px w-20 bg-[#d8a35d]/50" />

                <p className="mt-8 max-w-md text-base leading-8 text-white/45 md:text-lg">
                  From intimate dinners to celebrations with friends, Savora is
                  designed around the idea that great food tastes even better
                  when shared.
                </p>

                <motion.a
                  href="#reserve"
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  className="group mt-10 inline-flex items-center gap-3 border-b border-[#d8a35d]/40 pb-2 text-sm font-semibold text-[#d8a35d] transition-colors hover:border-[#d8a35d]"
                >
                  Plan your evening
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Bottom statement */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 grid gap-6 border-t border-white/10 pt-6 md:grid-cols-3"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white/25">
              Food
            </span>

            <span className="text-xs uppercase tracking-[0.2em] text-white/25">
              Atmosphere
            </span>

            <span className="text-xs uppercase tracking-[0.2em] text-white/25 md:text-right">
              Connection
            </span>
          </motion.div>
        </div>
      </section>
      {/* ================= RESERVATION ================= */}
      <section
        id="reserve"
        className="relative overflow-hidden bg-[#120b07] px-6 py-24 md:px-10 md:py-32"
      >
        {/* Ambient background */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[32rem] w-[32rem] rounded-full bg-[#d8a35d]/[0.06] blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#d8a35d]/[0.04] blur-[120px]" />

        {/* Decorative line */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.025]" />

        <div className="relative mx-auto max-w-6xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <div className="mb-5 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#d8a35d]/40" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#d8a35d]">
                Reservations
              </p>

              <span className="h-px w-10 bg-[#d8a35d]/40" />
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white md:text-6xl lg:text-7xl">
              An evening worth
              <span className="block font-serif font-normal italic text-[#d8a35d]">
                remembering.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/40 md:text-base">
              Choose your preferred date, time and occasion. We'll make sure
              everything is ready when you arrive.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#19100c]/80 shadow-2xl backdrop-blur-xl"
              >
                <div className="grid lg:grid-cols-[0.8fr_1.4fr]">
                  {/* Left editorial panel */}
                  <div className="relative hidden overflow-hidden border-r border-white/10 bg-[#0f0906] p-10 lg:flex lg:flex-col lg:justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
                        Savora
                      </p>

                      <h3 className="mt-8 max-w-xs font-serif text-4xl leading-tight text-white">
                        Good food.
                        <br />
                        <span className="italic text-[#d8a35d]">
                          Good company.
                        </span>
                      </h3>

                      <p className="mt-6 max-w-xs text-sm leading-7 text-white/35">
                        From intimate dinners to meaningful celebrations, every
                        table is prepared with intention.
                      </p>
                    </div>

                    <div>
                      <div className="mb-5 h-px w-full bg-white/10" />

                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/30">Opening hours</span>
                        <span className="text-white/60">12 PM — 10 PM</span>
                      </div>

                      <div className="mt-3 flex items-center justify-between text-xs">
                        <span className="text-white/30">Location</span>
                        <span className="text-white/60">Accra, Ghana</span>
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <div className="p-6 md:p-10 lg:p-12">
                    <div className="mb-8">
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                        Book your table
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        Tell us when you're coming.
                      </h3>
                    </div>

                    <form
                      onSubmit={handleReservation}
                      className="grid gap-5 md:grid-cols-2"
                    >
                      {/* Name */}
                      <div>
                        <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                          Full name
                        </label>

                        <input
                          required
                          type="text"
                          placeholder="Your name"
                          className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 hover:border-white/20 focus:border-[#d8a35d]/50 focus:bg-black/30"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                          Email
                        </label>

                        <input
                          required
                          type="email"
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-white/20 hover:border-white/20 focus:border-[#d8a35d]/50 focus:bg-black/30"
                        />
                      </div>

                      {/* Date */}
                      <div>
                        <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                          Date
                        </label>

                        <input
                          required
                          type="date"
                          className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white outline-none transition duration-300 hover:border-white/20 focus:border-[#d8a35d]/50 focus:bg-black/30"
                        />
                      </div>

                      {/* Time */}
                      <div>
                        <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                          Time
                        </label>

                        <select
                          required
                          defaultValue=""
                          className="w-full appearance-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white/60 outline-none transition duration-300 hover:border-white/20 focus:border-[#d8a35d]/50 focus:bg-black/30"
                        >
                          <option value="" disabled>
                            Select time
                          </option>
                          <option>12:00 PM</option>
                          <option>1:00 PM</option>
                          <option>2:00 PM</option>
                          <option>5:00 PM</option>
                          <option>6:00 PM</option>
                          <option>7:00 PM</option>
                          <option>8:00 PM</option>
                          <option>9:00 PM</option>
                        </select>
                      </div>

                      {/* Guests */}
                      <div>
                        <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                          Guests
                        </label>

                        <select
                          required
                          defaultValue=""
                          className="w-full appearance-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white/60 outline-none transition duration-300 hover:border-white/20 focus:border-[#d8a35d]/50 focus:bg-black/30"
                        >
                          <option value="" disabled>
                            Number of guests
                          </option>
                          <option>1 Guest</option>
                          <option>2 Guests</option>
                          <option>3 Guests</option>
                          <option>4 Guests</option>
                          <option>5 Guests</option>
                          <option>6+ Guests</option>
                        </select>
                      </div>

                      {/* Occasion */}
                      <div>
                        <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                          Occasion
                        </label>

                        <select
                          defaultValue=""
                          className="w-full appearance-none rounded-xl border border-white/10 bg-black/20 px-4 py-3.5 text-sm text-white/60 outline-none transition duration-300 hover:border-white/20 focus:border-[#d8a35d]/50 focus:bg-black/30"
                        >
                          <option value="" disabled>
                            Select occasion
                          </option>
                          <option>Dinner</option>
                          <option>Birthday</option>
                          <option>Date night</option>
                          <option>Business dinner</option>
                          <option>Celebration</option>
                        </select>
                      </div>

                      {/* Submit */}
                      <div className="pt-2 md:col-span-2">
                        <motion.button
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#d8a35d] px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#e5b875] hover:shadow-[0_10px_40px_rgba(216,163,93,0.15)]"
                        >
                          Request a Reservation
                          <ArrowUpRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </motion.button>
                      </div>
                    </form>

                    <div className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.15em] text-white/20">
                      <span className="h-1 w-1 rounded-full bg-[#d8a35d]/50" />
                      Concept booking experience by emessWeb
                      <span className="h-1 w-1 rounded-full bg-[#d8a35d]/50" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="rounded-[2rem] border border-[#d8a35d]/20 bg-white/[0.03] px-6 py-24 text-center shadow-2xl backdrop-blur-xl"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.15,
                    type: "spring",
                    stiffness: 180,
                  }}
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#d8a35d] text-black"
                >
                  <Check size={28} />
                </motion.div>

                <h3 className="mt-7 text-3xl font-semibold text-white md:text-4xl">
                  Request received.
                </h3>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/40">
                  Thank you for choosing Savora. Your reservation request has
                  been captured successfully.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border border-white/10 px-6 py-3 text-sm text-white/60 transition hover:border-[#d8a35d]/40 hover:text-white"
                >
                  Make another reservation
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      {/* ================= VISIT ================= */}
      <section id="visit" className="bg-[#0d0805] px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d8a35d]">
              Visit us
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-5xl">
              Come experience
              <span className="font-serif italic text-[#d8a35d]"> Savora.</span>
            </h2>

            <div className="mt-10 space-y-7">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d8a35d]/10 text-[#d8a35d]">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">Location</p>

                  <p className="mt-1 text-sm leading-relaxed text-white/40">
                    12 Oxford Street
                    <br />
                    Osu, Accra, Ghana
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d8a35d]/10 text-[#d8a35d]">
                  <Clock size={18} />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    Opening hours
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-white/40">
                    Monday — Sunday
                    <br />
                    12:00 PM — 11:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d8a35d]/10 text-[#d8a35d]">
                  <ArrowUpRight size={18} />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">Contact</p>

                  <p className="mt-1 text-sm leading-relaxed text-white/40">
                    +233 20 000 0000
                    <br />
                    hello@savora.demo
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#reserve"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#d8a35d]/40 px-6 py-3 text-sm font-medium text-[#d8a35d] transition hover:bg-[#d8a35d] hover:text-black"
            >
              Reserve a table
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#17100b]"
          >
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(216,163,93,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(216,163,93,0.08)_1px,transparent_1px)] bg-[size:55px_55px]" />
            </div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-[10%] top-[20%] h-[70%] w-[80%] rounded-[50%] border border-[#d8a35d]/10"
            />

            <div className="absolute left-[10%] top-[25%] h-px w-[80%] rotate-12 bg-white/10" />
            <div className="absolute left-[15%] top-[55%] h-px w-[75%] -rotate-6 bg-white/10" />
            <div className="absolute left-[30%] top-0 h-[100%] w-px rotate-[18deg] bg-white/10" />
            <div className="absolute left-[65%] top-0 h-[100%] w-px -rotate-[12deg] bg-white/10" />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute -inset-5 animate-ping rounded-full bg-[#d8a35d]/20" />

              <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#17100b] bg-[#d8a35d] text-black shadow-xl">
                <MapPin size={22} />
              </div>
            </div>

            <div className="absolute bottom-6 left-6 rounded-xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-xl">
              <p className="text-sm font-medium text-white">Savora</p>
              <p className="mt-1 text-xs text-white/40">Osu, Accra</p>
            </div>

            <p className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/30 backdrop-blur-md">
              Map preview
            </p>
          </motion.div>
        </div>
      </section>
      {/* ================= FOOTER ================= */}
      <footer className="relative overflow-hidden border-t border-white/10 bg-[#0a0604] px-6 pb-8 pt-20 md:px-10 md:pt-24">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[#d8a35d]/[0.04] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* =====================================================
        TOP EDITORIAL AREA
    ====================================================== */}
          <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr]">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#d8a35d]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.45em] text-[#d8a35d]">
                  Modern dining · Accra
                </span>
              </div>

              <a
                href="#"
                className="mt-7 block w-fit text-5xl font-semibold tracking-[-0.05em] text-white transition-colors duration-300 hover:text-[#d8a35d] sm:text-6xl md:text-7xl"
              >
                SAVORA
                <span className="font-serif font-normal italic text-[#d8a35d]">
                  .
                </span>
              </a>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/35 md:text-base">
                Modern dining, thoughtful hospitality and memorable evenings in
                the heart of Accra.
              </p>
            </div>

            {/* Navigation / Details */}
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-2">
              {/* Explore */}
              <div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/25">
                  Explore
                </span>

                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href="#menu"
                    className="w-fit text-sm text-white/55 transition-colors hover:text-[#d8a35d]"
                  >
                    Menu
                  </a>

                  <a
                    href="#gallery"
                    className="w-fit text-sm text-white/55 transition-colors hover:text-[#d8a35d]"
                  >
                    Gallery
                  </a>

                  <a
                    href="#reserve"
                    className="w-fit text-sm text-white/55 transition-colors hover:text-[#d8a35d]"
                  >
                    Reservations
                  </a>
                </div>
              </div>

              {/* Visit */}
              <div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/25">
                  Visit
                </span>

                <div className="mt-5 flex flex-col gap-3 text-sm leading-relaxed text-white/45">
                  <span>12 Oxford Street</span>
                  <span>Osu · Accra</span>
                  <span className="mt-1 text-[#d8a35d]">
                    Open daily · 12PM — 11PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
        LARGE RESERVATION CTA
    ====================================================== */}
          <div className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-[#120b07] md:mt-24">
            <div className="flex flex-col items-start justify-between gap-8 px-7 py-8 md:flex-row md:items-center md:px-10 md:py-9">
              <div>
                <p className="font-serif text-2xl italic text-white/85 md:text-3xl">
                  Make tonight memorable.
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/25">
                  Your table is waiting.
                </p>
              </div>

              <a
                href="#reserve"
                className="group inline-flex items-center gap-3 rounded-full bg-[#d8a35d] px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#e5b875] hover:shadow-[0_15px_40px_rgba(216,163,93,0.18)]"
              >
                Reserve a Table
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </div>
          </div>

          {/* =====================================================
        BOTTOM BAR
    ====================================================== */}
          <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.18em] text-white/20 sm:flex-row sm:items-center">
            <span>© 2026 Savora. All rights reserved.</span>

            <span>
              Concept website crafted by{" "}
              <span className="text-[#d8a35d]">emessWeb</span>.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
