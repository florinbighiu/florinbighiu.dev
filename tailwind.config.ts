import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#07060D",
          2: "#0D0C1A",
        },
        surface: {
          DEFAULT: "#12111F",
          2: "#1A1930",
        },
        accent: {
          DEFAULT: "#BEFF44",
          dim: "rgba(190,255,68,0.12)",
          glow: "rgba(190,255,68,0.25)",
        },
        primary: "#F5F3EE",
        muted: "#A8A6BE",
        success: "#60d17a",
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderColor: {
        DEFAULT: "rgba(255,255,255,0.12)",
        accent: "rgba(190,255,68,0.35)",
      },
      keyframes: {
        blobFloat: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(30px,-30px) scale(1.05)" },
        },
        blobFloatReverse: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-30px,30px) scale(1.05)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.7)" },
        },
        revealUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "blob-float": "blobFloat 8s ease-in-out infinite",
        "blob-float-r": "blobFloatReverse 10s ease-in-out infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "reveal-up": "revealUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
    },
  },
  plugins: [],
};

export default config;
