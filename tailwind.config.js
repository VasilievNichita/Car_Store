/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-100': '#1c1c1c',
        'primary-blue': '#0055ff',
        'primary-blue-100': '#cce0ff',
        'light-white': 'rgba(255,255,255,0.7)',
      },
      backgroundImage: {
        'hero-bg': "url('/hero-bg.png')",  // тут фон
      },
    },
  },
  plugins: [],
}
// 