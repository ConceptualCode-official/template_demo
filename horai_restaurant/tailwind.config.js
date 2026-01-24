/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Pinyon Script"', 'cursive'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        'rich-black': '#0B090A',   // Updated to the new base color
        'deep-navy': '#040A1E',
        cream: {
          50: '#FDFBF7',
          100: '#F7F4EB',
          200: '#EBE5D5',
        }
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'scroll-left': 'scroll-left 40s linear infinite',
        'scroll-right': 'scroll-right 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        }
      }
    },
  },
  plugins: [],
}
