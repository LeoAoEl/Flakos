import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: "server",
  adapter: vercel(),
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: { prefixDefaultLocale: false },
    fallback: { es: "en" },
  },
  devToolbar: { enabled: false },
});
