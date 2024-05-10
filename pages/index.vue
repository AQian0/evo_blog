<template>
  <div flex="~ col" items-center justify-around gap-4 py-20>
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
    const posts = data.map(({ id, title, content, createdAt }) => ({
      id,
      title,
      content,
      time: createdAt.toString().split('T')[0],
    }));
    return posts;
  },
  {
    watch: [currentPage, () => route.query],
  },
);
</script>
<style scoped></style>
