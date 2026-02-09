<template>
  <div class="flex flex-col items-center space-y-4 py-16">
    <div class="text-2xl">关于</div>
    <div class="flex flex-col space-y-2">
      <div v-for="info in infoList" class="inline-flex">
        <div class="w-20">{{ info.label }}：</div>
        <NuxtLink class="font-bold" :to="info.path">{{ info.name }}</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const infoList = ref([
  {
    label: "框架",
    name: "Nuxt",
    path: "https://nuxt.com/",
  },
  {
    label: "UI",
    name: "tailwindcss",
    path: "https://tailwindcss.com/",
  },
  {
    label: "字体",
    name: "Maple Mono",
    path: "https://font.subf.dev/",
  },
  {
    label: "Github",
    name: "evo_blog",
    path: "https://github.com/AQian0/evo_blog",
  },
]);
</script>
<style scoped></style>
