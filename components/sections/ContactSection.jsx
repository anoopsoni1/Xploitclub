"use client"



import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import Log from "../sections/Logoloop"
export function ContactSection() {
  return (
    <>
     <div id="contact" className="px-5  md:px-8  lg:px-14">
      <Reveal>
            <SectionHeading
              index="06"
              title="Meet Our Sponsors"
              subtitle="Supporting our mission to educate, innovate, and secure the digital future."
            />
             <Log />
          </Reveal>
          </div>
   
    <section id="contact" className="px-5 py-24 md:px-8 md:py-32 lg:px-14">
      <div className="mx-auto grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              index="07"
              title="Get in Touch"
              subtitle="Collaborate on workshops, CTFs, and security initiatives."
            />
            <div className="space-y-4 font-mono text-[12px] uppercase tracking-[0.12em] text-portfolio-muted">
              <p>
                <span className="text-white/40">Email · </span>
                cyberclub@iiitbhopal.ac.in
              </p>
              <p>
                <span className="text-white/40">Location · </span>
                IIIT Bhopal
              </p>
              <p className="normal-case tracking-normal text-[13px] text-portfolio-muted">
                Social: LinkedIn · GitHub · Instagram
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <form className="space-y-8 border-t border-white/[0.08] pt-10 lg:border-t-0 lg:pt-0">
              <label className="block">
                <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                  Name
                </span>
                <input
                  type="text"
                  aria-label="Name"
                  className="w-full border-0 border-b border-white/15 bg-transparent py-2 text-base text-white placeholder-white/25 outline-none transition focus:border-portfolio-accent/60"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                  Email
                </span>
                <input
                  type="email"
                  aria-label="Email"
                  className="w-full border-0 border-b border-white/15 bg-transparent py-2 text-base text-white placeholder-white/25 outline-none transition focus:border-portfolio-accent/60"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block">
                <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                  Message
                </span>
                <textarea
                  aria-label="Message"
                  rows={4}
                  className="w-full resize-none border-0 border-b border-white/15 bg-transparent py-2 text-base text-white placeholder-white/25 outline-none transition focus:border-portfolio-accent/60"
                  placeholder="Tell us how we can collaborate"
                />
              </label>
              <button
                type="button"
                className="border border-white/20 bg-white/[0.03] px-8 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white transition hover:border-white/35 hover:bg-white/[0.06]"
              >
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
    </>
  );
}
