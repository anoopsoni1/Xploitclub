import React, { useState, useRef, useEffect } from "react";
import { FaHeartbeat } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { FaShield } from "react-icons/fa6";
gsap.registerPlugin(ScrollTrigger);

const HACK_WORDS = ["Future.", "Code.", "Systems.", "Networks.", "Reality."];
const SECURE_WORDS = ["World.", "Networks.", "Data.", "Systems.", "Future."];

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [hackIndex, setHackIndex] = useState(0);
  const [secureIndex, setSecureIndex] = useState(0);

  useEffect(() => {
    if (!showContent) return;
    const hackInterval = setInterval(() => {
      setHackIndex((i) => (i + 1) % HACK_WORDS.length);
    }, 2500);
    const secureInterval = setInterval(() => {
      setSecureIndex((i) => (i + 1) % SECURE_WORDS.length);
    }, 2500);
    return () => {
      clearInterval(hackInterval);
      clearInterval(secureInterval);
    };
  }, [showContent]);

  const introRef = useRef(null);
  const horizontalRef = useRef(null);
  const trackRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2.5,
      ease: "power4.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      opacity: 0,
      duration: 2.5,
      delay: -1.8,
      ease: "expo.inOut",
      onComplete: () => {
        setShowContent(true);
      },
    });
  }, []);

  useGSAP(
    () => {
      if (!horizontalRef.current || !trackRef.current) return;

      const cards = gsap.utils.toArray(".event-card");

      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 1),
          end: () => "+=" + trackRef.current.offsetWidth,
        },
      });
    },
    { dependencies: [showContent] }
  );

  useGSAP(
    () => {
      if (!showContent) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-header", { y: -24, opacity: 0, duration: 0.5 })
        .from(".hero-title", { y: 32, opacity: 0, duration: 0.6 }, "-=0.2")
        .from(".hero-desc", { y: 20, opacity: 0, duration: 0.5 }, "-=0.35")
        .from(".hero-ctas", { y: 16, opacity: 0, duration: 0.4 }, "-=0.3")
        .from(".hero-feed", { x: 48, opacity: 0, duration: 0.6 }, "-=0.5");
    },
    { dependencies: [showContent] }
  );

  useEffect(() => {
    if (showContent && videoRef.current) {
      videoRef.current.play().catch((err) => console.error("Video play failed:", err));
    }
  }, [showContent]);

  return (
    <>
      {!showContent && (
        <div
          ref={introRef}
          className="svg fixed inset-0 z-100 flex items-center justify-center bg-black w-full h-full min-h-screen"
        >
          <svg 
            viewBox="0 0 800 600" 
            preserveAspectRatio="xMidYMid slice" 
            className="w-full h-full min-h-dvh object-cover"
          >
            <defs>
              <mask id="viMask">
                <rect width="100%" height="100%" fill="black" />
                <g className="vi-mask-group">
                  <text
                    x="50%"
                    y="50%"
                    fontSize="250"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontFamily="Arial Black"
                  >
                    X
                  </text>
                </g>
              </mask>
            </defs>

            <image
              href="/Images/logo.png"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              mask="url(#viMask)"
            />
          </svg>
        </div>
      )}

      {showContent && (
        <div className="relative min-h-screen bg-black text-white overflow-x-hidden w-full">
          <div className="fixed inset-0 z-0 pointer-events-none">
            <video
              ref={videoRef}
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover min-h-full min-w-full"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            >
              <source src="/Images/cy1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/80 md:bg-black/60" aria-hidden />
          </div>
          <main className="relative z-10">
            <header className="hero-header px-4 py-3 sm:px-6 sm:py-4 md:px-10 md:py-6 flex justify-between items-center pt-[max(0.75rem,env(safe-area-inset-top))]">
              <div className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl md:text-2xl font-bold font-rajdhani">
                <FaShield className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" /> 
                <span className="truncate">XPLOIT</span>
              </div>
              <nav className="flex gap-3 sm:gap-5 md:gap-8 lg:gap-16 font-rajdhani font-semibold text-xs sm:text-sm md:text-base">
                <Link to="/Events" className="cursor-pointer hover:text-amber-400 transition-colors">EVENTS</Link>
                <Link to="/about" className="cursor-pointer hover:text-amber-400 transition-colors">ABOUT</Link>
                <Link to="/contact" className="sm:inline cursor-pointer hover:text-amber-400 transition-colors">CONTACT</Link>
              </nav>
            </header>

            <section className="min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 px-4 sm:px-6 md:px-10 lg:px-12 py-12 lg:py-0">
          
              <div className="flex-1 max-w-2xl lg:max-w-none text-left">
                <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-rajdhani leading-tight">
                  <span className="text-cyan-400 text-shadow-blue-600 text-shadow-lg">
                    Hack the <span className="inline-block min-w-[8ch] sm:min-w-[9ch] align-baseline animate-fade-in-word text-lime-400" key={hackIndex}>{HACK_WORDS[hackIndex]}</span>
                  </span>
                  <br />
                  <span className="text-cyan-400 text-shadow-blue-600 text-shadow-lg">
                    Secure the <span className="inline-block min-w-[8ch] sm:min-w-[9ch] align-baseline animate-fade-in-word text-amber-400" key={secureIndex}>{SECURE_WORDS[secureIndex]}</span>
                  </span>
                </h1>
                <p className="hero-desc mt-5 sm:mt-6 text-base sm:text-lg text-white  text-left max-w-xl">
                  XPLOIT is a student-led cybersecurity club exploring ethical hacking, CTFs, network security, and bug bounties. Learn by breaking, build by securing—join a community of builders, breakers, and defenders.
                </p>
                <div className="hero-ctas flex flex-wrap gap-4 mt-8 sm:mt-10">
                  <button
                    className="px-6 py-3 rounded-lg text-base font-semibold text-white bg-cyan-400 hover:bg-cyan-300 hover:scale-105 active:scale-100 transition-all duration-200 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                  >
                    Join Club
                  </button>
                  <Link
                    to="/Events"
                    className="px-6 py-3 rounded-lg text-base font-semibold text-cyan-400 border-2 border-cyan-400 hover:bg-cyan-400/10 hover:scale-105 active:scale-100 transition-all duration-200"
                  >
                    Explore Events
                  </Link>
                </div>
              </div>

              <div className="hero-feed shrink-0 w-full lg:max-w-md">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-semibold text-lime-400 font-rajdhani tracking-wide">
                    LIVE CYBER FEED
                  </span>
                  <FaHeartbeat className="w-5 h-5 text-lime-400 shrink-0" />
                </div>
                <div className="rounded-lg border border-gray-600/80 bg-black/60 backdrop-blur-sm p-4 min-h-55 max-h-70 overflow-y-auto font-mono text-sm">
                  <div className="text-white/90">00, 443, 2000 ... open</div>
                  <div className="text-gray-400 mt-1">&gt; CTF ::</div>
                  <div className="text-lime-400 mt-0.5">flag&#123;knowledge_is_power&#125;</div>
                  <div className="text-gray-400 mt-1">&gt; NET :: handshake</div>
                  <div className="text-white/90 mt-0.5">established :: TLS 1.3</div>
                  <div className="text-gray-400 mt-1">&gt; BUG :: bounty target</div>
                  <div className="text-white/90 mt-0.5">queued ...</div>
                </div>
                <div className="flex items-center gap-2 mt-3 text-gray-300 text-sm">
                  <span className="w-2 h-2 rounded-full bg-lime-400 shrink-0" />
                  <span>Members online: 42</span>
                </div>
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
}
