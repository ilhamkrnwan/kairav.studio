import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://kairav.studio",
  integrations: [mdx(), sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
    routing: "manual",
  },
  redirects: {
    "/work": "/services",
    "/works": "/services",
    "/blog": "/insights",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
