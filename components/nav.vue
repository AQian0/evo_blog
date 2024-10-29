<template>
  <div
    flex="~ col"
    items-center
    justify-center
    transition-flex
    evo-nav-bg-color
    evo-primary-shadow
    :style="{
      '--isRoot': route.path === '/' ? '1' : '0',
      flex: 'var(--isRoot)',
    }"
  >
    <nuxt-img
      mb-16
      aspect-square
      w-64
      rounded-full
      :src="profile?.avatar"
      alt="avatar"
    />
    <ul flex="~ col" mb-8 space-y-4>
      <li
        v-for="option in nav"
        cursor-pointer
        opacity-50
        transition
        hover:opacity-100
        @click="option.method"
      >
        {{ option.label }}
      </li>
    </ul>
    <ul flex text-6 space-x-4>
      <li
        v-for="icon in icons"
        :class="icon.label"
        cursor-pointer
        opacity-50
        transition
        hover:opacity-100
        @click="goExternal(icon.path)"
      />
    </ul>
  </div>
</template>
<script lang="ts" setup>
import type { Database } from '~/types';

const route = useRoute();
const nav = ref([
  {
    label: '关于',
    method: async () => {
      await navigateTo('/about');
    },
  },
  {
    label: '支持',
    method: async () => {
      await navigateTo('/surport');
    },
  },
]);
const icons = ref([
  {
    label: 'i-ri-github-line',
    path: 'https://github.com/AQian-Cup',
  },
  {
    label: 'i-ri-qq-line',
    path: '',
  },
  {
    label: 'i-ri-wechat-line',
    path: '',
  },
  {
    label: 'i-ri-netease-cloud-music-line',
    path: '',
  },
]);
const { data: profile } = await useAsyncData('profile', async () => {
  return [];
});
const goExternal = async (path: string) => {
  await navigateTo(path, {
    open: {
      target: '_blank',
    },
  });
};
</script>
<style scoped></style>
