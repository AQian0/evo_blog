<template>
  <UCollapsible
    v-model:open="open"
    class="flex flex-col my-2 gap-2"
  >
    <button
      class="flex p-1 items-center hover:bg-zinc-200 rounded-sm"
      :class="open ? 'justify-between' : 'justify-center'"
    >
      <Motion as="div" class="flex justify-center items-center gap-1 flex-none" layout :transition="{ type: 'tween' }">
        <Icon size="1rem" :name />
        <div class="text-base">{{ fileName }}</div>
      </Motion>
      <Motion as="div" class="leading-0" :animate="{ rotate: open ? -90 : 0 }" layout :transition="{ type: 'tween' }">
        <Icon size="1.5rem" name="i-ri-arrow-left-s-fill" />
      </Motion>
    </button>
    <template #content>
      <div class="p-2 bg-zinc-200 rounded-sm">
        <slot />
      </div>
    </template>
  </UCollapsible>
</template>

<script setup lang="ts">
const { fileName, fileExtension } = defineProps<{
  fileName: string
  fileExtension?: string
}>()
const name = computed(() => {
  let extName: string
  if (fileExtension) {
    extName = fileExtension
  } else {
    extName = fileName.slice(fileName.lastIndexOf('.') + 1)
  }
  return useLanguageIcon(extName)
})
const open = ref(true)
</script>
