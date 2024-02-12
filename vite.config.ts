import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //server: {
  //  cors : {origin: "http://localhost:8080/listusers"}
  //},
  plugins: [react()],
  server: {
    host: true,
    port: 80
  }
})
