"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 28, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 28, stiffness: 200 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[5] h-[min(420px,45vw)] w-[min(420px,45vw)] rounded-full bg-[radial-gradient(circle,rgba(168,212,255,0.14)_0%,rgba(120,255,200,0.06)_45%,transparent_70%)] blur-2xl"
        style={{ x: smoothX, y: smoothY }}
      />
    </>
  );
}
