<template>
  <div
    flex="~ col"
    h-screen
    w-full
    gap-2
    p-12
    evo-primary-bg-color
    evo-primary-text-color
  >
    <div text-12 font-bold>似乎遇到了一些问题……</div>
    <div flex items-center text-8>
      <span>错误代码：</span>
      <span :class="getCodeColor(props.error.statusCode)">{{
        props.error.statusCode
      }}</span>
      <div ml-auto flex items-center gap-2 text-6>
        <button
          v-for="button in buttonGroup"
          flex
          items-center
          justify-center
          gap-2
          rounded-full
          p-2
          text-white
          evo-button-bg-color
          @click="button.method"
        >
          <Icon :name="button.icon" />
        </button>
      </div>
    </div>
    <div flex-1 rounded evo-log-bg-color>
      <BaseScrollBar flex="~ col" gap-2 p-4>
        <span>信息：{{ props.error.message }}</span>
        <span v-if="props.error?.statusMessage"
          >状态信息：{{ props.error?.statusMessage }}</span
        >
        <span v-if="props.error?.data">数据：{{ props.error?.data }}</span>
        <span v-if="props.error?.cause">原因：{{ props.error?.cause }}</span>
      </BaseScrollBar>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { NuxtError } from '#app';

const props = defineProps<{
  error: NuxtError;
}>();
const getCodeColor = (code: number) => {
  if (code >= 400) return 'color-red';
  if (code >= 300) return 'color-yellow';
  return 'color-green';
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
