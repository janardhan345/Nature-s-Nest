/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['var(--font-playfair-display)', 'serif'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        'mint-green': '#A8D5BA',
        'beige': '#F6EAD4',
        'soft-sand': '#E0D6C3',
        'deep-green': '#47624F',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')",
      },
      height: {
        'screen-80': '80vh',
        'screen-90': '90vh',
      },
    },
  },
  plugins: [],
};