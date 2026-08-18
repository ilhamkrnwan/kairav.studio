import en from "./lang/en.json";
import id from "./lang/id.json";
import jv from "./lang/jv.json";

export const languages = {
  en: "EN",
  id: "ID",
  jv: "JV",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const ui = {
  en,
  id,
  jv,
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
  const cleanPath = pathname.replace(/^\/(en|id|jv)(?=\/|$)/, "") || "/";
  const formattedPath = cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
  const base = formattedPath === "/" ? "" : formattedPath.replace(/\/$/, "");
  
  if (lang === defaultLang) return base || "/";
  return `/${lang}${base}`;
}
