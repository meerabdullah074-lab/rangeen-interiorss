import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#1a1a1a",
        cream: "#f7f3ec",
        gold: {
          DEFAULT: "#b8925a",
          light: "#d9b88a",
          dark: "#8a6a3f",
        },
        terracotta: "#c26b4a",
        sage: "#7c8b6f",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(26,26,26,0.15)",
        glass: "0 8px 32px 0 rgba(26,26,26,0.1)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
