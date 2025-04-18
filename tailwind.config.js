/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}', // Scans pages for Tailwind classes
    './src/**/*.{js,ts,jsx,tsx}', // Scans all files in src (e.g., components, styles)
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a1a1a', // Dark gray (softer than pure black)
        text: '#ffffff', // White
        accent: '#d4af37', // Gold
        secondary: '#2d2d2d', // Slighty lighter gray for cards
      },
    },
    // Define base styles for elements
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        body: {
          backgroundColor: '#1a1a1a', // background
          color: '#ffffff', // text
          margin: 0,
          padding: 0,
        },
        'h1, h2, h3': {
          color: '#d4af37', // accent
          fontWeight: '700',
        },
        a: {
          color: '#d4af37', // accent
          textDecoration: 'none',
        },
        'a:hover': {
          textDecoration: 'underline',
        },
      });
    },
  ],
};
