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
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "biolearn",
    title: "BioLearn",
    type: "Mobile",
    year: "2026",
    summary: "Biology learning mobile app concept for high school students, built with Expo React Native and TypeScript.",
    problem: "High school students often find biology lessons abstract and hard to memorize without interactive visual aids and structured self-assessments.",
    solution: "We designed and prototyped a mobile learning application featuring role-based entry, visual learning modules, interactive mock quizzes, and performance tracking.",
    features: ["Role-based entry", "Interactive quizzes", "Video learning flows", "Progress tracking"],
    stack: ["Expo", "React Native", "TypeScript", "Zustand"],
    outcome: "A polished, highly performant mobile concept that showcases clean state management and interactive learning mechanics.",
    contributors: ["Kairav Core", "Reyyy-05"],
    accent: "#b6ff5c",
    githubUrl: "https://github.com/Reyyy-05/BioLearn"
  },
  {
    slug: "masjidflow",
    title: "MasjidFlow",
    type: "Mobile",
    year: "2026",
    summary: "Mobile MVP for mosque event management, approval flow, agenda tracking, and role-based access control.",
    problem: "Managing mosque activities, committee tasks, and approval chains manually leads to administrative delays and lack of coordination.",
    solution: "An MVP mobile application that streamlines administrative tasks, allowing members to manage events, track approval lists, and coordinate schedules in real-time.",
    features: ["Approval workflow", "Role-based access", "Task assignments", "Agenda calendar"],
    stack: ["Expo", "React Native", "TypeScript", "Zustand"],
    outcome: "Simplified coordination and administrative tasks, improving responsiveness and data clarity for the committee.",
    contributors: ["Kairav Core", "Reyyy-05"],
    accent: "#06b6d4",
    githubUrl: "https://github.com/Reyyy-05/masjidflow"
  },
  {
    slug: "statprov",
    title: "StatProv",
    type: "Research",
    year: "2026",
    summary: "Dataset provenance and integrity verification system concept for statistical data workflows.",
    problem: "Data analysts and decision-makers often struggle to verify the integrity and historical modifications of statistical datasets.",
    solution: "We conceptualized a data provenance validation prototype utilizing cryptographic hashes, clear version timelines, and visual validation warning flags.",
    features: ["Hash verification", "Version timeline", "Validation warnings", "Provenance logs"],
    stack: ["Next.js", "TypeScript", "Prisma", "SQLite"],
    outcome: "A robust workflow concept proving integrity and trust checking for public statistical databases.",
    contributors: ["Kairav Core"],
    accent: "#7c5cfc"
  },
  {
    slug: "sistem-informasi-desa",
    title: "Sistem Informasi Desa",
    type: "Web Design",
    year: "2025",
    summary: "Village information system with public-facing pages for local UMKM, culture, news, and admin CRUD features.",
    problem: "Local village governance often struggles to share UMKM products, updates, and tourism news effectively in a single, simple platform.",
    solution: "A lightweight, native web-based CMS and public-facing portal designed to aggregate village data, cultural news, and business updates.",
    features: ["UMKM showcase", "Culture & tourism CMS", "Development maps", "Admin dashboard CRUD"],
    stack: ["PHP Native", "MySQL", "Tailwind CSS", "Chart.js"],
    outcome: "A functional, lightweight village CMS system designed to load quickly on lower-end devices.",
    contributors: ["Kairav Core"],
    accent: "#f97316"
  },
  {
    slug: "kairav-studio-landing-upgrade",
    title: "Kairav Studio Landing",
    type: "Systems",
    year: "2026",
    summary: "Premium landing page redesign for Kairav Studio, transforming the homepage into a more editorial, cinematic interface.",
    problem: "The original Kairav Studio landing page felt template-like, standard, and lacked a design-first tech atelier visual identity.",
    solution: "Complete layout rewrite, introduction of the Studio Operating Board, custom radial lighting atmosphere, trust strip, and scroll parallax animations.",
    features: ["Operating Board dashboard", "Dynamic SVG performance", "GSAP scroll parallax", "CSS dot-grid atmosphere"],
    stack: ["Astro", "TypeScript", "CSS", "GSAP"],
    outcome: "A highly distinctive, immersive landing experience that loads instantly and reflects our premium digital systems philosophy.",
    contributors: ["Kairav Core"],
    accent: "#b6ff5c",
    githubUrl: "https://github.com/ilhamkrnwan/kairav.studio",
    liveUrl: "/"
  }
];
