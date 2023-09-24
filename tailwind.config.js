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
        'highlight': '#E0E0D8',
        'highlight2': '#EDE8D5',
        'offwhite': '#0C0C0C',
        'offblack': '#0C0C0C',
        'hoverColor': '#B3AFA1'
      }
    },
  },
  plugins: [],
}
