// TODO upgrade to v3 after CRA fix https://github.com/postcss/postcss/wiki/PostCSS-8-for-end-users

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
