/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00BFA6',
          dark: '#008F7A',
          light: '#33CCB8',
        },
        sensorial: {
          cream: '#FDFCFB',
          deep: '#1A1A1A',
          accent: '#FF3366', // Cor para o "Tum Dum"
        },
      },
      animation: {
        'tum-dum': 'heartbeat 1.5s ease-in-out infinite',
        'float': 'floating 3s ease-in-out infinite',
        'glass-glow': 'glow 4s linear infinite',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.8' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(0, 191, 166, 0.2)' },
          '50%': { 'box-shadow': '0 0-40px rgba(0, 191, 166, 0.5)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}