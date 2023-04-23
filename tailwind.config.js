/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {screens: {
    'xs': '375px',
    ...defaultTheme.screens,

  },
    extend: {
      colors: {
        primary: {
          100: "#FFBE34",
          200: "#FFB629",
          300: "#FFDA56",
          400: "#FFD7A6",
        },
        secondary: {
          100: "#091242",
          200: "#1C1F35",
          300:"#273270",
          400:"##111C55"
        },
        tertiary: {
          100: "#F4F4F4",
          200: "#666C89",
          300:"#091242",
        },
      },
    },
  },
  plugins: [],
};
