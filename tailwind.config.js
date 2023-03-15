/** @type {import('tailwindcss').Config} */

const { fontFamily} =require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
      colors: {
        'primary': '#212529',
        'accent':'#FE4848',
        'secondary-text':'#545759'
      },
      fontFamily:{
        sans: ['var(--font-questrial)',...fontFamily.sans],
    },
      
    },
  },
  plugins: [],
}