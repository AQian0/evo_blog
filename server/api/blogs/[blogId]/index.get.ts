export default defineEventHandler(async (event) => {
  const blogId = getRouterParam(event, 'blogId')
  return await queryCollection(event, 'blogs').where('blogId', '=', blogId).first()
})
