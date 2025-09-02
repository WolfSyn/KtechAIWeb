// vite.config.mjs
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  base: '/KtechAIWeb/',
  plugins: [react()],
  css: { postcss: { plugins: [tailwindcss(), autoprefixer()] } },
  resolve: { dedupe: ['react', 'react-dom'] }
})
