<template>
  <div :class="omittedClass">
    <slot />
  </div>
</template>
<script lang="ts" setup>
interface propsType {
  omitted?: boolean;
}
const props = withDefaults(defineProps<propsType>(), {
  omitted: false,
});
const omittedClass = computed(() => {
  if (!props.omitted) {
    return;
  }
  return ["overflow-hidden", "whitespace-nowrap", "text-ellipsis"];
});
</script>
<style scoped></style>
