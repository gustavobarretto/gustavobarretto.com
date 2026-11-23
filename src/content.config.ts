import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const devlogs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/devlogs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
    categories: z.array(z.string().trim().min(1)).default([])
      .transform((values) => [...new Set(values)]),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.{yaml,yml,json}", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    kind: z.enum(["experience", "project"]).default("project"),
    period: z.string(),
    organization: z.string(),
    role: z.string().optional(),
    details: z.array(z.string()).default([]),
    initiatives: z.array(z.object({
      title: z.string(),
      period: z.string().optional(),
      description: z.string(),
      highlights: z.array(z.object({
        title: z.string(),
        description: z.string(),
      })).default([]),
      reference: z.object({
        label: z.string(),
        url: z.string().url(),
      }).optional(),
    })).default([]),
    link: z.string().url().optional(),
    logo: z.string().optional(),
    linkSecondary: z.string().url().optional(),
    linkSecondaryLabel: z.string().optional(),
    date: z.coerce.date(),
  }),
});

export const collections = { devlogs, work };
