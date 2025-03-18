<template>
  <div class="w-48 flex items-center justify-between leading-0">
    <button
      :class="
        currentPage > 1
          ? ''
          : ['cursor-not-allowed', 'opacity-50']
      "
      :disabled="currentPage <= 1"
      type="button"
      @click="turnPage('up')"
    >
      <Icon size="2rem" name="i-ri-arrow-left-s-fill" />
    </button>
    <ul class="flex space-x-4">
      <li
        v-for="item in sizeList"
        class="cursor-pointer"
        :class="currentPage === item ? '' : ''"
      >
        {{ item }}
      </li>
    </ul>
    <button
      :class="
        currentPage < sizeList.length
          ? ''
          : ['cursor-not-allowed', 'opacity-50']
      "
      :disabled="currentPage >= sizeList.length"
      type="button"
      @click="turnPage('down')"
    >
      <Icon size="2rem" name="i-ri-arrow-right-s-fill" />
    </button>
  </div>
</template>
<script lang="ts" setup>
interface propsType {
  total: number | null;
  currentPage: number;
  pageSize: number;
}
const props = defineProps<propsType>();
const emit = defineEmits<{
  change: [page: number];
}>();
const sizeList = computed(() => {
  if (!props.total) {return [];}
  const totalPages = Math.ceil(props.total / props.pageSize);
  let lowPage = 0 < props.currentPage - 2 ? props.currentPage - 2 : 1;
  let highPage =
    props.currentPage + 2 < totalPages ? props.currentPage + 2 : totalPages;
  if (4 > highPage - lowPage) {
    if (1 === lowPage) {
      highPage = Math.min(totalPages, lowPage + 4);
    } else if (highPage === totalPages) {
      lowPage = Math.max(1, highPage - 4);
    }
  }
  const pageArray = Array.from({ length: totalPages }, (_, i) => i + 1).slice(
    lowPage - 1,
    highPage,
  );
  return pageArray;
});
const turnPage = (type: 'up' | 'down') => {
  if ('up' === type) {
    changePage(props.currentPage - 1);
  } else {
    changePage(props.currentPage + 1);
  }
};
const changePage = (page: number) => {
  emit('change', page);
};
</script>
<style scoped></style>
