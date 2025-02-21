<template>
  <div class="flex flex-col relative items-center justify-around gap-4">
    <BaseTabs v-model="type" :tabs="tabs" class="absolute left-6 -top-16 blur-[0.3]" />
    <home-posts>
      <home-posts-post v-for="post in posts" :post />
    </home-posts>
    <base-pagination
      :total="totalCount"
      :page-size="perPage"
      :current-page="page"
      @change="changePage"
    />
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
const tabs = ref([
  {
    label: '全部',
    value: '',
  },
  {
    label: '文章',
    value: 'article',
  },
  {
    label: '书籍',
    value: 'book',
  },
]);
const { data: posts } = await useFetch('/api/posts',  
  {
    query: {
      page: page.value,
      perPage: perPage.value,
    },
    watch: [page, () => route.query],
    transform: (posts) => posts.map(post => ({
      postId: post.postId,
      title: post.title,
      content: post.content,
      updatedAt: post.updatedAt,
    })),
    onResponse: ({response}) => {
      totalCount.value = Number(response.headers.get('X-Total-Count')!)
    }
  },
);
</script>
<style scoped></style>
