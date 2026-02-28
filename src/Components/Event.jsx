import React, { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { FaShield } from "react-icons/fa6";
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const EVENTS_DATA = [
  {
    id: 1,
    title: "Capture The Flag",
    tag: "CTF",
    date: "Mar 15, 2025",
    venue: "IIIT Bhopal",
    desc: "Compete in challenges across crypto, forensics, web, and pwn. Win prizes and bragging rights.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    accent: "cyan",
  },
  {
    id: 2,
    title: "Ethical Hacking Workshop",
    tag: "Workshop",
    date: "Apr 2, 2025",
    venue: "Lab 101",
    desc: "Hands-on session on reconnaissance, exploitation, and secure coding practices.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    accent: "amber",
  },
  {
    id: 3,
    title: "Bug Bounty 101",
    tag: "Talk",
    date: "Apr 20, 2025",
    venue: "Auditorium",
    desc: "Learn how to find and report vulnerabilities responsibly. Guest speaker from industry.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    accent: "lime",
  },
  {
    id: 4,
    title: "Network Security Lab",
    tag: "Lab",
    date: "May 5, 2025",
    venue: "Networking Lab",
    desc: "Configure firewalls, sniff traffic, and defend against common network attacks.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    accent: "cyan",
  },
  {
    id: 5,
    title: "Cyber Awareness Week",
    tag: "Series",
    date: "May 12–18, 2025",
    venue: "Campus-wide",
    desc: "Talks, demos, and a mini-CTF. Open to all students.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    accent: "amber",
  },
  {
    id: 6,
    title: "Secure Coding Bootcamp",
    tag: "Bootcamp",
    date: "Jun 1, 2025",
    venue: "Online + Lab",
    desc: "Multi-day intensive on secure development and OWASP Top 10.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    accent: "lime",
  },
];

const accentBorder = {
  cyan: "hover:border-cyan-400/50 hover:shadow-[0_0_28px_rgba(34,211,238,0.15)]",
  amber: "hover:border-amber-400/50 hover:shadow-[0_0_28px_rgba(245,158,11,0.15)]",
  lime: "hover:border-lime-400/50 hover:shadow-[0_0_28px_rgba(132,204,22,0.15)]",
};
const accentTag = {
  cyan: "bg-cyan-400/20 text-cyan-400 border-cyan-400/40",
  amber: "bg-amber-400/20 text-amber-400 border-amber-400/40",
  lime: "bg-lime-400/20 text-lime-400 border-lime-400/40",
};

export default function Events() {
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const ctaRef = useRef(null);
  const orbsRef = useRef(null);
  const sliderWrapRef = useRef(null);
  const sliderTrackRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);
  const totalSlides = EVENTS_DATA.length;
  const GAP = 24;

  const updateCardsPerView = useCallback(() => {
    const w = window.innerWidth;
    if (w >= 1024) setCardsPerView(3);
    else if (w >= 640) setCardsPerView(2);
    else setCardsPerView(1);
  }, []);

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, [updateCardsPerView]);

  useEffect(() => {
    const wrap = sliderWrapRef.current;
    if (!wrap) return;
    const updateWidth = () => {
      const w = wrap.offsetWidth;
      if (w) setSlideWidth((w - (cardsPerView - 1) * GAP) / cardsPerView);
    };
    updateWidth();
    const ro = new ResizeObserver(updateWidth);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [cardsPerView]);

  const maxSlideIndex = Math.max(0, totalSlides - cardsPerView);
  const canGoPrev = currentSlide > 0;
  const canGoNext = currentSlide < maxSlideIndex;

  const goToSlide = useCallback(
    (index) => {
      const clamped = Math.max(0, Math.min(index, maxSlideIndex));
      if (clamped === currentSlide) return;
      setCurrentSlide(clamped);
    },
    [maxSlideIndex, currentSlide]
  );

  useGSAP(
    () => {
      const track = sliderTrackRef.current;
      if (!track || !slideWidth) return;
      const x = -currentSlide * (slideWidth + GAP);
      gsap.to(track, {
        x,
        duration: 0.75,
        ease: "power3.inOut",
        overwrite: true,
      });
    },
    { dependencies: [currentSlide, slideWidth] }
  );

  useEffect(() => {
    if (currentSlide > maxSlideIndex) setCurrentSlide(maxSlideIndex);
  }, [currentSlide, maxSlideIndex]);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(headerRef.current, { y: -24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
      .fromTo(heroRef.current, { y: 48, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.3")
      .fromTo(".event-hero-line", { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, "-=0.5")
      .fromTo(".event-hero-desc", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.35")
      .fromTo(".event-hero-badge", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.4)" }, "-=0.3");
  }, []);

  useGSAP(() => {
    const orbs = orbsRef.current?.children;
    if (!orbs?.length) return;
    gsap.to(orbs, {
      x: () => gsap.utils.random(-30, 30),
      y: () => gsap.utils.random(-20, 20),
      duration: () => gsap.utils.random(4, 7),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: { each: 0.5 },
    });
  }, []);

  useGSAP(
    () => {
      const titleEl = sectionTitleRef.current;
      if (!titleEl) return;
      gsap.fromTo(
        titleEl,
        { x: -24, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleEl,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    []
  );

  useGSAP(
    () => {
      const cards = cardsRef.current?.querySelectorAll(".event-card");
      if (!cards?.length) return;
      const cardImages = cardsRef.current?.querySelectorAll(".event-card-img");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 56, rotateX: -8 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "back.out(1.05)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
      cardImages?.forEach((img) => {
        img.addEventListener("mouseenter", () => {
          gsap.to(img, { scale: 1.08, duration: 0.4, ease: "power2.out" });
        });
        img.addEventListener("mouseleave", () => {
          gsap.to(img, { scale: 1, duration: 0.4, ease: "power2.out" });
        });
      });
    },
    []
  );

  useGSAP(
    () => {
      const cta = ctaRef.current;
      if (!cta) return;
      gsap.fromTo(
        cta,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: cta,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    []
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black" aria-hidden />
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-linear-to-b from-transparent via-cyan-950/10 to-cyan-950/25"
        aria-hidden
      />
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />
      <div ref={orbsRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute top-[15%] left-[10%] w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-[60%] right-[5%] w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute bottom-[20%] left-[20%] w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-cyan-400/5 blur-3xl" />
      </div>

      <main className="relative z-10">
        <header
          ref={headerRef}
          className="px-4 py-3 sm:px-6 sm:py-4 md:px-10 md:py-6 flex justify-between items-center pt-[max(0.75rem,env(safe-area-inset-top))] border-b border-white/5"
        >
          <Link
            to="/"
            className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl md:text-2xl font-bold font-rajdhani text-white hover:text-cyan-400 transition-colors duration-200"
          >
            <FaShield className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <span className="truncate">XPLOIT</span>
          </Link>
          <nav className="flex gap-3 sm:gap-5 md:gap-8 lg:gap-16 font-rajdhani font-semibold text-xs sm:text-sm md:text-base">
            <span className="text-amber-400">EVENTS</span>
            <Link to="/about" className="cursor-pointer hover:text-amber-400 transition-colors duration-200">
              ABOUT
            </Link>
            <Link to="/contact" className="sm:inline cursor-pointer hover:text-amber-400 transition-colors duration-200">
              CONTACT
            </Link>
          </nav>
        </header>

        {/* Hero */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-10 pt-12 sm:pt-16 md:pt-24 pb-14 sm:pb-20 md:pb-24">
          <div ref={heroRef} className="max-w-4xl">
            <p className="text-cyan-400/90 text-sm sm:text-base font-semibold tracking-wide uppercase mb-2">
              What we do
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-rajdhani leading-tight text-white">
              Our <span className="text-cyan-400">Events</span>
            </h1>
            <div className="event-hero-line mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-linear-to-r from-cyan-400 to-amber-400 rounded-full origin-left" />
            <p className="event-hero-desc mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
              CTFs, workshops, and tech sessions to level up your security skills. Join us at IIIT Bhopal.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="event-hero-badge inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-sm font-medium text-cyan-400">
                {EVENTS_DATA.length} upcoming
              </span>
            </div>
          </div>
        </section>

        {/* Event slider */}
        <section ref={cardsRef} className="px-0 sm:px-4 md:px-6 lg:px-10 pb-20 sm:pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 px-4 sm:px-0 mb-6 sm:mb-8">
              <h2
                ref={sectionTitleRef}
                className="text-xl sm:text-2xl md:text-3xl font-semibold font-rajdhani text-white/90 flex items-center gap-2"
              >
                <span className="w-1.5 h-6 sm:h-7 bg-cyan-400 rounded-full" />
                Upcoming events
              </h2>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goToSlide(currentSlide - 1)}
                  disabled={!canGoPrev}
                  aria-label="Previous slide"
                  className="event-slider-btn flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/5 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all duration-300"
                >
                  <FaChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm font-rajdhani text-gray-400 min-w-[4rem] text-center">
                  {currentSlide + 1} / {maxSlideIndex + 1}
                </span>
                <button
                  type="button"
                  onClick={() => goToSlide(currentSlide + 1)}
                  disabled={!canGoNext}
                  aria-label="Next slide"
                  className="event-slider-btn flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/5 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all duration-300"
                >
                  <FaChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div
              ref={sliderWrapRef}
              className="event-slider-wrap relative overflow-hidden w-full"
            >
              <div
                ref={sliderTrackRef}
                className="event-slider-track flex will-change-transform"
                style={{
                  width: slideWidth && totalSlides ? totalSlides * slideWidth + (totalSlides - 1) * GAP : "100%",
                  gap: GAP,
                }}
              >
                {EVENTS_DATA.map((event) => (
                  <article
                    key={event.id}
                    className="event-slide-card event-card flex-none rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] group h-full"
                    style={{ width: slideWidth || "100%" }}
                  >
                    <Link to="#" className="block h-full flex flex-col">
                      <div className="relative aspect-video overflow-hidden bg-white/10">
                        <img
                          src={event.image}
                          alt=""
                          className="event-card-img w-full h-full object-cover will-change-transform"
                        />
                        <div
                          className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none"
                          aria-hidden
                        />
                        <div className="absolute top-3 left-3">
                          <span
                            className={`inline-block px-2.5 py-1 rounded-lg text-xs font-semibold border backdrop-blur-sm ${accentTag[event.accent]}`}
                          >
                            {event.tag}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
                        <h3 className={`font-semibold text-white text-lg sm:text-xl font-rajdhani line-clamp-2 group-hover:text-cyan-400/90 transition-colors duration-200 ${accentBorder[event.accent]}`}>
                          {event.title}
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400">
                          <span className="flex items-center gap-1.5">
                            <FaCalendarAlt className="w-3.5 h-3.5 shrink-0 text-cyan-400/80" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <FaMapMarkerAlt className="w-3.5 h-3.5 shrink-0 text-amber-400/80" />
                            {event.venue}
                          </span>
                        </div>
                        <p className="mt-3 text-gray-400 text-sm sm:text-base line-clamp-2 leading-relaxed flex-1">
                          {event.desc}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm sm:text-base group-hover:gap-3 transition-all duration-200">
                          Learn more <FaArrowRight className="w-4 h-4 shrink-0" />
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {Array.from({ length: maxSlideIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentSlide ? "w-6 bg-cyan-400" : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="max-w-6xl mx-auto mt-16 sm:mt-20 md:mt-24 text-center">
            <p className="text-gray-500 text-sm sm:text-base">
              Want to host or suggest an event?{" "}
              <Link to="/about" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200">
                Get in touch
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
