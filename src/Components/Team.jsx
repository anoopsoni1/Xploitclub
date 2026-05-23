import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import RevealSection from "./ui/RevealSection.jsx";
import GlassCard from "./ui/GlassCard.jsx";
import { ALL_TEAM_MEMBERS, CORE_TEAM, LEADS_TEAM, ASSISTANT_TEAM } from "../data/xploitData.js";
import { defaultViewport, easeOutExpo } from "./motion/variants.js";

function MemberCard({ member, index }) {
  return (
    <motion.div
      className="[perspective:1200px]"
      initial={{ opacity: 0, y: 40, rotateX: -6 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.04, ease: easeOutExpo }}
      whileHover={{
        y: -10,
        rotateX: 4,
        rotateY: index % 2 === 0 ? -3 : 3,
        transition: { duration: 0.35, ease: easeOutExpo },
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <GlassCard className="group relative overflow-hidden p-0" hover={false}>
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.img
            src={member.image}
            alt=""
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.55, ease: easeOutExpo }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <h3 className="font-poppins text-lg font-semibold text-white drop-shadow-md">{member.name}</h3>
            <p className="mt-1 font-inter text-sm text-cyan-200/90">{member.role}</p>
            <div className="mt-3 flex gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <a
                href={member.linkedin}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-slate-200 backdrop-blur-sm transition-all hover:border-cyan-400/50 hover:text-cyan-200"
                aria-label={`${member.name} LinkedIn`}
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a
                href={member.github}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-slate-200 backdrop-blur-sm transition-all hover:border-violet-400/50 hover:text-violet-200"
                aria-label={`${member.name} GitHub`}
              >
                <FaGithub className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-cyan-500/10" />
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      className="mb-8 sm:mb-10"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={defaultViewport}
      transition={{ duration: 0.5, ease: easeOutExpo }}
    >
      <h2 className="font-poppins text-2xl font-bold text-white sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 font-inter text-slate-400">{subtitle}</p> : null}
    </motion.div>
  );
}

export default function Team() {
  return (
    <div className="pb-20">
      <section className="px-4 pt-12 pb-6 sm:px-6 md:px-8 lg:px-10 sm:pt-16 md:pt-20">
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeOutExpo }}
        >
          <p className="font-inter text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/90">People</p>
          <h1 className="mt-3 font-poppins text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Meet the <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">team</span>
          </h1>
          <p className="mt-4 max-w-2xl font-inter text-slate-400 sm:text-lg">
            Coordinators, leads, and assistants who run XPLOIT at IIIT Bhopal—CTFs, workshops, design, web, PR, and esports.
          </p>
        </motion.div>
      </section>

      <RevealSection className="px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Core team" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_TEAM.map((m, i) => (
              <MemberCard key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="mt-16 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Leads" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {LEADS_TEAM.map((m, i) => (
              <MemberCard key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="mt-16 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Assistant leads" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ASSISTANT_TEAM.map((m, i) => (
              <MemberCard key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>
      </RevealSection>

      <motion.p
        className="mx-auto mt-12 max-w-7xl px-4 text-center font-inter text-sm text-slate-500 sm:px-6 md:px-8 lg:px-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5 }}
      >
        {ALL_TEAM_MEMBERS.length} members listed · Photos and social links updated by the club.
      </motion.p>
    </div>
  );
}
