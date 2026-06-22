import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { expertise } from "@/data/siteData";

export function ExpertiseSection() {
  return (
    <section id="expertise" className="px-5 py-24 md:px-8 md:py-32 lg:px-14">
      <div className="mx-auto ">
        <Reveal>
          <SectionHeading
            index="04"
            title="Our Expertise"
            subtitle="Domains we practice, experiment in, and mentor new members through."
          />
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {expertise.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <div className="rounded-sm border border-portfolio-border bg-white/[0.02] px-5 py-6 font-mono text-[12px] uppercase tracking-[0.12em] text-white/70 transition duration-500 hover:border-portfolio-accent/25 hover:bg-portfolio-accentSoft hover:text-white">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
