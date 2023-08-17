<template>
  <div flex="~ col" items-center>
    <base-page-header></base-page-header>
    <div
      fixed
      left-0
      top-0
      z-1
      h-64
      w-full
      from-transparent
      to-zinc-100
      bg-gradient-to-t
    ></div>
    <div mt-48 indent-2 text-10 tracking-0.5rem>标题</div>
    <div relative mt-8 h-400 w-168 text-6>内容</div>
    <div
      flex="~ col"
      fixed
      text-6
      transition
      space-y-4
      class="left-70% top-70%"
      :style="`opacity: ${extendedListOpacity}`"
    >
      <div
        v-for="item in extendedList"
        :class="item.label"
        cursor-pointer
        @click="item.method"
      ></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const { y: scrollY } = useWindowScroll();
const extendedListOpacity = computed(() => {
  return Math.min(Math.sqrt(scrollY.value / 600), 1).toFixed(2);
});
const extendedList = ref([
  {
    label: 'i-ri-share-circle-line',
    method: () => {},
  },
  {
    label: 'i-ri-file-download-line',
    method: () => {},
  },
]);
onMounted(() => {
  console.log(route);
});
</script>
<style scoped></style>
