import React, { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { FaShield } from "react-icons/fa6";
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ThreeBackground from "./ThreeBackground";

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
  {
    id: 7,
    title: "UDBHAV",
    tag: "Hackathon",
    date: "Oct 15, 2025",
    venue: "IIIT Bhopal",
    desc: "India's first ever Inter IIIT Hackathon. XPLOIT presents IIIT Bhopal Internal Round.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
    accent: "cyan",
  },
  {
    id: 8,
    title: "ROOTRUSH",
    tag: "Event",
    date: "TBA",
    venue: "IIIT Bhopal",
    desc: "In collaboration with Sugam Informatics Society & NM. A high-energy tech and cybersecurity showdown.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    accent: "amber",
  },
  {
    id: 9,
    title: "BGMI Battlegrounds Mobile India Tournament",
    tag: "Esports",
    date: "TBA",
    venue: "Online / Campus",
    desc: "Presented by ALGOS. The ultimate battleground showdown. Goodies up to ₹2000 for winners.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
    accent: "lime",
  },
];

const accentBorder = {
  cyan: "hover:border-cyan-400/50 hover:shadow-[0_0_32px_rgba(34,211,238,0.2)]",
  amber: "hover:border-amber-400/50 hover:shadow-[0_0_32px_rgba(245,158,11,0.2)]",
  lime: "hover:border-lime-400/50 hover:shadow-[0_0_32px_rgba(132,204,22,0.2)]",
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

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") goToSlide(currentSlide - 1);
      if (e.key === "ArrowRight") goToSlide(currentSlide + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentSlide, goToSlide]);

  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const AUTOPLAY_DELAY = 4500;

  useEffect(() => {
    if (autoplayPaused) return;
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlideIndex ? 0 : prev + 1));
    }, AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, [autoplayPaused, maxSlideIndex]);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(headerRef.current, { y: -24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
      .fromTo(heroRef.current, { y: 48, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.3")
      .fromTo(".event-hero-line-amber", { scaleX: 0 }, { scaleX: 1, duration: 0.45, ease: "power2.out" }, "-=0.5")
      .fromTo(".event-hero-line-cyan", { scaleX: 0 }, { scaleX: 1, duration: 0.55, ease: "power2.out" }, "-=0.35")
      .fromTo(".event-hero-desc", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.35")
      .fromTo(".event-hero-badge", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(1.4)" }, "-=0.3")
      .fromTo(".event-hero-scroll-hint", { opacity: 0, y: 10 }, { opacity: 0.7, y: 0, duration: 0.5, delay: 0.3 }, "-=0.2");
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
      const bar = document.querySelector(".event-section-bar");
      if (!titleEl) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleEl,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });
      tl.fromTo(titleEl, { x: -24, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6 })
        .fromTo(bar, { scaleY: 0, opacity: 0 }, { scaleY: 1, opacity: 1, duration: 0.35, transformOrigin: "bottom" }, "-=0.4");
    },
    []
  );

  useGSAP(
    () => {
      const wrap = sliderWrapRef.current;
      const track = sliderTrackRef.current;
      if (!wrap || !track) return;
      gsap.fromTo(
        wrap,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrap,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
      const cardImages = track.querySelectorAll(".event-card-img");
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

  useGSAP(() => {
    const hero = heroRef.current;
    if (!hero) return;
    ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: 0.5,
      onUpdate: (self) => {
        const y = self.progress * 80;
        gsap.set(hero, { y: Math.min(y, 60) });
      },
    });
  }, []);

  const navRef = useRef(null);
  useGSAP(() => {
    const links = navRef.current?.querySelectorAll("a");
    if (!links?.length) return;
    links.forEach((link, i) => {
      link.addEventListener("mouseenter", () => {
        gsap.to(link, { scale: 1.08, duration: 0.2, ease: "power2.out" });
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(link, { scale: 1, duration: 0.25, ease: "power2.out" });
      });
    });
  }, []);

  const sliderBtnsRef = useRef(null);
  useGSAP(() => {
    const btns = sliderBtnsRef.current?.querySelectorAll("button");
    if (!btns?.length) return;
    btns.forEach((btn) => {
      btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.1, boxShadow: "0 0 20px rgba(34,211,238,0.3)", duration: 0.25 });
      });
      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, boxShadow: "none", duration: 0.25 });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-white overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-neutral-950" aria-hidden />
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-linear-to-b from-transparent via-cyan-950/20 to-cyan-950/40"
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
      <ThreeBackground className="z-0" opacity={1} />

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
          <nav ref={navRef} className="flex gap-3 sm:gap-5 md:gap-8 lg:gap-16 font-rajdhani font-semibold text-xs sm:text-sm md:text-base">
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
        <section className="relative px-4 sm:px-6 md:px-8 lg:px-10 pt-12 sm:pt-16 md:pt-24 pb-14 sm:pb-20 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none flex items-center justify-start" aria-hidden>
            <div className="w-[min(80vw,500px)] h-[min(50vw,350px)] rounded-full bg-cyan-500/12 blur-[90px] -translate-x-1/4" />
            <div className="absolute w-[min(60vw,320px)] h-[min(40vw,240px)] rounded-full bg-amber-500/10 blur-[70px] translate-x-20 -translate-y-4" />
          </div>
          <div ref={heroRef} className="max-w-4xl relative z-10">
            <p className="text-cyan-400/90 text-sm sm:text-base font-semibold tracking-wide uppercase mb-2">
              What we do
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-rajdhani leading-tight text-white tracking-tight drop-shadow-[0_0_24px_rgba(34,211,238,0.12)]">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-cyan-300 to-amber-400">
                Events
              </span>
            </h1>
            <div className="mt-3 sm:mt-4 flex gap-1.5">
              <div className="event-hero-line-amber h-1 w-10 sm:w-12 bg-amber-400 rounded-full origin-left" />
              <div className="event-hero-line-cyan h-1 w-14 sm:w-20 bg-cyan-400 rounded-full origin-left" />
            </div>
            <p className="event-hero-desc mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
              CTFs, workshops, and tech sessions to level up your security skills. Join us at IIIT Bhopal.
            </p>
            <div className="mt-6 flex flex-col gap-5">
              <span className="event-hero-badge inline-flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/15 px-4 py-2 text-sm font-semibold text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_28px_rgba(34,211,238,0.3)] hover:border-cyan-400/60 transition-all duration-300 w-fit">
                {EVENTS_DATA.length} upcoming
              </span>
              <p className="event-hero-scroll-hint text-xs sm:text-sm text-gray-500 flex items-center gap-1.5">
                <span>Scroll to explore</span>
                <span className="inline-block animate-bounce">↓</span>
              </p>
            </div>
          </div>
        </section>

        {/* Event slider */}
        <section ref={cardsRef} className="px-0 sm:px-4 md:px-6 lg:px-10 pb-20 sm:pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 px-4 sm:px-0 mb-6 sm:mb-8">
              <h2
                ref={sectionTitleRef}
                className="text-xl sm:text-2xl md:text-3xl font-semibold font-rajdhani text-white flex items-center gap-2 tracking-tight drop-shadow-[0_0_10px_rgba(34,211,238,0.25)]"
              >
                <span className="event-section-bar w-1.5 h-6 sm:h-7 bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
                Upcoming events
              </h2>
              <div ref={sliderBtnsRef} className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => goToSlide(currentSlide - 1)}
                  disabled={!canGoPrev}
                  aria-label="Previous slide"
                  className="event-slider-btn flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/5 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400 transition-all duration-300"
                >
                  <FaChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm font-rajdhani text-gray-400 min-w-16 text-center">
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
              onMouseEnter={() => setAutoplayPaused(true)}
              onMouseLeave={() => setAutoplayPaused(false)}
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
                    className={`event-slide-card event-card flex-none rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-2.5 hover:scale-[1.02] group h-full ${accentBorder[event.accent]}`}
                    style={{ width: slideWidth || "100%" }}
                  >
                    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden rounded-2xl" aria-hidden>
                      <div className="absolute inset-0 w-1/2 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700 ease-out bg-linear-to-r from-transparent via-white/10 to-transparent" />
                    </div>
                    <Link to="#" className="flex h-full flex-col relative">
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
                        <h3 className="font-semibold text-white text-lg sm:text-xl font-rajdhani line-clamp-2 group-hover:text-cyan-400/90 transition-colors duration-200">
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
                    i === currentSlide
                      ? "w-6 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="max-w-6xl mx-auto mt-16 sm:mt-20 md:mt-24 text-center">
            <p className="text-gray-500 text-sm sm:text-base mb-3">
              Want to host or suggest an event?
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/60 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)] transition-all duration-300"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
