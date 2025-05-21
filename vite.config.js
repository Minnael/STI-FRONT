import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/STI-FRONT', // coloque o nome do seu repositório aqui
  plugins: [react()],
})
