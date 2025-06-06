/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['IBM Plex Sans', 'sans-serif'],
        'serif': ['IBM Plex Serif', 'serif']
      },
    }
  },
  plugins: []
};