import { useEffect, useState } from "react";

/** Soft cursor glow — desktop / fine pointer only */
export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [on, setOn] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setOn(true);
    };
    const leave = () => setOn(false);

    window.addEventListener("mousemove", move);
    document.body.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (!on) return null;

  return (
    <div
      className="pointer-events-none fixed z-[5] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-500/15 to-cyan-500/10 blur-3xl mix-blend-screen"
      style={{ left: pos.x, top: pos.y }}
      aria-hidden
    />
  );
}
