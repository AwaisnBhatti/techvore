/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        "brand-blue": "#00affe",
        "brand-blue-dark": "#0091ffff",
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-33.33%)" },
        },
      },
    },
  },

  plugins: [],
};
