import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/ip-zpi51-lab7-iuliia-kosolap-fiot-2026/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cart: resolve(__dirname, 'cart.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        form: resolve(__dirname, 'form.html'),
        timer: resolve(__dirname, 'timer.html'),
        promise: resolve(__dirname, 'promise.html'),
        search: resolve(__dirname, 'search.html'),
      },
    },
  },
});