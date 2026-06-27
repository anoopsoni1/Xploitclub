import type { Metadata } from "next";
import { IBM_Plex_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cybersecurity Club - IIIT Bhopal",
  description:
    "Cybersecurity Club at IIIT Bhopal: ethical hacking, CTFs, workshops, and secure systems.",
  openGraph: {
    title: "Cybersecurity Club - IIIT Bhopal",
    description: "Securing the Digital Future",
    type: "website",
    icons: {
      icon: "/Images/logo.png",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${ibmPlexMono.variable}`}>
      <body className="font-display">{children}</body>
    </html>
  );
}
