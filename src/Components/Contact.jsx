import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { FaShield } from "react-icons/fa6";
import { FaEnvelope, FaMapMarkerAlt, FaDiscord, FaPaperPlane, FaLinkedin, FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const CONTACT_ITEMS = [
  {
    icon: FaMapMarkerAlt,
    label: "Visit us",
    value: "IIIT Bhopal, Kothri Kalan, Bhopal",
    accent: "cyan",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "xploit@iiitb.ac.in",
    accent: "amber",
  },
  {
    icon: FaDiscord,
    label: "Discord",
    value: "Join our server",
    accent: "lime",
  },
];

export default function Contact() {
  const headerRef = useRef(null);
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(headerRef.current, { y: -24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
      .fromTo(heroRef.current, { y: 48, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, "-=0.3")
      .fromTo(".contact-hero-line", { scaleX: 0 }, { scaleX: 1, duration: 0.55, ease: "power2.inOut" }, "-=0.45")
      .fromTo(".contact-hero-badge", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4 }, "-=0.3");
  }, []);

  useGSAP(
    () => {
      const formEl = formRef.current;
      const infoEl = infoRef.current;
      if (!formEl || !infoEl) return;
      const inputs = formEl.querySelectorAll(".contact-input");
      const cards = infoEl.querySelectorAll(".contact-info-card");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });
      tl.fromTo(formEl, { x: -32, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 })
        .fromTo(inputs, { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.35, stagger: 0.06 }, "-=0.35")
        .fromTo(cards, { x: 32, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, stagger: 0.08 }, "-=0.5");
    },
    { dependencies: [] }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // placeholder
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none bg-black" aria-hidden />
      <div
        className="fixed inset-0 z-0 pointer-events-none bg-linear-to-b from-transparent via-amber-950/5 to-cyan-950/20"
        aria-hidden
      />
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
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
            <Link to="/Events" className="cursor-pointer hover:text-amber-400 transition-colors duration-200">
              EVENTS
            </Link>
            <Link to="/about" className="cursor-pointer hover:text-amber-400 transition-colors duration-200">
              ABOUT
            </Link>
            <span className="text-amber-400">CONTACT</span>
          </nav>
        </header>

        {/* Hero */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-10 pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-20">
          <div ref={heroRef} className="max-w-3xl">
            <span className="contact-hero-badge inline-block text-cyan-400/90 text-sm sm:text-base font-semibold tracking-wide uppercase mb-2">
              Say hello
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-rajdhani leading-tight text-white">
              Get in <span className="text-amber-400">Touch</span>
            </h1>
            <div className="contact-hero-line mt-3 sm:mt-4 h-1 w-20 sm:w-24 bg-linear-to-r from-amber-400 to-cyan-400 rounded-full origin-left" />
            <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
              Have a question, want to collaborate, or join the club? Drop us a message.
            </p>
          </div>
        </section>

        {/* Form + Info */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-10 pb-20 sm:pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Form */}
            <div ref={formRef} className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <label className="block">
                    <span className="sr-only">Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="contact-input w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 sm:px-5 sm:py-3.5 text-white placeholder-gray-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all duration-200"
                    />
                  </label>
                  <label className="block">
                    <span className="sr-only">Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="contact-input w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 sm:px-5 sm:py-3.5 text-white placeholder-gray-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all duration-200"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="sr-only">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="contact-input w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 sm:px-5 sm:py-3.5 text-white placeholder-gray-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all duration-200"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Message</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={4}
                    className="contact-input w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 sm:px-5 sm:py-3.5 text-white placeholder-gray-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all duration-200 resize-y min-h-[120px]"
                  />
                </label>
                <button
                  type="submit"
                  className="contact-input contact-send-pulse inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3.5 sm:px-8 sm:py-4 text-black font-semibold text-sm sm:text-base hover:bg-amber-300 hover:scale-[1.02] active:scale-100 transition-all duration-200"
                >
                  Send message <FaPaperPlane className="w-4 h-4 shrink-0" />
                </button>
              </form>
            </div>

            {/* Contact info cards */}
            <div ref={infoRef} className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
              {CONTACT_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="contact-info-card group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 sm:p-5 hover:border-amber-400/40 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-amber-400 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-500">{item.label}</p>
                      <p className="mt-0.5 text-white font-medium text-sm sm:text-base">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="contact-info-card flex gap-3 pt-2">
                <a
                  href="#"
                  className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-gray-400 hover:border-cyan-400/50 hover:text-cyan-400 hover:scale-110 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-gray-400 hover:border-cyan-400/50 hover:text-cyan-400 hover:scale-110 transition-all duration-200"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
