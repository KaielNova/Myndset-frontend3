import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 4173,
    allowedHosts: ['.up.railway.app'], // ✅ Accept any Railway subdomain
  },
})
