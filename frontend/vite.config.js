import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { LuTarget } from 'react-icons/lu'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api":{
         target:"http://localhost:5000",
    }
  }
 }
})
