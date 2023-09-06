/** @type {import('tailwindcss').Config} */

module.exports =  {
  content: ['./src/**/*.tsx', '/index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),require("daisyui")],

  daisyui: {
    themes: ['synthwave', 'halloween'], 
    darkTheme: "halloween", 
    base: true, 
    styled: true, 
    utils: true, 
    rtl: false, 
    prefix: "", 
    logs: true,

}
}
