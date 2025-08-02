import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";


export default defineConfig({
  plugins: [tailwindcss(),
    react(),
    {
      name: 'configure-tailwind-v4',
      config: () => ({
        css: {
          transformer: 'postcss' // Tell Vite to parse Tailwind syntax
        }
      })
    }
  ],
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})