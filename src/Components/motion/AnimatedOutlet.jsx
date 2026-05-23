import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { pageTransition } from "./variants.js";

/**
 * Route-level enter / exit. mode="wait" avoids overlap flicker between pages.
 */
export default function AnimatedOutlet() {
  const { pathname } = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
        className="min-h-[50vh]"
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}
