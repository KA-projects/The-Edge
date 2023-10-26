import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./layers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-13": "rgb(19,19,19)",
        "gray-31": "rgb(49,49,49)",
        franklin: "rgb(60,255,208)",
        "gray-64": "rgb(148,148,148)",
        "gray-63": "rgb(99,99,99)",
        blurpre: "rgb(82,0,255)",
        "blurpre-39": "rgb(57,4,171)",
        pernod: "rgb(214,243,31)",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        lora: ["var(--font-lora)"],
        kanit: ["var(--font-kanit)"],
      },
      maxWidth: {
        "container-lg": "1100px",
        "content-block-compact": "320px",
        "container-sm": "500px",
      },
      width: {
        "mobile-breaker": "300px",
        "tablet-breaker": "410px",
      },
      boxShadow: {
        "highlight-blurple": "inset 0 -.5em 0 0 #5200ff",
      },
    },
  },
  plugins: [],
};
export default config;
