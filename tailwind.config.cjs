const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    { raw: '<div class="border-beginner">', extension: "html" },
    { raw: '<div class="border-intermediate">', extension: "html" },
    { raw: '<div class="border-advanced">', extension: "html" },
    { raw: '<div class="text-beginner">', extension: "html" },
    { raw: '<div class="text-intermediate">', extension: "html" },
    { raw: '<div class="text-advanced">', extension: "html" },
  ],
  theme: {
    extend: {
      colors: {
        advanced: colors.red[600],
        beginner: colors.lime[700],
        intermediate: colors.yellow[600],
      },
      borderWidth: {
        3: "3px",
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        "roboto-slab": ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: []
};
