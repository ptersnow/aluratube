/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
        colors: {
            white: "#FFFFFF",
            gray: {
                100: "#F0F0F0",
                200: "#F9F9F9",
                500: "#E5E5E5",
                800: "#222222"
            }
        }
    },
  },
  plugins: [],
}
