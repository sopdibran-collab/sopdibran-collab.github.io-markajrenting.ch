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
        body: ["var(--font-source-sans)", "ui-sans-serif", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "heading-1": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading-2": ["2rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "heading-3": ["1.5rem", { lineHeight: "1.3" }],
        "heading-4": ["1.25rem", { lineHeight: "1.4" }],
        "body-lg": ["1.25rem", { lineHeight: "1.7" }],
        "body": ["1.125rem", { lineHeight: "1.7" }],
        "body-sm": ["1rem", { lineHeight: "1.65" }],
        "caption": ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
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
      /* Direction « Trait de chantier » : angles vifs partout */
      borderRadius: {
        markaj: "0",
      },
      /* Ombres franches sans flou — matière posée, pas d'effet SaaS */
      boxShadow: {
        card: "none",
        "card-hover": "6px 6px 0 0 rgb(219 207 176 / 0.9)",
        button: "5px 5px 0 0 #DBCFB0",
        "button-hover": "2px 2px 0 0 #DBCFB0",
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
        "hero-in": {
          "0%": { opacity: "0", transform: "translateY(0.75rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      /* Mouvements nets et décidés — pas de fondus mous */
      animation: {
        "fade-in-up": "fade-in-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
        "menu-in": "menu-in 0.18s cubic-bezier(0.22, 1, 0.36, 1) both",
        "hero-in": "hero-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) 0.08s both",
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
