<template>
  <div flex="~ col" items-center py-20 space-y-4>
    <home-posts>
      <home-posts-post v-for="post in posts" :post="post"></home-posts-post>
    </home-posts>
    <base-pagination
      :total="total"
      :page-size="pageSize"
      :current-page="currentPage"
      @change="changePage"
    ></base-pagination>
  </div>
</template>
<script lang="ts" setup>
import type { Database } from '@/types';
const client = useSupabaseClient<Database>();

const currentPage = ref(1);
const pageSize = ref(10);
const changePage = (page: number) => {
  currentPage.value = page;
};

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
    const { data, error } = await client
      .from('post')
      .select('*')
      .range(
        (currentPage.value - 1) * pageSize.value,
        currentPage.value * pageSize.value - 1,
      );
    if (error) throw error;
    const posts = data.map(({ id, title, content, createdAt }) => ({
      id,
      title,
      content,
      time: createdAt.toString().split('T')[0],
    }));
    return posts;
  },
  {
    watch: [currentPage],
  },
);
</script>
<style scoped></style>
