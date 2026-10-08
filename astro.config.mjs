import { defineConfig } from 'astro/config';

// Keep in sync with src/config/site.ts (SITE_URL).
export default defineConfig({
  site: 'https://mjpdf.site',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
