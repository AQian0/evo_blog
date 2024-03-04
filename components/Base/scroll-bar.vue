<template>
  <div
    ref="scrollContainerRef"
    relative
    overflow-auto
    border-gray-300
    :style="{
      height: props.height || 'auto',
      width: props.width || 'auto',
    }"
  >
    <div
      absolute
      z-10
      w-1
      rounded-full
      bg-zinc-700
      transition
      :style="verticalScrollbarStyle"
    ></div>
    <div
      absolute
      z-10
      h-1
      rounded-full
      bg-zinc-700
      transition
      :style="horizontalScrollbarStyle"
    ></div>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
type WithHeight = {
  height: string;
  width?: never;
};
type WithWidth = {
  height?: never;
  width: string;
};
const props = defineProps<WithHeight | WithWidth>();
const scrollContainerRef = ref<HTMLDivElement | null>(null);
const { width: containerWidth, height: containerHeight } =
  useElementSize(scrollContainerRef);
const { x: scrollLeft, y: scrollTop } = useScroll(scrollContainerRef);
const { isOutside } = useMouseInElement(scrollContainerRef);

const verticalScrollbarStyle = ref({});
const horizontalScrollbarStyle = ref({});
onMounted(() => {
  watchEffect(() => {
    verticalScrollbarStyle.value = {
      height: `${(containerHeight.value / scrollContainerRef.value!.scrollHeight) * 100}%`,
      top: `${(scrollTop.value / scrollContainerRef.value!.scrollHeight) * containerHeight.value + scrollTop.value}px`,
      right: `calc(0.25rem - ${scrollLeft.value}px)`,
      opacity:
        isOutside.value ||
        containerHeight.value / scrollContainerRef.value!.scrollHeight === 1
          ? 0
          : 0.75,
    };
    horizontalScrollbarStyle.value = {
      width: `${(containerWidth.value / scrollContainerRef.value!.scrollWidth) * 100}%`,
      left: `${(scrollLeft.value / scrollContainerRef.value!.scrollWidth) * containerWidth.value + scrollLeft.value}px`,
      bottom: `calc(0.25rem - ${scrollTop.value}px)`,
      opacity:
        isOutside.value ||
        containerWidth.value / scrollContainerRef.value!.scrollWidth === 1
          ? 0
          : 0.75,
    };
  });
});
</script>
<style scoped></style>
