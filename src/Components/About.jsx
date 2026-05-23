import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import GlassCard from "./ui/GlassCard.jsx";
import RevealSection from "./ui/RevealSection.jsx";
import GradientButton from "./ui/GradientButton.jsx";
import { LogoLoop } from "./Slider.jsx";
import {
  SITE,
  ABOUT_MISSION,
  ABOUT_VISION,
  ABOUT_WHAT_WE_DO,
  TIMELINE,
  SPONSOR_LOGO_ITEMS,
} from "../data/xploitData.js";
import { staggerFast, fadeUp, scaleIn, defaultViewport, easeOutExpo } from "./motion/variants.js";

export default function About() {
  return (
    <div className="pb-20">
      <section className="px-4 pt-12 pb-10 sm:px-6 md:px-8 lg:px-10 sm:pt-16 md:pt-20">
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeOutExpo }}
        >
          <p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-violet-300/90">About</p>
          <h1 className="mt-3 font-poppins text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {SITE.name}{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">at IIIT Bhopal</span>
          </h1>
          <p className="mt-4 max-w-2xl font-inter text-slate-400 sm:text-lg">
            Welcome to XPLOIT—the Cyber Security Club of IIIT Bhopal. We organize CTFs, ethical hacking workshops, security labs, and expert-led
            sessions so students can explore real-world threats and defenses.
          </p>
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45, ease: easeOutExpo }}
          >
            <GradientButton to="/team" variant="primary">
              Meet the team <FaArrowRight className="h-4 w-4" />
            </GradientButton>
            <GradientButton to="/events" variant="ghost">
              See events
            </GradientButton>
          </motion.div>
        </motion.div>
      </section>

      <RevealSection className="px-4 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div variants={scaleIn} whileHover={{ y: -4, transition: { duration: 0.3 } }}>
            <GlassCard className="p-6 sm:p-8">
              <h2 className="font-poppins text-xl font-bold text-cyan-200 sm:text-2xl">Mission</h2>
              <p className="mt-3 font-inter leading-relaxed text-slate-400">{ABOUT_MISSION}</p>
            </GlassCard>
          </motion.div>
          <motion.div variants={scaleIn} whileHover={{ y: -4, transition: { duration: 0.3 } }}>
            <GlassCard className="p-6 sm:p-8">
              <h2 className="font-poppins text-xl font-bold text-violet-200 sm:text-2xl">Vision</h2>
              <p className="mt-3 font-inter leading-relaxed text-slate-400">{ABOUT_VISION}</p>
            </GlassCard>
          </motion.div>
        </motion.div>
      </RevealSection>

      <RevealSection className="mt-16 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.5, ease: easeOutExpo }}
          >
            <h2 className="font-poppins text-2xl font-bold text-white sm:text-3xl">What we do</h2>
            <p className="mt-2 max-w-2xl font-inter text-slate-400">Hands-on security culture: compete, build, and learn together.</p>
          </motion.div>
          <motion.div
            className="mt-8 grid gap-5 md:grid-cols-3"
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {ABOUT_WHAT_WE_DO.map((item) => (
              <motion.div key={item.title} variants={fadeUp} whileHover={{ scale: 1.02, y: -4 }} transition={{ duration: 0.35, ease: easeOutExpo }}>
                <GlassCard className="p-6 sm:p-7">
                  <motion.div
                    className="h-1 w-10 origin-left rounded-full bg-gradient-to-r from-violet-400 to-cyan-400"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: easeOutExpo }}
                  />
                  <h3 className="mt-4 font-poppins text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 font-inter text-sm leading-relaxed text-slate-400">{item.body}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </RevealSection>

      <RevealSection className="mt-20 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            className="font-poppins text-2xl font-bold text-white sm:text-3xl"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.5, ease: easeOutExpo }}
          >
            Our journey
          </motion.h2>
          <motion.p
            className="mt-2 font-inter text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={defaultViewport}
            transition={{ delay: 0.08, duration: 0.45 }}
          >
            Milestones that shaped the club.
          </motion.p>
          <div className="relative mt-10 space-y-0 border-l border-white/10 pl-8 sm:pl-10">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                className="relative pb-12 last:pb-0"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.12, duration: 0.55, ease: easeOutExpo }}
              >
                <motion.span
                  className="absolute -left-[calc(0.5rem+1px)] top-1.5 flex h-3 w-3 -translate-x-1/2 rounded-full border-2 border-cyan-400 bg-black shadow-[0_0_12px_rgba(34,211,238,0.5)] sm:-left-[calc(1.25rem+1px)]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.1, type: "spring", stiffness: 400, damping: 18 }}
                />
                <span className="font-inter text-sm font-semibold text-violet-300">{item.year}</span>
                <h3 className="mt-1 font-poppins text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 max-w-2xl font-inter text-sm leading-relaxed text-slate-400">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="mt-20 px-0 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="px-4 text-center sm:px-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.5, ease: easeOutExpo }}
          >
            <h2 className="font-poppins text-2xl font-bold text-white sm:text-3xl">Our sponsors</h2>
            <p className="mt-2 font-inter text-slate-400">Powered by partners who believe in the future of cybersecurity.</p>
          </motion.div>
          <motion.div
            className="mt-8 w-full rounded-2xl border border-white/10 bg-white/[0.03] py-8 shadow-[0_0_40px_rgba(139,92,246,0.06)] backdrop-blur-md sm:mx-0"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6, ease: easeOutExpo }}
            whileHover={{ boxShadow: "0 0 56px rgba(139, 92, 246, 0.12)" }}
          >
            <LogoLoop
              logos={SPONSOR_LOGO_ITEMS}
              speed={80}
              direction="left"
              logoHeight={64}
              gap={56}
              pauseOnHover
              fadeOut
              fadeOutColor="#000000"
              scaleOnHover
              ariaLabel="XPLOIT sponsors"
              className="py-2 w-full"
            />
          </motion.div>
          <motion.p
            className="mt-8 text-center font-inter text-sm text-slate-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={defaultViewport}
          >
            Questions?{" "}
            <Link to="/contact" className="text-cyan-400 hover:text-cyan-300">
              Contact us
            </Link>
          </motion.p>
        </div>
      </RevealSection>
    </div>
  );
}
