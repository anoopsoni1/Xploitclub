"use client"

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { gallery } from "@/data/siteData";
import Image from "next/image";
import CircularGallery from "../CircularGallery.jsx"
import { useEffect } from "react";

export function GallerySection() {
  return (
    <section id="gallery" className="px-5 py-24 md:px-8 md:py-32 lg:px-14">
      <div className="mx-auto ">
        <Reveal>
          <SectionHeading
            index="05"
            title="Club Gallery"
            subtitle="Snapshots from meetups, labs, and late-night CTF rooms."
          />
        </Reveal>
      </div>
            <div className="relative h-[80vh]">
  <CircularGallery
    bend={1}
    textColor="#ffffff"
    borderRadius={0.05}
    scrollEase={0.05}
    // Optionally load a custom font for the labels.
    // Accepts a stylesheet URL (e.g. Google Fonts) or a direct font file.
    fontUrl=""
    font="bold 30px Orbitron"
    scrollSpeed={2}
/>
</div>
    </section>
  );
}
