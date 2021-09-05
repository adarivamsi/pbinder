module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        35: "35rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};