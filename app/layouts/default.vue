<template>
  <div class="min-h-screen w-full flex overflow-hidden">
    <Profile :class="route.path !== '/' ? 'flex-0' : 'flex-1'" />
    <div class="flex flex-col flex-4 relative items-center">
      <BaseBack v-if="route.path !== '/'" />
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>
