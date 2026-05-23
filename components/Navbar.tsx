"use client";

import { navLinks } from "@/data/siteData";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40">
      <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 py-6 md:px-8 md:py-8">
        <a
          href="#home"
          className="group font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-white/90 transition hover:text-white"
        >
          <span className="text-white/50 transition group-hover:text-portfolio-accent">{"///"}</span>{" "}
          CS Club
        </a>
        <button
          aria-label="Toggle menu"
          className="rounded border border-white/10 p-2.5 text-white/70 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu className="h-4 w-4" />
        </button>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className="rounded-sm px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 transition hover:bg-white/[0.04] hover:text-white"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={cn(
          "overflow-hidden border-t border-white/[0.06] bg-portfolio-base/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden",
          open ? "max-h-[28rem]" : "max-h-0",
        )}
      >
        <ul className="space-y-1 px-5 py-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className="block rounded-sm px-3 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-white/55 transition hover:bg-white/[0.05] hover:text-white"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {"// "}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
