/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#00affe',
        'brand-blue-dark': '#0091ffff',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'], // set Poppins as default
      },
    },
  },
  plugins: [],
};
