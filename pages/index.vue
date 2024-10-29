<template>
  <div flex="~ col" relative items-center justify-around gap-4>
    <BaseTabs v-model="type" :tabs="tabs" absolute left-6 top--18 blur-0.3 />
    <home-posts>
      <home-posts-post v-for="post in posts" :post="post" />
    </home-posts>
    <base-pagination
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage"
      @change="changePage"
    />
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const currentPage = ref(1);
const pageSize = ref(10);
const changePage = (page: number) => {
  currentPage.value = page;
};
const type = ref((route.query.type as string | undefined) || '');
watch(
  () => type.value,
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
const { data: total } = await useAsyncData('total', async () => {
  return []
});

const { data: posts } = await useAsyncData(
  'posts',
  async () => {
    return [];
  },
  {
    watch: [currentPage, () => route.query],
  },
);
</script>
<style scoped></style>
