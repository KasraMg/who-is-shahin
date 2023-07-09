/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 
  theme: {
    extend: {},
    screens:{
      'sm-x3':{"max":"390px"}, 
      'sm-x2':{"max":"500px"},
      'sm':{"max":"767px"},
      'md':{"max":"900px"},
      'lg':{"max":"1200px"},
      'lg-x2':{"min":"1201px"},
     
    },
    fontFamily:{
      "swap" : 'Swap'
    },
  },
  

  plugins: [],
}

