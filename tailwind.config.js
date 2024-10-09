/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", 
           ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#9cc6ad', 
      },
    },
  },
  plugins: [],
}

