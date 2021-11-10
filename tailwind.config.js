const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,

        // Light Theme
        lt_bg: '#EDF2F7',
        lt_text: '#1A202C',
        lt_card_bg: '#fff',
        lt_menu_text : '#1A202C',
        lt_menu_hover_bg : '#EDF2F7',
        lt_menu_hover_text : '#4A5568',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
