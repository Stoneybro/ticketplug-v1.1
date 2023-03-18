/** @type {import('tailwindcss').Config} */


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
        'secondary-text':'#545759',
        'border-color':'rgba(107, 110, 112, 0.5)',
      },

    },
  },
  plugins: [],
}