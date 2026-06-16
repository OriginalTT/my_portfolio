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
        canvas: '#E0E0D8',
        surface: '#D7D7CF',
        'surface-strong': '#C9C8BF',
        ink: '#0C0C0C',
        muted: '#6F6B61',
        accent: '#3B5E56',
        highlight: '#E0E0D8',
        highlight2: '#D7D7CF',
        offwhite: '#0C0C0C',
        offblack: '#0C0C0C',
        hoverColor: '#3B5E56'
      }
    },
  },
  plugins: [],
}
