/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        // color used for the website 
        colors: {
          primary: '#43ba89',
          secondary: '#ef863e',
        },
        fontFamily: {
          sans: ['Poppins','sans-serif'],
        },
    },
  },
  plugins: [],
}

