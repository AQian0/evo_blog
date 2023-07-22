<template>
  <div flex="~ col" items-center py-20 space-y-4>
    <home-posts>
      <home-posts-post v-for="post in posts" :post="post"></home-posts-post>
    </home-posts>
    <div w-48 flex items-center justify-between>
      <button i-ri-arrow-left-s-fill text-8></button>
      <ul flex space-x-4>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
      <button i-ri-arrow-right-s-fill text-8></button>
    </div>
  </div>
</template>
<script lang="ts" setup>
const posts = ref([
  {
    title: 'Hello World',
    content: 'This is my first post.',
    time: '2021-10-01',
    id: '0',
  },
  {
    title: 'Hello World',
    content: 'This is my first post.',
    time: '2021-10-01',
    id: '1',
  },
]);
</script>
<style scoped></style>
