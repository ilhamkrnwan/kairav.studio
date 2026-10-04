import { en, type Dictionary } from "./en";
import { id } from "./id";

export const languages = {
  en: "EN",
  id: "ID",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const locales = Object.keys(languages) as Lang[];

const dictionaries: Record<Lang, Dictionary> = { en, id };

const intlLocales: Record<Lang, string> = { en: "en-US", id: "id-ID" };

const localePrefix = new RegExp(`^/(${locales.join("|")})(?=/|$)`);

export function isLang(value: string | undefined): value is Lang {
  return value !== undefined && (locales as string[]).includes(value);
}

/**
 * Locale is derived from the URL path only (`/id/...` → `id`, everything else → default).
 * AI-NOTE: query params such as `?lang=id` cannot be read in a static build, so they
 * are intentionally not supported.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split("/");
  return isLang(segment) ? segment : defaultLang;
}

export function getDict(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Removes a leading locale segment: `/id/works` → `/works`, `/id` → `/`. */
export function stripLocale(pathname: string): string {
  return pathname.replace(localePrefix, "") || "/";
}

/**
 * Returns the internal `path` for the given locale. Accepts paths that already carry a
 * locale prefix, and keeps query strings / hashes. External links, `mailto:` and
 * in-page anchors are returned untouched.
 *
 *   localizePath("/works", "id")      → "/id/works"
 *   localizePath("/id/works/", "en")  → "/works/"
 *   localizePath("/", "id")           → "/id/"
 */
export function localizePath(path: string, lang: Lang): string {
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path;

  const [, pathname = "/", suffix = ""] = path.match(/^([^?#]*)(.*)$/) ?? [];
  const clean = stripLocale(pathname || "/");

  if (lang === defaultLang) return `${clean}${suffix}`;
  return `${clean === "/" ? `/${lang}/` : `/${lang}${clean}`}${suffix}`;
}

/** Same page in every locale — used for `hreflang` and the language switcher. */
export function getAlternates(pathname: string) {
  return locales.map((lang) => ({ lang, path: localizePath(pathname, lang) }));
}

/** Value for the `[...locale]` rest param: `undefined` for the default locale (no prefix). */
export function localeParam(lang: Lang): string | undefined {
  return lang === defaultLang ? undefined : lang;
}

/** `getStaticPaths` for non-dynamic pages living under `src/pages/[...locale]/`. */
export function getLocalePaths() {
  return locales.map((lang) => ({ params: { locale: localeParam(lang) } }));
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(intlLocales[lang], { dateStyle: "long", timeZone: "UTC" }).format(date);
}
