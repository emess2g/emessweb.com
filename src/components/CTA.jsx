import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="px-6 py-20 md:px-10 md:py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-20 text-center md:px-12"
      >
        {/* Glows */}
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

        <div className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-violet-500/10 blur-[100px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative">
          <div className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50">
            <Sparkles size={15} className="text-cyan-400" />
            Have a project in mind?
          </div>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight md:text-7xl">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              worth remembering.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/40">
            Tell us about your business and what you're trying to achieve. We'll
            figure out the right digital solution together.
          </p>

          <a
            href="mailto:hello@emessweb.com"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:bg-cyan-400"
          >
            Start a conversation
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
