import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Services", "Work", "Process", "Pricing"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("emessWeb-theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("emessWeb-theme", dark ? "dark" : "light");
  }, [dark]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (id) => {
    setOpen(false);

    // Wait for the menu closing animation to begin,
    // then scroll smoothly to the target section.
    requestAnimationFrame(() => {
      const section = document.getElementById(id);

      if (section) {
        const navbarOffset = 110;

        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY - navbarOffset;

        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });
      }
    });
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 right-0 top-0 z-[100] px-4 pt-4 md:px-8"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Main navbar */}
        <div className="relative z-[110] flex items-center justify-between rounded-2xl border border-black/10 bg-white/80 px-5 py-4 shadow-xl shadow-black/5 backdrop-blur-xl transition-all duration-500 dark:border-white/10 dark:bg-black/60 dark:shadow-black/20 md:px-7">
          {/* Logo */}
          <motion.button
            type="button"
            onClick={() => {
              setOpen(false);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
            className="group text-xl font-bold tracking-tight text-black transition-colors dark:text-white"
          >
            emess
            <span className="text-cyan-500">Web</span>
            <span className="ml-1 inline-block text-cyan-500 transition-transform duration-300 group-hover:translate-x-1">
              .
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleNavClick(item.toLowerCase())}
                className="group relative py-2 text-sm text-black/60 transition-colors hover:text-black dark:text-white/60 dark:hover:text-white"
              >
                {item}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              aria-pressed={dark}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/5 text-black transition-all hover:border-cyan-400/30 hover:bg-cyan-400/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-cyan-400/30 dark:hover:bg-cyan-400/10"
            >
              <AnimatePresence mode="wait" initial={false}>
                {dark ? (
                  <motion.div
                    key="sun"
                    initial={{
                      rotate: -90,
                      opacity: 0,
                      scale: 0.5,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      rotate: 90,
                      opacity: 0,
                      scale: 0.5,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{
                      rotate: 90,
                      opacity: 0,
                      scale: 0.5,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      rotate: -90,
                      opacity: 0,
                      scale: 0.5,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Desktop CTA */}
            <motion.button
              type="button"
              onClick={() => handleNavClick("contact")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group hidden items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-cyan-400 hover:text-black dark:bg-white dark:text-black dark:hover:bg-cyan-400 md:flex"
            >
              Start a Project
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative z-[120] flex h-10 w-10 items-center justify-center rounded-full text-black transition-colors dark:text-white md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile backdrop */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] bg-black/20 backdrop-blur-[2px] md:hidden"
              onClick={() => setOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-[115] md:hidden"
            >
              <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-2xl shadow-black/20 dark:border-white/10 dark:bg-[#0a0a0a]">
                <div className="flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item}
                      type="button"
                      onClick={() => handleNavClick(item.toLowerCase())}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                      className="w-full rounded-xl px-4 py-3.5 text-left text-black/70 transition-colors hover:bg-black/5 hover:text-cyan-500 dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-cyan-400"
                    >
                      {item}
                    </motion.button>
                  ))}

                  <motion.button
                    type="button"
                    onClick={() => handleNavClick("contact")}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.2,
                    }}
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-3.5 font-semibold text-white transition-all hover:bg-cyan-400 hover:text-black dark:bg-white dark:text-black dark:hover:bg-cyan-400"
                  >
                    Start a Project
                    <ArrowUpRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
