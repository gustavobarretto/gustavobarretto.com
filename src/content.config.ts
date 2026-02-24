import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().optional().default(false),
  }),
});

const projects = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string().url().optional(),
    logo: z.string().optional(),
    linkSecondary: z.string().url().optional(),
    linkSecondaryLabel: z.string().optional(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { blog, projects };
export type BlogSchema = z.infer<typeof blog.schema>;
export type ProjectsSchema = z.infer<typeof projects.schema>;
