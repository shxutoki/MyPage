// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://yourname.com', // 换成你的网站URL
  // 如果你需要部署到子目录，可以使用base选项
  // base: '/my-website',
  output: 'static',
  adapter: netlify({
    functionPerRoute: false
  })
});
