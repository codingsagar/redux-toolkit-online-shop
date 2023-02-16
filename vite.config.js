import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/redux-toolkit-online-shop', //! base url of the website
  plugins: [react()],
})
