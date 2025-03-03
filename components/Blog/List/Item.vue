<template>
  <li
    class="flex w-160 cursor-pointer justify-between items-center px-3 py-2 transition text-xl"
    @click="goBlog"
  >
    <base-text omitted>{{ blog.title }}</base-text>
    <span>{{ format(blog.date, 'YYYY-MM-DD') }}</span>
  </li>
</template>
<script lang="ts" setup>
import type { MarkdownRoot } from '@nuxt/content';

const {
  blog
} = defineProps<{
  blog: {
    blogId: string
    title: string
    body: MarkdownRoot
    date: string
  }
}>();
const goBlog = async () => {
  await navigateTo({
    path: `/blogs/${blog.blogId}`,
  });
};
</script>
<style scoped></style>
