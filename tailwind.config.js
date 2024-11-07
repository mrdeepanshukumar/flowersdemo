/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        float: 'float 15s linear infinite',
        shake: 'shake 0.5s ease-in-out',
        floatUp: 'floatUp 3s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};