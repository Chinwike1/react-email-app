/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        offwhite: {
          DEFAULT: '#F7F7F7',
          500: '#F7F7F7',
          600: '#DBDBDB',
          700: '#BFBFBF',
          800: '#A3A3A3',
          900: '#878787',
          950: '#797979',
        },
      },
    },
  },
  plugins: [],
}
