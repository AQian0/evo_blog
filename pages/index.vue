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
import type { Database } from '@/types';

const route = useRoute();
const client = useSupabaseClient<Database>();

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
  const { count, error } = await client
    .from('post')
    .select('*', { count: 'exact' });
  if (error) throw error;
  return count;
});

const { data: posts } = await useAsyncData(
  'posts',
  async () => {
    let query = client
      .from('post')
      .select('*')
      .range(
        (currentPage.value - 1) * pageSize.value,
        currentPage.value * pageSize.value - 1,
      );
    if (route.query.type) {
      query = query.eq('type', route.query.type);
    }
    if (route.query.search) {
      query = query.ilike('title', `%${route.query.search}%`);
    }
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },
  {
    watch: [currentPage, () => route.query],
  },
);
</script>
<style scoped></style>
