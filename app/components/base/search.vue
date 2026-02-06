<template>
  <div class="relative w-3xl text-base" @keyup.enter="search">
    <Input v-model="content" type="text" :placeholder="placeholder" />
    <button
      class="absolute top-[50%] right-2 translate-y-[-50%] cursor-pointer leading-0 opacity-50"
      @click="search"
    >
      <Icon name="i-ri-search-line" />
    </button>
  </div>
</template>
<script lang="ts" setup>
const placeholder = ref("在此搜索");
const route = useRoute();
const content = ref((route.query.search as string) || "");
const search = async (): Promise<void> => {
  await navigateTo({
    path: "/",
    query: {
      search: content.value,
    },
  });
};
</script>
<style scoped></style>
