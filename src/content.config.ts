import { defineCollection, z } from "astro:content";

const writing = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().default(""),
    published: z.boolean().default(true)
  })
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    github: z.string().default(""),
    demo: z.string().default(""),
    image: z.string().default(""),
    featured: z.boolean().default(false)
  })
});

export const collections = { writing, projects };
