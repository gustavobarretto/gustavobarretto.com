// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap, { ChangeFreqEnum } from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { SITE } from "./src/config";

export default defineConfig({
  site: SITE.website,
  trailingSlash: "never",
  redirects: {
    "/about": "/backstory",
    "/projects": "/work",
    "/blog": "/devlogs",
  },
  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, "") || "/";
        return !["/", "/about", "/projects", "/blog"].includes(path) && !path.startsWith("/blog/");
      },
      serialize: (item) => {
        const url = item.url;
        item.changefreq = ChangeFreqEnum.MONTHLY;
        item.priority = 0.5;
        if (url.endsWith("/work")) {
          item.priority = 1.0;
          item.changefreq = ChangeFreqEnum.DAILY;
          item.lastmod = new Date().toISOString();
        } else if (url.endsWith("/backstory") || url.endsWith("/devlogs") || url.endsWith("/work")) {
          item.priority = 0.9;
          item.changefreq = ChangeFreqEnum.WEEKLY;
        } else if (url.includes("/devlogs/")) {
          item.priority = 0.8;
          item.changefreq = ChangeFreqEnum.WEEKLY;
        }
        if (url.endsWith("/") && url !== SITE.website + "/") {
          item.url = item.url.slice(0, -1);
        }
        return item;
      },
    }),
  ],
});
