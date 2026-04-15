/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#004EB3',
          dark: '#003A85',
          light: '#1A6FD4',
        },
        secondary: {
          DEFAULT: '#B37400',
          dark: '#8A5A00',
          light: '#D4960A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


