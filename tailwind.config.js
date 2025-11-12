// tailwind.config.js (for Tailwind CSS v4)
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000000',
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#000000',
          600: '#333333',
          700: '#666666',
          800: '#999999',
          900: '#cccccc',
        },
        'slate-gray': {
          DEFAULT: '#6F7B92',
          100: '#16181d',
          200: '#2c313a',
          300: '#424957',
          400: '#586274',
          500: '#6f7b92',
          600: '#8b95a7',
          700: '#a8afbd',
          800: '#c5cad3',
          900: '#e2e4e9',
        },
        'cornell-red': {
          DEFAULT: '#BC161C',
          100: '#250405',
          200: '#4b090b',
          300: '#700d10',
          400: '#961216',
          500: '#bc161c',
          600: '#e6282e',
          700: '#ec5d62',
          800: '#f29396',
          900: '#f9c9cb',
        },
        'persian-red': {
          DEFAULT: '#D22E33',
          100: '#2a090a',
          200: '#541214',
          300: '#7e1b1e',
          400: '#a82428',
          500: '#d22e33',
          600: '#db575b',
          700: '#e48184',
          800: '#edabad',
          900: '#f6d5d6',
        },
      },
      // ... your other theme extensions
    },
  },
  plugins: [
    // ... your plugins
  ],
};