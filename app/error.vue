<template>
  <div class="flex flex-col h-screen w-full gap-2 p-12 bg-background">
    <div class="text-[3rem] font-bold">似乎遇到了一些问题……</div>
    <div class="flex items-center text-[2rem]">
      <span>错误代码：</span>
      <span :class="getCodeColor(props.error.statusCode)">{{
        props.error.statusCode
      }}</span>
      <div class="ml-auto flex items-center gap-2">
        <button
          v-for="button in buttonGroup"
          class="flex items-center cursor-pointer justify-center gap-2 rounded-full p-2"
          @click="button.method"
        >
          <Icon size="1.5rem" :name="button.icon" />
        </button>
      </div>
    </div>
    <OverlayScrollbarsComponent defer class="flex-1 rounded bg-muted">
      <div class="flex flex-col gap-2 p-4">
        <span>信息：{{ props.error.message }}</span>
        <span v-if="props.error?.statusMessage"
          >状态信息：{{ props.error?.statusMessage }}</span
        >
        <span v-if="props.error?.data">数据：{{ props.error?.data }}</span>
        <span v-if="props.error?.cause">原因：{{ props.error?.cause }}</span>
      </div>
    </OverlayScrollbarsComponent>
  </div>
</template>
<script lang="ts" setup>
import type { NuxtError } from '#app';

const props = defineProps<{
  error: NuxtError;
}>();
const getCodeColor = (code: number) => {
  if (400 <= code) {return 'text-red-500';}
  if (300 <= code) {return 'text-yellow-500';}
  return 'text-green-500';
};
const buttonGroup = [
  {
    icon: 'i-ri-home-2-line',
    method: async () => {
      await clearError({
        redirect: '/',
      });
    },
  },
  {
    icon: 'i-ri-github-line',
    method: async () => {
      await navigateTo('https://github.com/AQian-Cup/evo_blog/issues', {
        external: true,
        open: {
          target: '_blank',
        },
      });
    },
  },
];
</script>
<style scoped></style>
