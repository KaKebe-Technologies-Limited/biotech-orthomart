import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          blue: "#003366", // Refined deep blue from logo
          green: "#008080", // Medical green
          orange: "#f47c0e", // Accent orange
          muted: "#8c92a0",
          dark: "#25262a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
