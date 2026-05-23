import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import PageBackground from "./PageBackground.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import LoadingOverlay from "./LoadingOverlay.jsx";
import CursorGlow from "./CursorGlow.jsx";
import AnimatedOutlet from "../motion/AnimatedOutlet.jsx";

export default function AppLayout() {
  const [loading, setLoading] = useState(true);
  const finishLoading = useCallback(() => setLoading(false), []);

  return (
    <div className="relative flex min-h-screen flex-col bg-[var(--xp-bg)] text-slate-100 antialiased">
      <PageBackground />
      <CursorGlow />
      <AnimatePresence mode="wait">
        {loading ? <LoadingOverlay key="xp-load" onDone={finishLoading} /> : null}
      </AnimatePresence>
      <Navbar />
      <div className="relative z-10 flex-1">
        <AnimatedOutlet />
      </div>
      <Footer />
    </div>
  );
}
