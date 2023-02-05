/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
           "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Sansita', 'sans-serif'],
        'body': ['Lato', 'sans-serif']
      },
      colors: {
        'pri' : '#081F4D',  // pri class for primary color
        'sec' : '#0083FF',  // secondary color
        'gen' : '#3B4D71',  // general text color
        'our-bg' : '#D9E6FF', // background color
      }
    }, 
  },
  plugins: [],
}
 