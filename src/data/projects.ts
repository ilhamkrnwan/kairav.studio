export type Project = {
  slug: string;
  title: string;
  type: string;
  year: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
  outcome: string;
  contributors: string[];
  image?: string;
  accent?: string;
};

export const projects: Project[] = [
  {
    slug: "studio-launch-system",
    title: "Studio Launch System",
    type: "Internal",
    year: "2026",
    summary: "A reusable Astro foundation for fast studio websites and future open-source experiments.",
    problem:
      "Small teams need a polished website foundation that is easy to edit, fast to deploy, and clear enough for contributors.",
    solution:
      "We built a modular Astro structure with shared components, typed data files, and simple page templates.",
    features: ["Reusable cards", "Data-driven content", "Responsive sections", "SEO-ready layout"],
    stack: ["Astro", "Tailwind CSS", "TypeScript"],
    outcome: "A practical starting point for Kairav Studio's own site and future collaborative builds.",
    contributors: ["Kairav Core", "Open Contributors"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&q=80",
    accent: "#7c5cfc",
  },
  {
    slug: "brand-web-starter",
    title: "Brand Web Starter",
    type: "Open Source",
    year: "2026",
    summary: "A concept starter for clean landing pages, service pages, and case-study content.",
    problem:
      "Many brand websites become hard to maintain because copy, layout, and repeated sections are mixed together.",
    solution:
      "We separated reusable UI from content data so teams can update the site without rewriting every page.",
    features: ["Service catalog", "Project cards", "Contributor-ready data", "Legal page templates"],
    stack: ["Astro", "Tailwind CSS"],
    outcome: "A clearer pattern for contributors to extend pages and content safely.",
    contributors: ["Kairav Core"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop&q=80",
    accent: "#2563eb",
  },
  {
    slug: "ai-workflow-lab",
    title: "AI Workflow Lab",
    type: "Experimental",
    year: "2026",
    summary: "Small experiments for using AI to support content planning, automation, and delivery notes.",
    problem:
      "Teams often want AI support but need it to stay grounded in clear workflows and reviewable output.",
    solution:
      "We prototype practical AI-assisted flows for planning, content drafting, QA notes, and project handoff.",
    features: ["Prompt workflows", "Task notes", "Content support", "Review-friendly output"],
    stack: ["Astro", "AI APIs", "Automation"],
    outcome: "A lightweight lab for ideas that can become useful product features later.",
    contributors: ["Open Contributors", "Project Partners"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop&q=80",
    accent: "#f97316",
  },
];
