<template>
  <div ref="postRef" flex="~ col" items-center>
    <div fixed left-0 top-0 z-1 h-52 w-full bg-gradient-to-t evo-post-mask />
    <div mt-48 indent-2 text-10 tracking-0.5rem>{{ post?.title }}</div>
    <div relative my-6 w-192 text-5 class="content">
      <div v-html="post?.content" />
    </div>
    <div w-192 flex justify-end font-italic evo-post-date-text-color>
      ——更新于{{ useDateText(post?.updatedAt) }}
    </div>
    <div
      flex="~ col"
      fixed
      text-6
      transition
      space-y-4
      class="left-86% top-70%"
      :style="`opacity: ${extendedListOpacity}`"
    >
      <button
        v-for="item in extendedList"
        :class="item.label"
        cursor-pointer
        type="button"
        @click="item.method"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Database } from '@/types';
import hljs from 'highlight.js';

const route = useRoute();
const client = useSupabaseClient<Database>();
const postRef = ref();
const { height: postHeight } = useElementSize(postRef);
const { height: windowHeight } = useWindowSize();
const { y: scrollY } = useWindowScroll();
const extendedListOpacity = computed(() => {
  if (Math.abs(postHeight.value - windowHeight.value) < 1) {
    return '1';
  }
  return Math.min(
    Math.sqrt(scrollY.value / (postHeight.value - windowHeight.value)),
    1,
  ).toFixed(2);
});
const extendedList = ref([
  {
    label: 'i-ri-share-circle-line',
    method: () => {},
  },
  {
    label: 'i-ri-file-download-line',
    method: () => {},
  },
]);
const { data: post } = await useAsyncData('post', async () => {
  const { data, error } = await client
    .from('post')
    .select('*')
    .eq('id', route.query.id as string);
  if (error) throw error;
  return data[0];
});
onMounted(() => {
  hljs.highlightAll();
});
</script>
<style scoped></style>
