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
    extend: {
      inset: {
        "1/6": "16.666667%",
      },
      translate: {
        "-1/2": "-50%",
      },
      textStroke: {
        DEFAULT: "2px #fff6",
      },
      textFill: {
        DEFAULT: "transparent",
      },
      keyframes: {
        "about-shape-move": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
        "scroll-down-move": {
          "0%": { left: "-30px" },
          "50%": { left: "-40px" },
          "100%": { left: "-30px" },
        },
      },
      animation: {
        "about-shape-move": "about-shape-move 8s ease infinite",
        "scroll-down-move": "scroll-down-move 1s ease infinite",
      },
      transformOrigin: {
        center: "center",
      },
      fontFamily: {
        futura: ['"Futura Md BT"', "sans-serif"],
      },
    },
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

  plugins: [
    require("flowbite/plugin"),
    function ({ addUtilities }) {
      addUtilities({
        ".text-stroke": {
          "-webkit-text-stroke-width": "2px",
          "-webkit-text-stroke-color": "#fff6",
        },
        ".text-fill-transparent": {
          "-webkit-text-fill-color": "transparent",
        },
      });
    },
  ],
};
