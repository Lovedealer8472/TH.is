import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'oklch(97% 0.015 160)',
          100: 'oklch(93% 0.03 160)',
          200: 'oklch(85% 0.07 160)',
          300: 'oklch(75% 0.11 160)',
          400: 'oklch(67% 0.15 158)',
          500: 'oklch(60% 0.17 156)',
          600: 'oklch(52% 0.15 156)',
          700: 'oklch(42% 0.12 158)',
          800: 'oklch(32% 0.08 160)',
          900: 'oklch(22% 0.04 165)',
        },
        warm: {
          50: 'oklch(96% 0.005 170)',
          100: 'oklch(88% 0.008 170)',
          200: 'oklch(75% 0.010 170)',
          300: 'oklch(60% 0.012 170)',
          400: 'oklch(48% 0.012 170)',
          500: 'oklch(38% 0.010 170)',
          600: 'oklch(30% 0.010 170)',
          700: 'oklch(24% 0.008 170)',
          800: 'oklch(19% 0.007 175)',
          900: 'oklch(15% 0.005 180)',
          950: 'oklch(11% 0.003 190)',
        },
        tech: {
          green: 'oklch(65% 0.17 158)',
          cyan: 'oklch(65% 0.13 195)',
          purple: 'oklch(58% 0.18 300)',
          orange: 'oklch(68% 0.16 55)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SF Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
