/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppin':['Poppins','sans-serif'],
        'os':['Oswald', 'sans-serif'],
        'mont':['Montserrat', 'sans-serif']
      },
      backgroundImage:{
        'contact':"url('./assets/bbblurry.svg')",
        'home':"url('./assets/profile2.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}
