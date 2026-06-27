"use client";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import Log from "@/components/sections/Logoloop";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export function ContactSection() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const Nodemailer = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post(
        "https://shoesbackend-4.onrender.com/api/v1/user/contact",
        formData
      );

      toast.success("Thanks — your message was sent.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div id="contact" className="px-5 md:px-8 lg:px-14">
        <Reveal>
          <SectionHeading
            index="06"
            title="Meet Our Sponsors"
            subtitle="Supporting our mission to educate, innovate, and secure the digital future."
          />
          <Log />
        </Reveal>
      </div>

      <section className="px-5 py-24 md:px-8 md:py-32 lg:px-14">
        <div className="mx-auto grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left Side */}
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                index="07"
                title="Get in Touch"
                subtitle="Collaborate on workshops, CTFs, and security initiatives."
              />

              <div className="space-y-4 font-mono text-[12px] uppercase tracking-[0.12em] text-portfolio-muted">
                <p>
                  <span className="text-white/40">Email · </span>
                  xploit.iiitbhopal@gmail.com
                </p>

                <p>
                  <span className="text-white/40">Location · </span>
                  IIIT Bhopal
                </p>

                <p className="normal-case text-[13px] tracking-normal text-portfolio-muted">
                  Social: LinkedIn · GitHub · Instagram
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={Nodemailer}
                className="space-y-8 border-t border-white/[0.08] pt-10 lg:border-t-0 lg:pt-0"
              >
                {/* Name */}
                <label className="block">
                  <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                    Name
                  </span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-0 border-b border-white/15 bg-transparent py-2 text-base text-white placeholder-white/25 outline-none transition focus:border-portfolio-accent/60"
                  />
                </label>

                {/* Email */}
                <label className="block">
                  <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                    Email
                  </span>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-0 border-b border-white/15 bg-transparent py-2 text-base text-white placeholder-white/25 outline-none transition focus:border-portfolio-accent/60"
                  />
                </label>

                {/* Phone */}
                <label className="block">
                  <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                    Phone
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-0 border-b border-white/15 bg-transparent py-2 text-base text-white placeholder-white/25 outline-none transition focus:border-portfolio-accent/60"
                  />
                </label>

                {/* Message */}
                <label className="block">
                  <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                    Message
                  </span>

                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Tell us how we can collaborate"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-none border-0 border-b border-white/15 bg-transparent py-2 text-base text-white placeholder-white/25 outline-none transition focus:border-portfolio-accent/60"
                  />
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="border border-white/20 bg-white/[0.03] px-8 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white transition hover:border-white/35 hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}