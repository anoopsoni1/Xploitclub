import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { events } from "@/data/siteData";
import Image from "next/image";

export function EventsSection() {
  return (
    <section id="events" className="px-5 py-24 md:px-8 md:py-32 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <SectionHeading
            index="02"
            title="Events & Workshops"
            subtitle="Hands-on labs and competitions — same energy as a high-end product showcase."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {events.map((event, index) => (
            <Reveal key={event.title} delay={index * 0.06}>
              <article className="group overflow-hidden rounded-sm border border-portfolio-border bg-white/[0.02] shadow-portfolioLift transition duration-500 hover:border-white/[0.14] hover:bg-white/[0.03]">
                <div className="relative aspect-[16/10] overflow-hidden md:aspect-[2/1]">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-base via-transparent to-transparent opacity-80" />
                </div>
                <div className="space-y-4 p-6 md:p-7">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-portfolio-accent/90">
                    {event.date}
                  </p>
                  <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                    {event.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-portfolio-muted md:text-[15px]">
                    {event.description}
                  </p>
                  <button
                    type="button"
                    className="mt-2 font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-white/55 underline decoration-white/15 underline-offset-8 transition hover:text-portfolio-accent hover:decoration-portfolio-accent/50"
                    aria-label={`View details for ${event.title}`}
                  >
                    View Details
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
