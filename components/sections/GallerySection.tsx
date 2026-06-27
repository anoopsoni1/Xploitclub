"use client";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const firstRow = [
  "/Gallery/onet.jpeg",
  "/Gallery/onet1.jpg",
  "/Gallery/onet3.jpg",
];

const secondRow = [
  "/Images/hemant.jpeg",
  "/Gallery/onet4.jpg",
  "/Images/img.png",
  "/Images/vedpal.png",
  "/Gallery/twot.png",
];

const allImages = [...firstRow, ...secondRow];

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32 lg:px-14"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-40 h-80 w-80 -translate-x-1/2 rounded-full bg-red-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            index="05"
            title="Club Gallery"
            subtitle="Snapshots from meetups, labs, and late-night CTF rooms."
          />
        </Reveal>

        <Reveal>
          {/* ---------------- Mobile Swiper ---------------- */}
          <div className="mt-12 block md:hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1.15}
              centeredSlides
              spaceBetween={20}
              loop
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {allImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
                    <img
                      src={src}
                      alt={`Gallery ${index + 1}`}
                      className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ---------------- Desktop Grid ---------------- */}
          <div className="mt-20 hidden space-y-5 md:block">
            {/* First Row */}
            <div className="grid grid-cols-3 gap-5">
              {firstRow.map((src, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md"
                >
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-5 gap-5">
              {secondRow.map((src, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md"
                >
                  <img
                    src={src}
                    alt={`Gallery ${index + 4}`}
                    className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}