// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://daonmeal.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
