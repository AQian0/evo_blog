<template>
  <UCollapsible v-model:open="open" class="my-2 flex flex-col gap-2">
    <button
      class="hover:bg-accent flex items-center rounded-sm p-1"
      :class="open ? 'justify-between' : 'justify-center'"
    >
      <Motion
        as="div"
        class="flex flex-none items-center justify-center gap-1"
        layout
        :transition="{ type: 'tween' }"
      >
        <Icon size="1rem" :name />
        <div class="text-base">{{ fileName }}</div>
      </Motion>
      <Motion
        as="div"
        class="leading-0"
        :animate="{ rotate: open ? -90 : 0 }"
        layout
        :transition="{ type: 'tween' }"
      >
        <Icon size="1.5rem" name="i-ri-arrow-left-s-fill" />
      </Motion>
    </button>
    <template #content>
      <slot />
    </template>
  </UCollapsible>
</template>

<script setup lang="ts">
const { fileName, fileExtension } = defineProps<{
  fileName: string;
  fileExtension?: string;
}>();
const name = computed(() => {
  let extName: string;
  if (fileExtension) {
    extName = fileExtension;
  } else {
    extName = fileName.slice(fileName.lastIndexOf(".") + 1);
  }
  return useLanguageIcon(extName);
});
const open = ref(true);
</script>
