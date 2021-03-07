// tailwind.config.js
module.exports = {
  future: {},
  purge: ["./src/**/*.jsx", "./src/**/*.js", "./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
}