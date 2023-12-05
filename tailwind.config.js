/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b3575',
        'error-red': '#991b1b',
        'error-bg': '#fef2f2',
        'success-bg': '#f0fdf4',
        'success-green':'#4bde80'
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
