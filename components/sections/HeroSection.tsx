"use client";

import { HeroScene } from "@/components/HeroScene";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-[100dvh] flex-col justify-end px-5 pb-20 pt-28 md:justify-center md:px-8 md:pb-0 md:pt-24 lg:px-14"
    >
      <HeroScene />
      <motion.div
        className="mx-auto w-full "
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="max-w-[14ch] text-[clamp(2.5rem,10.5vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.03em] text-white md:max-w-[18ch]">
          Cybersecurity
          <br />
          <span className="text-white/88">Club</span>
        </h1>

        <p className="mt-6 max-w-xl font-mono text-sm font-medium text-portfolio-accent/95 md:mt-8">
          Securing the Digital Future
        </p>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-portfolio-muted md:mt-8 md:text-lg md:leading-relaxed">
    Welcome to the ultimate playground for cybersecurity enthusiasts. We bridge the gap between classroom theory and real-world chaos. Join us to decrypt complex challenges, master OSINT, and build bulletproof defense strategies.
        </p>

        <p className="mt-6 max-w-xl font-mono text-sm font-medium text-portfolio-accent/95 md:mt-8">
        No fluff. Just pure, unadulterated hands-on security!
        </p>


        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 md:mt-14">
          <a
            href="#contact"
            className="inline-flex w-fit items-center justify-center border border-white/20 bg-white/[0.03] px-8 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white transition hover:border-white/35 hover:bg-white/[0.06]"
          >
            Join Club
          </a>
          <a
            href="#events"
            className="inline-flex w-fit items-center justify-center px-8 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white/55 underline decoration-white/20 underline-offset-8 transition hover:text-white hover:decoration-portfolio-accent/60"
          >
            Explore Events
          </a>
        </div>
      </motion.div>
    </section>
  );
}
