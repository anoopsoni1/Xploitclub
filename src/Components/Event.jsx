import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import RevealSection from "./ui/RevealSection.jsx";
import GlassCard from "./ui/GlassCard.jsx";
import GradientButton from "./ui/GradientButton.jsx";
import { EVENTS } from "../data/xploitData.js";
import { defaultViewport, easeOutExpo } from "./motion/variants.js";

const FILTERS = [
  { id: "all", label: "All" },
  { id: "hackathon", label: "Hackathons" },
  { id: "contest", label: "Contests" },
  { id: "workshop", label: "Workshops" },
];

export default function Events() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return EVENTS;
    return EVENTS.filter((e) => e.category === active);
  }, [active]);

  return (
    <div className="pb-20">
      <section className="relative px-4 pt-12 pb-10 sm:px-6 md:px-8 lg:px-10 sm:pt-16 md:pt-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOutExpo }}
          >
            <p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-violet-300/90">Calendar</p>
            <h1 className="mt-3 font-poppins text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Events & <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">programs</span>
            </h1>
            <p className="mt-4 max-w-2xl font-inter text-slate-400 sm:text-lg">
              CTFs, hackathons, workshops, and labs—pick your lane and register. All dates and venues are as published by the club.
            </p>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-2">
            {FILTERS.map((f, i) => (
              <motion.button
                key={f.id}
                type="button"
                initial={{ opacity: 0, y: 14 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1 + i * 0.07, duration: 0.42, ease: easeOutExpo },
                }}
                onClick={() => setActive(f.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={[
                  "rounded-full border px-4 py-2 font-inter text-sm font-medium transition-all duration-300",
                  active === f.id
                    ? "border-cyan-400/50 bg-gradient-to-r from-violet-600/40 to-cyan-600/30 text-white shadow-[0_0_24px_rgba(34,211,238,0.2)]"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10",
                ].join(" ")}
              >
                {f.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <RevealSection className="px-4 sm:px-6 md:px-8 lg:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.map((event, index) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, y: 32, scale: 0.94 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { delay: index * 0.05, duration: 0.42, ease: easeOutExpo },
                }}
                exit={{ opacity: 0, y: -16, scale: 0.96, transition: { duration: 0.28 } }}
                whileHover={{ y: -8, transition: { duration: 0.35, ease: easeOutExpo } }}
                style={{ willChange: "transform" }}
              >
                <GlassCard className="group flex h-full flex-col overflow-hidden p-0" hover>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={event.image}
                      alt=""
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.5, ease: easeOutExpo }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                    <motion.span
                      className="absolute left-4 top-4 rounded-lg border border-violet-400/35 bg-violet-500/15 px-2.5 py-1 font-inter text-xs font-semibold text-violet-100 backdrop-blur-md"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + index * 0.04, duration: 0.35 }}
                    >
                      {event.tag}
                    </motion.span>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h2 className="font-poppins text-lg font-semibold text-white transition-colors group-hover:text-cyan-200">{event.title}</h2>
                    <div className="mt-3 flex flex-wrap gap-3 font-inter text-xs text-slate-400 sm:text-sm">
                      <span className="inline-flex items-center gap-1.5">
                        <FaCalendarAlt className="text-cyan-400/80" />
                        {event.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-violet-400/80" />
                        {event.venue}
                      </span>
                    </div>
                    <p className="mt-3 flex-1 font-inter text-sm leading-relaxed text-slate-400">{event.desc}</p>
                    <div className="mt-5">
                      <GradientButton href="#" variant="primary" className="w-full py-2.5 text-sm sm:w-auto">
                        Register
                      </GradientButton>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </RevealSection>

      <motion.div
        className="mx-auto mt-14 max-w-7xl px-4 text-center sm:px-6 md:px-8 lg:px-10"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5, ease: easeOutExpo }}
      >
        <p className="font-inter text-slate-500">Want to collaborate or propose an event?</p>
        <Link to="/contact" className="mt-2 inline-block font-inter text-sm font-semibold text-cyan-300 hover:text-cyan-200">
          Contact the team →
        </Link>
      </motion.div>
    </div>
  );
}
