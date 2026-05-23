"use client";

import { motion } from "framer-motion";

export function ImmersiveBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-portfolio-base" />
      <motion.div
        className="absolute -left-1/4 top-0 h-[70vmin] w-[70vmin] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,200,255,0.12),transparent_65%)] blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-1/4 bottom-0 h-[80vmin] w-[80vmin] rounded-full bg-[radial-gradient(circle_at_center,rgba(80,255,180,0.08),transparent_60%)] blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_40%,rgba(0,0,0,0.85)_100%)]" />
    </div>
  );
}
