import Fuse from 'fuse.js'

export default defineEventHandler(async (event) => {
  const { page = 1, perPage = 10, search = '' }: { page: number, perPage: number, search: string } = getQuery(event)
  let builder = queryCollection(event, 'blogs')
  const totalCount = await builder.count()
  appendPagination(event, totalCount)
  // 或许应该使用id作为filter
  const blogTitles: Array<string> = []
  if (search) {
    const blogs = await queryCollectionSearchSections(event, 'blogs')
    const fuse = new Fuse(blogs, {
      keys: ['title', 'tag']
    })
    blogTitles.push(...fuse.search(search).map(item => item.item.title))
  }
  if (blogTitles.length) {
    builder = builder.where('title', 'IN', blogTitles)
  }
  return await builder.skip((page - 1) * perPage).limit(perPage).all()
})
