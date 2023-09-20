/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#706FE5',
        secondary: '#EAEAFC',
        footer: '#2E3E5C'
      }
    }
  },
  plugins: []
})
