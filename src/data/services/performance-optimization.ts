import type { Service } from "./types";
import { svgIcons } from "./icons";

export const performanceOptimization: Service = {
  id: "performance-optimization",
  title: "Performance Optimization",
  summary: "Lightweight architecture tuned for speed, Core Web Vitals, and maintainability.",
  detail: "Best for product teams wanting faster loads and healthy Core Web Vitals.",
  category: "Web Experiences",
  whatItIs:
    "A focused engagement to make a website genuinely fast: lighter frontend architecture, optimized assets, and clean component structure measured against Core Web Vitals.",
  whoItsFor:
    "Teams with a slow or bloated site, and brands where page speed directly affects conversions, ad cost, and search ranking.",
  problem:
    "Heavy JavaScript, unoptimized images, and tangled components make sites slow — hurting user experience, SEO, and conversion at the same time.",
  deliverables: [
    "Core Web Vitals audit and remediation",
    "Image compression and lazy loading",
    "Static generation and selective hydration",
    "CSS and JavaScript optimization, clean component structure",
  ],
  techDirection: ["Astro Islands", "astro:assets", "Lighthouse", "Edge / CDN"],
  process: [
    { title: "Profile", detail: "We measure real performance and find the heaviest bottlenecks first." },
    { title: "Prioritize", detail: "We rank fixes by impact so the biggest wins land early." },
    { title: "Optimize", detail: "We trim JavaScript, optimize assets, and restructure rendering." },
    { title: "Verify", detail: "We re-test against Core Web Vitals to confirm measurable gains." },
  ],
  outcome:
    "A site that loads fast on real devices, passes Core Web Vitals, and feels instant — improving both experience and search performance.",
  faq: [
    { q: "What performance scores do you target?", a: "We aim for Lighthouse Performance 90+ and passing Core Web Vitals, balanced against the site's real-world content needs." },
    { q: "Do you need to rebuild the whole site?", a: "Often not. Many gains come from architecture and asset fixes; we recommend a rebuild only when the foundation is the bottleneck." },
    { q: "Will it stay fast over time?", a: "We leave clean structure and guidelines so new content and features do not quietly reintroduce slowness." },
  ],
  tags: ["Performance", "CWV", "Architecture"],
  icon: svgIcons.gauge,
  accent: "#06b6d4",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=360&fit=crop&q=80",
};
