
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Sun,
  Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Services", "Work", "Process", "Pricing"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("emessWeb-theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return false;
  });

  /* Apply theme */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("emessWeb-theme", dark ? "dark" : "light");
  }, [dark]);

  /* Prevent background scrolling when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (id) => {
    setOpen(false);

    requestAnimationFrame(() => {
      const section = document.getElementById(id);

      if (section) {
        const navbarOffset = 110;

        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY -
          navbarOffset;

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
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 right-0 top-0 z-[100] px-4 pt-4 md:px-8"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* =========================================================
            MAIN NAVBAR
        ========================================================= */}
        <div
          className="
            relative z-[110]
            flex items-center justify-between
            rounded-[1.25rem]
            border-2
            border-[#171310]
            bg-[#FFF9F2]
            px-4 py-3
            text-[#171310]
            shadow-[4px_5px_0_#171310]
            transition-all duration-500

            dark:border-[#FFF9F2]/20
            dark:bg-[#211914]
            dark:text-[#FFF9F2]
            dark:shadow-[4px_5px_0_#FF6B35]

            md:px-6
          "
        >
          {/* =====================================================
              LOGO
          ===================================================== */}
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
            className="
              group relative
              text-xl font-black
              tracking-[-0.04em]
              text-[#171310]
              transition-colors

              dark:text-[#FFF9F2]
            "
          >
            emess
            <span className="text-[#FF6B35]">Web</span>

            <motion.span
              animate={{
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="ml-1 inline-block text-[#7867D8]"
            >
              .
            </motion.span>
          </motion.button>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item, index) => {
              const colors = [
                "hover:text-[#FF6B35]",
                "hover:text-[#7867D8]",
                "hover:text-[#168A9A]",
                "hover:text-[#E09A00]",
              ];

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    handleNavClick(item.toLowerCase())
                  }
                  className={`
                    group relative
                    rounded-full
                    px-4 py-2
                    text-sm font-medium
                    text-[#625B55]
                    transition-colors

                    dark:text-white/55
                    ${colors[index]}
                  `}
                >
                  {item}

                  <span
                    className="
                      absolute bottom-1.5 left-1/2
                      h-1 w-1
                      -translate-x-1/2
                      scale-0
                      rounded-full
                      bg-current
                      transition-transform duration-300
                      group-hover:scale-100
                    "
                  />
                </button>
              );
            })}
          </div>

          {/* =====================================================
              RIGHT CONTROLS
          ===================================================== */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              onClick={() => setDark((prev) => !prev)}
              aria-label={
                dark
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              aria-pressed={dark}
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border-2
                border-[#171310]
                bg-[#FFE2C8]
                text-[#171310]
                transition-all duration-300
                hover:bg-[#FFB84D]

                dark:border-[#FFF9F2]/20
                dark:bg-[#30251E]
                dark:text-[#FFF9F2]
                dark:hover:bg-[#FFB84D]
                dark:hover:text-[#171310]
              "
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
                    <Sun size={17} />
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
                    <Moon size={17} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* =================================================
                DESKTOP CTA
            ================================================= */}
            <motion.button
              type="button"
              onClick={() => handleNavClick("contact")}
              whileHover={{
                y: -2,
                x: -1,
              }}
              whileTap={{ scale: 0.97 }}
              className="
                group hidden
                items-center gap-2
                rounded-full
                border-2
                border-[#171310]
                bg-[#FF6B35]
                px-5 py-2.5
                text-sm font-bold
                text-white
                shadow-[3px_3px_0_#171310]
                transition-all duration-300

                hover:bg-[#7867D8]
                hover:shadow-[4px_4px_0_#171310]

                dark:border-[#FFF9F2]/20
                dark:shadow-[3px_3px_0_#000]

                md:flex
              "
            >
              Start a Project

              <ArrowUpRight
                size={16}
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </motion.button>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen((prev) => !prev)}
              aria-label={
                open ? "Close menu" : "Open menu"
              }
              aria-expanded={open}
              className="
                relative z-[120]
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border-2
                border-[#171310]
                bg-white
                text-[#171310]
                transition-colors

                dark:border-[#FFF9F2]/20
                dark:bg-[#30251E]
                dark:text-[#FFF9F2]

                md:hidden
              "
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                {open ? (
                  <motion.div
                    key="close"
                    initial={{
                      rotate: -90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: 90,
                      opacity: 0,
                    }}
                  >
                    <X size={21} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{
                      rotate: 90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: -90,
                      opacity: 0,
                    }}
                  >
                    <Menu size={21} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* =======================================================
            MOBILE BACKDROP
        ======================================================= */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
                fixed inset-0 z-[90]
                bg-[#171310]/20
                backdrop-blur-[3px]

                dark:bg-black/60

                md:hidden
              "
              onClick={() => setOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* =======================================================
            MOBILE MENU
        ======================================================= */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.97,
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute left-0 right-0
                top-[calc(100%+0.75rem)]
                z-[115]
                md:hidden
              "
            >
              <div
                className="
                  relative overflow-hidden
                  rounded-[1.5rem]
                  border-2
                  border-[#171310]
                  bg-[#FFF9F2]
                  p-5
                  text-[#171310]
                  shadow-[6px_7px_0_#171310]
                  transition-all duration-500

                  dark:border-[#FFF9F2]/20
                  dark:bg-[#211914]
                  dark:text-[#FFF9F2]
                  dark:shadow-[6px_7px_0_#FF6B35]
                "
              >
                {/* Decorations */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#FFB84D]" />

                <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[#65D6D6]" />

                <div className="relative flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item}
                      type="button"
                      onClick={() =>
                        handleNavClick(item.toLowerCase())
                      }
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
                      className="
                        group flex w-full
                        items-center justify-between
                        rounded-xl
                        px-4 py-3.5
                        text-left
                        text-[#625B55]
                        transition-colors

                        hover:bg-[#FFE2C8]
                        hover:text-[#171310]

                        dark:text-white/60
                        dark:hover:bg-white/10
                        dark:hover:text-white
                      "
                    >
                      <span className="font-medium">
                        {item}
                      </span>

                      <ArrowUpRight
                        size={16}
                        className="
                          opacity-0
                          transition-all duration-300
                          group-hover:translate-x-0.5
                          group-hover:-translate-y-0.5
                          group-hover:opacity-100
                        "
                      />
                    </motion.button>
                  ))}

                  {/* Mobile CTA */}
                  <motion.button
                    type="button"
                    onClick={() =>
                      handleNavClick("contact")
                    }
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
                    className="
                      mt-3 flex w-full
                      items-center justify-center
                      gap-2
                      rounded-full
                      border-2
                      border-[#171310]
                      bg-[#FF6B35]
                      px-5 py-3.5
                      font-bold text-white
                      shadow-[3px_3px_0_#171310]
                      transition-all

                      hover:bg-[#7867D8]

                      dark:border-[#FFF9F2]/20
                      dark:shadow-[3px_3px_0_#000]
                    "
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
