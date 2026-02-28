import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { FaShield } from "react-icons/fa6";
import ChromaGrid from "./ChromaGrid";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
    {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
];

const Team = () => {
  const headerRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroLineRef = useRef(null);
  const heroParasRef = useRef(null);
  const teamSectionRef = useRef(null);
  const teamTitleRef = useRef(null);
  const teamSubRef = useRef(null);
  const gridWrapRef = useRef(null);
  const orbsRef = useRef(null);

  useGSAP(() => {
    const orbs = orbsRef.current?.children;
    if (orbs?.length) {
      gsap.to(orbs, {
        y: () => gsap.utils.random(-25, 25),
        x: () => gsap.utils.random(-20, 20),
        duration: () => gsap.utils.random(5, 9),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.6 },
      });
    }
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(headerRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
      .fromTo(heroTitleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.3")
      .fromTo(heroLineRef.current, { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: "power2.inOut" }, "-=0.45")
      .fromTo(heroParasRef.current?.children || [], { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.12 }, "-=0.3");
  }, []);

  useGSAP(() => {
    const section = teamSectionRef.current;
    const title = teamTitleRef.current;
    const sub = teamSubRef.current;
    const grid = gridWrapRef.current;
    if (!section || !title || !sub || !grid) return;
    gsap.fromTo(
      title,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 78%", toggleActions: "play none none none" },
      }
    );
    gsap.fromTo(
      sub,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.15,
        scrollTrigger: { trigger: section, start: "top 78%", toggleActions: "play none none none" },
      }
    );
    gsap.fromTo(
      grid,
      { scale: 0.96, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.1)",
        scrollTrigger: { trigger: grid, start: "top 88%", toggleActions: "play none none none" },
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-[#050505] to-black text-white overflow-x-hidden relative">
      <div ref={orbsRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
        <div className="absolute top-[20%] right-[15%] w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[25%] left-[10%] w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-amber-500/8 blur-3xl" />
      </div>

      {/* NAVBAR */}
      <header
        ref={headerRef}
        className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10"
      >
        <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 py-4 sm:py-5">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-white hover:text-cyan-400 transition-colors duration-200"
          >
            <FaShield className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <span className="tracking-wide">XPLOIT</span>
          </Link>

          <nav className="flex gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm tracking-widest">
            <Link to="/Events" className="hover:text-cyan-400 transition-colors duration-200">EVENTS</Link>
            <Link to="/about" className="relative text-cyan-400">
              ABOUT
              <span className="absolute -bottom-2 left-0 w-full h-px bg-cyan-400" />
            </Link>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors duration-200">CONTACT</Link>
          </nav>
        </div>
      </header>

      {/* HERO / ABOUT */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 pt-12 sm:pt-16 md:pt-24 max-w-6xl mx-auto">
        <h1
          ref={heroTitleRef}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
        >
          Welcome to{" "}
          <span className="text-cyan-400">Xploit</span>, the pioneering coding club
          at <span className="text-cyan-400">IIIT Bhopal</span>.
        </h1>

        <div ref={heroLineRef} className="w-16 sm:w-24 h-1 bg-cyan-400 mt-6 sm:mt-8 mb-8 sm:mb-10 rounded-full origin-left" />

        <div ref={heroParasRef} className="space-y-6 sm:space-y-8">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/90">
            Founded in <span className="text-cyan-400">2018</span>, Xploit exists to
            nurture a thriving coding culture among students through hands-on
            learning and collaboration.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/80">
            We host{" "}
            <span className="text-cyan-400">
              coding contests, hackathons, and expert-led tech sessions
            </span>{" "}
            to help students sharpen skills, learn faster, and build meaningful
            connections.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/80">
            Join a supportive community where curiosity is celebrated and growth
            is inevitable.
          </p>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section ref={teamSectionRef} className="mt-20 sm:mt-24 md:mt-32 px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2
            ref={teamTitleRef}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold"
          >
            Meet the <span className="text-cyan-400">Team</span>
          </h2>
          <p ref={teamSubRef} className="mt-3 sm:mt-4 text-white/70 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
            The passionate minds driving Xploit forward.
          </p>
        </div>

        <div ref={gridWrapRef} className="relative h-full min-h-[60vh] sm:min-h-[70vh]">
          <ChromaGrid
            items={items}
            radius={320}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </section>

      {/* FOOTER SPACER */}
      <div className="h-24 sm:h-32" />
    </div>
  );
};

export default Team;
