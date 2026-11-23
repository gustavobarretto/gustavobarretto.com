import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { DEFAULT_LOCALE, LOCALES } from "./i18n";

const devlogs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/devlogs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
    locale: z.enum(LOCALES).default(DEFAULT_LOCALE),
    translationKey: z.string().trim().min(1).optional(),
    categories: z.array(z.string().trim().min(1)).default([])
      .transform((values) => [...new Set(values)]),
  }),
});

const workHighlights = z.array(z.object({
  title: z.string(),
  description: z.string(),
})).default([]);

const workText = z.object({
  title: z.string(),
  description: z.string(),
  period: z.string().optional(),
  role: z.string().optional(),
  details: z.array(z.string()).default([]),
  highlights: workHighlights,
  initiatives: z.array(z.object({
    title: z.string(),
    period: z.string().optional(),
    description: z.string(),
    highlights: workHighlights,
    reference: z.object({
      label: z.string(),
      url: z.string().url(),
    }).optional(),
  })).default([]),
  linkSecondaryLabel: z.string().optional(),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml,json}", base: "./src/content/work" }),
  schema: workText.extend({
    kind: z.enum(["experience", "project"]).default("project"),
    organization: z.string(),
    organizationUrl: z.string().url().optional(),
    link: z.string().url().optional(),
    logo: z.string().optional(),
    linkSecondary: z.string().url().optional(),
    date: z.coerce.date().optional(),
    translations: z.object({
      "pt-BR": workText.optional(),
      es: workText.optional(),
    }).default({}),
  }),
});

export const collections = { devlogs, work };
