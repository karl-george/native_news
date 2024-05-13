/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#111827',
        card: '#1F2937',
        text_primary: '#FAFAFA',
        text_secondary: '#6A717A',
        accent: '#1E778F',
      },
    },
  },
  plugins: [],
};
