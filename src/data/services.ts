export type Service = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  deliverables: string[];
  tags: string[];
};

export const services: Service[] = [
  {
    id: "brand-website",
    title: "Brand Website Development",
    summary: "Modern websites for brands that need a professional digital presence.",
    detail:
      "Best for company profiles, business websites, product showcases, service landing pages, campaign pages, and portfolios.",
    deliverables: ["Responsive layout", "Clear UX structure", "Conversion sections", "Fast static pages"],
    tags: ["Brand Website", "UI/UX", "Astro"],
  },
  {
    id: "seo-geo",
    title: "SEO & GEO-Ready Website",
    summary: "Website structure prepared for search engines and AI-powered discovery.",
    detail:
      "We shape metadata, headings, internal links, structured content, and entity clarity so the website is easier to find, understand, and cite.",
    deliverables: ["Technical SEO", "GEO content blocks", "Structured headings", "Schema-ready structure"],
    tags: ["SEO", "GEO", "Content"],
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization",
    summary: "Sharper loading, cleaner assets, and better Core Web Vitals.",
    detail:
      "We improve page speed through static generation, image optimization, lightweight frontend architecture, and cleaner component structure.",
    deliverables: ["Core Web Vitals", "Image optimization", "Asset cleanup", "Static-first architecture"],
    tags: ["Performance", "CWV", "Optimization"],
  },
  {
    id: "custom-system",
    title: "Custom Information System",
    summary: "Dashboards and internal systems for real business operations.",
    detail:
      "We build admin dashboards, inventory systems, order management, reporting tools, multi-user systems, and API-based platforms.",
    deliverables: ["Admin dashboard", "Reporting tools", "Role management", "API platform"],
    tags: ["Dashboard", "System", "API"],
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    summary: "Useful AI features for content, support, search, and workflow automation.",
    detail:
      "We help teams add AI assistants, chatbots, content generation, product recommendations, report summaries, and AI-powered dashboard insights.",
    deliverables: ["AI assistant", "Smart search", "Report summary", "Workflow automation"],
    tags: ["AI", "Automation", "Integration"],
  },
  {
    id: "android-iot-api",
    title: "Android, IoT & API Integration",
    summary: "Advanced digital system support beyond the website layer.",
    detail:
      "We support Android applications, IoT dashboards, sensor data integration, QR-based systems, payment gateways, and third-party APIs.",
    deliverables: ["Android app", "IoT dashboard", "Payment gateway", "Third-party API"],
    tags: ["Android", "IoT", "API"],
  },
];
