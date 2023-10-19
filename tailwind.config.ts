import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./layers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-31": "rgb(49,49,49)",
        franklin: "rgb(60,255,208)",
        "gray-64": "rgb(148,148,148)",
        blurpre: "rgb(82,0,255)",
        pernod: "rgb(214,243,31)",
      },
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        lora: ["var(--font-lora)"],
        kanit: ["var(--font-kanit)"],
      },
      maxWidth: {
        "container-lg": "1100px",
      },
      width: {
        "mobile-breaker": "300px",
      },
      boxShadow: {
        "highlight-blurple": "inset 0 -.5em 0 0 #5200ff",
      },
    },
  },
  plugins: [],
};
export default config;
