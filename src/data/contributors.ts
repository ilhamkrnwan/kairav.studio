export type Contributor = {
  name: string;
  /** GitHub handle, shown as @handle */
  handle?: string;
  role: string;
  bio: string;
  avatar: string;
  skills?: string[];
  githubUrl: string;
  portfolioUrl?: string;
};

export const contributors: Contributor[] = [
  {
    name: "Ilham Kurniawan",
    handle: "ilhamkrnwan",
    role: "Inisiator & Lead Engineer",
    bio: "Inisiator of Kairav Studio. Fullstack web and mobile developer who shapes product direction, visual systems, and technical delivery across the studio's projects.",
    avatar: "https://github.com/ilhamkrnwan.png",
    skills: ["Astro", "Nuxt", "Next.js", "Laravel", "Flutter", "TypeScript"],
    githubUrl: "https://github.com/ilhamkrnwan",
    portfolioUrl: "https://ilhamkrnwan.my.id",
  },
  {
    name: "Reyhan Albar Fahryan",
    handle: "Reyyy-05",
    role: "Mobile & Frontend Developer",
    bio: "Mobile and frontend developer focused on React Native and TypeScript. Builds the studio's mobile products, including BioLearn and MasjidFlow.",
    avatar: "https://github.com/Reyyy-05.png",
    skills: ["React Native", "Expo", "React", "TypeScript"],
    githubUrl: "https://github.com/Reyyy-05",
  },
  {
    name: "Moriarty",
    handle: "fantzyyy",
    role: "Security & Backend Engineer",
    bio: "Security and backend engineer with a CTF and offensive-security background. Hardens systems, reviews code, and builds reliable APIs in Python and TypeScript.",
    avatar: "https://github.com/fantzyyy.png",
    skills: ["Python", "TypeScript", "Security", "API"],
    githubUrl: "https://github.com/fantzyyy",
  },
];
