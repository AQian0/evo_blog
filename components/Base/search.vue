<template>
  <div h-fit text-4 border rounded-1 overflow-hidden relative m--1>
    <input
      ref="input"
      v-model="searchContent"
      px-2
      py-1
      :placeholder="placeholder"
      w-72
    />
    <div
      opacity-50
      absolute
      i-ri-search-line
      right-2
      top-50%
      translate-y--50%
      cursor-pointer
      @click="search"
    ></div>
  </div>
</template>
<script lang="ts" setup>
const placeholder = ref('在此搜索');
const input = ref();
const { focused } = useFocus(input);
const searchContent = ref('');
const search = async () => {
  if (!searchContent.value) {
    return;
  }
  await navigateTo({
    path: '/',
    query: {
      search: searchContent.value,
    },
  });
  searchContent.value = '';
};
onKeyStroke('Enter', async () => {
  if (!focused.value) {
    return;
  }
  await search();
});
</script>
<style scoped></style>
