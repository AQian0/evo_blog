<template>
  <div
    class="flex flex-col items-center justify-center transition-all overflow-hidden shadow-lg"
    :style="{
      '--isRoot': route.path === '/' ? '1' : '0',
      flex: 'var(--isRoot)',
    }"
  >
    <nuxt-img
      class="mb-16 aspect-square w-64 rounded-full"
      height="256"
      width="256"
      src="/images/avatar.jpg"
      alt="avatar"
    />
    <ul class="flex flex-col mb-8 space-y-4">
      <li
        v-for="option in nav"
        class="cursor-pointer opacity-50 transition hover:opacity-100"
        @click="option.method"
      >
        {{ option.label }}
      </li>
    </ul>
    <ul class="flex space-x-4 leading-0">
      <li
        v-for="icon in icons"
        class="cursor-pointer opacity-50 transition hover:opacity-100"
        @click="goExternal(icon.path)"
      >
        <Icon size="1.5rem" :name="icon.label" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
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
const goExternal = async (path: string) => {
  await navigateTo(path, {
    open: {
      target: '_blank',
    },
  });
};
</script>
<style scoped></style>
