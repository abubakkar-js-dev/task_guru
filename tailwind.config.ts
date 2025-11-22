import type { Config } from "tailwindcss";

const config: Config = {
  // Use class-based dark mode to work with `next-themes` ThemeProvider
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/pages/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/components/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        accent: "#14B8A6",
      },
    },
  },
  plugins: [],
};

export default config;
