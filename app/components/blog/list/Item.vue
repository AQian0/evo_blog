<template>
  <li
    class="flex w-160 cursor-pointer items-center justify-between px-3 py-2 text-xl transition"
    @click="goBlog"
  >
    <base-text omitted>{{ blog.title }}</base-text>
    <span>{{ format(blog.createdDate, "YYYY-MM-DD") }}</span>
  </li>
</template>
<script lang="ts" setup>
import type { SerializeObject } from "nitropack/types";
import type { BlogsCollectionItem } from "@nuxt/content";

const { blog } = defineProps<{
  blog: SerializeObject<BlogsCollectionItem>;
}>();
const goBlog = async (): Promise<void> => {
  await navigateTo({
    path: `/blogs/${blog.blogId}`,
  });
};
</script>
<style scoped></style>
