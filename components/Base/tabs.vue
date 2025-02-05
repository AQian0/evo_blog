<template>
  <div class="flex gap-6 font-bold">
    <span
      v-for="tab in props.tabs"
      class="cursor-pointer text-2xl transition hover:opacity-80"
      :class="selectedValue === tab.value ? 'opacity-80' : 'opacity-40'"
      @click="select(tab.value)"
      >{{ tab.label }}</span
    >
  </div>
</template>
<script lang="ts" setup>
type Tab = {
  label: number | string;
  value: number | string;
};
const selectedValue = defineModel<number | string>();
const props = defineProps<{
  tabs: Tab[];
}>();
const select = (value: number | string) => {
  selectedValue.value = value;
};
</script>
<style scoped></style>
