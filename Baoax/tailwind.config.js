
const colors=require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}" ],
  


  theme: {
    colors: {
     blue:{
      500:'#C4C6FD',
      600:'#777BF9',
      750:'#6267F8',
      800:'#5055F7',
      850:'#3C42F6',
      900:'#2930F5'
     },
     fuchsia:{
      500:'#24014B',
      600:'#43058A',
      800:'#300462',
      
     },
     slate:{
      800:'#060DDB',
      900:'#060049'
      },
      white:{
        500:'#FFFFFF'
        }
      
    },

    extend: {},
  },
  plugins: [],
}

