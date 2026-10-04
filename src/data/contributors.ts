import { defaultLang, type Lang } from "../i18n/ui";

export type Contributor = {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  githubUrl: string;
  portfolioUrl?: string;
};

type ContributorText = Pick<Contributor, "role" | "bio">;

/** Language-independent parts. `name` doubles as the key for the localized text below. */
const contributorBase: Omit<Contributor, keyof ContributorText>[] = [
  {
    name: "Kairav Core",
    avatar: "/logo-mark.avif",
    githubUrl: "https://github.com/kairavstudio",
    portfolioUrl: "https://kairav.studio",
  },
  {
    name: "Open Contributors",
    avatar: "/logo-mark.avif",
    githubUrl: "https://github.com/kairavstudio",
  },
  {
    name: "Project Partners",
    avatar: "/logo-mark.avif",
    githubUrl: "https://github.com/kairavstudio",
  },
];

const contributorText: Record<Lang, Record<string, ContributorText>> = {
  en: {
    "Kairav Core": {
      role: "Creative Technology Lead",
      bio: "Shapes product direction, visual systems, and technical delivery for Kairav Studio projects.",
    },
    "Open Contributors": {
      role: "Design & Engineering Contributors",
      bio: "A growing group of collaborators helping improve interfaces, systems, content, and experiments.",
    },
    "Project Partners": {
      role: "Client & Community Collaborators",
      bio: "People and teams who bring real problems, feedback, and context into the studio workflow.",
    },
  },
  id: {
    "Kairav Core": {
      role: "Pemimpin Teknologi Kreatif",
      bio: "Membentuk arah produk, sistem visual, dan pengerjaan teknis untuk proyek Kairav Studio.",
    },
    "Open Contributors": {
      role: "Kontributor Desain & Engineering",
      bio: "Kelompok kolaborator yang terus bertumbuh, membantu menyempurnakan antarmuka, sistem, konten, dan eksperimen.",
    },
    "Project Partners": {
      role: "Kolaborator Klien & Komunitas",
      bio: "Orang dan tim yang membawa masalah nyata, umpan balik, dan konteks ke dalam alur kerja studio.",
    },
  },
};

export function getContributors(lang: Lang): Contributor[] {
  return contributorBase.map((base) => {
    const text = contributorText[lang]?.[base.name] ?? contributorText[defaultLang]?.[base.name];
    return {
      ...base,
      role: text?.role ?? "",
      bio: text?.bio ?? "",
    };
  });
}
