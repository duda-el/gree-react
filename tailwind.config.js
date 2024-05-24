/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#00337a',
        customLightBlue: '#004bb5', // Define your custom color
      },
    },
  },
  plugins: [],
}