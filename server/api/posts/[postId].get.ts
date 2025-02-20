import { eq } from "drizzle-orm"
import { posts } from "~/server/db/drizzle/schema/blog"

export default defineEventHandler(async (event) => {
  const postId = getRouterParam(event, 'postId')!
  return (await useDrizzle().select().from(posts).where(eq(posts.postId, Number(postId)))).pop()
})
