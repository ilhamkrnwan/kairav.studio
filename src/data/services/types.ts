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
  /* ── GEO detail-page content ── */
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
