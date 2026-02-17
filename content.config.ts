import { defineCollection, defineContentConfig } from "@nuxt/content";
import { object, string, array, date, optional, record, any } from "valibot";

import { kindSchema } from "./app/types";

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
    profile: defineCollection({
      type: "data",
      source: "profile.yml",
      schema: object({
        nav: array(
          object({
            label: string(),
            path: string(),
          }),
        ),
        icons: array(
          object({
            prefix: string(),
            name: string(),
            path: string(),
          }),
        ),
      }),
    }),
    stacks: defineCollection({
      type: "data",
      source: "stacks.yml",
      schema: object({
        kinds: array(kindSchema),
      }),
    }),
  },
});
