/** @type {import('tailwindcss').Config} */

module.exports = {
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
}
