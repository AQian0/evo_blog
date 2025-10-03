<template>
  <div class="min-h-screen w-full flex overflow-hidden">
    <Nav />
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
