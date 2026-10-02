import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    whatsapp: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Hello emessWeb 👋

I would like to start a project.

Name: ${form.name}
Business: ${form.business}
Email: ${form.email}
WhatsApp: ${form.whatsapp || "Not provided"}
Service: ${form.service}

Project details:
${form.message}
    `.trim();

    const whatsappUrl = `https://wa.me/233550862954?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-20 md:px-10 md:py-24 lg:py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left */}
          <Reveal direction="left">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-500">
                Start a project
              </p>

              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                Let's build your{" "}
                <span className="text-black/25 dark:text-white/30">
                  next website.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-black/50 dark:text-white/40">
                Tell us about your business and what you want to achieve. We'll
                discuss the best way to bring your idea online.
              </p>

              <div className="mt-10 space-y-4">
                {/* Email */}
                <motion.a
                  href="mailto:emess2g@gmail.com"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25 }}
                  className="group flex items-center gap-4 text-black/60 transition-colors hover:text-cyan-500 dark:text-white/60 dark:hover:text-cyan-400"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] transition-all group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5 dark:border-white/10 dark:bg-white/5">
                    <Mail size={18} />
                  </span>
                  emess2g@gmail.com
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/233550862954"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25 }}
                  className="group flex items-center gap-4 text-black/60 transition-colors hover:text-cyan-500 dark:text-white/60 dark:hover:text-cyan-400"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03] transition-all group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5 dark:border-white/10 dark:bg-white/5">
                    <MessageCircle size={18} />
                  </span>
                  WhatsApp us
                </motion.a>
              </div>

              {/* Small trust message */}
              <div className="mt-12 border-l border-cyan-400/30 pl-5">
                <p className="text-sm leading-relaxed text-black/40 dark:text-white/30">
                  Have an idea but not sure where to start?
                  <span className="mt-1 block text-black/60 dark:text-white/50">
                    That's exactly what we're here for.
                  </span>
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="right" delay={0.15}>
            <motion.form
              onSubmit={handleSubmit}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-black/10 bg-black/[0.02] p-6 shadow-xl shadow-black/5 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-black/20 md:p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm text-black/50 dark:text-white/50">
                    Your name
                  </label>

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3.5 text-black outline-none transition-all placeholder:text-black/20 focus:border-cyan-400/50 focus:bg-cyan-400/[0.02] dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/20 dark:focus:bg-white/[0.06]"
                  />
                </div>

                {/* Business */}
                <div>
                  <label className="mb-2 block text-sm text-black/50 dark:text-white/50">
                    Business name
                  </label>

                  <input
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your Business"
                    required
                    className="w-full rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3.5 text-black outline-none transition-all placeholder:text-black/20 focus:border-cyan-400/50 focus:bg-cyan-400/[0.02] dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/20 dark:focus:bg-white/[0.06]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm text-black/50 dark:text-white/50">
                    Email
                  </label>

                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3.5 text-black outline-none transition-all placeholder:text-black/20 focus:border-cyan-400/50 focus:bg-cyan-400/[0.02] dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/20 dark:focus:bg-white/[0.06]"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="mb-2 block text-sm text-black/50 dark:text-white/50">
                    WhatsApp
                  </label>

                  <input
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+233..."
                    className="w-full rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3.5 text-black outline-none transition-all placeholder:text-black/20 focus:border-cyan-400/50 focus:bg-cyan-400/[0.02] dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/20 dark:focus:bg-white/[0.06]"
                  />
                </div>

                {/* Service */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm text-black/50 dark:text-white/50">
                    What do you need?
                  </label>

                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3.5 text-black outline-none transition-all focus:border-cyan-400/50 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="Business Website">Business Website</option>

                    <option value="Website Redesign">Website Redesign</option>

                    <option value="Ecommerce Website">Ecommerce Website</option>

                    <option value="Web Application">Web Application</option>

                    <option value="Website Maintenance">
                      Website Maintenance
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm text-black/50 dark:text-white/50">
                    Tell us about the project
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="What are you trying to build?"
                    required
                    className="w-full resize-none rounded-xl border border-black/10 bg-black/[0.03] px-4 py-3.5 text-black outline-none transition-all placeholder:text-black/20 focus:border-cyan-400/50 focus:bg-cyan-400/[0.02] dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/20 dark:focus:bg-white/[0.06]"
                  />
                </div>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-4 font-semibold text-white transition-all hover:bg-cyan-400 hover:text-black dark:bg-white dark:text-black dark:hover:bg-cyan-400"
              >
                Send Project Request
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.button>

              <p className="mt-4 text-center text-xs text-black/25 dark:text-white/25">
                Your project details will open in WhatsApp.
              </p>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
