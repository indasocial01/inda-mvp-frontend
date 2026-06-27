/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0a0a0a',
        'dark-light': '#1a1a2e',
      },
    },
  },
  plugins: [],
}
