import { getCollection, type CollectionEntry } from "astro:content";
import readingTime from "reading-time";
import { defaultLang, getDict, isLang, type Lang } from "../i18n/ui";

type EntryWithData = { id: string; data: Record<string, any>; body?: string };
type Localized<T> = { slug: string; entry: T; isFallback: boolean };

/**
 * Groups `<lang>/<slug>` entries by slug and picks the requested locale, falling back to
 * the default locale when a translation does not exist yet. Content that only exists in a
 * non-default locale is not shown in the default locale.
 */
function localize<T extends EntryWithData>(entries: T[], lang: Lang): Localized<T>[] {
  const bySlug = new Map<string, Partial<Record<Lang, T>>>();

  for (const entry of entries) {
    const [entryLang, ...rest] = entry.id.split("/");
    if (!isLang(entryLang) || rest.length === 0) continue;

    const slug = rest.join("/");
    const bucket = bySlug.get(slug) ?? {};
    bucket[entryLang] = entry;
    bySlug.set(slug, bucket);
  }

  const result: Localized<T>[] = [];
  for (const [slug, bucket] of bySlug) {
    const entry = bucket[lang] ?? bucket[defaultLang];
    if (entry) result.push({ slug, entry, isFallback: !bucket[lang] });
  }
  return result;
}

export type InsightEntry = CollectionEntry<"insights">;
export type Insight = InsightEntry["data"] & {
  slug: string;
  entry: InsightEntry;
  readingTime: string;
  /** True when the requested locale has no translation and the English entry is shown. */
  isFallback: boolean;
};

export async function getInsights(lang: Lang): Promise<Insight[]> {
  const minRead = getDict(lang).insightsPage.minRead;
  const entries = await getCollection("insights");
  const localized = localize<InsightEntry>(entries, lang);

  return localized
    .map(({ slug, entry, isFallback }): Insight => {
      const minutes = Math.max(1, Math.ceil(readingTime(entry.body ?? "").minutes));
      return {
        ...entry.data,
        slug,
        entry,
        isFallback,
        readingTime: entry.data.readingTime ?? `${minutes} ${minRead}`,
      };
    })
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
}
