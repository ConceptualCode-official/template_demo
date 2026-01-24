const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        handwritten: ['"Caveat"', 'cursive'],
      },
      colors: {
        neutral: {
          50: '#fafafa',
          900: '#171717',
        }
      }
    }
  },
  plugins: [],
};
