import type { Config } from "tailwindcss";

// Paleta personalizada basada en el logo de ElectroPatrimonio
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#E67E22",
          "orange-light": "#FFF3E6",
          dark: "#163B2B",
          red: "#C9362B",
          "red-light": "#FCEDEC",
          green: "#247348",
          "green-light": "#EEF5F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-eb-garamond)", "serif"],
        heading: ["var(--font-oswald)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 28px rgba(22, 59, 43, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
