// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  summary: z.string().optional(),
  cover: z.string().optional(),
  readingTime: z.number().optional(),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: postSchema,
});

const newsletter = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/newsletter' }),
  schema: postSchema,
});

export const collections = { blog, newsletter };