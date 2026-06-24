import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ViteFaviconsPlugin } from 'vite-plugin-favicon';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteFaviconsPlugin({
      logo: 'public/icons/logo.png',
      inject: true,
    }),
  ],
  server: {
    open: true, // Автоматически открывает браузер при старте
    port: 3000, // Порт (по умолчанию 5173)
    host: true, // Открывает доступ по локальной сети (опционально)
  },
});
