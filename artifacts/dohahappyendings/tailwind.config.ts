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
          50:  "#fef2f5",
          100: "#fde6ed",
          200: "#fbc8d8",
          300: "#f799b4",
          400: "#E8829A",
          500: "#C9486A",
          600: "#A8294E",
          700: "#851E3C",
          800: "#6B1A31",
          900: "#4A1022",
          DEFAULT: "#C9486A",
        },
        silver: {
          50:  "#fdf5f2",
          100: "#f7e8e2",
          200: "#f0d4ca",
          300: "#e4bab0",
          400: "#D4B8C0",
          500: "#B89BA5",
          600: "#8A6975",
          700: "#6B4F5A",
          800: "#4A3340",
          900: "#2A1A22",
          DEFAULT: "#D4B8C0",
        },
        obsidian: {
          DEFAULT: "#080208",
          50:  "#1e0a15",
          100: "#160710",
          200: "#0e050b",
          300: "#080208",
        },
        wine: {
          50:  "#fdf2f5",
          100: "#f9dfe8",
          200: "#f2bad0",
          300: "#e687ab",
          400: "#d45482",
          500: "#A8294E",
          600: "#8B1F40",
          700: "#6B1530",
          800: "#4A0E21",
          900: "#2A0812",
          DEFAULT: "#A8294E",
        },
        rose: {
          gold: "#C9836A",
          blush: "#F5C5A3",
          mist: "#E8A882",
          light: "#F7DED0",
        },
      },
      fontFamily: {
        sans: ["'Cormorant Garamond'", "Georgia", "serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #A8294E 0%, #E8829A 45%, #C9836A 100%)",
        "silver-gradient": "linear-gradient(135deg, #B89BA5 0%, #F0D4CA 50%, #B89BA5 100%)",
        "wine-gradient": "linear-gradient(135deg, #6B1530 0%, #A8294E 50%, #C9486A 100%)",
        "rose-gradient": "linear-gradient(135deg, #C9836A 0%, #E8A882 50%, #F5C5A3 100%)",
        "dark-gradient": "linear-gradient(180deg, #080208 0%, #0e050b 50%, #080208 100%)",
        "hero-gradient": "radial-gradient(ellipse 80% 70% at 50% -10%, rgba(169,41,78,0.22) 0%, transparent 65%)",
        "glow-wine": "radial-gradient(circle, rgba(201,72,106,0.35) 0%, transparent 70%)",
        "veil": "linear-gradient(180deg, transparent 0%, rgba(8,2,8,0.95) 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(201,72,106,0.35), 0 0 60px rgba(168,41,78,0.15)",
        "gold-glow-sm": "0 0 12px rgba(201,72,106,0.45), 0 2px 20px rgba(168,41,78,0.2)",
        "wine-glow": "0 0 40px rgba(107,21,48,0.5), 0 0 80px rgba(168,41,78,0.2)",
        "rose-glow": "0 0 25px rgba(201,131,106,0.4)",
        "glass": "0 4px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
        "glass-lg": "0 8px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "shimmer": "shimmer 2.5s linear infinite",
        "float": "float 7s ease-in-out infinite",
        "breathe": "breathe 4s ease-in-out infinite",
        "pulse-wine": "pulseWine 3s ease-in-out infinite",
        "border-flow": "borderFlow 4s linear infinite",
        "veil-in": "veilIn 1.2s ease-out forwards",
        "particle": "particle 8s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-18px) rotate(0.5deg)" },
          "66%": { transform: "translateY(-8px) rotate(-0.5deg)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.08)", opacity: "1" },
        },
        pulseWine: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201,72,106,0.2)" },
          "50%": { boxShadow: "0 0 50px rgba(201,72,106,0.55)" },
        },
        borderFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        veilIn: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        particle: {
          "0%": { transform: "translateY(0) translateX(0) scale(1)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "0.3" },
          "100%": { transform: "translateY(-120px) translateX(40px) scale(0.3)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
