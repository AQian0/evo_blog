import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blogs: defineCollection({
      type: 'page',
      source: 'blogs/**',
      schema: z.object({
        blogId: z.string(),
        cover: z.string().optional(),
        date: z.date(),
        tags: z.array(z.string()),
      })
    })
  }
})
