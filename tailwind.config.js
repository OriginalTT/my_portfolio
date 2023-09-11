/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)'],
      },
      colors: {
        'highlight': '#4A3440',
        'highlight2': '#53464D',
        'offwhite': '#F1F1F1',
        'offblack': '#0C0C0C',
      }
    },
  },
  plugins: [],
}
