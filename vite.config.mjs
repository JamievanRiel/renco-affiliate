import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Dit zorgt ervoor dat alle linkjes naar CSS en JS kloppen op GitHub Pages
  base: '/renco-affiliate/', 
})
