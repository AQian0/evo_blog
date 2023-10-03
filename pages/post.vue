<template>
  <div ref="postRef" flex="~ col" items-center>
    <base-page-header></base-page-header>
    <div
      fixed
      left-0
      top-0
      z-1
      h-64
      w-full
      from-transparent
      to-zinc-100
      bg-gradient-to-t
    ></div>
    <div mt-48 indent-2 text-10 tracking-0.5rem>{{ post?.title }}</div>
    <div relative my-8 w-168 text-6>{{ post?.content }}</div>
    <div w-168 flex justify-end font-italic text-zinc>
      ——更新于{{ useDateText(post?.updatedAt) }}
    </div>
    <div
      flex="~ col"
      fixed
      text-6
      transition
      space-y-4
      class="left-70% top-70%"
      :style="`opacity: ${extendedListOpacity}`"
    >
      <div
        v-for="item in extendedList"
        :class="item.label"
        cursor-pointer
        @click="item.method"
      ></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Database } from '@/types';

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
    .eq('id', route.query.id);
  if (error) throw error;
  return data[0];
});
</script>
<style scoped></style>
