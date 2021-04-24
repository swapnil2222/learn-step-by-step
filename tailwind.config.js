const colors = require('tailwindcss/colors')
console.log('colors', colors)
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extends: {
      colors: {
        main: colors.teal,
        light: colors.orange,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
