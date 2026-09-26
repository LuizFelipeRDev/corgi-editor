/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Tokens de tema: os valores vivem em CSS variables (--c-*) definidas em
      // src/index.css. :root = retro (padrao, valores originais) e
      // [data-theme='modern'] = modern. <alpha-value> mantem funcionando os
      // modificadores de opacidade (ex.: text-retro-black/60).
      colors: {
        retro: {
          bg: 'rgb(var(--c-bg) / <alpha-value>)',
          box: 'rgb(var(--c-box) / <alpha-value>)',
          black: 'rgb(var(--c-ink) / <alpha-value>)',
          accent: 'rgb(var(--c-accent) / <alpha-value>)',
        }
      },
      fontFamily: {
        pixel: ['var(--font-ui)'],
      },
      boxShadow: {
        retro: 'var(--shadow-1)',
        'retro-sm': 'var(--shadow-2)',
      }
    },
  },
  plugins: [],
}
