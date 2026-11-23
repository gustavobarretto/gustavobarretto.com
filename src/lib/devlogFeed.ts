import rss from "@astrojs/rss";
import { SITE } from "@/config";
import { type Locale } from "@/i18n";
import { messages } from "@/messages";
import { devlogUrl, getPublishedDevlogs } from "./devlogs";

export async function devlogFeed(locale: Locale) {
  const posts = await getPublishedDevlogs(locale);
  const { nav, devlogs } = messages[locale];
  return rss({
    title: `${SITE.title} — ${nav.devlogs}`,
    description: devlogs.description,
    site: SITE.website,
    customData: `<language>${locale}</language>`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: devlogUrl(post),
      categories: post.data.categories,
    })),
  });
}
