"use client";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";
import { EffectCoverflow } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useRef, useEffect } from "react";


export function AboutSection() {
const [videoDurations, setVideoDurations] = useState({});
const [currentIndex, setCurrentIndex] = useState(0);
const [isAutoPlay, setIsAutoPlay] = useState(false);
const [isInView, setIsInView] = useState(false);
const swiperRef = useRef(null);
const videoRefs = useRef({});
const sectionRef = useRef(null);

// Intersection Observer to detect when section is in view
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsInView(entry.isIntersecting);
      if (entry.isIntersecting) {
        setIsAutoPlay(true);
        // Play current video when section comes into view
        const currentVideo = videoRefs.current[currentIndex];
        if (currentVideo) {
          currentVideo.play().catch(() => {});
        }
      } else {
        setIsAutoPlay(false);
        // Pause all videos when section goes out of view
        Object.values(videoRefs.current).forEach(video => {
          if (video) {
            video.pause();
            video.currentTime = 0;
          }
        });
      }
    },
    { threshold: 0.3 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => {
    if (sectionRef.current) {
      observer.unobserve(sectionRef.current);
    }
  };
}, [currentIndex]);

const slides = [
  {
    subtitle: "Cybersecurity in Action",
    img: "/videos/Video-510.mp4",
  },
  {
    subtitle: "Hands-on Hacking Labs",
    img: "/videos/Video-607.mp4",
  },
  {
    subtitle: "CTF Competitions & Learning",
    img: "/videos/Video-188.mp4",
  },
];

const handleVideoLoadedMetadata = (idx, e) => {
  const duration = Math.ceil(e.target.duration * 1000);
  setVideoDurations(prev => ({
    ...prev,
    [idx]: duration
  }));
};

const handleVideoEnded = (idx) => {
  if (isAutoPlay && swiperRef.current) {
    swiperRef.current.slideNext();
  }
};

const handleSlideChange = (swiper) => {
  setCurrentIndex(swiper.activeIndex);
  setIsAutoPlay(true);
};

const handleUserInteraction = () => {
  setIsAutoPlay(false);
};

// Manage video playback based on visibility
useEffect(() => {
  const currentVideo = videoRefs.current[currentIndex];
  if (!currentVideo) return;

  if (isInView && isAutoPlay) {
    currentVideo.play().catch(() => {});
  } else {
    currentVideo.pause();
  }
}, [isInView, isAutoPlay, currentIndex]);

const currentVideoDuration = videoDurations[currentIndex] || 8000;

  return (
   <section
  id="about"
  ref={sectionRef}
  className="px-5 py-16 md:px-8 md:py-24 lg:px-14"
>
  <div className="mx-auto max-w-[1400px] flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
    
    {/* Text Content */}
    <div className="w-full lg:w-1/2">
      <Reveal>
        <SectionHeading
          index="01"
          title="Who We Are"
          subtitle="Fostering security awareness, ethical hacking, and hands-on engineering."
        />

        <p
          className="
            max-w-3xl
            text-base
            sm:text-lg
            md:text-xl
            leading-relaxed
            text-portfolio-muted
          "
        >
          Xploit is the Cybersecurity Club of IIIT Bhopal. We bring together
          students interested in ethical hacking, cybersecurity, and
          technology. Through workshops, CTFs, projects, and security
          challenges, we help students build practical skills, solve real-world
          problems, and grow as security professionals.
        </p>
      </Reveal>
    </div>

    {/* Slider */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <Reveal>
        <div
          id="ten"
          className="
            sm:w-full
            sm:max-w-[700px]
            max-w-[320px]
            h-[250px]
            sm:h-[350px]
            md:h-[450px]
            lg:h-[550px]
          "
        >
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, EffectCoverflow]}
            autoplay={
              isInView && isAutoPlay
                ? {
                    delay: currentVideoDuration,
                    disableOnInteraction: false,
                  }
                : false
            }
            loop={true}
            keyboard={true}
            mousewheel={true}
            effect="coverflow"
            onSlideChange={handleSlideChange}
            onTouchStart={handleUserInteraction}
            onMouseDown={handleUserInteraction}
            className="h-full w-full"
          >
            {slides.map((slider, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative h-full rounded-2xl overflow-hidden">
                  <video
                    ref={(el) => (videoRefs.current[idx] = el)}
                    src={slider.img}
                    loop={isAutoPlay && isInView}
                    muted
                    playsInline
                    onLoadedMetadata={(e) =>
                      handleVideoLoadedMetadata(idx, e)
                    }
                    onEnded={() => handleVideoEnded(idx)}
                    className="
                      w-full
                      h-full
                      object-cover
                      rounded-2xl
                      md:rounded-3xl
                    "
                  />

                  <div className="absolute inset-0 bg-black/10" />

                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white z-10">
                    <h3 className="text-sm sm:text-lg md:text-xl font-semibold">
                      {slider.subtitle}
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
</section>
  );
}
