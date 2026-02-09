<template>
  <div class="flex min-h-screen w-full overflow-hidden">
    <Profile :class="route.path !== '/' ? 'flex-0' : 'flex-1'" />
    <div class="relative flex flex-4 flex-col items-center">
      <BaseBack class="absolute top-4 left-6 z-10" v-if="route.path !== '/'" />
      <BaseThemeButton class="absolute top-4 right-6 z-10" />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
