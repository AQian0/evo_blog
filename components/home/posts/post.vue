<template>
  <li
    group
    flex="~ col"
    h-24
    w-160
    cursor-pointer
    justify-between
    border-2
    border-zinc-200
    rounded
    bg-zinc-50
    p-4
    transition
    hover:bg-zinc-300
    @click="goPost"
  >
    <div flex justify-between text-5>
      <base-text omitted group-hover:text-white>{{
        props.post.title
      }}</base-text>
      <base-text omitted group-hover:text-white>{{
        props.post.time
      }}</base-text>
    </div>
    <base-text omitted group-hover:text-white>
      {{ extractText }}
    </base-text>
  </li>
</template>
<script lang="ts" setup>
import type { Post } from '@/types';

interface propsType {
  post: Post;
}
const props = defineProps<propsType>();
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
