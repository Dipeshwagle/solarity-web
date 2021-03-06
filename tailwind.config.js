module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  
  theme: {
    backgroundImage: {
      dark: "linear-gradient(to right top, #151719, #151719, #151719, #151719, #151719);",
      radical:"linear-gradient(to right top, #572772, #86366c, #a45169, #b7716d, #c3927c);",
    },
    fontFamily: {
      sans: ['"SF Pro Display"', "sans-serif"],
      serif: ['"SF Pro Display"', "serif"],
    },
    extend: {
      fontSize: {
        ["brand-md"]: "15px",
        ["brand-lg"]: "19px",
      },
      colors: {
        bgLight:'rgba(31, 33, 37, 0.35)',
        brandblack: "#1F2125",
        lightAction:'#1BC5C5',
        borderLight:'rgba(255, 255, 255, 0.12)',
        transparentwhite: "rgba(255, 255, 255, 0.4)",
        cardLight:'rgba(31, 33, 37, 0.35)',
        darkcharcoal: "#2F3336",
        borderwidget: "rgba(37, 51, 65, 0.5)",
        gray: {
          950: "#8899A6",
        },
      },
    },
  },
  variants: {
    scrollbar: ["rounded"],
  },
  daisyui: {
    styled: true,
    themes: [
      {
        customTheme: {
          primary: "#25282C",
          secondary: "#6163ff",
          accent: "#FFFFFF",
          neutral: "#2C2B36",
          "base-100": "#151719",
          "base-content": "#fff",
          info: "#AAC1E4",
          success: "#12A57C",
          warning: "#EC903C",
          error: "#E0464D",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("tailwind-scrollbar"),
  ],
};
