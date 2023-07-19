<template>
  <div flex="~ col" justify-center items-center bg-neutral-100 shadow-lg>
    <img aspect-square w-64 mb-16 rounded-full src="/avatar.jpg" />
    <ul flex="~ col" mb-8 space-y-4>
      <li v-for="option in nav" cursor-pointer opacity-50 un-hover:opacity-100>
        {{ option.label }}
      </li>
    </ul>
    <ul flex space-x-4 text-6>
      <li
        v-for="icon in icons"
        :class="icon.label"
        cursor-pointer
        opacity-50
        un-hover:opacity-100
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
    path: '',
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
    label: 'i-ri-alipay-line',
    path: '',
  },
]);
</script>
<style scoped></style>
