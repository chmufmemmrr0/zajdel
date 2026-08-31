/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBackground: {
          DEFAULT: '#f8f5f0'
        },
        sectionColor: {
          DEFAULT: '#f3eee7'
        },
        textColor: {
          DEFAULT: '#2c2c2c'
        },
        goldDark: {
          DEFAULT: '#c9a46a'
        },
        goldLight: {
          DEFAULT: '#d8be8c'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
