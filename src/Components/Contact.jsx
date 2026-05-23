import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaDiscord, FaPaperPlane, FaLinkedin, FaGithub } from "react-icons/fa";
import GlassCard from "./ui/GlassCard.jsx";
import GradientButton from "./ui/GradientButton.jsx";
import { SITE, MAP_EMBED_QUERY } from "../data/xploitData.js";
import { staggerFast, fadeUp, scaleIn, defaultViewport, easeOutExpo } from "./motion/variants.js";

const CONTACT_ITEMS = [
  { icon: FaMapMarkerAlt, label: "Visit us", value: SITE.location },
  { icon: FaEnvelope, label: "Email", value: SITE.email },
  { icon: FaDiscord, label: "Discord", value: "Join our server" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const mapSrc = `https://maps.google.com/maps?q=${MAP_EMBED_QUERY}&output=embed`;

  return (
    <div className="pb-20">
      <section className="px-4 pt-12 pb-8 sm:px-6 md:px-8 lg:px-10 sm:pt-16 md:pt-20">
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
        >
          <span className="inline-block font-inter text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/90">Contact</span>
          <h1 className="mt-3 font-poppins text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Let&apos;s <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">connect</span>
          </h1>
          <motion.div
            className="mt-4 h-1 w-24 origin-left rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.4)]"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.55, ease: easeOutExpo }}
          />
          <p className="mt-5 max-w-2xl font-inter text-slate-400 sm:text-lg">
            Have a question, want to collaborate, or join the club? Drop us a message—we read everything.
          </p>
        </motion.div>
      </section>

      <section className="px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.55, ease: easeOutExpo }}
          >
            <GlassCard className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div
                  variants={staggerFast}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <motion.label className="contact-field block" variants={fadeUp}>
                    <span className="mb-1.5 block font-inter text-xs font-medium uppercase tracking-wide text-slate-500">Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 font-inter text-white placeholder-slate-500 outline-none transition-all focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </motion.label>
                  <motion.label className="contact-field mt-5 block" variants={fadeUp}>
                    <span className="mb-1.5 block font-inter text-xs font-medium uppercase tracking-wide text-slate-500">Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 font-inter text-white placeholder-slate-500 outline-none transition-all focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </motion.label>
                  <motion.label className="contact-field mt-5 block" variants={fadeUp}>
                    <span className="mb-1.5 block font-inter text-xs font-medium uppercase tracking-wide text-slate-500">Message</span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      className="min-h-[140px] w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 font-inter text-white placeholder-slate-500 outline-none transition-all focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </motion.label>
                  <motion.div className="mt-5" variants={fadeUp}>
                    <GradientButton type="submit" variant="primary" className="w-full sm:w-auto">
                      Send message <FaPaperPlane className="h-4 w-4" />
                    </GradientButton>
                  </motion.div>
                </motion.div>
              </form>
            </GlassCard>
          </motion.div>

          <motion.div
            className="flex flex-col gap-5 lg:col-span-5"
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {CONTACT_ITEMS.map((item) => (
              <motion.div key={item.label} variants={scaleIn} whileHover={{ x: 4, transition: { duration: 0.3 } }}>
                <GlassCard className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <motion.span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/25 bg-violet-500/10 text-violet-200"
                      whileHover={{ scale: 1.08, rotate: -4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    >
                      <item.icon className="h-5 w-5" />
                    </motion.span>
                    <div>
                      <p className="font-inter text-xs font-semibold uppercase tracking-wide text-slate-500">{item.label}</p>
                      <p className="mt-1 font-inter text-sm font-medium text-white sm:text-base">{item.value}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
            <motion.div className="flex gap-3" variants={fadeUp}>
              <motion.a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, borderColor: "rgba(34, 211, 238, 0.4)", color: "#a5f3fc" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, borderColor: "rgba(167, 139, 250, 0.45)", color: "#ddd6fe" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="h-5 w-5" />
              </motion.a>
            </motion.div>

            <motion.div variants={scaleIn}>
              <GlassCard className="overflow-hidden p-0">
                <motion.div
                  className="aspect-video w-full sm:aspect-[4/3]"
                  initial={{ opacity: 0, scale: 1.04 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: easeOutExpo }}
                >
                  <iframe
                    title="IIIT Bhopal map"
                    src={mapSrc}
                    className="h-full w-full border-0 grayscale contrast-[1.05] opacity-90"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </motion.div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
