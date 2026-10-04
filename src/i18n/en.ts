/**
 * English dictionary — the source of truth for the dictionary shape.
 * `src/i18n/id.ts` is typed as `Dictionary`, so `astro check` fails if a key is
 * missing or has a different shape in another locale.
 *
 * Long-form, per-entity content lives elsewhere:
 *  - articles / case studies → `src/content/**` (one folder per locale)
 *  - services / contributors → `src/data/*.ts` (per-locale text blocks)
 */
export const en = {
  meta: {
    htmlLang: "en",
    ogLocale: "en_US",
    defaultTitle: "Kairav Studio",
    defaultDescription:
      "Kairav Studio builds modern brand websites, SEO/GEO-ready content architecture, and scalable digital systems.",
  },

  nav: {
    work: "Work",
    services: "Services",
    insights: "Insights",
    about: "About",
    teams: "Teams",
    contact: "Contact",
    start: "Start a Project",
    email: "Email Kairav Studio",
    github: "GitHub",
    menu: "Menu",
    navigate: "Navigate",
    home: "Kairav Studio home",
    actions: "Site actions",
    primary: "Primary navigation",
    switchLanguage: "Switch language",
    announcement: "Premium websites, fast builds, SEO/GEO-ready systems.",
  },

  footer: {
    description:
      "A digital studio and open-source creative technology project for modern websites, web apps, AI integration, and maintainable digital systems.",
    explore: "Explore",
    contact: "Contact",
    startProject: "Start a Project",
    links: {
      services: "Services",
      works: "Works",
      teams: "Teams",
      about: "About",
      insights: "Insights",
      privacy: "Privacy",
      terms: "Terms",
    },
    rights: "Built with Astro.",
  },

  cta: {
    eyebrow: "Start a Project",
    title: "Have a website, product, or workflow idea?",
    description: "Let's shape it into a clear, fast, and maintainable digital experience.",
    contact: "Contact Us",
    works: "View Works",
  },

  common: {
    backToWorks: "Back to Works",
    backToInsights: "Back to Insights",
  },

  hero: {
    label: "Design-Led Technology Studio",
    titleLines: [["WE", "CRAFT"], ["DIGITAL", "SYSTEMS"], ["THAT", "FEEL", "ALIVE."]],
    subtitle:
      "Websites, interfaces, and performance systems for brands that need clarity, speed, and long-term digital growth.",
    secondary: "View Systems",
    trust: ["ASTRO + GSAP", "SEO/GEO READY", "PERFORMANCE-FIRST", "DESIGN SYSTEMS"],
    coordBottom: "DESIGN SYSTEMS / PERFORMANCE / SCALE",
    board: {
      label: "STUDIO OPERATING BOARD",
      status: "LIVE SYSTEM",
      scoreTitle: "Performance",
      scoreSub: "Core Web Vitals — Healthy",
      capabilities: [
        { label: "Design system", status: "ACTIVE" },
        { label: "Fast build", status: "READY" },
        { label: "SEO/GEO structure", status: "ACTIVE" },
        { label: "Scalable frontend", status: "READY" },
      ],
      timeline: ["Discover", "Design", "Build", "Optimize"],
      footerOne: "KAIRAV SYSTEMS // ACTIVE",
      footerTwo: "ASTRO + GSAP // PERFORMANCE-FIRST",
    },
    badges: ["SEO/GEO READY", "BUILD READY", "PERF: 100"],
  },

  systems: {
    eyebrow: "What We Build",
    title: "What we turn into systems.",
    description:
      "Every project starts with a brand need and becomes a structured, performant, discoverable digital system.",
    cards: [
      {
        title: "Brand Websites",
        description: "Sharp visual identity, clear messaging, and fast delivery.",
        tags: ["Identity", "Speed", "Clarity"],
      },
      {
        title: "Performance Frontends",
        description: "Lightweight interfaces built for speed, structure, and maintainability.",
        tags: ["Astro", "Core Web Vitals", "Static-first"],
      },
      {
        title: "SEO/GEO Foundations",
        description: "Search-ready architecture for discoverability across modern engines.",
        tags: ["Structure", "Metadata", "Discovery"],
      },
    ],
  },

  featureGrid: {
    eyebrow: "Fully Featured",
    title: "Everything you need to ship a modern website.",
    description:
      "Kairav Studio brings design, performance, content structure, and maintainable engineering together. Need more? We extend with the right tools.",
    items: [
      {
        title: "Design-led interfaces",
        description:
          "Sharp, considered UI/UX with reusable components that stay consistent as the site grows.",
      },
      {
        title: "Fast by default",
        description:
          "Static-first Astro builds, optimized assets, and minimal JavaScript for healthy Core Web Vitals.",
      },
      {
        title: "SEO & GEO structure",
        description:
          "Clear headings, metadata, internal links, and entity-based content for search engines and AI discovery.",
      },
      {
        title: "Scalable systems",
        description:
          "From landing pages to dashboards, APIs, AI workflows, and Android/IoT integrations.",
      },
      {
        title: "Open-source spirit",
        description:
          "Transparent structure, reviewable notes, and contributor-friendly patterns from day one.",
      },
      {
        title: "Maintainable foundations",
        description:
          "Typed data, clean components, and documented choices that keep the work easy to evolve.",
      },
    ],
  },

  home: {
    meta: {
      title: "Kairav Studio - Design-led Technology Studio",
      description:
        "Kairav Studio builds modern brand websites, SEO/GEO-ready content architecture, and scalable digital systems for businesses that care about design, performance, and clarity.",
    },
    services: {
      eyebrow: "Services",
      title: "Focused services for modern digital teams.",
      description: "Concise, collaborative work across websites, systems, optimization, and automation.",
      all: "All Services",
    },
    performance: {
      eyebrow: "Performance",
      title: "Performance is part of the user experience.",
      description:
        "A polished website should also be lightweight, responsive, and structured to keep Core Web Vitals healthy.",
      itemBody: "Practical choices that keep the site fast without sacrificing the brand experience.",
      items: [
        "Static-first pages",
        "Optimized assets",
        "Clean component structure",
        "Reduced JavaScript",
      ],
    },
    seo: {
      eyebrow: "SEO / GEO",
      title: "Built for search engines and AI-powered discovery.",
      description:
        "Kairav Studio treats SEO and GEO as a structure problem first: headings, metadata, internal links, entities, and concise content.",
      itemBody:
        "Content and page structure that help humans, search engines, and AI systems understand the business.",
      items: [
        "Technical SEO",
        "AI-readable structure",
        "Clear service definitions",
        "Useful content blocks",
      ],
    },
    works: {
      eyebrow: "Work",
      title: "A mix of internal, client, experimental, and open-source work.",
      description: "The portfolio starts small and grows as projects become ready to share.",
      button: "View Works",
    },
    capability: {
      eyebrow: "System Capability",
      title: "From high-performance websites to custom digital systems.",
      description:
        "The studio can extend beyond landing pages into dashboards, API platforms, Android apps, IoT dashboards, payment integrations, and automation.",
      itemBody: "Built around real business needs, with interfaces that stay simple to use.",
      items: [
        "Admin dashboard",
        "Order and inventory system",
        "AI-powered workflow",
        "Android, IoT, and API",
      ],
    },
    process: {
      eyebrow: "Process",
      title: "A simple workflow that keeps projects moving.",
      description: "Every project starts with clarity, then moves through design, build, review, and launch.",
      stepBody: "A clear step with focused output, review notes, and next actions.",
      steps: ["Discover", "Design", "Build", "Launch"],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Clear answers before the first call.",
      description: "Simple context for brands and teams considering a website or digital system project.",
      items: [
        {
          question: "What does Kairav Studio build?",
          answer:
            "Kairav Studio builds brand websites, SEO/GEO-ready content structures, custom dashboards, AI integrations, Android applications, IoT dashboards, and API-based systems.",
        },
        {
          question: "Is Kairav Studio only for website projects?",
          answer:
            "No. Websites are the main entry point, but the studio can also support scalable digital systems for operations, automation, and product workflows.",
        },
        {
          question: "What makes the website SEO/GEO-ready?",
          answer:
            "Clear page intent, structured headings, useful content blocks, internal links, metadata, sitemap support, and service definitions that are easy for search engines and AI assistants to understand.",
        },
        {
          question: "What technology does Kairav Studio use?",
          answer:
            "The frontend stack includes Astro, Tailwind CSS, and TypeScript. For backend systems, we use Laravel, Node.js, Supabase, and PostgreSQL. Deployment targets include Vercel, VPS, Docker, and Cloudflare.",
        },
        {
          question: "Who is Kairav Studio for?",
          answer:
            "Local brands, small and medium businesses, startups, agencies, restaurants, clinics, education businesses, and companies that need custom internal systems or a stronger digital presence.",
        },
      ],
    },
  },

  servicesPage: {
    meta: {
      title: "Services - Kairav Studio",
      description:
        "Explore Kairav Studio services for modern websites, custom web apps, SEO/GEO optimization, AI automation, and maintenance.",
    },
    hero: {
      eyebrow: "Services",
      title: "Focused web, product, and automation services.",
      description:
        "We keep the offer clear: modern websites, practical systems, stronger discovery, and maintainable improvements.",
    },
    card: { whoFor: "Who it's for:" },
    approach: {
      eyebrow: "Approach",
      title: "Not overly salesy. Just useful, clear, and built to last.",
      description:
        "Every engagement starts by understanding the business goal, current constraints, and what should be easier after launch.",
      stepBody:
        "Small, reviewable steps keep the project understandable for clients and contributors.",
      steps: [
        "Audit what exists",
        "Design the right structure",
        "Build reusable parts",
        "Measure and improve",
      ],
      button: "Contact Us",
    },
  },

  about: {
    meta: {
      title: "About - Kairav Studio",
      description:
        "Learn about Kairav Studio, a collaborative digital studio and open-source creative technology project.",
    },
    hero: {
      eyebrow: "About",
      title: "A studio for modern web experiences and collaborative digital systems.",
      description:
        "Kairav Studio exists to help brands and projects build websites that feel considered, load quickly, and stay maintainable as the team grows.",
    },
    positioning: {
      eyebrow: "Positioning",
      title: "Premium, practical, and open to collaboration.",
      description:
        "We care about visual identity, interface clarity, performance, SEO/GEO structure, and the small engineering decisions that make a site easier to evolve.",
      itemBody:
        "We keep the work transparent, component-based, and structured enough for contributors and clients to understand.",
      items: ["Modern web craft", "Open-source mindset", "Clear delivery process"],
    },
    openSource: {
      badge: "Open Source Spirit",
      title: "Built together, in the open.",
      description:
        "The studio should feel polished, but the process stays simple and honest. Work is shaped with contributors, transparent notes, and reusable patterns that anyone on the team can pick up.",
      valueBody:
        "Practical decisions, clean structure, and useful notes help the work stay readable after launch.",
      values: [
        "Clarity before complexity",
        "Performance as default",
        "Systems that invite contribution",
      ],
    },
    contributors: {
      eyebrow: "Core Contributors",
      title: "The people behind Kairav Studio.",
      description:
        "For v1, contributor profiles live here and on Home. The data is ready to become a dedicated page later.",
      github: "GitHub",
      portfolio: "Portfolio",
    },
  },

  teams: {
    meta: {
      title: "Teams - Kairav Studio",
      description: "Meet the team behind Kairav Studio's digital systems and engineering.",
    },
    hero: {
      eyebrow: "Team",
      title: "The people behind the systems.",
      description:
        "Kairav Studio is a design-led technology studio. We shape visual platforms, develop resilient frontends, and implement technical SEO/GEO structures.",
    },
    card: {
      logoAlt: "Kairav Studio Logo",
      title: "Kairav Studio Core Team",
      subtitle: "Design, frontend engineering, performance, SEO/GEO strategy",
      body: "We are a collection of product designers and systems engineers who care about clarity, performance, and clean code. We treat every web project as a structured interface rather than just a collection of templates.",
    },
    note: {
      label: "Note",
      body: "More collaborators and specialist profiles will be added as the studio grows. We collaborate with developers, copywriters, and search specialists to deliver custom systems for projects of all sizes.",
    },
  },

  contact: {
    meta: {
      title: "Contact - Kairav Studio",
      description:
        "Contact Kairav Studio for website, web app, SEO/GEO, AI automation, and maintenance projects.",
    },
    hero: {
      eyebrow: "Contact",
      title: "Start with the goal, the problem, or the rough idea.",
      description:
        "Tell us what you are building, what needs to improve, or what kind of digital system your team needs next.",
    },
    info: {
      title: "Contact Info",
      whatsapp: "WhatsApp",
      github: "GitHub",
      linkedin: "LinkedIn",
      emailUs: "Email Us",
      directEmail: "hello@kairav.studio",
      slaBadge: "24h Response SLA",
      directChatDesc: "Need a fast initial feasibility check? Reach our team directly via chat or email.",
    },
    form: {
      servicesTitle: "Select Capabilities Needed",
      services: [
        "Web Applications",
        "Mobile Engineering",
        "Design Systems",
        "Cloud & Systems",
        "GEO & AI Discovery",
      ],
      budgetTitle: "Target Budget Range",
      budgets: [
        "< $2,500",
        "$2,500 – $5,000",
        "$5,000 – $10,000",
        "$10,000+",
      ],
      timelineTitle: "Target Timeline",
      timelines: [
        "< 1 Month",
        "1 – 2 Months",
        "3+ Months",
        "Flexible",
      ],
      name: "Your Name",
      namePlaceholder: "e.g. Alex Morgan",
      email: "Work Email",
      emailPlaceholder: "alex@company.com",
      company: "Company / Project Name",
      companyPlaceholder: "e.g. Acme Corp or Personal Project",
      notes: "Project Brief & Objectives",
      notesPlaceholder: "Tell us about the project goals, current challenges, key deliverables, and any deadlines...",
      send: "Send Project Inquiry",
      submitting: "Transmitting Inquiry...",
      successTitle: "Inquiry Transmitted Successfully",
      successMessage: "Thank you for sharing your brief. Our principal systems architect reviews every submission within 24 hours.",
      chatWhatsapp: "Forward to WhatsApp",
      chatTelegram: "Forward to Telegram",
      resetForm: "Submit Another Brief",
    },
  },

  insightsPage: {
    meta: {
      title: "Insights - Kairav Studio",
      description:
        "Read Kairav Studio insights about website performance, SEO, GEO, UI/UX, Astro, AI integration, and custom systems.",
    },
    hero: {
      eyebrow: "Insights",
      title: "Useful notes on websites, SEO/GEO, AI, and custom systems.",
      description:
        "Short writing for brands and teams that want stronger digital presence and clearer technology decisions.",
    },
    minRead: "min read",
    titleSuffix: "Kairav Studio",
    fallbackNotice: "This article is not available in English yet.",
  },

  legal: {
    eyebrow: "Legal",
    privacy: {
      meta: {
        title: "Privacy Policy - Kairav Studio",
        description: "Kairav Studio privacy policy for website visitors and project inquiries.",
      },
      title: "Privacy Policy",
      description:
        "A simple policy for how Kairav Studio handles basic website and inquiry information.",
      sections: [
        {
          heading: "Information We Collect",
          body: "We may collect information you send through email, contact forms, or project inquiries, such as your name, email address, company, and project notes.",
        },
        {
          heading: "How We Use It",
          body: "We use submitted information to reply to inquiries, plan project discussions, provide services, and improve our communication process.",
        },
        {
          heading: "Third Parties",
          body: "We do not sell personal information. Some basic data may be processed by email, hosting, analytics, or collaboration tools used to operate the website and studio workflow.",
        },
      ],
      contact: { heading: "Contact", before: "For privacy questions, contact us at ", after: "." },
    },
    terms: {
      meta: {
        title: "Terms of Service - Kairav Studio",
        description: "Kairav Studio terms of service for website visitors and project discussions.",
      },
      title: "Terms of Service",
      description:
        "A simple terms template for using the Kairav Studio website and starting project conversations.",
      sections: [
        {
          heading: "Website Use",
          body: "This website is provided for information, project inquiries, and studio updates. Do not misuse the site or attempt to disrupt its operation.",
        },
        {
          heading: "Project Discussions",
          body: "Sending an inquiry does not create a formal agreement. Project scope, timeline, deliverables, and payment terms must be confirmed separately.",
        },
        {
          heading: "Content",
          body: "Website content may change over time. Portfolio, service, and blog content is provided as general information unless stated otherwise.",
        },
      ],
      contact: { heading: "Contact", before: "For terms questions, contact us at ", after: "." },
    },
  },
};

export type Dictionary = typeof en;
