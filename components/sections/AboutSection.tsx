import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="px-5 py-24 md:px-8 md:py-32 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionHeading
            index="01"
            title="Who We Are"
            subtitle="Fostering security awareness, ethical hacking, and hands-on engineering."
          />
          <p className="max-w-3xl text-[clamp(1.05rem,2.2vw,1.35rem)] leading-[1.65] text-portfolio-muted">
            The Cybersecurity Club at IIIT Bhopal is dedicated to fostering a culture of security
            awareness, ethical hacking, and real-world problem solving. We conduct workshops, CTF
            competitions, and research in domains like network security, cryptography, and web
            security.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
