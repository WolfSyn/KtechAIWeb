// vite.config.mjs
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  // 👇 IMPORTANT: must match your repo name on GitHub
  // (you showed it's KtechAIWeb)
  base: '/KtechAIWeb/',

  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  resolve: { dedupe: ['react', 'react-dom'] },
})
