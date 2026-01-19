/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        borala: {
          primary: "#00BFA6",
          secondary: "#F5E9DA",
        }
      }
    },
  },
  plugins: [],
}