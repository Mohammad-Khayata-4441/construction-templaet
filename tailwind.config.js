/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EA5400',
        secondary: '#FFC700',
        dark: '#0d0c13',
        surface: '#F9F9F9',
        text: '#CACACA',
        onLight: '#797979'
      }
    },
  },
  plugins: [],
}