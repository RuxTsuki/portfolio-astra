import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap()],
  site: 'https://tsukiiyamero.xyz',
  /*   adapter: vercel({
      webAnalytics: {
        enabled: true
      },
      speedInsights: {
        enabled: true
      }
    }), */
  output: 'static'
});