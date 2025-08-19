<template>
  <div class="relative text-base w-192" @keyup.enter="search">
    <Input
      v-model="content"
      type="text"
      :placeholder="placeholder"
    />
    <button
      class="absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer opacity-50 leading-0"
      @click="search"
    >
      <Icon name="i-ri-search-line" />
    </button>
  </div>
</template>
<script lang="ts" setup>
const placeholder = ref('在此搜索');
const route = useRoute()
const content = ref(route.query.search as string || '')
const search = async () => {
  await navigateTo({
    path: '/',
    query: {
      search: content.value,
    },
  });
};
</script>
<style scoped></style>
