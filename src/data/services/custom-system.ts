import type { Service } from "./types";
import { svgIcons } from "./icons";

export const customSystem: Service = {
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
};
