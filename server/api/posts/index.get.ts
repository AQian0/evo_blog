import { desc } from "drizzle-orm"
import { posts } from "~/server/db/drizzle/schema/blog"

export default defineEventHandler(async (event) => {
  const { page = 1, perPage = 10 }: { page: number, perPage: number} = getQuery(event)
  const db = useDrizzle()
  const totalCount = await db.$count(posts)
  appendPagination(event, totalCount)
  return (await db.select().from(posts).orderBy(desc(posts.createdAt)).limit(perPage).offset((page - 1) * perPage))
})
