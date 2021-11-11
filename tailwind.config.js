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
        lt_hover_bg : '#EDF2F7',

        // Dark Theme
        dt_bg: '#2D3748',
        dt_text: '#ffffff',
        dt_card_bg: '#1A202C',
        dt_hover_bg: '#2D3748',

        // Accent
        accent: '#ff8000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
