/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'd-bg': '#f0f5fa'
      }
    },
  },
  plugins: [],
}

