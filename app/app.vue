<template>
  <OverlayScrollbarsComponent defer class="h-screen bg-stone-100">
    <div class="min-h-screen w-full flex overflow-hidden">
        <Nav />
        <NuxtLoadingIndicator :height="1" />
        <div class="flex flex-col flex-3 relative items-center">
          <BasePageHeader />
          <NuxtPage class="w-full flex-1" />
          <Footer />
        </div>
    </div>
  </OverlayScrollbarsComponent>
</template>
<script lang="ts" setup></script>
<style></style>
