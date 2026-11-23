import rss from "@astrojs/rss";
import { devlogUrl, getPublishedDevlogs } from "../lib/devlogs";
import { SITE } from "../config";

export async function GET(context) {
  const posts = await getPublishedDevlogs();
  return rss({
    title: `${SITE.title} — Devlogs`,
    description: SITE.desc,
    site: context.site ?? SITE.website,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: devlogUrl(post.id),
      categories: post.data.categories,
    })),
  });
}
