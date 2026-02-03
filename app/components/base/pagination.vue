<template>
  <div class="w-48 flex items-center justify-between leading-0">
    <button
      :class="currentPage > 1 ? '' : ['cursor-not-allowed', 'opacity-50']"
      :disabled="currentPage <= 1"
      type="button"
      @click="turnPage('up')"
    >
      <Icon size="2rem" name="i-ri-arrow-left-s-fill" />
    </button>
    <ul class="flex space-x-4">
      <li v-for="item in sizeList" class="cursor-pointer" :class="currentPage === item ? '' : ''">
        {{ item }}
      </li>
    </ul>
    <button
      :class="currentPage < sizeList.length ? '' : ['cursor-not-allowed', 'opacity-50']"
      :disabled="currentPage >= sizeList.length"
      type="button"
      @click="turnPage('down')"
    >
      <Icon size="2rem" name="i-ri-arrow-right-s-fill" />
    </button>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  total?: number;
  currentPage?: number;
  pageSize?: number;
}
const { total = 0, currentPage = 1, pageSize = 10 } = defineProps<Props>();
const emit = defineEmits<{
  change: [page: number];
}>();
const sizeList = computed(() => {
  if (!total) {
    return [];
  }
  const totalPages = Math.ceil(total / pageSize);
  let lowPage = 0 < currentPage - 2 ? currentPage - 2 : 1;
  let highPage = currentPage + 2 < totalPages ? currentPage + 2 : totalPages;
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
const turnPage = (type: "up" | "down") => {
  if ("up" === type) {
    changePage(currentPage - 1);
  } else {
    changePage(currentPage + 1);
  }
};
const changePage = (page: number) => {
  emit("change", page);
};
</script>
<style scoped></style>
