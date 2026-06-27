"use client";

import {
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

export default function EventFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Club */}
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">
             Xploit
            </h3>

            <p className="leading-7 text-neutral-400">
              Building the next generation of cybersecurity enthusiasts through
              workshops, CTFs, research, and real-world security challenges.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Contact
            </h4>

            <div className="space-y-4 text-neutral-400">
              <div className="flex items-center gap-3">
                <Mail size={18} />
             xploit.iiitbhopal@gmail.com
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                IIIT Bhopal, Madhya Pradesh
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Connect
            </h4>

            <div className="flex gap-4">
              <a
                href="#"
                className="rounded-full border border-white/10 p-3 transition hover:border-red-500 hover:text-red-500"
              >
                <Instagram size={20} />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 p-3 transition hover:border-red-500 hover:text-red-500"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 p-3 transition hover:border-red-500 hover:text-red-500"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        </div>
        </footer>
  )}

