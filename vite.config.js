import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ViteFaviconsPlugin } from 'vite-plugin-favicon';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      fastRefresh: true,
    }),
    ViteFaviconsPlugin({
      logo: 'public/icons/logo.png',
      inject: true,
    }),
  ],
  server: {
    open: true,
    port: 3000,
    host: true,
    force: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  watch: {
    usePolling: true, // Для систем, где не работает стандартный watch
    interval: 1000, // Интервал проверки в мс
  },
});
