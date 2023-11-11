<template>
  <div min-h-screen w-full flex bg-zinc-100>
    <Nav overflow-hidden :class="showClass"></Nav>
    <NuxtPage grow-4></NuxtPage>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const showClass = computed(() => {
  if (route.path === '/') {
    return 'grow-1';
  }
  return 'w-0';
});
</script>
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
