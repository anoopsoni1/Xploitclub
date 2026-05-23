import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaShield } from "react-icons/fa6";
import { easeOutExpo } from "../motion/variants.js";

export default function LoadingOverlay({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
      role="status"
      aria-live="polite"
      aria-label="Loading"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: "blur(14px)" }}
      transition={{ duration: 0.55, ease: easeOutExpo }}
    >
      <motion.div
        initial={{ scale: 0.45, opacity: 0, rotate: -18 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className="relative"
      >
        <motion.div
          className="flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-violet-600/30 to-cyan-500/20"
          animate={{
            boxShadow: [
              "0 0 28px rgba(34,211,238,0.25)",
              "0 0 52px rgba(139,92,246,0.45)",
              "0 0 28px rgba(34,211,238,0.25)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaShield className="h-10 w-10 text-cyan-300" />
        </motion.div>
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl border border-cyan-400/20"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
