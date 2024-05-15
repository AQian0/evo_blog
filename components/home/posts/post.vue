<template>
  <li
    flex="~ col"
    group
    evo-post-bg-color
    evo-post-border-color
    h-20
    w-160
    cursor-pointer
    justify-between
    border-2
    rounded
    px-3
    py-2
    transition
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
import type { Database } from '@/types';

interface propsType {
  post: Database['public']['Tables']['post']['Row'];
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
