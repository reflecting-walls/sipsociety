import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Set this to the real domain once it's known (used for canonical URLs).
  site: 'https://sipsocietydrinks.com',
  build: {
    // Inline CSS so pages render with zero render-blocking requests.
    inlineStylesheets: 'always',
  },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
