import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: 4173,
    host: true,
    allowedHosts: ['myndset-frontend3-production.up.railway.app']
  }
})
