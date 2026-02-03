/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bora: {
          teal: '#00BFA6',
          red: '#EE0000',
          dark: '#1F2937',
        }
      },
      borderRadius: {
        'bento': '2.5rem',
      }
    },
  },
  plugins: [],
}