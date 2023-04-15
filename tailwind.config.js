/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      // linear-gradient
      gradientLeft: "#3A8EF6",
      gradientRight: "#6F3AFA",
      //state color
      secondary: "#E2EDFF",
      success: "#27AE60",
      warning: "#F2994A",
      error: "#EB5757",
      subhead: "#6C87AE",
      // black color
      black1: "#000000",
      black2: "#1D1D1D",
      black3: "#282828",
      white: "#FFFFFF",
      //gray color
      gray1: "#092C4C",
      gray2: "#4F4F4F",
      grayborder: "#D8D7DA",
      grayborder2: "#828282",

      bgRegister: "#E2EDFF",
      textColor: "#437FF7",
      textColor2: "#6C87AE",
    },
    extend: {},
  },
  plugins: [],
};
