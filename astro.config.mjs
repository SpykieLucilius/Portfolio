import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://SpykieLucilius.github.io',
  base: '/Portfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});