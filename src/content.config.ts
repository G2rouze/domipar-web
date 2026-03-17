import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const actualites = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actualites' }),
  schema: z.object({
    titre: z.string(),
    date: z.string(),
    texte: z.string(),
    href: z.string().url().optional(),
    ordre: z.number(),
  }),
});

export const collections = { actualites };
