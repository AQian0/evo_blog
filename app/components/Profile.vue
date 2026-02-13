<template>
  <Motion
    layout
    as="div"
    class="bg-muted flex flex-col items-center justify-center gap-16 overflow-hidden shadow-lg transition-all"
    :transition="{ type: 'tween' }"
  >
    <nuxt-picture
      class="aspect-square w-64 overflow-hidden rounded-full"
      src="/images/avatar.jpg"
      height="256"
      width="256"
      alt="avatar"
      preload
      loading="eager"
      :imgAttrs="{
        fetchpriority: 'high',
      }"
    />
    <div class="flex flex-col items-center gap-8">
      <ul class="flex flex-col gap-4">
        <li
          v-for="option in nav"
          class="cursor-pointer opacity-50 transition hover:opacity-100"
          @click="option.method"
        >
          {{ option.label }}
        </li>
      </ul>
      <ul class="flex gap-4 leading-0">
        <li
          v-for="icon in icons"
          class="cursor-pointer opacity-50 transition hover:opacity-100"
          @click="goExternal(icon.path)"
        >
          <Icon size="1.5rem" :name="`i-${icon.prefix}-${icon.name}`" />
        </li>
      </ul>
    </div>
  </Motion>
</template>
<script lang="ts" setup>
import type { Icon } from '~/types';

const nav = ref([
  {
    label: "关于",
    method: async (): Promise<void> => {
      await navigateTo("/about");
    },
  },
  {
    label: "堆栈",
    method: async (): Promise<void> => {
      await navigateTo("/stack");
    },
  },
  {
    label: "支持",
    method: async (): Promise<void> => {
      await navigateTo("/support");
    },
  },
]);
const icons = ref<Array<{
  path: string
} & Icon>>([
  {
    prefix: "ri",
    name: "github-line",
    path: "https://github.com/AQian0",
  },
  {
    prefix: "ri",
    name: "netease-cloud-music-line",
    path: "",
  },
]);
const goExternal = async (path: string): Promise<void> => {
  await navigateTo(path, {
    open: {
      target: "_blank",
    },
  });
};
</script>
<style scoped></style>
