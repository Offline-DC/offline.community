// @ts-check
import { defineConfig } from 'astro/config';

// Astro builds a fully static site by default (output: 'static'),
// which is exactly what we want — every page is rendered to plain
// HTML at build time, including the cohort data fetched from the Sheet.
export default defineConfig({
  // The production URL. Astro uses this to build absolute links and
  // canonical URLs (and a sitemap, if we add one) that point at the
  // live domain instead of localhost.
  site: 'https://offline.community',
});
