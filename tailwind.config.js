const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
