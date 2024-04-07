import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// uncomment base for a deployment to github pages
export default defineConfig({
    // base: '/Rubinproduction_3.0/',
    plugins: [react()],
})
