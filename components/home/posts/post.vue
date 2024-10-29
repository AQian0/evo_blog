<template>
  <li
    flex="~ col"
    group
    h-20
    w-160
    cursor-pointer
    justify-between
    border-2
    evo-post-border-color
    rounded
    px-3
    py-2
    transition
    evo-post-bg-color
    @click="goPost"
  >
    <div flex justify-between text-5>
      <base-text omitted evo-post-text-color>{{ props.post.title }}</base-text>
      <base-text omitted evo-post-text-color>{{
        useDateText(props.post.updatedAt)
      }}</base-text>
    </div>
    <base-text omitted evo-post-text-color>
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
