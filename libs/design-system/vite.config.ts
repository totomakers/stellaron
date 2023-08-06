import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts(), react()],
  build: {
    lib: {
      entry: [
        resolve(__dirname, 'src/design-tokens.tsx'),
        resolve(__dirname, 'src/design-system.tsx'),
      ],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
})
