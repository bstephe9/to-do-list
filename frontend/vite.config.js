import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://bstephe9.github.io/to-do-list/",
  server: {
    open: true,
  },
})
