import type { Project } from "./types";

export const masjidflow: Project = {
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
  githubUrl: "https://github.com/Reyyy-05/masjidflow",
};
