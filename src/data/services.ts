export type ServiceFaq = {
  q: string;
  a: string;
};

export type ServiceStep = {
  title: string;
  detail: string;
};

export type Service = {
  /** URL slug, used for /tools/[id] */
  id: string;
  title: string;
  /** Short one-liner for cards and hero */
  summary: string;
  /** "Who it's for" line shown on the overview card */
  detail: string;
  /** Grouping band for the /tools index */
  category: string;
  /* ── GEO detail-page content (docs/guide.md §Services Page) ── */
  whatItIs: string;
  whoItsFor: string;
  problem: string;
  deliverables: string[];
  techDirection: string[];
  process: ServiceStep[];
  outcome: string;
  faq: ServiceFaq[];
  /* ── Visual identity ── */
  tags: string[];
  icon: string;
  accent: string;
  image: string;
};

/* ── Inline SVG icons for each service (no emoji — see agent/rules.md) ── */
const svgIcons = {
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8a3 3 0 0 0-3 3"/></svg>`,
  gauge: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>`,
  server: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>`,
  cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
};

export const services: Service[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
    id: "custom-system",
    title: "Custom Information System",
    summary: "Dashboards, internal tools, and operational systems beyond the website.",
    detail: "Best for businesses needing admin dashboards, booking, inventory, or reporting tools.",
    category: "Systems & Intelligence",
    whatItIs:
      "Custom software for how your business actually runs: admin dashboards, inventory and order management, booking systems, reporting, and role-based multi-user platforms.",
    whoItsFor:
      "Operations-heavy businesses, agencies, and organizations that have outgrown spreadsheets and need a system tailored to their workflow.",
    problem:
      "Manual processes and generic tools create delays, errors, and no single source of truth — slowing the whole operation down as it scales.",
    deliverables: [
      "Admin dashboard with CRUD workflows",
      "Role and permission management",
      "Booking, inventory, or reporting modules",
      "API-based platform and integrations",
    ],
    techDirection: ["Laravel", "Node.js", "PostgreSQL", "Supabase"],
    process: [
      { title: "Map", detail: "We model the real workflow, roles, and data the system has to manage." },
      { title: "Design", detail: "We design clear operational interfaces that stay simple to use." },
      { title: "Build", detail: "We develop the system module by module with clean APIs." },
      { title: "Adopt", detail: "We roll out, train, and refine based on how the team actually uses it." },
    ],
    outcome:
      "A reliable internal system that removes manual work, centralizes data, and stays simple to operate as the business grows.",
    faq: [
      { q: "Can it integrate with our existing tools?", a: "Yes. We build API-based systems that connect to payment gateways, third-party services, and existing databases." },
      { q: "Do you handle multi-user access?", a: "Yes. Role and permission management is a core part of how we structure operational systems." },
      { q: "Can we start small and expand?", a: "We build module by module, so you can launch a core workflow first and add capabilities over time." },
    ],
    tags: ["Dashboard", "Systems", "API"],
    icon: svgIcons.server,
    accent: "#10b981",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=640&h=360&fit=crop&q=80",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    summary: "Practical AI in your product: assistants, smart search, and automated insight.",
    detail: "Best for teams wanting to add useful AI features without the hype.",
    category: "Systems & Intelligence",
    whatItIs:
      "Integrating AI into your digital workflow where it genuinely helps: assistants and chatbots, content generation, smart search, recommendations, and automated report summaries.",
    whoItsFor:
      "Product teams and businesses that want real AI features tied to their data — not a generic chatbot bolted onto the homepage.",
    problem:
      "AI features are easy to demo and hard to ship well. Without the right integration, prompts, and guardrails, they become unreliable and untrusted.",
    deliverables: [
      "AI assistant or chatbot integration",
      "Smart search and content generation",
      "Product recommendation and automated summaries",
      "API integration with modern AI models",
    ],
    techDirection: ["Claude API", "Prompt caching", "Vector search", "Serverless"],
    process: [
      { title: "Scope", detail: "We find where AI creates real value instead of novelty." },
      { title: "Prototype", detail: "We test prompts, data flow, and guardrails on a focused use case." },
      { title: "Integrate", detail: "We wire the feature into your product with reliable APIs." },
      { title: "Refine", detail: "We tune accuracy, cost, and latency based on real usage." },
    ],
    outcome:
      "AI features that are accurate, cost-aware, and actually used — integrated cleanly into your existing product and data.",
    faq: [
      { q: "Which AI models do you use?", a: "We default to the latest, most capable models — such as Claude — and choose the right tier for accuracy, cost, and latency." },
      { q: "Is our data safe?", a: "We design integrations with clear data boundaries and guardrails, and discuss privacy and retention before building." },
      { q: "How do you control AI cost?", a: "We use techniques like prompt caching and right-sized models, and tune the feature against real usage to keep cost predictable." },
    ],
    tags: ["AI", "Automation", "API"],
    icon: svgIcons.sparkles,
    accent: "#f97316",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=640&h=360&fit=crop&q=80",
  },
  {
    id: "android-iot",
    title: "Android, IoT & API Integration",
    summary: "Mobile apps, device dashboards, and the backend APIs that connect them.",
    detail: "Best for projects spanning mobile apps, IoT devices, and connected systems.",
    category: "Systems & Intelligence",
    whatItIs:
      "Advanced system development beyond the browser: Android applications, IoT dashboards, device and sensor monitoring, QR-based systems, and the backend APIs that tie them together.",
    whoItsFor:
      "Product builders and businesses with hardware, mobile, or connected-device needs that require custom software end to end.",
    problem:
      "Mobile, hardware, and web usually live in silos. Without a connected API layer, data gets stranded and devices cannot talk to the systems that need them.",
    deliverables: [
      "Android application development",
      "IoT dashboard and device monitoring",
      "Sensor data and QR-based systems",
      "Backend API and payment gateway integration",
    ],
    techDirection: ["React Native", "Flutter", "REST API", "MQTT / WebSocket"],
    process: [
      { title: "Define", detail: "We map devices, data flows, and how mobile and web should connect." },
      { title: "Architect", detail: "We design the API layer that links apps, devices, and dashboards." },
      { title: "Build", detail: "We develop the app, dashboard, and backend as one connected system." },
      { title: "Integrate", detail: "We connect hardware, payments, and third-party services, then test end to end." },
    ],
    outcome:
      "A connected product where mobile apps, devices, and dashboards share one reliable API layer and a single source of truth.",
    faq: [
      { q: "Do you build for iOS too?", a: "We focus on Android and cross-platform stacks like React Native and Flutter, which can target iOS from the same codebase." },
      { q: "Can you work with our hardware?", a: "Yes. We integrate sensor data and devices through standard protocols and build the dashboards to monitor them." },
      { q: "Who owns the backend?", a: "You do. We build and document the API layer so your team can operate and extend it." },
    ],
    tags: ["Android", "IoT", "API"],
    icon: svgIcons.cpu,
    accent: "#84cc16",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=640&h=360&fit=crop&q=80",
  },
];

/* Helpers used by /tools pages */
export const getServiceById = (id: string): Service | undefined =>
  services.find((service) => service.id === id);

export const serviceCategories: string[] = [
  ...new Set(services.map((service) => service.category)),
];
