import { defineConfig } from 'astro/config';

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
    projectId: 'ptwzsi5h',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true,
  })],
});