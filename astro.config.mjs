import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://SpykieLucilius.github.io',
  base: '/Portfolio',
  integrations: [tailwind()]
});