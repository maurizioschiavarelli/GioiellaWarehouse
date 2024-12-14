import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        './', // Consente il percorso corrente
        'C:/W.A.GitHub_M.S/wareHouse/warehouse-map' // Percorso del progetto
      ],
    },
  },
});

