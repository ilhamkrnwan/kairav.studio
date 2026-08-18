export * from "./types";
import { whyFastWebsitesStillMatter } from "./why-fast-websites-still-matter";
import { buildingWithAnOpenSourceSpirit } from "./building-with-an-open-source-spirit";
import { seoAndGeoForModernBrands } from "./seo-and-geo-for-modern-brands";
import type { BlogPost } from "./types";

export { whyFastWebsitesStillMatter, buildingWithAnOpenSourceSpirit, seoAndGeoForModernBrands };

export const blogPosts: BlogPost[] = [
  whyFastWebsitesStillMatter,
  buildingWithAnOpenSourceSpirit,
  seoAndGeoForModernBrands,
];
