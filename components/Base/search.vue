<template>
  <div class="relative text-base w-192" @keyup.enter="search">
    <Input
      ref="input"
      v-model="searchContent"
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
