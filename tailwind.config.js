/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b3575',
        'error-red': '#991b1b',
        'error-bg': '#fef2f2',
        'success-bg': '#f0fdf4',
        'success-green': '#4bde80'
      },
      fontFamily: {
        'dancing': ['Dancing Script'],
      },
      animation: {
        'opacity': 'opacity 3s ease-in-out 1',
        'cart': 'cart 2s ease-in 1'
      },
      keyframes: {
        "opacity": {
          '0%': {
            opacity: '0',
            transform: 'scale(.5)'
          },
          '75%': {
            opacity: '1',
            transform: 'scale(1.1)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        "cart": {
          '0%': {
            opacity: '1',
            transform: 'scale(1)',
            backgroundColor: 'red',

          },
          '15%': {
            opacity: '1',
            transform: 'scale(0.8)',
            backgroundColor: 'red',

          },
          '30%': {
            opacity: '1',
            transform: 'scale(0.5)',
            backgroundColor: 'red',

          },
          '45%': {
            position: 'fixed',
            opacity: '1',
            top: '-3rem',
            right: '8rem',
            'z-index': '50',
            transform: 'scale(0.25)',
            backgroundColor: 'red',
          },
          '50%': {
            position: 'fixed',
            opacity: '1',
            top: '-3rem',
            right: '8rem',
            'z-index': '50',
            transform: 'scale(0.2)',
            backgroundColor: 'red',
          },
          '70%': {
            position: 'fixed',
            opacity: '1',
            top: '-3rem',
            right: '8rem',
            'z-index': '50',
            transform: 'scale(0.15)',
            backgroundColor: 'red',

          },
          '90%': {
            position: 'fixed',
            opacity: '1',
            top: '-3rem',
            right: '8rem',
            'z-index': '50',
            transform: 'scale(0.1)',
            backgroundColor: 'red',

          },
          '100%': {
            position: 'fixed',
            opacity: '1',
            top: '-3rem',
            right: '8rem',
            'z-index': '50',
            transform: 'scale(0)',
            backgroundColor: 'red',
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
