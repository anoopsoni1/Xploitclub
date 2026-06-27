"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function EventHeader() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Images/logo.png" // Change to your logo
            alt="Null Community"
            width={48}
            height={48}
          />

          <div>
            <h2 className="text-lg font-bold text-white">
            Xploit
            </h2>

            <p className="text-xs text-neutral-400">
              IIIT Bhopal
            </p>
          </div>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm text-white transition hover:border-red-500 hover:bg-red-500"
        >
          <ArrowLeft size={16} />
          Home
        </Link>
      </div>
    </header>
  );
}