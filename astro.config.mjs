import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://kairav.studio",
  integrations: [sitemap()],
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
