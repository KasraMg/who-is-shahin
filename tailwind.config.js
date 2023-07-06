/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 
  theme: {
    extend: {},
    screens:{
      'sm-x2':{"max":"390px"}, 
      'sm':{"max":"500px"},
      'md':{"max":"900px"},
      'lg':{"max":"1200px"},
     
    },
    fontFamily:{
      "swap" : 'Swap'
    },
  },
  

  plugins: [],
}

