/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        "dark-2": "#121212",
        primary: {
          // blue
          low: "#f7f4ff",
          "low-medium": "#939da8",
          "low-high": "#8894a1",
          "medium-low": "#627180",
          medium: "#332e4f",
          high: "#332e4f",
        },
        secondary: {
          // coral
          low: "#80cdd6",
          "low-high": "#725bb1",
          "medium-low": "#65509d",
          medium: "#725bb1",
          high: "#164145",
          "high-high": "#0b2023",
        },
        tertiary: {
          // teal
          low: "#f49fa4",
          medium: "#885cb7",
          high: "#770d14",
        },
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
