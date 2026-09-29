import { queryCollection } from "@nuxt/content/server";

export default defineEventHandler(async event => {
  const blogId = getRouterParam(event, "blogId");
  return await queryCollection(event, "blogs").where("blogId", "=", blogId).first();
});
