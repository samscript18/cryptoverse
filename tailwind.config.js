/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#0071bd",
        lightGray: "rgb(153,153,153)",
        bgPrimary: "rgb(0, 21, 41)",
        bgSecondary: "#F9F9F9",
        lightBlue: "#e6f7ff",
        border: "#d9d9d9",
      },
    },
    screens: {
      xs: "300px",
      ss: "620px",
      sm: "650px",
      md: "1020px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
