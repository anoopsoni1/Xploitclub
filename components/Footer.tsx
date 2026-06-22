"use client"

import { navLinks } from "@/data/siteData";
// import Log from "../components/sections/Logoloop"
export function Footer() {
  return (
    <>
  
    <footer className="relative z-10 border-t border-white/[0.06] px-5 py-16 md:px-8 lg:px-14">
      <div className="mx-auto flex w-full  flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">
       
            {new Date().getFullYear()} · IIIT Bhopal
          </p>
          <p className="mt-3 max-w-md text-sm text-portfolio-muted">
            Cybersecurity Club. Built in-house for workshops, CTFs, and secure engineering culture.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 transition hover:text-portfolio-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
          Built with care by Cybersecurity Club
        </p>
      </div>
    </footer>
    </>
  );
}
