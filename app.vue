<template>
  <div min-h-screen w-full flex bg-zinc-100>
    <Nav overflow-hidden></Nav>
    <NuxtLoadingIndicator :height="1"></NuxtLoadingIndicator>
    <NuxtPage class="flex-[3]"></NuxtPage>
    <div flex space-x-2 fixed top-4 right-6 text-6 z-10>
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
