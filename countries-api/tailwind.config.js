/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        txt: {
          DEFAULT: 'var(--clr-txt-light)',
          dark: 'var(--clr-txt-dark)',
        },
        elems: {
          DEFAULT: 'var(--clr-elems-light)',
          dark: 'var(--clr-elems-dark)',
        },
        input: {
          DEFAULT: 'var(--clr-input-light)',
          dark: 'var(--clr-input-dark)',
        },
        background: {
          DEFAULT: 'var(--clr-background-light)',
          dark: 'var(--clr-background-dark)',
        },
      },
      fontSize: {
        DEFAULT: 'var(--default-size-item)',
        detail: 'var(--size-detail)',
      },
      zIndex: {
        21: 21,
        22: 22,
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
