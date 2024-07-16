/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#2C4F9E',
        customLightBlue: '#1268f1', // Define your custom color
      },
    },
  },
  plugins: [],
}