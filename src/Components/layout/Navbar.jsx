import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaShield } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { easeOutExpo } from "../motion/variants.js";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/team", label: "Team" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function linkClass(isActive) {
  return [
    "relative inline-block font-inter text-sm font-medium tracking-wide transition-colors duration-200",
    isActive ? "text-cyan-300" : "text-slate-300 hover:text-white",
  ].join(" ");
}

const mobileItem = {
  hidden: { opacity: 0, x: 28 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.05 * i, duration: 0.4, ease: easeOutExpo },
  }),
  exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-black/75 backdrop-blur-xl supports-[backdrop-filter]:bg-black/65">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-8 lg:px-10 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, ease: easeOutExpo }}>
          <Link
            to="/"
            className="group flex items-center gap-2 font-poppins text-lg font-bold tracking-tight text-white sm:text-xl"
          >
            <motion.span
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/25 bg-gradient-to-br from-violet-500/20 to-cyan-500/15 shadow-[0_0_24px_rgba(34,211,238,0.15)]"
              whileHover={{ scale: 1.08, rotate: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              <FaShield className="h-4 w-4 text-cyan-300" />
            </motion.span>
            <span className="bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-transparent">XPLOIT</span>
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {NAV.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => linkClass(isActive)}>
              {({ isActive }) => (
                <>
                  {label}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 opacity-90 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.4 }}>
            <Link
              to="/contact"
              className="hidden rounded-full border border-cyan-400/35 bg-cyan-400/10 px-4 py-2 font-inter text-sm font-semibold text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.12)] transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/20 hover:shadow-[0_0_28px_rgba(34,211,238,0.25)] sm:inline-flex"
            >
              Join us
            </Link>
          </motion.div>
          <motion.button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.92 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <HiX className="h-6 w-6" />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <HiMenuAlt3 className="h-6 w-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-shell"
            className="fixed inset-0 top-[3.5rem] z-30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-nav"
              className="absolute inset-y-0 right-0 w-[min(100%,20rem)] border-l border-white/10 bg-black/98 backdrop-blur-xl shadow-[-12px_0_48px_rgba(0,0,0,0.45)]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              <nav className="flex flex-col gap-1 px-4 py-6 font-poppins text-lg" aria-label="Mobile">
                {NAV.map(({ to, label }, i) => (
                  <motion.div key={to} custom={i} variants={mobileItem} initial="hidden" animate="visible" exit="exit">
                    <NavLink
                      to={to}
                      end={to === "/"}
                      className={({ isActive }) =>
                        [
                          "block rounded-xl px-4 py-3 transition-colors",
                          isActive ? "bg-white/10 text-cyan-200" : "text-slate-200 hover:bg-white/5",
                        ].join(" ")
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div custom={NAV.length} variants={mobileItem} initial="hidden" animate="visible" exit="exit">
                  <Link
                    to="/contact"
                    className="mt-2 block rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-3 text-center font-semibold text-white shadow-[0_0_32px_rgba(139,92,246,0.35)]"
                  >
                    Join us
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
