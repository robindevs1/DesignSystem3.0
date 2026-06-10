import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Change this to match your GitHub repo name, e.g. '/coleman-design-system/'
// If deploying to a custom domain, set it to '/'
const BASE_PATH = '/DesignSystem3.0/'

export default defineConfig({
  plugins: [react()],
  base: BASE_PATH,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
