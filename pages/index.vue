<template>
  <div class="flex flex-col h-full items-center p-2">
    <BaseSearch />
    <div class="flex flex-col flex-1 relative items-center justify-around gap-4">
      <OverlayScrollbarsComponent defer class="h-[448px]">
        <BlogList>
          <BlogListItem v-for="blog in blogs" :blog />
        </BlogList>
      </OverlayScrollbarsComponent>
      <base-pagination
        :total="totalCount"
        :page-size="perPage"
        :current-page="page"
        @change="changePage"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const totalCount = ref(10);
const page = ref(1);
const perPage = ref(10);
const changePage = (index: number) => {
  page.value = index;
};
const type = ref((route.query.type as string | undefined) || '');
watch(() => type.value,
  async () => {
    if (type.value) {
      await navigateTo({
        path: '/',
        query: {
          type: type.value,
        },
      });
    } else {
      await navigateTo('/');
    }
  },
);
const { data: blogs } = await useFetch('/api/blogs',  
  {
    query: {
      page: page.value,
      perPage: perPage.value,
    },
    watch: [page, () => route.query],
    transform: (blogs) => blogs.map(blog => ({
      blogId: blog.blogId,
      title: blog.title,
      body: blog.body,
      date: blog.date,
    })),
    onResponse: ({response}) => {
      totalCount.value = Number(response.headers.get('X-Total-Count')!)
    }
  },
);
</script>
<style scoped></style>
