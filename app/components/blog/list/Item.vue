<template>
  <li
    class="flex w-160 cursor-pointer justify-between items-center px-3 py-2 transition text-xl"
    @click="goBlog"
  >
    <base-text omitted>{{ blog.title }}</base-text>
    <span>{{ format(blog.createdDate, 'YYYY-MM-DD') }}</span>
  </li>
</template>
<script lang="ts" setup>
import type { SerializeObject } from 'nitropack/types';
import type { BlogsCollectionItem } from '@nuxt/content';

const {
  blog
} = defineProps<{
  blog: SerializeObject<BlogsCollectionItem>
}>();
const goBlog = async () => {
  await navigateTo({
    path: `/blogs/${blog.blogId}`,
  });
};
</script>
<style scoped></style>
