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
          blue:    '#0a3d7a',
          gold:    '#c9a84c',
          dark:    '#1a1f2e',
          muted:   '#6b7280',
          surface: '#f4f6fb',
          light:   '#e8eef8',
          white:   '#ffffff',
        },
      },
      fontFamily: {
        sans:  ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-dm-serif)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
