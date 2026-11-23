import { getCollection } from "astro:content";

export async function getPublishedDevlogs() {
  return (await getCollection("devlogs", ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf() || a.id.localeCompare(b.id));
}

export function devlogUrl(id: string) {
  return `/devlogs/${id.split("/").map(encodeURIComponent).join("/")}`;
}

export function categoryUrl(category: string) {
  return `/devlogs?category=${encodeURIComponent(category)}`;
}
