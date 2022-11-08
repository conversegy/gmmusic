/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.html"],
  theme: {
    screens: {
      xs: "314px",
      sm: '480px',
      md: '786px',
      lg: '1024px',
      xl: '1200px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {},
      fontFamily: {
        'syne': ['Syne Mono', 'monospace'],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};

