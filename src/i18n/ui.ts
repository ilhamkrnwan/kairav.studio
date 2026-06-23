export const languages = {
  en: "EN",
  id: "ID",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const ui = {
  en: {
    "nav.work": "Work",
    "nav.services": "Services",
    "nav.tools": "Tools",
    "nav.insights": "Insights",
    "nav.about": "About",
    "nav.teams": "Teams",
    "nav.contact": "Contact",
    "nav.start": "Start a Project",
    "nav.email": "Email Kairav Studio",
    "nav.github": "GitHub",
    "nav.menu": "Menu",
    "nav.navigate": "Navigate",
    "nav.switch": "ID",
    announcement: "Premium websites, fast builds, SEO/GEO-ready systems.",
  },
  id: {
    "nav.work": "Karya",
    "nav.services": "Layanan",
    "nav.tools": "Alat",
    "nav.insights": "Insight",
    "nav.about": "Tentang",
    "nav.teams": "Tim",
    "nav.contact": "Kontak",
    "nav.start": "Mulai Proyek",
    "nav.email": "Email Kairav Studio",
    "nav.github": "GitHub",
    "nav.menu": "Menu",
    "nav.navigate": "Navigasi",
    "nav.switch": "EN",
    announcement: "Website premium, build cepat, sistem siap SEO/GEO.",
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const queryLang = url.searchParams.get("lang");
  if (queryLang && queryLang in languages) return queryLang as Lang;

  const [, pathLang] = url.pathname.split("/");
  if (pathLang && pathLang in languages) return pathLang as Lang;

  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function localizePath(pathname: string, lang: Lang): string {
  const cleanPath = pathname.replace(/^\/(en|id)(?=\/|$)/, "") || "/";
  if (lang === defaultLang) return cleanPath;

  const separator = cleanPath.includes("?") ? "&" : "?";
  return `${cleanPath}${separator}lang=${lang}`;
}
