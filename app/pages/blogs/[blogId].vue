<template>
  <div class="flex flex-col items-center">
    <div class="fixed left-0 top-0 z-1 h-40 w-full bg-gradient-to-t" />
    <div class="mt-24 indent-2 text-5xl tracking-[0.5rem]">{{ blog?.title }}</div>
    <template v-if="blog">
      <ContentRenderer class="relative my-6 w-192 text-xl" :value="blog.body" />
    </template>
    <!-- 未来补充骨架屏 -->
    <div class="flex flex-col fixed transition space-y-4 left-[86%] top-[70%]">
      <button
        v-for="item in extendedList"
        cursor-pointer
        type="button"
        @click="item.method"
      >
        <Icon size="1.5rem" :name="item.label" />
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
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
const { data: blog } = useFetch(`/api/blogs/${route.params.blogId}`)
useHead({
  title: `Evo Blog | ${blog.value?.title}`,
});
</script>
<style scoped></style>
