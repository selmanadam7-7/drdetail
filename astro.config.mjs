import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://drdetailfargo.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
