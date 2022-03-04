
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"SF Pro Display"', "sans-serif"],
      serif: ['"SF Pro Display"', "serif"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        customTheme: {
          primary: "#25282C",
          secondary: "#6163ff",
          accent: "#96c4e0",
          neutral: "#2C2B36",
          "base-100": "#151719",
          "base-content": "#fff",
          info: "#AAC1E4",
          success: "#12A57C",
          warning: "#F3B859",
          error: "#F5403D",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
