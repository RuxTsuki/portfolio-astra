import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
/* import vercel from "@astrojs/vercel/serverless"; */
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap({
    i18n: {
      defaultLocale: 'es',
      locales: {
        en: 'en-US',
        es: 'es-ES',
      }
    }
  })],
  site: 'https://tsukiiyamero.xyz',
  /*   adapter: vercel({
      webAnalytics: {
        enabled: true
      },
      speedInsights: {
        enabled: true
      }
    }), */
  /* output: 'static' */
});