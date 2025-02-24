export default defineEventHandler(async (event) => {
  const { page = 1, perPage = 10 }: { page: number, perPage: number} = getQuery(event)
  const totalCount = await queryCollection(event, 'blogs').count()
  appendPagination(event, totalCount)
  return await queryCollection(event, 'blogs').skip((page - 1) * perPage).limit(perPage).all()
})
