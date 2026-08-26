/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e6f7f7',
          100: '#c9efef',
          200: '#a5e3e3',
          300: '#7ad3d3',
          400: '#4dc3c3',
          500: '#00b4b4',
          600: '#00A6A6',
          700: '#008F8F',
          800: '#056e6e',
          900: '#055656',
          950: '#03403f',
        },
        navy: {
          50: '#F4F9FC',
          100: '#e1ecf3',
          200: '#c3d8e6',
          300: '#9abdd1',
          400: '#6c9cb8',
          500: '#4a7f9f',
          600: '#356785',
          700: '#2a5470',
          800: '#1d4258',
          900: '#12354a',
          950: '#0B3C5D',
        },
        royal: {
          50: '#E3F2FD',
          100: '#d0e7f9',
          200: '#a9cff2',
          300: '#8ab9ee',
          400: '#4a9ae3',
          500: '#2e88db',
          600: '#1976D2',
          700: '#1565C0',
          800: '#0B3C5D',
          900: '#093049',
          950: '#072437',
        },
        gold: {
          300: '#66c9c9',
          400: '#00A6A6',
          500: '#008F8F',
          600: '#007878',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)'],
        display: ['var(--font-heading)'],
        serif: ['var(--font-heading)'],
      },
      boxShadow: {
        card: '0 6px 24px -8px rgba(11, 32, 51, 0.12)',
        'card-hover': '0 18px 44px -12px rgba(13, 107, 93, 0.25)',
        soft: '0 2px 12px rgba(11, 32, 51, 0.06)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
      },
    },
  },
  plugins: [],
}
