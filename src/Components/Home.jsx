import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import ThreeBackground from "./ThreeBackground.jsx";
import GlassCard from "./ui/GlassCard.jsx";
import GradientButton from "./ui/GradientButton.jsx";
import AnimatedCounter from "./ui/AnimatedCounter.jsx";
import RevealSection from "./ui/RevealSection.jsx";
import {
  SITE,
  STATS,
  EVENTS,
  CORE_TEAM,
  LEADS_TEAM,
  ABOUT_WHAT_WE_DO,
} from "../data/xploitData.js";
import { staggerFast, fadeUp, fadeUpSm, scaleIn, defaultViewport, easeOutExpo } from "./motion/variants.js";

const FEATURED_EVENT_IDS = [7, 1, 8];

const heroLine = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: easeOutExpo },
  },
};

export default function Home() {
  const featured = FEATURED_EVENT_IDS.map((id) => EVENTS.find((e) => e.id === id)).filter(Boolean);
  const teamPreview = [...CORE_TEAM, ...LEADS_TEAM.slice(0, 5)];

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-[1]">
        <ThreeBackground opacity={0.32} />
      </div>

      <div className="relative z-[2]">
        {/* Hero */}
        <section className="relative min-h-[calc(100dvh-4rem)] flex flex-col justify-center px-4 py-16 sm:px-6 md:px-8 lg:px-10">
          <motion.div
            className="mx-auto w-full max-w-7xl"
            variants={staggerFast}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={heroLine}
              className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80"
            >
              {SITE.tagline}
            </motion.p>
            <motion.h1
              variants={heroLine}
              className="mt-4 font-poppins text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-transparent">
                {SITE.heroTitle}
              </span>
            </motion.h1>
            <motion.p
              variants={heroLine}
              className="mt-6 max-w-2xl font-inter text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              {SITE.heroSub}
            </motion.p>
            <motion.div variants={heroLine} className="mt-10 flex flex-wrap items-center gap-4">
              <GradientButton to="/contact" variant="primary">
                Join us <FaArrowRight className="h-4 w-4" />
              </GradientButton>
              <GradientButton to="/events" variant="ghost">
                Explore events
              </GradientButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.65 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <span className="text-xs font-inter uppercase tracking-widest text-slate-500">Scroll</span>
            <motion.span
              className="h-8 w-px rounded-full bg-gradient-to-b from-cyan-400/80 to-transparent"
              animate={{ scaleY: [1, 0.45, 1], opacity: [0.9, 0.35, 0.9] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </section>

        {/* Stats */}
        <RevealSection className="border-y border-white/[0.06] bg-black/20 py-16 sm:py-20">
          <motion.div
            className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-3 sm:px-6 md:px-8 lg:px-10"
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            {STATS.map((s) => (
              <motion.div key={s.label} variants={scaleIn}>
                <GlassCard className="p-6 text-center sm:p-8">
                  <p className="font-poppins text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 font-inter text-sm text-slate-400">{s.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </RevealSection>

        {/* About preview */}
        <RevealSection className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
            <motion.div
              className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.div variants={fadeUp}>
                <h2 className="font-poppins text-3xl font-bold text-white sm:text-4xl">Who we are</h2>
                <p className="mt-3 max-w-xl font-inter text-slate-400">
                  XPLOIT is the cybersecurity club at IIIT Bhopal—student-led, hands-on, and obsessed with ethical hacking and defense.
                </p>
              </motion.div>
              <motion.div variants={fadeUpSm}>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-inter text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  Full story <FaArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="mt-10 grid gap-5 md:grid-cols-3"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              {ABOUT_WHAT_WE_DO.map((item) => (
                <motion.div key={item.title} variants={scaleIn} whileHover={{ y: -4 }} transition={{ duration: 0.3, ease: easeOutExpo }}>
                  <GlassCard className="p-6 sm:p-7" hover>
                    <h3 className="font-poppins text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 font-inter text-sm leading-relaxed text-slate-400">{item.body}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </RevealSection>

        {/* Featured events */}
        <RevealSection className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.h2 variants={fadeUp} className="font-poppins text-3xl font-bold text-white sm:text-4xl">
                Featured events
              </motion.h2>
              <motion.div variants={fadeUpSm}>
                <Link to="/events" className="font-inter text-sm font-semibold text-violet-300 hover:text-violet-200">
                  View all →
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="mt-10 grid gap-6 lg:grid-cols-3"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              {featured.map((event) => (
                <motion.div
                  key={event.id}
                  variants={scaleIn}
                  whileHover={{ y: -8, transition: { duration: 0.35, ease: easeOutExpo } }}
                >
                  <GlassCard className="group overflow-hidden p-0" hover>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <motion.img
                        src={event.image}
                        alt=""
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.55, ease: easeOutExpo }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      <span className="absolute left-4 top-4 rounded-lg border border-cyan-400/35 bg-cyan-400/15 px-2.5 py-1 font-inter text-xs font-semibold text-cyan-200 backdrop-blur-md">
                        {event.tag}
                      </span>
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="font-poppins text-lg font-semibold text-white transition-colors group-hover:text-cyan-200">{event.title}</h3>
                      <div className="mt-3 flex flex-wrap gap-3 font-inter text-xs text-slate-400 sm:text-sm">
                        <span className="inline-flex items-center gap-1.5">
                          <FaCalendarAlt className="text-cyan-400/80" /> {event.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <FaMapMarkerAlt className="text-violet-400/80" /> {event.venue}
                        </span>
                      </div>
                      <p className="mt-3 line-clamp-2 font-inter text-sm text-slate-400">{event.desc}</p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </RevealSection>

        {/* Team preview */}
        <RevealSection className="pb-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              <motion.h2 variants={fadeUp} className="font-poppins text-3xl font-bold text-white sm:text-4xl">
                The crew
              </motion.h2>
              <motion.div variants={fadeUpSm}>
                <Link to="/team" className="font-inter text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                  Meet the team →
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="mt-10 flex flex-wrap justify-center gap-6 sm:gap-8 md:justify-start"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              {teamPreview.map((m, idx) => (
                <motion.div
                  key={m.name}
                  variants={scaleIn}
                  custom={idx}
                  whileHover={{ scale: 1.06, y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="group relative flex w-[100px] flex-col items-center sm:w-[112px]"
                >
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white/10 shadow-[0_0_24px_rgba(139,92,246,0.15)] transition-all duration-300 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_32px_rgba(34,211,238,0.25)] sm:h-28 sm:w-28">
                    <img src={m.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/95 via-black/50 to-transparent p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="text-center font-inter text-[10px] font-semibold leading-tight text-white sm:text-xs">{m.name.split(" ")[0]}</span>
                      <span className="mt-0.5 text-center font-inter text-[9px] text-cyan-200/90 sm:text-[10px]">{m.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </RevealSection>
      </div>
    </>
  );
}
