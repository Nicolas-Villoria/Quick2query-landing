/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00B3A4',  // Verde Azulado
        'accent': '#00E0E0',   // Cian Brillante
        'background': '#AEEBFF', // Azul Claro
        'tech': '#6C63FF',     // Morado Tecnológico
        'neutral': '#F5F7FA',  // Gris Neutro
        'text': '#1A1A1A',     // Negro Suave
      },
      fontFamily: {
        'primary': ['Roboto', 'sans-serif'],
        'secondary': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
