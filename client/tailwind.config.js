/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1100': '1100px'
      },
      flex: {
        2: "2 2 0%",
      },
      colors: {
        main:  '#181460',
        secondary: '#fbbf24',
      },
      backgroundColor: {
        main: '#181460',
        primary: '#F5F5F5',
        secondary: '#fbbf24',
        'overlay-30': 'rgba(0,0,0,0.3)',
        'overlay-70': 'rgba(0,0,0,0.7)',
      },
      maxWidth: {
        '600': '600px',
        '1100': '1100px'
      },
      minWidth: {
        '300': '300px',
        '200': '200px'
      },
    },
  },
  plugins: [],
}

