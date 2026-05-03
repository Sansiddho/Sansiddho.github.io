import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const papers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    status: z.enum(['workinprogress', 'published', 'revise-resubmit']),
    venue: z.string().optional(),
    paperUrl: z.string().url().optional(),
    pdfUrl: z.string().optional(),
    supervisor: z.string().optional(),
    coauthors: z.array(z.string()).optional(),
    sortOrder: z.number().default(0),
  }),
});

const teaching = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/teaching' }),
  schema: z.object({
    title: z.string(),
    courseCode: z.string(),
    venue: z.string(),
    dateRange: z.string(),
    sortOrder: z.number().default(0),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/news' }),
  schema: z.object({
    date: z.string(),
    text: z.string(),
  }),
});

export const collections = { papers, teaching, news };
