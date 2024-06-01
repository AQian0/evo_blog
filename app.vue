<template>
  <div min-h-screen w-full flex evo-primary-bg-color evo-primary-text-color>
    <Nav overflow-hidden />
    <NuxtLoadingIndicator :height="1" />
    <div flex="~ col  [3]" relative items-center py-20>
      <BasePageHeader />
      <NuxtPage w-full flex-1 />
      <Footer />
    </div>
    <div fixed right-6 top-4 z-10 flex gap-4 text-6>
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
