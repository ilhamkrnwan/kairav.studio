import type { Service } from "./types";
import { svgIcons } from "./icons";

export const brandWebsite: Service = {
  id: "brand-website",
  title: "Brand Website Development",
  summary: "Modern brand websites with clean UI, clear messaging, and fast delivery.",
  detail: "Best for brands and businesses that need a professional, design-led online presence.",
  category: "Web Experiences",
  whatItIs:
    "A design-led website built around your brand: company profiles, landing pages, product showcases, and campaign sites with a clear content hierarchy and conversion-focused sections.",
  whoItsFor:
    "Local brands, small and medium businesses, startups, and personal brands that want a polished digital footprint instead of a generic template.",
  problem:
    "Most business websites look templated, communicate poorly, and load slowly — so visitors leave before they understand the offer or trust the brand.",
  deliverables: [
    "Custom responsive layout and UI design",
    "Brand-aligned style guide and design tokens",
    "Structured content sections and clear CTAs",
    "Reusable Astro components for future pages",
  ],
  techDirection: ["Astro", "Tailwind CSS", "TypeScript", "GSAP"],
  process: [
    { title: "Understand", detail: "We map the business goal, audience, and the message the homepage must carry." },
    { title: "Design", detail: "We shape the visual identity, layout system, and content hierarchy before building." },
    { title: "Build", detail: "We develop fast, component-based pages with clean, reviewable structure." },
    { title: "Launch", detail: "We ship, wire analytics, and hand over a site that is easy to extend." },
  ],
  outcome:
    "A distinctive, fast-loading brand website that explains your business clearly and is ready to grow into more pages and systems.",
  faq: [
    { q: "How long does a brand website take?", a: "A focused brand site typically takes two to four weeks depending on the number of pages and how ready the content is." },
    { q: "Can you work from our existing brand?", a: "Yes. We adapt to an existing identity, or help shape a sharper visual direction if you do not have one yet." },
    { q: "Will we be able to update it ourselves?", a: "We structure content in data files and reusable components, and can connect a CMS when self-editing is a priority." },
  ],
  tags: ["UI/UX", "Astro", "Brand"],
  icon: svgIcons.globe,
  accent: "#7c5cfc",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&h=360&fit=crop&q=80",
};
