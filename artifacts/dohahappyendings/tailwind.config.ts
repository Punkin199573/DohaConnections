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
        gold: {
          50:  "#FFFDE7",
          100: "#FFF9C4",
          200: "#FFF176",
          300: "#FFE033",
          400: "#FFD700",
          500: "#F5C518",
          600: "#D4AF37",
          700: "#B8860B",
          800: "#7A5C00",
          900: "#3D2E00",
          DEFAULT: "#FFD700",
        },
        silver: {
          50:  "#FFFFFF",
          100: "#F8F8F8",
          200: "#F0F0F0",
          300: "#E0E0E0",
          400: "#C8C8C8",
          500: "#A0A0A0",
          600: "#707070",
          700: "#505050",
          800: "#303030",
          900: "#181818",
          DEFAULT: "#C8C8C8",
        },
        obsidian: {
          DEFAULT: "#000000",
          50:  "#1A1600",
          100: "#0F0D00",
          200: "#080600",
          300: "#000000",
        },
        ember: {
          300: "#FFE033",
          400: "#FFD700",
          500: "#F5C518",
          600: "#D4AF37",
          700: "#B8860B",
          DEFAULT: "#FFD700",
        },
      },
      fontFamily: {
        sans:    ["'Cormorant Garamond'", "Georgia", "serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["'Inter'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient":   "linear-gradient(135deg, #7A5C00 0%, #B8860B 25%, #D4AF37 50%, #FFD700 70%, #FFE033 100%)",
        "silver-gradient": "linear-gradient(135deg, #606060 0%, #B0B0B0 25%, #E8E8E8 45%, #FFFFFF 50%, #E0E0E0 60%, #A8A8A8 80%, #606060 100%)",
        "wine-gradient":   "linear-gradient(135deg, #1A1000 0%, #4A3500 30%, #B8860B 65%, #FFD700 100%)",
        "ember-gradient":  "linear-gradient(135deg, #B8860B 0%, #D4AF37 40%, #FFD700 65%, #FFE033 100%)",
        "dark-gradient":   "linear-gradient(180deg, #000000 0%, #080600 50%, #000000 100%)",
        "hero-gradient":   "radial-gradient(ellipse 80% 65% at 50% -5%, rgba(255,215,0,0.25) 0%, transparent 65%)",
        "glow-gold":       "radial-gradient(circle, rgba(255,215,0,0.5) 0%, transparent 70%)",
        "veil":            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.97) 100%)",
        "card-gold":       "linear-gradient(135deg, rgba(26,16,0,0.95) 0%, rgba(20,14,0,0.9) 100%)",
      },
      boxShadow: {
        "gold-glow":    "0 0 35px rgba(255,215,0,0.6), 0 0 90px rgba(212,175,55,0.35), 0 0 140px rgba(184,134,11,0.18)",
        "gold-glow-sm": "0 0 16px rgba(255,215,0,0.65), 0 2px 28px rgba(212,175,55,0.4)",
        "gold-glow-xs": "0 0 8px rgba(255,215,0,0.5), 0 0 20px rgba(212,175,55,0.25)",
        "glass":        "0 4px 30px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,215,0,0.06)",
        "glass-lg":     "0 8px 60px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,215,0,0.05)",
      },
      backdropBlur: { xs: "2px" },
      animation: {
        "shimmer":      "shimmer 2.2s linear infinite",
        "float":        "float 7s ease-in-out infinite",
        "breathe":      "breathe 4s ease-in-out infinite",
        "pulse-gold":   "pulseGold 2.8s ease-in-out infinite",
        "border-flow":  "borderFlow 3.5s linear infinite",
        "silver-sheen": "silverSheen 3.5s ease-in-out infinite",
        "flicker":      "flicker 4s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition:  "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%":      { transform: "translateY(-20px) rotate(0.5deg)" },
          "66%":      { transform: "translateY(-9px) rotate(-0.5deg)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%":      { opacity: "1",   transform: "scale(1.1)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255,215,0,0.2), 0 0 45px rgba(212,175,55,0.08)" },
          "50%":      { boxShadow: "0 0 60px rgba(255,215,0,0.75), 0 0 110px rgba(245,197,24,0.4)" },
        },
        borderFlow: {
          "0%":   { backgroundPosition: "0% 50%" },
          "50%":  { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        silverSheen: {
          "0%, 100%": { backgroundPosition: "-200% center" },
          "50%":      { backgroundPosition:  "200% center" },
        },
        flicker: {
          "0%, 95%, 100%": { opacity: "1" },
          "96%":           { opacity: "0.85" },
          "97%":           { opacity: "1" },
          "98%":           { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
