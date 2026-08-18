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
