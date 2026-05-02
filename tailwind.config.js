/** @type {import('tailwindcss').Config} */
export default {
  content: ['./civai-style/index.html', './src/civai/**/*.{svelte,js}'],
  theme: {
    extend: {
      fontFamily: {
        assistant: ['Assistant', 'system-ui', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
      },
      colors: {
        primary: {
          50: '#eef2f7',
          100: '#dde6ef',
          600: '#243b51',
          700: '#1d3247',
          800: '#15243a',
        },
        'civ-red': '#e63946',
      },
      maxWidth: {
        prose57: '57rem',
        prose53: '53rem',
      },
      screens: {
        xs: '480px',
        '2xs': '380px',
      },
    },
  },
  plugins: [],
}
