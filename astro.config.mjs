// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base: '/MyWebSite',
  site: 'https://shxutoki.github.io',
  adapter: netlify()
});
