/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'very-light-grayish-blue': 'var(--clr-very-light-grayish-blue)',
        'light-grayish-blue': 'var(--clr-light-grayish-blue)',
        'grayish-blue': 'var(--clr-grayish-blue)',
        'dark-grayish-blue': 'var(--clr-dark-grayish-blue)',
        'light-blue': 'var(--clr-light-blue)',
        'dark-blue': 'var(--clr-dark-blue)',
      },
      fontSize: {
        DEFAULT: 'var(--clr-default-size)',
        price: '3.5rem',
      },
      borderRadius: {
        '4xl': '2.125rem',
      },
      maxWidth: {
        card: '21.875rem',
      },
      height: {
        middle: '31.25rem',
        card: '28.125rem',
      },
      padding: {
        17: '4.063rem',
      },
      margin: {
        3.5: '0.875rem',
      },
    },
  },
  plugins: [],
};
