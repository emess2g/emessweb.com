import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  CheckCircle2,
  Loader2,
  Sparkles,
  MousePointer2,
  Globe2,
  Palette,
} from "lucide-react";
import Reveal from "./Reveal";

const initialForm = {
  name: "",
  business: "",
  email: "",
  whatsapp: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      subject: `New Project Request — ${form.business}`,
      from_name: form.name,
      name: form.name,
      business: form.business,
      email: form.email,
      whatsapp: form.whatsapp || "Not provided",
      service: form.service,
      message: form.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong.");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FFF7EE] px-6 py-24 text-[#171310] transition-colors duration-500 dark:bg-[#171310] dark:text-[#FFF9F2] md:px-10 md:py-32"
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#FFB84D]/30 blur-3xl dark:bg-[#FF6B35]/10" />

      <div className="pointer-events-none absolute right-[-120px] bottom-20 h-96 w-96 rounded-full bg-[#65D6D6]/25 blur-3xl dark:bg-[#65D6D6]/10" />

      <div className="pointer-events-none absolute left-[45%] top-[35%] h-40 w-40 rounded-full border-[18px] border-[#7867D8]/10 dark:border-[#7867D8]/5" />

      <div className="relative mx-auto max-w-7xl">
        {/* =========================================================
            HEADING
        ========================================================= */}

        <Reveal direction="up">
          <div className="mb-16 max-w-4xl md:mb-20">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#FF6B35]" />

              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#6F655E] dark:text-white/45">
                Start a project
              </p>
            </div>

            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.055em] md:text-7xl lg:text-8xl">
              Let's make your
              <br />
              <span className="relative inline-block">
                idea
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  viewBox="0 0 220 18"
                  fill="none"
                >
                  <path
                    d="M4 12C58 2 145 3 216 10"
                    stroke="#FF6B35"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              <span className="text-[#7867D8] dark:text-[#FFB84D]">real.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#6F655E] dark:text-white/55 md:text-lg">
              Have a business idea, a website that needs a refresh, or something
              completely new in mind? Tell us about it and let's build something
              people remember.
            </p>
          </div>
        </Reveal>

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* =========================================================
              LEFT — ILLUSTRATION + CONTACT
          ========================================================= */}

          <Reveal direction="left">
            <div className="relative">
              {/* Main illustration */}
              <div className="relative mx-auto max-w-[580px]">
                {/* Decorative circle */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -left-8 top-10 h-24 w-24 rounded-full border-2 border-dashed border-[#FF6B35]/40"
                />

                {/* Purple blob */}
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 4, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-4 top-0 h-28 w-28 rounded-[2rem] bg-[#7867D8]"
                />

                {/* Yellow blob */}
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    x: [0, 6, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-4 left-0 h-24 w-24 rounded-full bg-[#FFB84D]"
                />

                {/* Browser illustration */}
                <div className="relative mx-8 rounded-[2rem] border-[3px] border-[#171310] bg-[#FFF9F2] p-3 shadow-[12px_14px_0_#171310] transition-colors duration-500 dark:border-[#FFF9F2] dark:bg-[#211914] dark:shadow-[12px_14px_0_#FF6B35] md:mx-12">
                  <div className="overflow-hidden rounded-[1.4rem] border border-[#E4DDD5] dark:border-white/10">
                    {/* Browser bar */}
                    <div className="flex items-center justify-between border-b border-[#E4DDD5] bg-[#FAF8F5] px-4 py-3 dark:border-white/10 dark:bg-[#171310]">
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B35]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FFB84D]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#65D6D6]" />
                      </div>

                      <div className="h-2 w-24 rounded-full bg-[#E5DED7] dark:bg-white/10" />

                      <Globe2
                        size={14}
                        className="text-[#8C837B] dark:text-white/40"
                      />
                    </div>

                    {/* Website visual */}
                    <div className="relative bg-[#F5F0EA] p-5 dark:bg-[#211914] md:p-7">
                      <div className="mb-6 flex items-center justify-between">
                        <div className="h-4 w-20 rounded-full bg-[#171310] dark:bg-[#FFF9F2]" />

                        <div className="flex gap-2">
                          <span className="h-2 w-8 rounded-full bg-[#CFC6BD] dark:bg-white/15" />
                          <span className="h-2 w-8 rounded-full bg-[#CFC6BD] dark:bg-white/15" />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                        <div>
                          <div className="h-7 w-40 rounded-lg bg-[#171310] dark:bg-[#FFF9F2] md:w-52" />

                          <div className="mt-2 h-7 w-28 rounded-lg bg-[#171310] dark:bg-[#FFF9F2] md:w-36" />

                          <div className="mt-5 h-3 w-44 rounded-full bg-[#BDB4AC] dark:bg-white/20" />

                          <div className="mt-2 h-3 w-32 rounded-full bg-[#D3CBC4] dark:bg-white/10" />

                          <div className="mt-6 flex gap-2">
                            <div className="h-9 w-24 rounded-full bg-[#FF6B35]" />
                            <div className="h-9 w-9 rounded-full bg-[#65D6D6]" />
                          </div>
                        </div>

                        <div className="relative min-h-[150px] overflow-hidden rounded-2xl bg-[#7867D8]">
                          <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#FFB84D]" />

                          <div className="absolute bottom-5 left-5 h-20 w-20 rounded-2xl bg-white/90 p-3">
                            <div className="h-3 w-10 rounded-full bg-[#171310]" />
                            <div className="mt-3 h-8 w-8 rounded-full bg-[#65D6D6]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating analytics card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-2 top-24 rounded-2xl border-2 border-[#171310] bg-[#65D6D6] p-4 shadow-[5px_5px_0_#171310] dark:border-[#FFF9F2] dark:shadow-[5px_5px_0_#FF6B35] md:right-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#171310]">
                      <Palette size={18} />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider">
                        Creative
                      </p>

                      <p className="text-sm font-bold">+100%</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating spark card */}
                <motion.div
                  animate={{
                    rotate: [0, 4, 0, -4, 0],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-8 right-4 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#171310] bg-[#FFB84D] shadow-[4px_4px_0_#171310] dark:border-[#FFF9F2] dark:shadow-[4px_4px_0_#FF6B35]"
                >
                  <Sparkles size={24} />
                </motion.div>

                {/* Cursor */}
                <motion.div
                  animate={{
                    x: [0, 10, 0],
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-12 left-8 md:left-16"
                >
                  <MousePointer2
                    size={34}
                    strokeWidth={2.5}
                    className="rotate-[-15deg] fill-[#171310] dark:fill-[#FFF9F2]"
                  />
                </motion.div>
              </div>

              {/* Contact details */}
              <div className="mt-16 grid gap-4 sm:grid-cols-2">
                <motion.a
                  href="mailto:emess2@gmail.com"
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border-2 border-[#171310] bg-[#FFF9F2] p-5 shadow-[4px_4px_0_#171310] transition-all duration-300 hover:shadow-[7px_7px_0_#171310] dark:border-[#FFF9F2] dark:bg-[#211914] dark:shadow-[4px_4px_0_#FF6B35] dark:hover:shadow-[7px_7px_0_#FF6B35]"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFB84D]">
                    <Mail size={18} />
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#8A817A] dark:text-white/40">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-semibold">emess2@gmail.com</p>
                </motion.a>

                <motion.a
                  href="https://wa.me/233550862954"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border-2 border-[#171310] bg-[#FFF9F2] p-5 shadow-[4px_4px_0_#171310] transition-all duration-300 hover:shadow-[7px_7px_0_#171310] dark:border-[#FFF9F2] dark:bg-[#211914] dark:shadow-[4px_4px_0_#FF6B35] dark:hover:shadow-[7px_7px_0_#FF6B35]"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#65D6D6]">
                    <MessageCircle size={18} />
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#8A817A] dark:text-white/40">
                    WhatsApp
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    Let's talk directly
                  </p>
                </motion.a>
              </div>
            </div>
          </Reveal>

          {/* =========================================================
              RIGHT — FORM
          ========================================================= */}

          <Reveal direction="right" delay={0.15}>
            <motion.form
              onSubmit={handleSubmit}
              whileHover={{ y: -2 }}
              className="relative rounded-[2rem] border-2 border-[#171310] bg-[#FFF9F2] p-6 shadow-[8px_8px_0_#171310] transition-colors duration-500 dark:border-[#FFF9F2] dark:bg-[#211914] dark:shadow-[8px_8px_0_#FF6B35] md:p-8 lg:p-10"
            >
              {/* Color strip */}
              <div className="absolute left-0 right-0 top-0 flex h-2 overflow-hidden rounded-t-[2rem]">
                <span className="w-1/4 bg-[#FF6B35]" />
                <span className="w-1/4 bg-[#FFB84D]" />
                <span className="w-1/4 bg-[#65D6D6]" />
                <span className="w-1/4 bg-[#7867D8]" />
              </div>

              <div className="mb-8 pt-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8A817A] dark:text-white/40">
                      Project details
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                      Tell us what you're building.
                    </h3>
                  </div>

                  <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#7867D8] text-white sm:flex">
                    <Sparkles size={20} />
                  </div>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <FormField label="Your name">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="John Doe"
                    required
                    className={inputClass}
                  />
                </FormField>

                <FormField label="Business name">
                  <input
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your Business"
                    required
                    className={inputClass}
                  />
                </FormField>

                <FormField label="Email">
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="you@example.com"
                    required
                    className={inputClass}
                  />
                </FormField>

                <FormField label="WhatsApp">
                  <input
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+233..."
                    className={inputClass}
                  />
                </FormField>

                <div className="md:col-span-2">
                  <label className={labelClass}>What do you need?</label>

                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className={inputClass}
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

                <div className="md:col-span-2">
                  <label className={labelClass}>
                    Tell us about the project
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="What are you trying to build?"
                    required
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={status !== "loading" ? { y: -2 } : {}}
                whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                className="group mt-7 flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#171310] bg-[#FF6B35] px-6 py-4 font-bold text-white shadow-[4px_4px_0_#171310] transition-all hover:bg-[#7867D8] hover:shadow-[6px_6px_0_#171310] disabled:cursor-not-allowed disabled:opacity-60 dark:border-[#FFF9F2] dark:shadow-[4px_4px_0_#FF6B35] dark:hover:shadow-[6px_6px_0_#FF6B35]"
              >
                {status === "loading" ? (
                  <>
                    Sending request
                    <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Start a project
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </>
                )}
              </motion.button>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                  >
                    <CheckCircle2 size={16} />
                    Project request sent successfully.
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mt-4 text-center text-sm font-medium text-red-500 dark:text-red-400"
                  >
                    Something went wrong. Please try again or contact us
                    directly.
                  </motion.p>
                )}
              </AnimatePresence>

              <p className="mt-4 text-center text-xs text-[#A39A92] dark:text-white/30">
                We'll review your request and get back to you.
              </p>
            </motion.form>
          </Reveal>
        </div>

        {/* =========================================================
            FOOTER
        ========================================================= */}

        <Reveal direction="up" delay={0.2}>
          <div className="mt-24 border-t-2 border-[#171310]/10 pt-8 dark:border-white/10 md:mt-32">
            <div className="flex flex-col justify-between gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#8A817A] dark:text-white/35 md:flex-row">
              <span className="text-[#171310] dark:text-[#FFF9F2]">
                emessWeb
              </span>

              <span>Websites built for business</span>

              <span>© {new Date().getFullYear()}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const labelClass =
  "mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#6F655E] dark:text-white/45";

const inputClass =
  "w-full rounded-xl border-2 border-[#E3DCD4] bg-[#FCFAF7] px-4 py-3.5 text-sm text-[#171310] outline-none transition-all placeholder:text-[#B5ADA5] focus:border-[#7867D8] focus:bg-white dark:border-white/10 dark:bg-[#171310] dark:text-[#FFF9F2] dark:placeholder:text-white/25 dark:focus:border-[#7867D8] dark:focus:bg-[#171310]";

function FormField({ label, children }) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      {children}
    </div>
  );
}
