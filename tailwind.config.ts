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
        primary: "#4CAF7D",
        "primary-dark": "#2F7A5A",
        accent: "#FFF8E7",
        kakao: "#FEE500",
        "brand-text": "#2B2B2B",
        "brand-subtext": "#6B6B6B",
        "brand-bg": "#FAFAF7",
      },
      fontFamily: {
        pretendard: ["Pretendard Variable", "Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
