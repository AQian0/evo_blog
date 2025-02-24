<template>
  <li
    class="flex flex-col group h-20 w-160 cursor-pointer justify-between border-2 rounded px-3 py-2 transition"
    @click="goBlog"
  >
    <div class="flex justify-between text-xl">
      <base-text omitted>{{ blog?.title }}</base-text>
    </div>
  </li>
</template>
<script lang="ts" setup>
const {
  blog
} = defineProps<{
  blog: {
    blogId: number
    title: string
    body: string
  }
}>();
const goBlog = async () => {
  if (!blog?.blogId) return;
  await navigateTo({
    path: `/blogs/${blog.blogId}`,
  });
};
</script>
<style scoped></style>
