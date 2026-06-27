"use client";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { events } from "@/data/siteData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export function EventsSection() {
  const slides = events.map((event) => ({
    title: event.title,
    date: event.date,
    description: event.description,
    img: event.image,
  }));

  const hadlenavigate = ()=>{
       window.location.href = "/Event"
  }

  return (
    <section id="events" className="px-5 py-24 md:px-8 md:py-32 lg:px-14">
      <div className="mx-auto">
        <Reveal>
          <SectionHeading
            index="02"
            title="Events & Workshops"
            subtitle="Hands-on labs and competitions — same energy as a high-end product showcase."
          />
        </Reveal>

        <div className="mt-10 flex flex-col items-center gap-10 lg:mt-14 lg:flex-row lg:items-start lg:gap-16">
        
          <div className="order-1 flex w-full justify-center overflow-visible lg:order-2 lg:w-1/2">
            <Reveal>
              <div
              onClick={hadlenavigate}
                className="
                  h-[220px] w-full max-w-[320px] overflow-visible
                  sm:h-[320px] sm:max-w-[420px]
                  md:h-[400px] md:max-w-[520px]
                  lg:h-[480px] lg:max-w-full
                "
              >
                <Swiper
                  modules={[Autoplay, EffectCoverflow]}
                  effect="coverflow"
                  grabCursor
                  centeredSlides
                  loop
                  
                  slidesPerView="auto"
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    reverseDirection : true ,
                    pauseOnMouseEnter: true,
                  }}
                  coverflowEffect={{
                    rotate: 42,
                    stretch: 0,
                    depth: 120,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  className="h-full w-full !overflow-visible"
                >
                  {slides.map((slide, idx) => (
                    <SwiperSlide
                      key={slide.title}
                      className="!w-[78%] sm:!w-[72%] md:!w-[68%]"
                    >
                      <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 md:rounded-3xl">
                        <img
                          src={slide.img}
                          alt={slide.title}
                          className="h-full w-full object-cover"
                          loading={idx === 0 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 z-10 sm:bottom-6 sm:left-6 sm:right-6">
                          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/70 sm:text-[11px]">
                            {slide.date}
                          </p>
                          <h3 className="mt-1 text-sm font-semibold text-white sm:text-base md:text-lg">
                            {slide.title}
                          </h3>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
