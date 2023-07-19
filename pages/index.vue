<template>
  <div flex="~ col" p-20 items-center space-y-4>
    <ul flex="~ col" space-y-4>
      <li
        v-for="post in posts"
        flex="~ col"
        justify-between
        p-4
        w-144
        h-24
        bg-zinc-50
        border-2
        border-zinc-200
        rounded-2
        cursor-pointer
      >
        <div flex justify-between>
          <span>{{ post.title }}</span>
          <span>{{ post.time }}</span>
        </div>
        <span>{{ post.content }}</span>
      </li>
    </ul>
    <div flex justify-between items-center w-48>
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
  },
  {
    title: 'Hello World',
    content: 'This is my first post.',
    time: '2021-10-01',
  },
]);
</script>
<style scoped></style>
