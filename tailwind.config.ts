import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "fade-in-down": {
          "25%": {
            transform: "scale(1.1) translateY(-2px)", // Combined transforms
          },
          "50%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "scale(1) ",
          },
        },
      },
      animation: {
        fade: "fade-in-down 2s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
