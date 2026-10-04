import { defaultLang, type Lang } from "../i18n/ui";

export type Service = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  deliverables: string[];
  tags: string[];
  icon: string;
  accent: string;
  image: string;
};

/* ── Inline SVG icons for each service ── */
const svgIcons = {
  globe: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  gauge: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8a3 3 0 0 0-3 3"/></svg>`,
  server: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>`,
  cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>`,
};

type ServiceText = Pick<Service, "title" | "summary" | "detail" | "deliverables" | "tags">;

/** Language-independent parts of each service (visuals + id). */
const serviceBase: (Pick<Service, "id" | "accent" | "image"> & { icon: keyof typeof svgIcons })[] = [
  {
    id: "brand-websites",
    icon: "globe",
    accent: "#7c5cfc",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&h=360&fit=crop&q=80",
  },
  {
    id: "performance-frontends",
    icon: "gauge",
    accent: "#06b6d4",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=640&h=360&fit=crop&q=80",
  },
  {
    id: "seo-geo-foundations",
    icon: "search",
    accent: "#2563eb",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=640&h=360&fit=crop&q=80",
  },
  {
    id: "digital-product-interfaces",
    icon: "server",
    accent: "#10b981",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=640&h=360&fit=crop&q=80",
  },
  {
    id: "design-systems",
    icon: "sparkles",
    accent: "#f97316",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=640&h=360&fit=crop&q=80",
  },
  {
    id: "technical-consultation",
    icon: "cpu",
    accent: "#84cc16",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=640&h=360&fit=crop&q=80",
  },
];

// AI-NOTE: text is keyed by service id so adding a locale never touches the visual config above.
const serviceText: Record<Lang, Record<string, ServiceText>> = {
  en: {
    "brand-websites": {
      title: "Brand Websites",
      summary: "Sharp visual identity, clear messaging, and fast delivery.",
      detail: "Best for businesses needing a distinctive, design-led online footprint.",
      deliverables: ["Custom responsive layout", "Style guide / token setup", "Content sections"],
      tags: ["UI/UX", "Astro", "Visual Brand"],
    },
    "performance-frontends": {
      title: "Performance Frontends",
      summary: "Lightweight interfaces built for speed, structure, and maintainability.",
      detail: "Best for product teams wanting faster page loads and healthy Core Web Vitals.",
      deliverables: ["Static-first Astro architectures", "Component engineering", "Assets optimization"],
      tags: ["Performance", "CWV", "Architecture"],
    },
    "seo-geo-foundations": {
      title: "SEO/GEO Foundations",
      summary: "Search-ready architecture for discoverability across modern engines and AI systems.",
      detail: "Best for companies aiming for organic traffic and AI search citation readiness.",
      deliverables: ["Schema structured data", "Heading hierarchies", "Semantic HTML layout"],
      tags: ["SEO", "GEO", "Metadata"],
    },
    "digital-product-interfaces": {
      title: "Digital Product Interfaces",
      summary: "Tailored user interfaces for web apps and dashboard workflows.",
      detail: "Best for software builders needing design-consistent and clear operational interfaces.",
      deliverables: ["React/Next.js component sets", "Navigation layouts", "Dashboard view design"],
      tags: ["Product Design", "React", "Dashboard"],
    },
    "design-systems": {
      title: "Design Systems",
      summary: "Shared visual tokens and UI components for cross-team consistency.",
      detail: "Best for expanding teams wanting uniform styles across multiple platforms.",
      deliverables: ["Tailwind preset variables", "Typography hierarchies", "Reusable Figma-to-code components"],
      tags: ["Design System", "Tokens", "UI Kit"],
    },
    "technical-consultation": {
      title: "Technical Consultation",
      summary: "Sound advice on frontend stack choices, structure, and performance.",
      detail: "Best for teams planning a new launch or refactoring legacy interfaces.",
      deliverables: ["Architecture review notes", "Optimization recommendations", "Clean code audits"],
      tags: ["Consulting", "Audit", "Frontend Tech"],
    },
  },
  id: {
    "brand-websites": {
      title: "Website Brand",
      summary: "Identitas visual yang tajam, pesan yang jelas, dan pengerjaan yang cepat.",
      detail: "Cocok untuk bisnis yang membutuhkan kehadiran online yang khas dan berbasis desain.",
      deliverables: ["Layout responsif kustom", "Style guide / penyiapan token", "Section konten"],
      tags: ["UI/UX", "Astro", "Brand Visual"],
    },
    "performance-frontends": {
      title: "Frontend Berperforma Tinggi",
      summary: "Antarmuka ringan yang dibangun untuk kecepatan, struktur, dan kemudahan perawatan.",
      detail: "Cocok untuk tim produk yang menginginkan pemuatan halaman lebih cepat dan Core Web Vitals yang sehat.",
      deliverables: ["Arsitektur Astro static-first", "Rekayasa komponen", "Optimasi aset"],
      tags: ["Performa", "CWV", "Arsitektur"],
    },
    "seo-geo-foundations": {
      title: "Fondasi SEO/GEO",
      summary: "Arsitektur siap-cari agar mudah ditemukan di mesin pencari modern dan sistem AI.",
      detail: "Cocok untuk perusahaan yang mengincar trafik organik dan kesiapan untuk dikutip oleh pencarian AI.",
      deliverables: ["Structured data schema", "Hierarki heading", "Layout HTML semantik"],
      tags: ["SEO", "GEO", "Metadata"],
    },
    "digital-product-interfaces": {
      title: "Antarmuka Produk Digital",
      summary: "Antarmuka pengguna yang disesuaikan untuk aplikasi web dan alur kerja dasbor.",
      detail: "Cocok untuk pembangun software yang membutuhkan antarmuka operasional yang konsisten secara desain dan jelas.",
      deliverables: ["Set komponen React/Next.js", "Layout navigasi", "Desain tampilan dasbor"],
      tags: ["Desain Produk", "React", "Dasbor"],
    },
    "design-systems": {
      title: "Design System",
      summary: "Token visual dan komponen UI bersama untuk konsistensi lintas tim.",
      detail: "Cocok untuk tim yang berkembang dan menginginkan gaya seragam di berbagai platform.",
      deliverables: ["Variabel preset Tailwind", "Hierarki tipografi", "Komponen Figma-ke-kode yang dapat dipakai ulang"],
      tags: ["Design System", "Token", "UI Kit"],
    },
    "technical-consultation": {
      title: "Konsultasi Teknis",
      summary: "Saran yang tepat tentang pilihan stack frontend, struktur, dan performa.",
      detail: "Cocok untuk tim yang merencanakan peluncuran baru atau merefaktor antarmuka lama.",
      deliverables: ["Catatan tinjauan arsitektur", "Rekomendasi optimasi", "Audit kode bersih"],
      tags: ["Konsultasi", "Audit", "Teknologi Frontend"],
    },
  },
};

export function getServices(lang: Lang): Service[] {
  return serviceBase.map(({ icon, ...base }) => {
    const text = serviceText[lang]?.[base.id] ?? serviceText[defaultLang]?.[base.id];
    return {
      ...base,
      title: text?.title ?? "",
      summary: text?.summary ?? "",
      detail: text?.detail ?? "",
      deliverables: text?.deliverables ?? [],
      tags: text?.tags ?? [],
      icon: svgIcons[icon],
    };
  });
}
