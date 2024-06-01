<template>
  <div flex="~ col" items-center py-16 space-y-4>
    <div text-6>关于</div>
    <div flex="~ col" space-y-2>
      <div v-for="info in infoList" inline-flex>
        <div w-16>{{ info.label }}：</div>
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
    name: 'Unocss',
    path: 'https://unocss.dev/',
  },
  {
    label: '数据库',
    name: 'Supabase',
    path: 'https://supabase.com/',
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
