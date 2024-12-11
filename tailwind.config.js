/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/jetbrains-theme-creator/src/**/*.{html,ts}",
    "./libs/**/src/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}