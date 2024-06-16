/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      width: {
        lg: '1300px'
      },
      colors: {
        primary: '#0F0F0F',
        secondary: '#222831',
        third: '#00ADB5',
        fourth: '#EEEEEE'
      },
      fontFamily: {
        'family__primary': ['nunito'],
        'family__secondary': ['lato'],
      }
    },
  },
  plugins: []
}

