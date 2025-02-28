import { Anton, Kanit } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
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
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        playwrite: ['Playwrite NL Guides', 'sans-serif'],
        sigmar: ['Sigmar', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
