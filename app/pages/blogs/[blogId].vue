<template>
  <div class="flex flex-col items-center">
    <div class="fixed left-0 top-0 z-1 h-40 w-full bg-gradient-to-t" />
    <div class="mt-24 indent-2 text-4xl tracking-[0.5rem]">{{ blog?.title }}</div>
    <ContentRenderer
      v-if="blog"
      class="relative my-6 w-1/2 max-w-none prose prose-zinc"
      :value="blog"
    />
    <div class="flex flex-col fixed transition space-y-4 left-[86%] top-[70%]">
      <button v-for="item in extendedList" cursor-pointer type="button" @click="item.method">
        <Icon size="1.5rem" :name="item.label" />
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const extendedList = ref([
  {
    label: "i-ri-share-circle-line",
    method: (): void => {
      // TODO: implement share
    },
  },
  {
    label: "i-ri-file-download-line",
    method: (): void => {
      // TODO: implement download
    },
  },
]);
const { data: blog } = await useFetch(`/api/blogs/${route.params.blogId}`);
useHead({
  title: `Evo Blog | ${blog.value?.title || "加载失败"}`,
});
</script>
<style scoped></style>
