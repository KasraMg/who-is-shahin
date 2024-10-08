/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],

  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      fullSize: "100%",
    },
    extend: {},
    screens: {
      xxs: { max: "390px" },
      xs: { max: "500px" },
      sm: { max: "767px" },
      md: { max: "900px" },
      lg: { max: "1200px" },
      xl: { min: "1200px" },
    },
    fontFamily: {
      swap: "Swap",
      vazir: "Vazir",
      vazirlight: "VazirLight",
    },
  },

  plugins: [require("flowbite/plugin")],
};
