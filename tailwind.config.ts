import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#05080f",
          card: "#0a1220",
          neonBlue: "#38bdf8",
          neonGreen: "#22c55e",
          text: "#dbe8ff",
        },
        portfolio: {
          base: "#060606",
          surface: "#0c0c0c",
          border: "rgba(255,255,255,0.08)",
          muted: "rgba(255,255,255,0.45)",
          accent: "#a8d4ff",
          accentSoft: "rgba(168,212,255,0.14)",
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glowBlue: "0 0 35px rgba(56, 189, 248, 0.35)",
        glowGreen: "0 0 35px rgba(34, 197, 94, 0.25)",
        portfolioLift: "0 24px 80px -24px rgba(0,0,0,0.75)",
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
