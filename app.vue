<template>
  <div class="min-h-screen w-full flex bg-stone-100">
    <Nav />
    <NuxtLoadingIndicator :height="1" />
    <div class="flex flex-col flex-3 relative items-center py-20">
      <BasePageHeader />
      <NuxtPage class="w-full flex-1" />
      <Footer />
    </div>
    <div class="fixed right-6 top-4 z-10 flex items-center gap-4 text-2xl">
      <BaseSearch />
      <BaseThemeButton />
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
</style>
