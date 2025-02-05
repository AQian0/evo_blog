<template>
  <li
    class="flex flex-col group h-20 w-160 cursor-pointer justify-between border-2 rounded px-3 py-2 transition"
    @click="goPost"
  >
    <div class="flex justify-between text-xl">
      <base-text omitted>{{ props.post.title }}</base-text>
      <base-text omitted>{{
        useDateText(props.post.updatedAt)
      }}</base-text>
    </div>
    <base-text omitted>
      {{ extractText }}
    </base-text>
  </li>
</template>
<script lang="ts" setup>
const props = defineProps();
const extractText = computed(() => {
  return (props.post.content as string)
    .replace(/<img\b[^>]*>/gi, '[图片]')
    .replace(/<[^>]+>/g, '')
    .substring(0, 100);
});
const goPost = async () => {
  if (!props.post.id) return;
  await navigateTo({
    path: '/post',
    query: {
      id: props.post.id,
    },
  });
};
</script>
<style scoped></style>
