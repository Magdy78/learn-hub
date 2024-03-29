/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin:{
        '120': '38rem'
      },
      width:{
        '96': '25rem',
        '97': '27rem'
        }
    },
  },
  plugins: [],
}

