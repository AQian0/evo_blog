<template>
  <div flex="~ col" items-center justify-center bg-neutral-100 shadow-lg>
    <img mb-16 aspect-square w-64 rounded-full :src="avatar" />
    <ul flex="~ col" mb-8 space-y-4>
      <li v-for="option in nav" un-hover:opacity-100 cursor-pointer opacity-50>
        {{ option.label }}
      </li>
    </ul>
    <ul flex text-6 space-x-4>
      <li
        v-for="icon in icons"
        :class="icon.label"
        un-hover:opacity-100
        cursor-pointer
        opacity-50
        @click="goExternal(icon.path)"
      ></li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
const nav = ref([
  { label: '关于', path: '/about' },
  { label: '联系', path: '/contact' },
  { label: '支持', path: '/surport' },
]);
const icons = ref([
  {
    label: 'i-ri-github-line',
    path: 'https://github.com/Cupkiller-vip',
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
const goExternal = (path: string) => {
  window.open(path);
};
const avatar = ref(
  'https://raw.githubusercontent.com/Cupkiller-vip/evo_blog_images/main/avatar.jpg',
);
</script>
<style scoped></style>
