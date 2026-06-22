"use client";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { team } from "@/data/siteData";
import { Github, Linkedin, X, Users } from "lucide-react";
import { useState } from "react";

export function TeamSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="team" className="px-5 py-24 md:px-8 md:py-32 lg:px-14">
      <div className="mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Reveal>
            <SectionHeading
              index="03"
              title="Meet Our Team"
              subtitle="Leads and contributors shaping the club's technical direction."
            />
          </Reveal>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 rounded-lg border border-portfolio-border bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.06] hover:border-white/[0.12]"
          >
            <Users className="h-4 w-4" />
            {isExpanded ? "Collapse" : "View All"}
          </button>
        </div>
        {/* Grid View */}
        <div className={`transition-all duration-300 ${isExpanded ? "opacity-0 hidden" : "opacity-100"}`}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {team.slice(0, 4).map((member, index) => (
              <Reveal key={member.name} delay={index * 0.07}>
                <article className="flex h-full flex-col rounded-sm border border-portfolio-border bg-white/[0.02] p-6 transition duration-500 hover:border-white/[0.12] hover:bg-white/[0.035]">
                  <div className="mb-6 aspect-square w-full bg-[linear-gradient(145deg,rgba(168,212,255,0.15),rgba(80,255,180,0.06))] rounded-lg overflow-hidden">
                    {member.image && (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    )}
                  </div>
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

        {/* Expanded Modal View */}
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-portfolio-border bg-black/40 p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-white">All Team Members</h2>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="rounded-lg p-2 transition hover:bg-white/[0.1]"
                  aria-label="Close"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {team.map((member, index) => (
                  <Reveal key={member.name} delay={index * 0.05}>
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 aspect-square w-full max-w-[150px] rounded-lg border border-portfolio-border bg-[linear-gradient(145deg,rgba(168,212,255,0.15),rgba(80,255,180,0.06))] overflow-hidden">
                        {member.image && (
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        )}
                      </div>
                      <h3 className="text-base font-semibold text-white">{member.name}</h3>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-portfolio-muted">
                        {member.role}
                      </p>
                      <div className="mt-3 flex gap-3 text-white/45">
                        <a href={member.linkedin} aria-label={`${member.name} LinkedIn`}>
                          <Linkedin className="h-4 w-4 transition hover:text-portfolio-accent" />
                        </a>
                        <a href={member.github} aria-label={`${member.name} GitHub`}>
                          <Github className="h-4 w-4 transition hover:text-portfolio-accent" />
                        </a>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
