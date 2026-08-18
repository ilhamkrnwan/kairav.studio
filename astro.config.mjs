import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://kairav.studio",
  integrations: [mdx(), sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id", "jv"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  redirects: {
    "/work": "/works",
    "/work/[slug]": "/case-studies/[slug]",
    "/blog": "/insights",
    "/blog/[slug]": "/insights/[slug]",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
