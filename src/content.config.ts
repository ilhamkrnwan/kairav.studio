import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Content layout (one folder per locale, same slug across locales):
 *
 *   src/content/insights/en/<slug>.md
 *   src/content/insights/id/<slug>.md
 *   src/content/works/en/<slug>.md
 *   src/content/works/id/<slug>.md
 *
 * Entry ids look like `en/<slug>` / `id/<slug>`. See `src/lib/content.ts`
 * for the locale-aware helpers (with English fallback) used by pages.
 */

const insights = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/insights" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("Kairav Studio"),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    // Optional override. When omitted it is computed from the body (see lib/content.ts).
    readingTime: z.string().optional(),
  }),
});

export const collections = { insights };
