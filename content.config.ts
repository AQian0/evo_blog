import { defineCollection, defineContentConfig } from '@nuxt/content'
import * as v from 'valibot'

export default defineContentConfig({
  collections: {
    blogs: defineCollection({
      type: 'data',
      source: 'blogs/**',
      schema: v.object({
        blogId: v.string(),
        title: v.string(),
        cover: v.optional(v.string()),
        createdDate: v.date(),
        updatedDate: v.date(),
        tags: v.array(v.string()),
      })
    })
  }
})
