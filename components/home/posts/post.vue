<template>
  <li
    class="flex flex-col group h-20 w-160 cursor-pointer justify-between border-2 rounded px-3 py-2 transition"
    @click="goPost"
  >
    <div class="flex justify-between text-xl">
      <base-text omitted>{{ post?.title }}</base-text>
      <base-text omitted>{{
        useDateText(post?.updatedAt)
      }}</base-text>
    </div>
    <base-text omitted>
      {{ extractText }}
    </base-text>
  </li>
</template>
<script lang="ts" setup>
const {
  post
} = defineProps<{
  post: {
    postId: number
    title: string
    updatedAt: string
    content: string
  }
}>();
const extractText = computed(() => {
  return (post?.content)
    .replace(/<img\b[^>]*>/gi, '[图片]')
    .replace(/<[^>]+>/g, '')
    .substring(0, 100);
});
const goPost = async () => {
  if (!post?.postId) return;
  await navigateTo({
    path: '/post',
    query: {
      id: post.postId,
    },
  });
};
</script>
<style scoped></style>
