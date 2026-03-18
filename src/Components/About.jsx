import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaShield } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SplitText from "./Splittext";
import { FaLongArrowAltRight, FaTimes } from "react-icons/fa";
import { LogoLoop } from "./Slider";
import ThreeBackground from "./ThreeBackground";

gsap.registerPlugin(ScrollTrigger);

/** Team photos from Drive download folder (filename includes member name) */
const TEAM_PHOTO_DIR = "/Images/drive-download-20260318T080635Z-3-001";
const teamPhoto = (filename) => `${TEAM_PHOTO_DIR}/${encodeURIComponent(filename)}`;
const PLACEHOLDER = "https://i.pravatar.cc/300?img=";

const SPONSOR_LOGO_ITEMS = [
  {
    src: "/Images/sponsors/xploit_sponsors/barbeque-nation.png",
    alt: "Barbeque Nation",
    href: "https://www.barbequenation.com/",
  },
  {
    src: "/Images/sponsors/xploit_sponsors/40f0503a-b19f-47fb-8646-d969f46d3095.png",
    alt: "Altered Security",
    href: "https://www.alteredsecurity.com/",
  },
  {
    src: "/Images/sponsors/xploit_sponsors/Screenshot%202026-03-02%20010955.png",
    alt: "NDMSK Technology Pvt. Ltd",
    href: "#",
  },
  {
    src: "/Images/sponsors/xploit_sponsors/Screenshot%202026-03-02%20011013.png",
    alt: "Sugam Informatics Society",
    href: "#",
  },
  {
    src: "/Images/sponsors/xploit_sponsors/Screenshot%202026-03-02%20011107.png",
    alt: "CampusTales",
    href: "#",
  },
  {
    src: "/Images/sponsors/xploit_sponsors/Screenshot%202026-03-02%20011122.png",
    alt: "The Dopamine Store",
    href: "#",
  },
  {
    src: "/Images/sponsors/xploit_sponsors/f53b0251-ca6a-494e-bcd1-27e1d569d4ed.png",
    alt: "iSEA Phase III",
    href: "#",
  },
  {
    src: "/Images/sponsors/xploit_sponsors/3933443c-38cb-438a-abad-f4d5f6201e06.png",
    alt: "MANIT CSE Department",
    href: "https://www.manit.ac.in/",
  },
];

const CORE_TEAM = [
  { name: "Darsh Dave", role: "Coordinator", image: teamPhoto("IMG_1417 - DARSH DAVE.jpeg") },
  { name: "Bhushan Wayal", role: "Co-Coordinator", image: `${PLACEHOLDER}12` },
  { name: "Saurav Sagar", role: "Co-Coordinator", image: `${PLACEHOLDER}13` },
];
const OTHER_TEAM = [
  { name: "Rohit Kumar Dhaka", role: "Event Lead", image: `${PLACEHOLDER}14` },
  { name: "Shashank", role: "PR & Outreach Lead", image: teamPhoto("IMG-20260226-WA0019 - Shashank.jpg") },
  { name: "Aayush Sharma", role: "Social Media Lead", image: teamPhoto("IMG_20251028_115206 - Aayush Sharma.jpg") },
  { name: "Shreyash Jadhav", role: "Design Lead", image: `${PLACEHOLDER}17` },
  { name: "Abhay Jadon", role: "Web Development Lead", image: `${PLACEHOLDER}18` },
  { name: "Kapil Meena", role: "Web Security Lead", image: `${PLACEHOLDER}19` },
  { name: "Jasvant Singh Dhaked", role: "Bug Bounty Lead", image: `${PLACEHOLDER}20` },
  { name: "Anirudha Ingle", role: "Esports & Gaming Lead", image: `${PLACEHOLDER}21` },
  {
    name: "Prakhar Dwivedi",
    role: "Offensive Security Lead",
    image: `${PLACEHOLDER}22`,
  },
  {
    name: "Chirag Prasad",
    role: "Flagmaster",
    image: teamPhoto("WhatsApp Image 2026-03-03 at 6.11.44 PM - Chirag Prasad.jpeg"),
  },
];

const ASSISTANT_TEAM = [
  { name: "Rhit Shukla", role: "Assist. Offensive Security Lead", image: teamPhoto("WhatsApp Image 2026-02-12 at 21.48.45.jpeg") },
  { name: "Aryan Singh", role: "Assist. Offensive Security Lead", image: `${PLACEHOLDER}25` },
  { name: "Vala Kautak", role: "Assist. Bug Bounty Lead", image: `${PLACEHOLDER}26` },
  { name: "Karan Misra", role: "Assistant Web Security Lead", image: teamPhoto("me_xploit - Karan Mishra.jpg") },
  { name: "Hirdesh Kumar", role: "Assistant Design Lead", image: teamPhoto("IMG_20251101_171409 - Hirdesh Kumar.jpg") },
  {
    name: "Ashish Jangra",
    role: "Assistant Design Lead",
    image: teamPhoto("IMG-20260228-WA0270(1) - Ashish Jangra.jpg"),
  },
  { name: "Asbaa Thakur", role: "Assist. Defensive Security Lead", image: teamPhoto("GDSC_FORMAL_SQUARE - Asbaa Thakur.jpg") },
  {
    name: "Vishvas Patil",
    role: "Assist. Flag Master",
    image: teamPhoto("Picsart_26-02-28_19-35-41-722 - Vishvas Patil.jpg"),
  },
  { name: "Anoop Soni", role: "Assist. Web Development Lead", image: `${PLACEHOLDER}32` },
  { name: "Abhishek Yadav", role: "Assist. Event Lead", image: teamPhoto("IMG_20250419_215922 - ABHISHEK YADAV.jpg") },
  {
    name: "Nikilesh Dasaratha",
    role: "Assist. Event Lead",
    image: teamPhoto("IMG-20251109-WA0038 - Nikilesh Dasaratha.jpg"),
  },
  { name: "Dhruv Nihate", role: "Assist. Social Media Lead", image: teamPhoto("IMG_20260104_111353 - _ PREDATOR.jpg") },
  { name: "Sneha Verma", role: "Assist. Social Media Lead", image: teamPhoto("photo - Sneha Verma.jpg") },
  { name: "Pranav Polawar", role: "Assist. PR & Outreach Lead", image: teamPhoto("IMG_20260304_212729 - Pranav Polawar.jpg") },
  { name: "Ayush Kumar", role: "Assist. PR & Outreach Lead", image: `${PLACEHOLDER}38` },
  {
    name: "Abhinay Choudhary",
    role: "Assist. Gaming & Esports Lead",
    image: teamPhoto("IMG-20260102-WA0030 - Abhinay Choudhari.jpg"),
  },
  { name: "Lakshay Chahar", role: "Assist. Gaming & Esports Lead", image: `${PLACEHOLDER}40` },
];

const About = () => {
  const teamSectionsRef = useRef(null);
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const sponsorsRef = useRef(null);
  const [showTeamSections, setShowTeamSections] = useState(false);

  const scrollToTeam = () => {
    setShowTeamSections(true);
    setTimeout(() => {
      teamSectionsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(headerRef.current, { y: -24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
      .fromTo(heroRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, "-=0.3")
      .fromTo(".about-hero-line-amber", { scaleX: 0 }, { scaleX: 1, duration: 0.4, ease: "power2.out" }, "-=0.4")
      .fromTo(".about-hero-line-cyan", { scaleX: 0 }, { scaleX: 1, duration: 0.55, ease: "power2.out" }, "-=0.3")
      .fromTo(".about-hero-desc", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.35")
      .fromTo(".about-hero-cta", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, "-=0.3")
      .fromTo(".about-hero-scroll-hint", { opacity: 0, y: 8 }, { opacity: 0.7, y: 0, duration: 0.5, delay: 0.4 }, "-=0.2");
  }, []);

  useGSAP(
    () => {
      if (!showTeamSections) return;
      const section = teamSectionsRef.current;
      if (!section) return;
      const coreCards = section.querySelectorAll(".about-team-card-core");
      const otherCards = section.querySelectorAll(".about-team-card-other");
      const assistantCards = section.querySelectorAll(".about-team-card-assistant");
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(section, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(".about-team-heading", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.3")
        .fromTo(".about-team-underline-amber", { scaleX: 0 }, { scaleX: 1, duration: 0.4, ease: "power2.out" }, "-=0.2")
        .fromTo(".about-team-underline-cyan", { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: "power2.out" }, "-=0.35")
        .fromTo(".about-team-close", { opacity: 0, x: 10 }, { opacity: 1, x: 0, duration: 0.35 }, "-=0.4")
        .fromTo(".about-team-core-title", { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.4 }, "-=0.25")
        .fromTo(".about-team-title-bar", { scaleY: 0, opacity: 0 }, { scaleY: 1, opacity: 1, duration: 0.3 }, "-=0.35")
        .fromTo(coreCards, { opacity: 0, y: 28, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: "back.out(1.2)" }, "-=0.2")
        .fromTo(".about-team-other-title", { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.4 }, "-=0.15")
        .fromTo(otherCards, { opacity: 0, y: 28, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.06, ease: "back.out(1.2)" }, "-=0.2")
        .fromTo(".about-team-assistant-title", { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.4 }, "-=0.15")
        .fromTo(assistantCards, { opacity: 0, y: 28, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.04, ease: "back.out(1.2)" }, "-=0.2");

      // Subtle scroll parallax on team section content
      const inner = section.querySelector(".max-w-6xl");
      if (inner) {
        gsap.fromTo(
          inner,
          { yPercent: 2 },
          {
            yPercent: -2,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }
    },
    { dependencies: [showTeamSections] }
  );

  useGSAP(() => {
    const section = sponsorsRef.current;
    if (!section) return;
    const title = section.querySelector(".about-sponsors-title");
    const lineAmber = section.querySelector(".about-sponsors-line-amber");
    const lineCyan = section.querySelector(".about-sponsors-line-cyan");
    const subtitle = section.querySelector(".about-sponsors-subtitle");
    const loopWrap = section.querySelector(".about-sponsors-logoloop-wrap");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 82%",
        end: "top 28%",
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });
    tl.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 0.25 })
      .fromTo(title, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, "-=0.15")
      .fromTo(lineAmber, { scaleX: 0 }, { scaleX: 1, duration: 0.45, ease: "power2.out" }, "-=0.4")
      .fromTo(lineCyan, { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: "power2.out" }, "-=0.35")
      .fromTo(subtitle, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3")
      .fromTo(loopWrap, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, ease: "back.out(1.1)" }, "-=0.25");
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-950 text-white overflow-x-hidden w-full">
      <div className="fixed inset-0 z-0 pointer-events-none bg-neutral-950" aria-hidden />
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-linear-to-b from-transparent via-cyan-950/20 to-amber-950/25"
        aria-hidden
      />
      <ThreeBackground className="z-0" opacity={1} />

      <main className="relative z-10 min-h-screen">
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
            <Link to="/Events" className="cursor-pointer hover:text-amber-400 transition-colors duration-200">
              EVENTS
            </Link>
            <span className="text-amber-400">ABOUT</span>
            <Link to="/contact" className="sm:inline cursor-pointer hover:text-amber-400 transition-colors duration-200">
              CONTACT
            </Link>
          </nav>
        </header>

        <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 relative">
          {/* Hero background orbs */}
          <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center" aria-hidden>
            <div className="w-[min(90vw,600px)] h-[min(60vw,400px)] rounded-full bg-amber-500/10 blur-[80px]" />
            <div className="absolute w-[min(70vw,400px)] h-[min(50vw,320px)] rounded-full bg-cyan-500/10 blur-[60px] -translate-y-8" />
          </div>

          <div ref={heroRef} className="text-center max-w-5xl mx-auto w-full px-2 sm:px-4 relative z-10">
            <SplitText
              text="Welcome to XPLOIT, the Cyber Security Club of IIIT Bhopal"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center font-rajdhani leading-tight drop-shadow-[0_0_30px_rgba(34,211,238,0.15)]"
              delay={20}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              showCallback
            />
            <div className="mt-3 sm:mt-4 flex justify-center gap-1.5">
              <div className="about-hero-line-amber h-1 w-10 sm:w-12 bg-amber-400 rounded-full origin-center" />
              <div className="about-hero-line-cyan h-1 w-14 sm:w-20 bg-cyan-400 rounded-full origin-center" />
            </div>

            <p className="about-hero-desc text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto font-medium sm:font-semibold text-center py-4 sm:py-6 md:py-8 text-gray-300">
              At XPLOIT, we organize CTFs, Ethical hacking workshops, Security labs and Expert-led Tech sessions that empower students to explore real-world cyber threats and defense strategies.
            </p>

            <div className="about-hero-cta flex flex-col items-center gap-6 mt-6 sm:mt-8 md:mt-10">
              <button
                onClick={scrollToTeam}
                className="about-hero-team-btn bg-amber-400 text-black px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 rounded-xl text-sm sm:text-base font-bold hover:bg-amber-300 hover:scale-105 active:scale-100 transition-all duration-300 flex items-center gap-2 shadow-[0_0_28px_rgba(245,158,11,0.35)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] border-2 border-amber-300/30 hover:border-amber-200/50"
              >
                TEAM <FaLongArrowAltRight className="w-4 h-4 shrink-0" />
              </button>
              <p className="about-hero-scroll-hint text-xs sm:text-sm text-gray-500 flex items-center gap-1.5">
                <span>Scroll to explore</span>
                <span className="inline-block animate-bounce">↓</span>
              </p>
            </div>
          </div>
        </div>

        {showTeamSections && (
          <section
            ref={teamSectionsRef}
            className="about-team-section relative z-10 pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-10 border-t border-white/10 overflow-hidden"
          >
            {/* Subtle gradient orbs behind team for depth */}
            <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
              <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl translate-x-1/3" />
              <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-amber-500/6 rounded-full blur-3xl -translate-x-1/3" />
            </div>

            <div className="max-w-6xl mx-auto relative">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-10 md:mb-12">
                <div className="about-team-heading">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-rajdhani text-white tracking-tight">
                    Our{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-amber-300 to-cyan-400">
                      Team
                    </span>
                  </h2>
                  <div className="mt-2 flex gap-1 items-center">
                    <div className="about-team-underline-amber h-1 w-10 sm:w-12 bg-amber-400 rounded-full origin-left" />
                    <div className="about-team-underline-cyan h-1 w-12 sm:w-16 bg-cyan-400 rounded-full origin-left" />
                  </div>
                </div>
                <button
                  onClick={() => setShowTeamSections(false)}
                  className="about-team-close flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 text-sm sm:text-base text-gray-300 hover:text-white hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 self-start sm:self-auto hover:scale-105 active:scale-100"
                  aria-label="Close team sections"
                >
                  <FaTimes className="w-4 h-4 shrink-0" /> Close
                </button>
              </div>

              <div className="mb-12 sm:mb-16 md:mb-20">
                <h3 className="about-team-core-title text-xl sm:text-2xl md:text-3xl font-semibold font-rajdhani text-cyan-400 mb-4 sm:mb-6 flex items-center gap-2 tracking-tight">
                  <span className="about-team-title-bar w-1.5 h-6 sm:h-7 bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
                  <span className="drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">Core Team</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 perspective-1000">
                  {CORE_TEAM.map((member, i) => (
                    <div
                      key={i}
                      className="about-team-card-core group relative rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-md p-4 sm:p-5 transition-all duration-300 ease-out hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(34,211,238,0.18)] hover:-translate-y-1.5 hover:scale-[1.02] overflow-hidden"
                    >
                      <div className="about-team-card-shine absolute inset-0 pointer-events-none bg-linear-to-r from-transparent via-white/10 to-transparent w-1/2 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700 ease-out" aria-hidden />
                      <div className="aspect-square w-full max-w-35 mx-auto sm:max-w-none rounded-xl overflow-hidden bg-white/10 mb-3 sm:mb-4 ring-2 ring-white/10 group-hover:ring-cyan-400/40 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-all duration-400">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h4 className="font-semibold text-white text-base sm:text-lg truncate group-hover:text-cyan-100 transition-colors">{member.name}</h4>
                      <p className="text-cyan-400/90 text-sm sm:text-base truncate">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="about-team-other-title text-xl sm:text-2xl md:text-3xl font-semibold font-rajdhani text-amber-400 mb-4 sm:mb-6 flex items-center gap-2 tracking-tight">
                  <span className="about-team-title-bar w-1.5 h-6 sm:h-7 bg-amber-400 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.6)]" />
                  <span className="drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">Leads</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 perspective-1000">
                  {OTHER_TEAM.map((member, i) => (
                    <div
                      key={i}
                      className="about-team-card-other group relative rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-md p-4 sm:p-5 transition-all duration-300 ease-out hover:border-amber-400/50 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(245,158,11,0.18)] hover:-translate-y-1.5 hover:scale-[1.02] overflow-hidden"
                    >
                      <div className="about-team-card-shine absolute inset-0 pointer-events-none bg-linear-to-r from-transparent via-white/10 to-transparent w-1/2 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700 ease-out" aria-hidden />
                      <div className="aspect-square w-full max-w-35 mx-auto sm:max-w-none rounded-xl overflow-hidden bg-white/10 mb-3 sm:mb-4 ring-2 ring-white/10 group-hover:ring-amber-400/40 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all duration-400">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h4 className="font-semibold text-white text-base sm:text-lg truncate group-hover:text-amber-100 transition-colors">{member.name}</h4>
                      <p className="text-amber-400/90 text-sm sm:text-base truncate">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12 sm:mt-16 md:mt-20">
                <h3 className="about-team-assistant-title text-xl sm:text-2xl md:text-3xl font-semibold font-rajdhani text-lime-400 mb-4 sm:mb-6 flex items-center gap-2 tracking-tight">
                  <span className="about-team-title-bar w-1.5 h-6 sm:h-7 bg-lime-400 rounded-full shadow-[0_0_12px_rgba(132,204,22,0.6)]" />
                  <span className="drop-shadow-[0_0_8px_rgba(132,204,22,0.3)]">Assistant Leads</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 perspective-1000">
                  {ASSISTANT_TEAM.map((member, i) => (
                    <div
                      key={i}
                      className="about-team-card-assistant group relative rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-md p-4 sm:p-5 transition-all duration-300 ease-out hover:border-lime-400/50 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(132,204,22,0.18)] hover:-translate-y-1.5 hover:scale-[1.02] overflow-hidden"
                    >
                      <div className="about-team-card-shine absolute inset-0 pointer-events-none bg-linear-to-r from-transparent via-white/10 to-transparent w-1/2 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700 ease-out" aria-hidden />
                      <div className="aspect-square w-full max-w-35 mx-auto sm:max-w-none rounded-xl overflow-hidden bg-white/10 mb-3 sm:mb-4 ring-2 ring-white/10 group-hover:ring-lime-400/40 group-hover:shadow-[0_0_20px_rgba(132,204,22,0.25)] transition-all duration-400">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <h4 className="font-semibold text-white text-base sm:text-lg truncate group-hover:text-lime-100 transition-colors">{member.name}</h4>
                      <p className="text-lime-400/90 text-sm sm:text-base truncate">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        {/* Sponsors section */}
        <section
          ref={sponsorsRef}
          className="about-sponsors-section relative z-10 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-20 sm:pb-24 md:pb-28 lg:pb-32 px-0 border-t border-white/10 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none aria-hidden">
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/8 rounded-full blur-3xl -translate-x-1/2" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-amber-500/6 rounded-full blur-3xl translate-x-1/2" />
          </div>
          <div className="mx-auto relative w-full">
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4 sm:px-6 md:px-8 lg:px-10">
              <h2 className="about-sponsors-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-rajdhani text-white tracking-tight">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 via-amber-300 to-cyan-400">
                  Sponsors
                </span>
              </h2>
              <div className="mt-2 sm:mt-3 flex justify-center gap-1.5">
                <div className="about-sponsors-line-amber h-1 w-10 sm:w-12 bg-amber-400 rounded-full origin-center" />
                <div className="about-sponsors-line-cyan h-1 w-14 sm:w-20 bg-cyan-400 rounded-full origin-center" />
              </div>
              <p className="about-sponsors-subtitle mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
                Powered by industry leaders who believe in the future of cybersecurity.
              </p>
            </div>
            <div className="about-sponsors-logoloop-wrap w-full rounded-none sm:rounded-2xl border-y sm:border border-white/10 bg-white/4 backdrop-blur-sm py-6 sm:py-9 px-0 sm:px-6 min-h-[120px] sm:min-h-[140px] md:min-h-[170px] shadow-[0_0_40px_rgba(34,211,238,0.06)] hover:border-cyan-400/20 hover:shadow-[0_0_55px_rgba(34,211,238,0.12)] transition-all duration-500">
              <LogoLoop
                logos={SPONSOR_LOGO_ITEMS}
                speed={80}
                direction="left"
                logoHeight={72}
                gap={64}
                pauseOnHover
                fadeOut
                fadeOutColor="#000000"
                scaleOnHover
                ariaLabel="Our sponsors"
                className="py-2 w-full"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;