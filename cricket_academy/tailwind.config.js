/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003366', // Deep Royal Blue (BCCI/Test Cricket style)
          light: '#004d99',
          dark: '#002244',
        },
        secondary: {
          DEFAULT: '#3b82f6', // Bright Blue for accents
          light: '#60a5fa',
        },
        accent: {
          DEFAULT: '#fbbf24', // Subtle Gold/Yellow for CTAs (classic cricket pairing)
          hover: '#f59e0b',
        },
        surface: {
          light: '#f8fafc',
          dark: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      cursor: {
        none: 'none',
      },
    },
  },
  plugins: [],
};
