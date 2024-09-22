/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        customGray: {
          700: 'hsl(0, 0%, 20%)',
          800: 'hsl(0, 0%, 12%)',
          900: 'hsl(0, 0%, 8%)',
        },
        customGreen: 'hsl(75, 94%, 57%)'
      }
    },
  },
  plugins: [],
}