import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { config } from './moire.config';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
  define: {
    __MOIRE_THEME__: JSON.stringify(config.theme || 'receipt')
  },
  server: {
    fs: {
      allow: ['.']
    }
  }
});
