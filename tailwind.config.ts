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
        markaj: {
          primary: "#0A2B5E",
          "primary-dark": "#071F45",
          "primary-light": "#0F3A7A",
          mineral: "#8C929D",
          "mineral-light": "#A8ADB6",
          "mineral-dark": "#6B7079",
          crepi: "#DBCFB0",
          "crepi-light": "#E8E3D3",
          "crepi-dark": "#C9BB9A",
          white: "#FFFFFF",
          surface: "#FAFAF8",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "heading-1": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-2": ["2rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "heading-3": ["1.5rem", { lineHeight: "1.3" }],
        "heading-4": ["1.25rem", { lineHeight: "1.4" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "caption": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
      maxWidth: {
        content: "72rem",
        prose: "42rem",
      },
      borderRadius: {
        markaj: "0.375rem",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(10 43 94 / 0.06), 0 1px 2px -1px rgb(10 43 94 / 0.06)",
        "card-hover": "0 4px 12px 0 rgb(10 43 94 / 0.1), 0 2px 4px -2px rgb(10 43 94 / 0.06)",
        button: "0 1px 2px 0 rgb(10 43 94 / 0.15)",
        "button-hover": "0 4px 14px 0 rgb(10 43 94 / 0.2)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "menu-in": {
          "0%": { opacity: "0", transform: "translateY(-0.5rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.65s ease-out both",
        "menu-in": "menu-in 0.2s ease-out both",
      },
      backgroundImage: {
        "texture-noise": "url('/textures/markaj-noise-soft-01.webp')",
        "texture-plaster": "url('/textures/markaj-plaster-soft-01.webp')",
        "texture-concrete": "url('/textures/markaj-concrete-smooth-01.webp')",
      },
    },
  },
  plugins: [],
};

export default config;
