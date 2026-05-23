import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { gallery } from "@/data/siteData";
import Image from "next/image";

export function GallerySection() {
  return (
    <section id="gallery" className="px-5 py-24 md:px-8 md:py-32 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionHeading
            index="05"
            title="Club Gallery"
            subtitle="Snapshots from meetups, labs, and late-night CTF rooms."
          />
        </Reveal>
        <div className="columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
          {gallery.map((image, index) => (
            <Reveal key={image} delay={index * 0.05}>
              <div
                className={`break-inside-avoid relative mb-3 overflow-hidden rounded-sm border border-portfolio-border bg-cyber-bg md:mb-4 ${
                  index % 3 === 1 ? "h-52 md:h-72" : "h-44 md:h-56"
                }`}
              >
                <Image
                  src={image}
                  alt="Cybersecurity club event photograph"
                  fill
                  sizes="(max-width:768px) 50vw, 25vw"
                  loading="lazy"
                  className="object-cover transition duration-700 hover:scale-[1.02]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
