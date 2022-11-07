module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'syne': ['Syne Mono'],
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};

