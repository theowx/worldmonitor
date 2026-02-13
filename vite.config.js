import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/worldmonitor/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
})
