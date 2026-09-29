import { queryCollection } from "@nuxt/content/server";
import Fuse from "fuse.js";

export default defineEventHandler(async event => {
  const {
    page = 1,
    perPage = 10,
    search = "",
  }: { page: number; perPage: number; search: string } = getQuery(event);
  let builder = queryCollection(event, "blogs");
  if (search) {
    const blogs = await queryCollection(event, "blogs").select("blogId", "title", "tags").all();
    const fuse = new Fuse(blogs, {
      keys: ["title", "tags"],
    });
    const blogIds = fuse.search(search).map(item => item.item.blogId);
    if (blogIds.length === 0) {
      appendPagination(event, 0);
      return [];
    }
    builder = builder.where("blogId", "IN", blogIds);
  }
  appendPagination(event, await builder.count());
  return await builder
    .skip((page - 1) * perPage)
    .limit(perPage)
    .all();
});
