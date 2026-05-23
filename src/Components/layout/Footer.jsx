import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from "react-icons/fa";
import { SITE, SOCIAL_LINKS } from "../../data/xploitData.js";
import { staggerFast, fadeUp, defaultViewport, easeOutExpo } from "../motion/variants.js";

const iconMap = {
  linkedin: FaLinkedin,
  github: FaGithub,
  discord: FaDiscord,
};

const QUICK = [
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-auto border-t border-white/[0.06] bg-black/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-8 lg:px-10">
        <motion.div
          className="grid gap-10 md:grid-cols-12 md:gap-8"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div className="md:col-span-5" variants={fadeUp}>
            <p className="font-poppins text-xl font-bold tracking-tight text-white">{SITE.name}</p>
            <p className="mt-2 max-w-sm font-inter text-sm leading-relaxed text-slate-400">{SITE.tagline}</p>
            <motion.a
              href={`mailto:${SITE.email}`}
              className="mt-4 inline-flex items-center gap-2 font-inter text-sm text-cyan-300/90 hover:text-cyan-200"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <FaEnvelope className="h-4 w-4 shrink-0" />
              {SITE.email}
            </motion.a>
          </motion.div>
          <motion.div className="md:col-span-3" variants={fadeUp}>
            <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-slate-500">Navigate</p>
            <ul className="mt-4 space-y-2 font-inter text-sm">
              {QUICK.map(({ to, label }, i) => (
                <motion.li
                  key={to}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.35, ease: easeOutExpo }}
                >
                  <Link to={to} className="text-slate-400 transition-colors hover:text-white">
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="md:col-span-4" variants={fadeUp}>
            <p className="font-poppins text-xs font-semibold uppercase tracking-widest text-slate-500">Connect</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon }) => {
                const Icon = iconMap[icon] || FaGithub;
                return (
                  <motion.a
                    key={label}
                    href={href}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300"
                    aria-label={label}
                    whileHover={{ y: -4, scale: 1.06, borderColor: "rgba(167, 139, 250, 0.35)" }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.25, ease: easeOutExpo }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
            <p className="mt-6 font-inter text-xs text-slate-500">{SITE.location}</p>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-8 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <p className="font-inter text-xs text-slate-500">© {new Date().getFullYear()} XPLOIT · IIIT Bhopal</p>
          <p className="font-inter text-xs text-slate-600">Built for builders, breakers & defenders.</p>
        </motion.div>
      </div>
    </footer>
  );
}
