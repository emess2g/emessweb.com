
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F7F2EB] px-6 py-20 text-[#171310] transition-colors duration-500 dark:bg-[#171310] dark:text-[#FFF9F2] md:px-10 md:py-28"
    >
      {/* Background decoration */}
      <motion.div
        animate={{
          rotate: [0, 8, 0, -8, 0],
          y: [0, -10, 0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-16 top-20 h-32 w-32 rounded-[2rem] border-2 border-[#171310] bg-[#FF6B35] dark:border-[#FFF9F2] md:left-8 md:h-40 md:w-40"
      />

      <motion.div
        animate={{
          y: [0, 12, 0],
          rotate: [0, -6, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-30px] top-10 h-44 w-44 rounded-full border-2 border-[#171310] bg-[#7867D8] dark:border-[#FFF9F2] md:right-10 md:h-56 md:w-56"
      />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-[#65D6D6] md:h-32 md:w-32" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] border-2 border-[#171310] bg-[#FFF9F2] px-6 py-16 shadow-[10px_10px_0_#171310] transition-colors duration-500 dark:border-[#FFF9F2]/20 dark:bg-[#211914] dark:shadow-[10px_10px_0_#FF6B35] md:px-12 md:py-20 lg:px-20"
        >
          {/* Corner decoration */}
          <motion.div
            animate={{
              rotate: [0, 12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#FFB84D] md:h-48 md:w-48"
          />

          <motion.div
            animate={{
              x: [0, 8, 0],
              y: [0, -6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-35px] left-10 h-32 w-32 rotate-12 rounded-[2rem] bg-[#65D6D6]"
          />

          {/* Sparkle */}
          <div className="absolute right-8 top-8 flex h-12 w-12 rotate-6 items-center justify-center rounded-full border-2 border-[#171310] bg-[#FF6B35] shadow-[3px_3px_0_#171310] dark:border-[#FFF9F2] dark:shadow-[3px_3px_0_#000] md:right-12 md:top-10">
            <Sparkles size={19} />
          </div>

          <div className="relative mx-auto max-w-5xl text-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border-2 border-[#171310] bg-[#7867D8] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white shadow-[3px_3px_0_#171310] dark:border-[#FFF9F2] dark:shadow-[3px_3px_0_#000]"
            >
              <Sparkles size={14} />
              Have a project in mind?
            </motion.div>

            {/* Heading */}
            <h2 className="mx-auto max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.06em] text-[#171310] transition-colors duration-500 dark:text-[#FFF9F2] md:text-7xl lg:text-8xl">
              Let's build
              <br />
              something{" "}
              <span className="relative inline-block text-[#FF6B35]">
                worth
                <svg
                  className="absolute -bottom-2 left-0 w-full md:-bottom-4"
                  viewBox="0 0 180 18"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M4 11C45 3 125 3 176 10"
                    stroke="currentColor"
                    className="text-[#171310] dark:text-[#FFF9F2]"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br className="hidden md:block" />{" "}
              remembering.
            </h2>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-[#756D66] transition-colors duration-500 dark:text-white/50 md:text-lg">
              Tell us about your business, what you're trying to achieve, or
              simply what's not working right now. We'll figure out the right
              digital solution together.
            </p>

            {/* CTA */}
            <motion.a
              href="mailto:emess2g@gmail.com"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-10 inline-flex items-center gap-4 rounded-full border-2 border-[#171310] bg-[#171310] px-6 py-3.5 text-sm font-black text-white shadow-[5px_5px_0_#7867D8] transition-all duration-300 hover:bg-[#FF6B35] hover:shadow-[5px_5px_0_#171310] dark:border-[#FFF9F2]/20 dark:bg-[#FFF9F2] dark:text-[#171310] dark:shadow-[5px_5px_0_#FF6B35] dark:hover:bg-[#FF6B35] dark:hover:text-white dark:hover:shadow-[5px_5px_0_#FFF9F2] md:px-7 md:py-4"
            >
              Start a conversation

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF9F2] text-[#171310] transition-transform duration-300 group-hover:rotate-45 dark:bg-[#171310] dark:text-[#FFF9F2]">
                <ArrowUpRight size={17} />
              </span>
            </motion.a>

            {/* Supporting line */}
            <div className="mt-8 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[#756D66] dark:text-white/35">
              <span className="h-2 w-2 rounded-full bg-[#65D6D6]" />
              No pressure. Just a conversation.
              <span className="h-2 w-2 rounded-full bg-[#FFB84D]" />
            </div>
          </div>

          {/* Bottom dots */}
          <div className="absolute bottom-8 right-8 hidden gap-2 md:flex">
            <span className="h-3 w-3 rounded-full bg-[#FF6B35]" />
            <span className="h-3 w-3 rounded-full bg-[#7867D8]" />
            <span className="h-3 w-3 rounded-full bg-[#65D6D6]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

