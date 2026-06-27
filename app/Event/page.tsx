"use client";

import Navbar from "@/app/Event/Eventheader";
import Footer from "@/app/Event/Eventfooter";
import { Reveal } from "@/components/Reveal";
import { events } from "@/data/siteData";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function EventsPage() {
  const featured = events[0];
  const upcoming = events.slice(1);

  return (
    <>
      <Navbar />

      <main className="bg-[#000000] text-white">
        <section className="px-6 pb-28 relative top-[15vh]">
          <div className="mx-auto ">
            <Reveal>
              <h2 className="mb-16 text-4xl font-bold">
              <span className="text-red-500">Events</span>
              </h2>
            </Reveal>

            <div className="space-y-20">
              {upcoming.map((event, index) => (
                <Reveal key={event.title}>
                  <div
                    className={`grid items-center gap-12 lg:grid-cols-2 ${
                      index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="group relative h-[340px] overflow-hidden rounded-3xl">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-widest text-red-500">
                        {event.date}
                      </p>

                      <h3 className="mt-3 text-3xl font-bold">
                        {event.title}
                      </h3>

                      <p className="mt-5 leading-8 text-neutral-400">
                        {event.description}
                      </p>

                      <button className="mt-8 flex items-center gap-2 text-red-500 transition hover:gap-4">
                        Learn More
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}