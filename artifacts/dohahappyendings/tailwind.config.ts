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
          50:  "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#d4af37",
          600: "#c9a227",
          700: "#a8891e",
          800: "#8a6e17",
          900: "#6b5310",
          DEFAULT: "#d4af37",
        },
        silver: {
          50:  "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#c0c0c0",
          500: "#a8a9ad",
          600: "#8a8b8d",
          700: "#6b6c6e",
          800: "#4b4c4d",
          900: "#2c2c2c",
          DEFAULT: "#c0c0c0",
        },
        obsidian: {
          DEFAULT: "#080808",
          50:  "#1a1a1a",
          100: "#141414",
          200: "#0f0f0f",
          300: "#080808",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #c9a227, #f0c040, #c9a227)",
        "silver-gradient": "linear-gradient(135deg, #a8a9ad, #e8e8e8, #a8a9ad)",
        "dark-gradient": "linear-gradient(180deg, #080808 0%, #0d0d0d 50%, #080808 100%)",
        "hero-gradient": "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(212,175,55,0.15) 0%, transparent 60%)",
        "glow-gold": "radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)",
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(212,175,55,0.3), 0 0 60px rgba(212,175,55,0.1)",
        "gold-glow-sm": "0 0 10px rgba(212,175,55,0.4)",
        "silver-glow": "0 0 30px rgba(192,192,192,0.2)",
        "glass": "0 4px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
        "glass-lg": "0 8px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
        "border-flow": "borderFlow 4s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212,175,55,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(212,175,55,0.5)" },
        },
        borderFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
