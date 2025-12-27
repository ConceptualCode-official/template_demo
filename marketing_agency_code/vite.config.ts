import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Ensures the server is exposed correctly in the container
    port: 5173,
  },
  base: '/template_demo/marketing_agency',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
