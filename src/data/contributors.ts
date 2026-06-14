export type Contributor = {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  githubUrl: string;
  portfolioUrl?: string;
};

export const contributors: Contributor[] = [
  {
    name: "Kairav Core",
    role: "Creative Technology Lead",
    bio: "Shapes product direction, visual systems, and technical delivery for Kairav Studio projects.",
    avatar: "/logo-mark.avif",
    githubUrl: "https://github.com/kairavstudio",
    portfolioUrl: "https://kairav.studio",
  },
  {
    name: "Open Contributors",
    role: "Design & Engineering Contributors",
    bio: "A growing group of collaborators helping improve interfaces, systems, content, and experiments.",
    avatar: "/logo-mark.avif",
    githubUrl: "https://github.com/kairavstudio",
  },
  {
    name: "Project Partners",
    role: "Client & Community Collaborators",
    bio: "People and teams who bring real problems, feedback, and context into the studio workflow.",
    avatar: "/logo-mark.avif",
    githubUrl: "https://github.com/kairavstudio",
  },
];
