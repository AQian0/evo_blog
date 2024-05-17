<template>
  <div relative m--1 h-fit overflow-hidden border rounded-1 text-4>
    <input
      ref="input"
      v-model="searchContent"
      type="text"
      :placeholder="placeholder"
      evo-input-bg-color
      w-72
      px-2
      py-1
    />
    <div
      i-ri-search-line
      absolute
      right-2
      top="50%"
      translate-y="-50%"
      cursor-pointer
      opacity-50
      @click="search"
    />
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
