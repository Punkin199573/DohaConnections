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
        // "gold" = rich yellow-gold spectrum
        gold: {
          50:  "#FFFDF0",
          100: "#FFF8CC",
          200: "#FFEE80",
          300: "#FFE033",
          400: "#F5C518",
          500: "#D4AF37",
          600: "#B8860B",
          700: "#8B6914",
          800: "#5C440A",
          900: "#2E2005",
          DEFAULT: "#D4AF37",
        },
        // "silver" = cool metallic silver → platinum white
        silver: {
          50:  "#FFFFFF",
          100: "#F8F8F8",
          200: "#EBEBEB",
          300: "#D4D4D4",
          400: "#B8B8B8",
          500: "#989898",
          600: "#747474",
          700: "#555555",
          800: "#333333",
          900: "#181818",
          DEFAULT: "#C8C8C8",
        },
        // Obsidian = near-black with warm golden undertone
        obsidian: {
          DEFAULT: "#080600",
          50:  "#1E1900",
          100: "#141000",
          200: "#0F0C00",
          300: "#080600",
        },
        // Ember = champagne / warm light gold accent
        ember: {
          300: "#FFE566",
          400: "#FFD700",
          500: "#F5C518",
          600: "#D4AF37",
          700: "#B8860B",
          DEFAULT: "#F5C518",
        },
        // Platinum = extra-bright silver for highlights
        platinum: {
          50:  "#FFFFFF",
          100: "#FAFAFA",
          200: "#F4F4F4",
          300: "#E8E8E8",
          400: "#D8D8D8",
          500: "#C0C0C0",
          DEFAULT: "#E8E8E8",
        },
      },
      fontFamily: {
        sans:    ["'Cormorant Garamond'", "Georgia", "serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["'Inter'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        // Primary gradient: deep dark-gold → rich gold → bright champagne
        "gold-gradient":   "linear-gradient(135deg, #7A5C00 0%, #B8860B 30%, #D4AF37 55%, #F5C518 75%, #FFE566 100%)",
        // Silver gradient: brushed metallic look
        "silver-gradient": "linear-gradient(135deg, #707070 0%, #C0C0C0 25%, #F5F5F5 45%, #FFFFFF 50%, #E8E8E8 60%, #B0B0B0 78%, #808080 100%)",
        // CTA buttons: deep dark gold → polished gold
        "wine-gradient":   "linear-gradient(135deg, #2E1F00 0%, #7A5C00 40%, #B8860B 70%, #D4AF37 100%)",
        // Ember accent: champagne shimmer
        "ember-gradient":  "linear-gradient(135deg, #B8860B 0%, #D4AF37 40%, #F5C518 65%, #FFE566 100%)",
        // Backgrounds
        "dark-gradient":   "linear-gradient(180deg, #080600 0%, #0F0C00 50%, #080600 100%)",
        "hero-gradient":   "radial-gradient(ellipse 85% 70% at 50% -10%, rgba(212,175,55,0.28) 0%, transparent 65%)",
        "glow-gold":       "radial-gradient(circle, rgba(212,175,55,0.45) 0%, transparent 70%)",
        "veil":            "linear-gradient(180deg, transparent 0%, rgba(8,6,0,0.95) 100%)",
      },
      boxShadow: {
        "gold-glow":    "0 0 30px rgba(212,175,55,0.55), 0 0 80px rgba(184,134,11,0.3), 0 0 120px rgba(122,92,0,0.15)",
        "gold-glow-sm": "0 0 14px rgba(245,197,24,0.6),  0 2px 24px rgba(184,134,11,0.35)",
        "silver-glow":  "0 0 25px rgba(220,220,220,0.5), 0 0 60px rgba(192,192,192,0.25)",
        "glass":        "0 4px 30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
        "glass-lg":     "0 8px 60px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      backdropBlur: { xs: "2px" },
      animation: {
        "shimmer":      "shimmer 2.5s linear infinite",
        "float":        "float 7s ease-in-out infinite",
        "breathe":      "breathe 4s ease-in-out infinite",
        "pulse-gold":   "pulseGold 3s ease-in-out infinite",
        "border-flow":  "borderFlow 4s linear infinite",
        "silver-sheen": "silverSheen 3s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition:  "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%":      { transform: "translateY(-18px) rotate(0.5deg)" },
          "66%":      { transform: "translateY(-8px) rotate(-0.5deg)" },
        },
        breathe: {
          "0%, 100%": { opacity: "0.65", transform: "scale(1)" },
          "50%":      { opacity: "1",    transform: "scale(1.08)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212,175,55,0.25), 0 0 40px rgba(184,134,11,0.1)" },
          "50%":      { boxShadow: "0 0 55px rgba(245,197,24,0.7),  0 0 90px rgba(212,175,55,0.35)" },
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
      },
    },
  },
  plugins: [],
};

export default config;
