const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: colors.slate
      }
    },
  },
  plugins: [require("@astrouxds/tailwind")],
};
