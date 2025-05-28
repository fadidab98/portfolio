// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a1a1a',
        text: '#ffffff',
        accent: '#d4af37',
        secondary: '#2d2d2d',
      },
    },
  },
  plugins: [
    function ({ addBase }: { addBase: (styles: Record<string, string | Record<string, any>>) => void }) {
      addBase({
        body: {
          backgroundColor: '#1a1a1a',
          color: '#ffffff',
          margin: '0',
          padding: '0',
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
} satisfies Config;