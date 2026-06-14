export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readingTime: string;
  sections: {
    heading: string;
    body: string;
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-fast-websites-still-matter",
    title: "Why Fast Websites Still Matter",
    description: "Performance is not just a score. It shapes trust, clarity, and conversion.",
    date: "2026-06-15",
    category: "Performance",
    readingTime: "3 min read",
    sections: [
      {
        heading: "Speed supports trust",
        body:
          "A fast website feels more prepared. It helps visitors move from first impression to decision without waiting through avoidable friction.",
      },
      {
        heading: "Clean structure helps teams",
        body:
          "Performance also comes from disciplined structure: fewer heavy effects, clearer components, optimized assets, and content that does not fight the layout.",
      },
    ],
  },
  {
    slug: "building-with-an-open-source-spirit",
    title: "Building With an Open-Source Spirit",
    description: "Collaboration works best when the system is clear enough for people to contribute.",
    date: "2026-06-15",
    category: "Open Source",
    readingTime: "4 min read",
    sections: [
      {
        heading: "Clarity invites contribution",
        body:
          "A collaborative project needs small files, predictable names, and clear rules. That makes it easier for people to help without guessing the whole system.",
      },
      {
        heading: "Process matters",
        body:
          "Good contribution flow is practical: scoped tasks, useful comments, shared data files, and reviewable changes.",
      },
    ],
  },
  {
    slug: "seo-and-geo-for-modern-brands",
    title: "SEO and GEO for Modern Brands",
    description: "Search visibility now includes classic search and AI-generated answer surfaces.",
    date: "2026-06-15",
    category: "SEO",
    readingTime: "3 min read",
    sections: [
      {
        heading: "Structure comes first",
        body:
          "Strong headings, metadata, clear page intent, and concise copy make content easier for search engines and AI systems to understand.",
      },
      {
        heading: "Useful content wins",
        body:
          "Modern optimization is not about stuffing keywords. It is about making the brand, offer, proof, and next step easy to identify.",
      },
    ],
  },
];
