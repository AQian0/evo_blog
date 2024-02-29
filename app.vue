<template>
  <div min-h-screen w-full flex bg-zinc-100>
    <Nav overflow-hidden></Nav>
    <NuxtPage class="flex-[3]"></NuxtPage>
  </div>
</template>
<script lang="ts" setup></script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
