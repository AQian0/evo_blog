<template>
  <div class="flex w-48 items-center justify-between leading-0">
    <button
      :class="currentPage > 1 ? '' : ['cursor-not-allowed', 'opacity-50']"
      :disabled="currentPage <= 1"
      type="button"
      aria-label="上一页"
      @click="emit('change', currentPage - 1)"
    >
      <Icon size="2rem" name="i-ri-arrow-left-s-fill" aria-hidden="true" />
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
      aria-label="下一页"
      @click="emit('change', currentPage + 1)"
    >
      <Icon size="2rem" name="i-ri-arrow-right-s-fill" aria-hidden="true" />
    </button>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  total?: number;
  currentPage?: number;
  perPage?: number;
}
const { total = 0, currentPage = 1, perPage = 10 } = defineProps<Props>();
const emit = defineEmits<{
  change: [page: number];
}>();
const sizeList = computed(() => {
  if (!total) {
    return [];
  }
  const totalPages = Math.ceil(total / perPage);
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
</script>
<style scoped></style>
