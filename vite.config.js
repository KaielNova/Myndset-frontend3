const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 4173,
    // ✅ Add this line:
    allowedHosts: ['myndset-frontend3-production.up.railway.app']
  }
});
