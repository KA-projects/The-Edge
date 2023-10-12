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
      },
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        lora: ["var(--font-lora)"],
        kanit: ["var(--font-kanit)"],
      },
    },
  },
  plugins: [],
};
export default config;
