/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      colors: {
        "cyan-200": "hsl(174, 77%, 80%)",
        "cyan-600": "hsl(174, 86%, 45%)",
        "red-100": "hsl(14, 92%, 95%)",
        "red-300": "hsl(15, 100%, 70%)",
        "pale-blue-400": "hsl(226, 100%, 87%)",
        "pale-blue-100": "hsl(230, 100%, 99%)",
        "desaturated-blue-600": "hsl(227, 35%, 25%)",
        "grayish-blue-400": "hsl(225, 20%, 60%)",
        "grayish-blue-300": "hsl(223, 50%, 87%)",
        "grayish-blue-100": "hsl(224, 65%, 95%)",
      },
      boxShadow: {
        custom: "0px 7px 10px 4px rgba(16, 213, 194, 0.2)",
      },
    },
  },
  plugins: [],
}
