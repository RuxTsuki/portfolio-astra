import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
/* import vercel from '@astrojs/vercel/serverless'; */
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://tsukiiyamero.xyz',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
  output: 'hybrid',
});