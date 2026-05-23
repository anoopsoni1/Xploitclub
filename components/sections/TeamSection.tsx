import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { team } from "@/data/siteData";
import { Github, Linkedin } from "lucide-react";

export function TeamSection() {
  return (
    <section id="team" className="px-5 py-24 md:px-8 md:py-32 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionHeading
            index="03"
            title="Meet Our Team"
            subtitle="Leads and contributors shaping the club’s technical direction."
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.07}>
              <article className="flex h-full flex-col rounded-sm border border-portfolio-border bg-white/[0.02] p-6 transition duration-500 hover:border-white/[0.12] hover:bg-white/[0.035]">
                <div className="mb-6 aspect-square w-full max-w-[120px] bg-[linear-gradient(145deg,rgba(168,212,255,0.15),rgba(80,255,180,0.06))]" />
                <h3 className="text-lg font-semibold tracking-tight text-white">{member.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-portfolio-muted">
                  {member.role}
                </p>
                <div className="mt-auto flex gap-4 pt-6 text-white/45">
                  <a href={member.linkedin} aria-label={`${member.name} LinkedIn`}>
                    <Linkedin className="h-4 w-4 transition hover:text-portfolio-accent" />
                  </a>
                  <a href={member.github} aria-label={`${member.name} GitHub`}>
                    <Github className="h-4 w-4 transition hover:text-portfolio-accent" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
