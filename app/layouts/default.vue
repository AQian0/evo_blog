<template>
  <div class="flex min-h-screen w-full overflow-hidden">
    <Profile :class="route.path !== '/' ? 'flex-0' : 'flex-1'" />
    <div class="relative flex flex-4 flex-col items-center">
      <BaseBack v-if="route.path !== '/'" />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
</script>
