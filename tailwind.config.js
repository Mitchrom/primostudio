/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    maxWidth: {
      "screen-xl": "1202px",
    },
    extend: {
      animation: {
        down: "down 300ms ease-in-out",
        up: "up 300ms ease-in-out",
      },
      keyframes: {
        down: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        up: {
          "0%": { transform: "translateY(35%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      colors: {
        primoblue: "#2739B0",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
