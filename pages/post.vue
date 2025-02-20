<template>
  <div ref="postRef" class="flex flex-col items-center">
    <div class="fixed left-0 top-0 z-1 h-40 w-full bg-gradient-to-t" />
    <div class="mt-24 indent-2 text-10 tracking-[0.5rem]">{{ post?.title }}</div>
    <div class="content relative my-6 w-192 text-xl">
      <div v-html="post?.content" />
    </div>
    <div class="w-192 flex justify-end font-italic">
      ——更新于{{ useDateText(post?.updatedAt) }}
    </div>
    <div
      class="flex flex-col fixed text-2xl transition space-y-4 left-[86%] top-[70%]"
      :style="`opacity: ${extendedListOpacity}`"
    >
      <button
        v-for="item in extendedList"
        cursor-pointer
        type="button"
        @click="item.method"
      >
        <Icon :name="item.label" />
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import hljs from 'highlight.js';

const route = useRoute();
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

const { data: post } = useFetch(`/api/posts/${route.query.postId}`)
onMounted(() => {
  hljs.highlightAll();
});
useHead({
  title: `Evo Blog | ${post.value?.title}`,
});
</script>
<style scoped></style>
