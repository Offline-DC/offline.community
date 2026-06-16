// @ts-check
import { defineConfig } from 'astro/config';

// Astro builds a fully static site by default (output: 'static'),
// which is exactly what we want — every page is rendered to plain
// HTML at build time, including the cohort data fetched from the Sheet.
// We'll add a `site:` URL here later if/when we set up deployment.
export default defineConfig({});
