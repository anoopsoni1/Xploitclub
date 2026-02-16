import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FaShield } from "react-icons/fa6";
import { Link } from "react-router-dom";
import SplitText from "./Splittext";
import { FaLongArrowAltRight, FaTimes } from "react-icons/fa";
import { LogoLoop } from "./Slider";

gsap.registerPlugin(ScrollTrigger);

const SPONSOR_LOGO_ITEMS = [
  { src: "https://logo.clearbit.com/google.com", alt: "Sponsor", href: "#" },
  { src: "https://logo.clearbit.com/github.com", alt: "Sponsor", href: "#" },
  { src: "https://logo.clearbit.com/microsoft.com", alt: "Sponsor", href: "#" },
  { src: "https://logo.clearbit.com/aws.amazon.com", alt: "Sponsor", href: "#" },
  { src: "https://logo.clearbit.com/cloudflare.com", alt: "Sponsor", href: "#" },
  { src: "https://logo.clearbit.com/ibm.com", alt: "Sponsor", href: "#" },
];

const CORE_TEAM = [
  { name: "Vedpal Singh", role: "Club Head", image: "./Images/vedpal.pg" },
  { name: "Hemant singh", role: "Technical Head", image: "./Images/hemant.jpg" },
  { name: "Core Lead 3", role: "Events Head", image: "https://i.pravatar.cc/300?img=3" },
  { name: "Core Lead 4", role: "Outreach", image: "https://i.pravatar.cc/300?img=4" },
];
const OTHER_TEAM = [
  { name: "Member 1", role: "CTF Lead", image: "https://i.pravatar.cc/300?img=5" },
  { name: "Member 2", role: "Workshops", image: "https://i.pravatar.cc/300?img=6" },
  { name: "Member 3", role: "Design", image: "https://i.pravatar.cc/300?img=7" },
  { name: "Member 4", role: "Content", image: "https://i.pravatar.cc/300?img=8" },
  { name: "Member 5", role: "Logistics", image: "https://i.pravatar.cc/300?img=9" },
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
      .fromTo(".about-hero-line", { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: "power2.inOut" }, "-=0.45")
      .fromTo(".about-hero-desc", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.35")
      .fromTo(".about-hero-cta", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, "-=0.3");
  }, []);

  useGSAP(
    () => {
      if (!showTeamSections) return;
      const section = teamSectionsRef.current;
      if (!section) return;
      const coreCards = section.querySelectorAll(".about-team-card-core");
      const otherCards = section.querySelectorAll(".about-team-card-other");
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(section, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.5 })
        .fromTo(".about-team-heading", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.3")
        .fromTo(".about-team-close", { opacity: 0 }, { opacity: 1, duration: 0.3 }, "-=0.35")
        .fromTo(".about-team-core-title", { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.4 }, "-=0.2")
        .fromTo(coreCards, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.07 }, "-=0.2")
        .fromTo(".about-team-other-title", { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.4 }, "-=0.15")
        .fromTo(otherCards, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.45, stagger: 0.07 }, "-=0.2");
    },
    { dependencies: [showTeamSections] }
  );

  useGSAP(() => {
    const section = sponsorsRef.current;
    if (!section) return;
    const title = section.querySelector(".about-sponsors-title");
    const line = section.querySelector(".about-sponsors-line");
    const loopWrap = section.querySelector(".about-sponsors-logoloop-wrap");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none none",
      },
      defaults: { ease: "power3.out" },
    });
    tl.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 0.3 })
      .fromTo(title, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2")
      .fromTo(line, { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: "power2.inOut" }, "-=0.35")
      .fromTo(loopWrap, { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.25");
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden w-full">
      <div className="fixed inset-0 z-0 pointer-events-none bg-black" aria-hidden />
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-linear-to-b from-transparent via-cyan-950/10 to-amber-950/15"
        aria-hidden
      />

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

        <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10">
          <div ref={heroRef} className="text-center max-w-5xl mx-auto w-full px-2 sm:px-4">
            <SplitText
              text="Welcome to XPLOIT, the Cyber Security Club of IIIT Bhopal"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center font-rajdhani leading-tight"
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
            <div className="about-hero-line mt-3 sm:mt-4 h-1 w-16 sm:w-20 bg-linear-to-r from-amber-400 to-cyan-400 rounded-full origin-left mx-auto" />

            <p className="about-hero-desc text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto font-medium sm:font-semibold text-center py-4 sm:py-6 md:py-8 text-gray-300">
              At XPLOIT, we organize CTFs, Ethical hacking workshops, Security labs and Expert-led Tech sessions that empower students to explore real-world cyber threats and defense strategies.
            </p>

            <div className="about-hero-cta flex justify-center mt-6 sm:mt-8 md:mt-10">
              <button
                onClick={scrollToTeam}
                className="bg-amber-400 text-black px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3 rounded-xl text-sm sm:text-base font-semibold hover:bg-amber-300 hover:scale-105 active:scale-100 transition-all duration-200 flex items-center gap-2 shadow-[0_0_24px_rgba(245,158,11,0.2)]"
              >
                TEAM <FaLongArrowAltRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {showTeamSections && (
          <section
            ref={teamSectionsRef}
            className="about-team-section relative z-10 pt-8 sm:pt-12 md:pt-16 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-10 border-t border-white/10"
          >
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-10 md:mb-12">
                <div className="about-team-heading">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-rajdhani text-white">
                    Our <span className="text-amber-400">Team</span>
                  </h2>
                  <div className="mt-2 h-1 w-16 sm:w-20 bg-linear-to-r from-amber-400 to-cyan-400 rounded-full" />
                </div>
                <button
                  onClick={() => setShowTeamSections(false)}
                  className="about-team-close flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 text-sm sm:text-base text-gray-300 hover:text-white hover:border-amber-400/50 hover:bg-white/5 transition-all duration-200 self-start sm:self-auto"
                  aria-label="Close team sections"
                >
                  <FaTimes className="w-4 h-4 shrink-0" /> Close
                </button>
              </div>

              <div className="mb-12 sm:mb-16 md:mb-20">
                <h3 className="about-team-core-title text-xl sm:text-2xl md:text-3xl font-semibold font-rajdhani text-cyan-400 mb-4 sm:mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 sm:h-7 bg-cyan-400 rounded-full" />
                  Core Team
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                  {CORE_TEAM.map((member, i) => (
                    <div
                      key={i}
                      className="about-team-card-core group rounded-2xl border border-white/10 bg-white/6 backdrop-blur-md p-4 sm:p-5 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)] transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <div className="aspect-square w-full max-w-35 mx-auto sm:max-w-none rounded-xl overflow-hidden bg-white/10 mb-3 sm:mb-4 ring-2 ring-white/10 group-hover:ring-cyan-400/30 transition-all duration-300">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h4 className="font-semibold text-white text-base sm:text-lg truncate">{member.name}</h4>
                      <p className="text-cyan-400/90 text-sm sm:text-base truncate">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="about-team-other-title text-xl sm:text-2xl md:text-3xl font-semibold font-rajdhani text-amber-400/90 mb-4 sm:mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-6 sm:h-7 bg-amber-400/80 rounded-full" />
                  Other Team
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                  {OTHER_TEAM.map((member, i) => (
                    <div
                      key={i}
                      className="about-team-card-other group rounded-2xl border border-white/10 bg-white/6 backdrop-blur-md p-4 sm:p-5 hover:border-amber-400/40 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(245,158,11,0.12)] transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <div className="aspect-square w-full max-w-35 mx-auto sm:max-w-none rounded-xl overflow-hidden bg-white/10 mb-3 sm:mb-4 ring-2 ring-white/10 group-hover:ring-amber-400/30 transition-all duration-300">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h4 className="font-semibold text-white text-base sm:text-lg truncate">{member.name}</h4>
                      <p className="text-amber-400/90 text-sm sm:text-base truncate">{member.role}</p>
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
          className="about-sponsors-section relative z-10 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-20 sm:pb-24 md:pb-28 lg:pb-32 px-4 sm:px-6 md:px-8 lg:px-10 border-t border-white/10 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none aria-hidden">
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl -translate-x-1/2" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96  rounded-full blur-3xl translate-x-1/2" />
          </div>
          <div className="mx-auto relative">
            <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
              <h2 className="about-sponsors-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-rajdhani text-white">
                Our <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-cyan-400">Sponsors</span>
              </h2>
              <div className="about-sponsors-line mt-2 sm:mt-3 h-1 w-20 sm:w-24 md:w-28 bg-linear-to-r from-amber-400 to-cyan-400 rounded-full origin-center mx-auto" />
              <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-gray-400 max-w-xl mx-auto">
                Powered by industry leaders who believe in the future of cybersecurity.
              </p>
            </div>
            <div className="about-sponsors-logoloop-wrap min-h-[120px] sm:min-h-[140px] md:min-h-[160px]">
              <LogoLoop
                logos={SPONSOR_LOGO_ITEMS}
                speed={80}
                direction="left"
                logoHeight={48}
                gap={48}
                pauseOnHover={false}
                fadeOut
                fadeOutColor="#000000"
                scaleOnHover
                ariaLabel="Our sponsors"
                className="py-2 w-full "
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;