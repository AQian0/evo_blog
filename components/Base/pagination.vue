<template>
  <div w-48 flex items-center justify-between>
    <button
      :class="
        currentPage > 1
          ? ''
          : ['evo-pagination-text-color', 'cursor-not-allowed']
      "
      :disabled="currentPage <= 1"
      i-ri-arrow-left-s-fill
      text-8
      type="button"
      @click="turnPage('up')"
    />
    <ul flex space-x-4>
      <li
        v-for="item in sizeList"
        cursor-pointer
        :class="currentPage === item ? '' : 'evo-pagination-text-color'"
      >
        {{ item }}
      </li>
    </ul>
    <button
      :class="
        currentPage < sizeList.length
          ? ''
          : ['evo-pagination-text-color', 'cursor-not-allowed']
      "
      :disabled="currentPage >= sizeList.length"
      i-ri-arrow-right-s-fill
      text-8
      type="button"
      @click="turnPage('down')"
    />
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
  if (!props.total) return [];
  const totalPages = Math.ceil(props.total / props.pageSize);
  let lowPage = props.currentPage - 2 > 0 ? props.currentPage - 2 : 1;
  let highPage =
    props.currentPage + 2 < totalPages ? props.currentPage + 2 : totalPages;
  if (highPage - lowPage < 4) {
    if (lowPage === 1) {
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
  if (type === 'up') {
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
