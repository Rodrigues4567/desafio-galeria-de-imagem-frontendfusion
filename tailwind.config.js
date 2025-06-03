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
      }
    },
  },
  plugins: [],
}

