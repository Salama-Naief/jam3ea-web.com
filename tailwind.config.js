/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F77D0F',
          soft: '#F77D0F10',
        },
        secondary: {
          DEFAULT: '#151E54',
          soft: '#151E5410',
        },
        dark: {
          DEFAULT: '#1D1A1B',
          soft: '#1D1A1B10',
        },
        success: {
          DEFAULT: '#3DB754',
          soft: '#3DB75410',

        },
        danger: {
          DEFAULT: '#E82F3E',
          soft: '#E82F3E10',
        },
        brown: {
          DEFAULT: '#B45D27',
          soft: '#FDC57A',
        },
        gray: {
          DEFAULT: '#7D8186',
          soft: '#DEDBDB',
        },
        yellow: {
          DEFAULT: '#E0A314',
          soft: '#F0C947',
        }
      },

    }
  },
  plugins: [require('flowbite/plugin')]
};