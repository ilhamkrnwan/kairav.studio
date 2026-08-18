import type { Service } from "./types";
import { svgIcons } from "./icons";

export const seoGeo: Service = {
  id: "seo-geo",
  title: "SEO & GEO-Ready Website",
  summary: "Search-ready architecture for traditional engines and AI-powered discovery.",
  detail: "Best for companies aiming for organic traffic and readiness to be cited by AI search.",
  category: "Web Experiences",
  whatItIs:
    "A website built from the structure up for both classic SEO and GEO — generative engine optimization — so search engines and AI assistants can understand, summarize, and cite your content.",
  whoItsFor:
    "Businesses that depend on being found: service companies, product brands, and content-driven sites that want durable organic visibility.",
  problem:
    "SEO bolted on after launch rarely works. Without clean structure, schema, and entity-based content, pages stay invisible to both Google and AI answer engines.",
  deliverables: [
    "Technical SEO: metadata, canonical URLs, sitemap, robots",
    "Structured heading hierarchy and internal linking",
    "Schema markup and entity-based content blocks",
    "FAQ and knowledge sections built for AI citation",
  ],
  techDirection: ["Astro", "Schema.org JSON-LD", "@astrojs/sitemap", "Semantic HTML"],
  process: [
    { title: "Audit", detail: "We review current structure, keywords, and how the brand is described across the web." },
    { title: "Architect", detail: "We design the heading hierarchy, internal links, and schema strategy." },
    { title: "Implement", detail: "We build semantic, structured pages with clean, AI-readable content." },
    { title: "Measure", detail: "We validate structured data and track indexing and discoverability." },
  ],
  outcome:
    "A site with a strong organic foundation that ranks better on search engines and stays readable for AI-powered discovery.",
  faq: [
    { q: "What is GEO?", a: "GEO is generative engine optimization — structuring content so AI assistants and AI search can understand, summarize, and cite it accurately." },
    { q: "Do you guarantee a #1 ranking?", a: "No honest studio can. We build the technical and content foundations that make strong rankings achievable and durable." },
    { q: "Can you improve an existing site?", a: "Yes. We audit the current structure and apply SEO/GEO fixes without rebuilding everything from scratch." },
  ],
  tags: ["SEO", "GEO", "Schema"],
  icon: svgIcons.search,
  accent: "#2563eb",
  image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=640&h=360&fit=crop&q=80",
};
