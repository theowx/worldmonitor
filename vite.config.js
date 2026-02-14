import { defineConfig } from 'vite'

export default defineConfig({
  base: '/worldmonitor/',
  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ]
  }
})
