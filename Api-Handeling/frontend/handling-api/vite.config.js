import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
      proxy:{ // todo => ye isiliye kyuki ye nhi karenge to cors error aa jayega
        "api":"http://localhost:3500"
      }
  },
  plugins: [react()],
})
