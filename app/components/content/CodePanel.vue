<template>
  <UCollapsible
    v-model:open="open"
    class="flex flex-col my-2 gap-2"
  >
    <button class="flex p-1 justify-center items-center hover:bg-zinc-200 transition-all rounded-sm">
      <div class="flex justify-center items-center gap-1 flex-none">
        <Icon size="1rem" :name></Icon>
        <div class="text-base">{{ fileName }}</div>
      </div>
      <div class="transition-all ease-out duration-200 flex justify-end" :class="open ? 'flex-1' : ''">
        <Icon :class="open ? '-rotate-90' : ''" size="1rem" name="i-ri-arrow-left-s-fill"></Icon>
      </div>
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
