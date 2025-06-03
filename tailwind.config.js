/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        fontBold: ['font-bold', 'sans-serif']
      },
      screens: {
        'desktop': { 'max': '1700px' },
        'laptop': { 'max': '1280px' },
        'mobile': { 'max': '560px' },
      }
    },
  },
  plugins: [],
}

