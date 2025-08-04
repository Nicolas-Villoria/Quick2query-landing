// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  
  // Performance optimizations
  build: {
    // Optimize CSS
    inlineStylesheets: 'auto',
  },
  
  // Image optimization
  image: {
    // Enable image optimization
    service: { entrypoint: 'astro/assets/services/sharp' }
  },

  // Prefetch configuration for better navigation
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },

  // Compression
  compressHTML: true,
  
  // Output options
  output: 'static',
  
  // Site configuration for better SEO
  site: 'https://schedulink.com'
});