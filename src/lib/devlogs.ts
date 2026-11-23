import { getCollection, type CollectionEntry } from "astro:content";
import { localPath, sectionPath, type LanguageLinks, type Locale } from "@/i18n";

export async function getPublishedDevlogs(locale?: Locale) {
  return (await getCollection("devlogs", ({ data }) => !data.draft && (!locale || data.locale === locale)))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf() || a.id.localeCompare(b.id));
}

export function devlogUrl(post: CollectionEntry<"devlogs">) {
  const slug = post.id.split("/").map(encodeURIComponent).join("/");
  return localPath(post.data.locale, `/devlogs/${slug}`);
}

export function categoryUrl(locale: Locale, category: string) {
  return `${sectionPath(locale, "devlogs")}?category=${encodeURIComponent(category)}`;
}

export async function getDevlogLanguageLinks(post: CollectionEntry<"devlogs">): Promise<LanguageLinks> {
  const links: LanguageLinks = { [post.data.locale]: devlogUrl(post) };
  if (post.data.translationKey) {
    const translations = await getPublishedDevlogs();
    for (const translation of translations) {
      if (translation.data.translationKey === post.data.translationKey) {
        links[translation.data.locale] ??= devlogUrl(translation);
      }
    }
  }
  return links;
}
