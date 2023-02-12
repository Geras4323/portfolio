/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero_bg': "url('/hero_bg.jpg')",
        'travel': "url('/travel.jpg')",
        'task': "url('/tasklist.jpg')",
        'sale': "url('/sale.jpg')",
        'calculator': "url('/ios_calculator.jpg')",
        'dashboard': "url('/dashboard.jpg')",
        'movies': "url('/movies.jpg')",
        'ghsearch': "url('/gh_search.jpg')",
        'apidocs': "url('/apidocs.jpg')",
        'certificate': "url('/certificate.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#1A8A8A',
        'secondary': '#DBF7EC',
        'tertiary': '#F7F7F7',
      }),
      textColor: {
        'primary': '#1A8A8A',
        'secondary': '#DBF7EC',
        'tertiary': '#F7F7F7',
      },
      colors: {
        'primary': '#1A8A8A',
        'secondary': '#DBF7EC',
        'tertiary': '#EEEEEE',
        'border': '#DFDFDF',
      },
      fontFamily: {
        Comfortaa: ['Comfortaa', 'cursive']
      },
      width: {
        '128': '32rem',
        '160': '40rem',
        '192': '48rem',
      },
      height: {
        '128': '32rem',
        '160': '40rem',
        '192': '48rem',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite'
      }
    },
  },
  plugins: [require("daisyui")],
}