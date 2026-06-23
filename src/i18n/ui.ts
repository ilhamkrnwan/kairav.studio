import en from "./lang/en.json";
import id from "./lang/id.json";

export const languages = {
  en: "EN",
  id: "ID",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const ui = {
  en,
  id,
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
