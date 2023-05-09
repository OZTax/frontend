/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        libre: ['Libre Baskerville', 'serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
        'Ireng': '#012a2d',
        'hijau-ketupat': '#22c55e',
      }
    },
  },
  plugins: [],
}