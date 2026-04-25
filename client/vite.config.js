import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',  // ✅ without this, container can't expose the port
    port: 4173,
    allowedHosts: ['mern-frontend-latest-lnlc.onrender.com']
  }
})