import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: '/',
    host: true,
  },
  preview: {
    open: '/',
    host: true,
  },
})
