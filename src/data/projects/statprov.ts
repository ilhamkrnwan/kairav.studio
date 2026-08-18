import type { Project } from "./types";

export const statprov: Project = {
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
  accent: "#7c5cfc",
};
