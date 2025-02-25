<template>
  <div class="flex flex-col items-center py-16 space-y-4">
    <div class="text-2xl">关于</div>
    <div class="flex flex-col space-y-2">
      <div v-for="info in infoList" class="inline-flex">
        <div class="w-16">{{ info.label }}：</div>
        <NuxtLink :to="info.path">{{ info.name }}</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const infoList = ref([
  {
    label: '框架',
    name: 'Nuxt',
    path: 'https://nuxt.com/',
  },
  {
    label: 'UI',
    name: 'tailwindcss',
    path: 'https://tailwindcss.com/',
  },
  {
    label: '字体',
    name: 'HarmonyOS Sans',
    path: 'https://developer.harmonyos.com/cn/docs/design/des-guides/font-0000001157868583',
  },
  {
    label: 'Github',
    name: 'evo_blog',
    path: 'https://github.com/AQian-Cup/evo_blog',
  },
]);
</script>
<style scoped></style>
