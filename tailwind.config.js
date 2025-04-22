/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#1a1a1a', // Dark gray
        text: '#ffffff', // White
        accent: '#d4af37', // Gold
        secondary: '#2d2d2d', // Lighter gray for cards
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        body: {
          backgroundColor: '#1a1a1a',
          color: '#ffffff',
          margin: 0,
          padding: 0,
        },
        'h1, h2, h3': {
          color: '#d4af37',
          fontWeight: '700',
        },
        a: {
          color: '#d4af37',
          textDecoration: 'none',
        },
        'a:hover': {
          textDecoration: 'underline',
        },
      });
    },
  ],
};
