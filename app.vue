<template>
  <div min-h-screen w-full flex bg-zinc-100>
    <Nav overflow-hidden></Nav>
    <NuxtLoadingIndicator :height="1"></NuxtLoadingIndicator>
    <NuxtPage class="flex-[3]"></NuxtPage>
    <div fixed right-6 top-4 z-10 flex text-6 space-x-2>
      <BaseSearch></BaseSearch>
      <BaseMenu></BaseMenu>
    </div>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
