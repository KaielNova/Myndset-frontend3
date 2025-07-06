const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

module.exports = defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 4173,
    allowedHosts: 'all', // ✅ This unlocks Railway + any domain
  },
});
