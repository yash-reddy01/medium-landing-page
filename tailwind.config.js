/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'skin': '#FED1B7',
        'light-green': '#36A243',
        'lightest-green': '#B4E5A2'
      }, 
      screens: {
        'ipad': '768px'
      },
    },
  },
  plugins: [],
}