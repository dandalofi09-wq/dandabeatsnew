import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string(),
    tags: z.array(z.string()),
    youtubeId: z.string(),
    featured: z.boolean().default(false),
    readingTime: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  'posts': postsCollection,
};
