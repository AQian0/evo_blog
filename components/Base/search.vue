<template>
  <div class="relative -m-1 h-fit overflow-hidden border rounded-sm text-base">
    <input
      ref="input"
      v-model="searchContent"
      type="text"
      :placeholder="placeholder"
      class="w-72 px-2 py-1"
    />
    <button
      class="absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer opacity-50"
      @click="search"
    >
      <Icon name="i-ri-search-line" />
    </button>
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
