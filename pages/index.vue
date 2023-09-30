<template>
  <div flex="~ col" items-center py-20 space-y-4>
    <home-posts>
      <home-posts-post v-for="post in posts" :post="post"></home-posts-post>
    </home-posts>
    <div w-48 flex items-center justify-between>
      <button i-ri-arrow-left-s-fill text-8></button>
      <ul flex space-x-4>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <button i-ri-arrow-right-s-fill text-8></button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Database } from '@/types';
const client = useSupabaseClient<Database>();

const posts = ref();
const { data: fetchPosts } = await useAsyncData('posts', async () => {
  const { data, error } = await client.from('post').select('*');
  if (error) throw error;
  const posts = data.map(({ id, title, content, createdAt }) => ({
    id,
    title,
    content,
    time: createdAt.toString().split('T')[0],
  }));
  return posts;
});
posts.value = fetchPosts.value;
</script>
<style scoped></style>
