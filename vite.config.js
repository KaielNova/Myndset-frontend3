// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
  },
  preview: {
    host: true,
    port: 4173,
  }
})
