/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/css.{html,js}","*.html","*.css",
  "./node_modules/flowbite/**/*.js" 
],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') 
  ],
}	