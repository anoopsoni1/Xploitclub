import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { FaShield } from "react-icons/fa6";
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

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

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(headerRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
      .fromTo(heroRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
      .fromTo(".event-hero-line", { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: "power2.inOut" }, "-=0.4");
  }, []);

  useGSAP(
    () => {
      const cards = cardsRef.current?.querySelectorAll(".event-card");
      if (!cards?.length) return;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { dependencies: [] }
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
            <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
              CTFs, workshops, and tech sessions to level up your security skills. Join us at IIIT Bhopal.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-sm font-medium text-cyan-400">
                {EVENTS_DATA.length} upcoming
              </span>
            </div>
          </div>
        </section>

        {/* Event cards */}
        <section ref={cardsRef} className="px-4 sm:px-6 md:px-8 lg:px-10 pb-20 sm:pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto">
            <h2 className="event-card text-xl sm:text-2xl font-semibold font-rajdhani text-white/90 mb-6 sm:mb-8 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-cyan-400 rounded-full" />
              Upcoming events
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {EVENTS_DATA.map((event) => (
                <article
                  key={event.id}
                  className={`event-card group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] ${accentBorder[event.accent]}`}
                >
                  <Link to="#" className="block">
                    <div className="relative aspect-video overflow-hidden bg-white/10">
                      <img
                        src={event.image}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
                    <div className="p-4 sm:p-5 md:p-6">
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
                      <p className="mt-3 text-gray-400 text-sm sm:text-base line-clamp-2 leading-relaxed">
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

          {/* CTA */}
          <div className="max-w-6xl mx-auto mt-16 sm:mt-20 md:mt-24 text-center">
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
