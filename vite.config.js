import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    preview: {
      port: 4173,
      host: true,
      allowedHosts: ['myndset-frontend3-production.up.railway.app']
    }
  }
})
