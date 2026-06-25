import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://dandalofi09-wq.github.io/dandabeatsnew/',
  base: '/dandabeatsnew/',
  integrations: [mdx()],
  markdown: {
    shikiConfig: { theme: 'dracula' },
  },
});