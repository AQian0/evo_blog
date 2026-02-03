import { defineCollection, defineContentConfig } from "@nuxt/content";
import { object, string, array, date, optional, record, any } from "valibot";

export default defineContentConfig({
  collections: {
    blogs: defineCollection({
      type: "data",
      source: "blogs/**",
      schema: object({
        blogId: string(),
        title: string(),
        description: optional(string()),
        path: string(),
        body: record(string(), any()),
        cover: optional(string()),
        createdDate: date(),
        updatedDate: date(),
        tags: array(string()),
      }),
    }),
  },
});
