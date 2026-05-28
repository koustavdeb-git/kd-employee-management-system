/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide'

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        brand: {
          'dark': 'var(--color-primary-dark)',
          'primary': 'var(--color-primary)',
          'secondary': 'var(--color-secondary)',
          'accent-medium': 'var(--color-accent-medium)',
          'accent-light': 'var(--color-accent-light)',
        },
      },
    },
  },
  plugins: [scrollbarHide],
}
