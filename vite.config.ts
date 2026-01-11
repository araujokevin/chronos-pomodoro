import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Chronos Pomodoro',
        short_name: 'Chronos',
        lang: 'pt-BR',
        start_url: '/',
        display: 'standalone',
        theme_color: '#4f7fa3',
        background_color: '#0e1220',
        icons: [
          {
            src: '/images/favicon/web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/images/favicon/web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
