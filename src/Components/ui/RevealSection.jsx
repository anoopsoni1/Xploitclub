import { motion } from "framer-motion";
import { fadeUp, defaultViewport } from "../motion/variants.js";

/**
 * Scroll-triggered reveal (Framer Motion).
 */
export default function RevealSection({ children, className = "", variants = fadeUp }) {
  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}
