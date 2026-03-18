import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const actualites = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actualites' }),
  schema: z.object({
    titre: z.string(),
    date: z.string(),
    texte: z.string(),
    href: z.string().url().optional(),
  }),
});

const evenements = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/evenements' }),
  schema: z.object({
    titre: z.string(),
    description: z.string(),
    lien: z.string().url().optional(),
    lienLabel: z.string().optional(),
    image1: z.string().optional(),
    image1Alt: z.string().optional(),
    image2: z.string().optional(),
    image2Alt: z.string().optional(),
  }),
});

export const collections = { actualites, evenements };
