<template>
  <div :class="omittedClass">
    <slot />
  </div>
</template>
<script lang="ts" setup>
type Props = {
  omitted?: boolean;
};
const { omitted = false } = defineProps<Props>();
const omittedClass = computed(() => {
  if (!omitted) {
    return;
  }
  return ["overflow-hidden", "whitespace-nowrap", "text-ellipsis"];
});
</script>
<style scoped></style>
