import daisyThemes from "daisyui/src/theming/themes";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        "fill-64": "repeat(auto-fill, minmax(16rem, 1fr))",
      },
      screens: {
        xxs: "480px",
        xs: "560px",
      },
      size: {
        104: "26rem",
        120: "30rem",
        128: "32rem",
        144: "36rem",
        152: "38rem",
        160: "40rem",
      },
      width: {
        104: "26rem",
        120: "30rem",
        128: "32rem",
        144: "36rem",
        152: "38rem",
        160: "40rem",
      },
      minWidth: {
        "screen-xxs": "480px",
        "screen-xs": "560px",
        "screen-sm": "640px",
        "screen-md": "768px",
        "screen-lg": "1024px",
      },
      height: {
        104: "26rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
        152: "38rem",
        160: "40rem",
      },
      maxHeight: {
        104: "26rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
        152: "38rem",
        160: "40rem",
      },
      boxShadow: {
        "inner-sm": "inset 0 2px 4px 0 rgb(0 0 0 / 0.10)",
        "inner-md": "inset 0 2px 4px 0 rgb(0 0 0 / 0.15)",
        "inner-lg": "inset 0 2px 4px 0 rgb(0 0 0 / 0.20)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
    },
  },
  daisyui: {
    logs: false,
    themes: [
      {
        dark: {
          ...daisyThemes["[data-theme=business]"],
          primary: "#FFFFFF",
          secondary: "#888",
          accent: "#FFFFFF",
          neutral: "#292524",
          "base-100": "#11111100",
          "base-300": "#0C0C0C",
          info: "#0070f3",
          success: "#50e3c2",
          warning: "#f5a623",
          error: "#e00",
          "--btn-text-case": "none", // set default text transform for buttons
          "--rounded-box": "0.2rem",
          "--rounded-btn": "0.15rem",
          "--rounded-badge": "0.15rem",
        },
      },
      {
        light: {
          ...daisyThemes["[data-theme=business]"],
          primary: "#000000",
          secondary: "#8f8f8f",
          accent: "#FF0000",
          neutral: "#000",
          "base-100": "#FFFFFF",
          "base-300": "#f8f8f8",
          info: "#0070f3",
          success: "#50e3c2",
          warning: "#f5a623",
          error: "#e00",
          "--btn-text-case": "none", // set default text transform for buttons
          "--rounded-box": "0.2rem",
          "--rounded-btn": "0.15rem",
          "--rounded-badge": "0.15rem",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
};
export default config;
