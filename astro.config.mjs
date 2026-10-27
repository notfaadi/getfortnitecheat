import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { sitemapSerialize } from './src/config/sitemap.ts';

export default defineConfig({
  site: 'https://getfortnitecheat.net',
  trailingSlash: 'always',
  redirects: {
    '/cheats/': '/products/fortnite-hacks/',
    '/cheats/lite/': '/products/fortnite-hacks/',
    '/cheats/pro/': '/products/fortnite-hacks/',
    '/cheats/elite/': '/products/fortnite-hacks/elite/',
    '/products/dota-2-cheats/': '/products/fortnite-hacks/',
    '/products/dota-2-cheats/elite/': '/products/fortnite-hacks/elite/',
    '/products/dota-2-cheats/utilities/': '/products/fortnite-hacks/utilities/',
    '/cheats/compare/': '/blog/dota-2-lite-vs-pro/',
    '/contact/': '/support/',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/go/'),
      serialize: sitemapSerialize,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2022',
      modulePreload: { polyfill: false },
    },
  },
  build: {
    inlineStylesheets: 'always',
  },
});
