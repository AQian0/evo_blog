<template>
  <div
    fixed
    left-8
    top-8
    z-10
    flex
    cursor-pointer
    items-center
    opacity-50
    transition
    space-x-1
    hover:opacity-100
    @click="goBack"
  >
    <div i-ri-arrow-left-double-fill text-8></div>
    <div>返回</div>
  </div>
</template>
<script lang="ts" setup>
const goBack = () => {
  window.history.back();
};
</script>
<style scoped></style>
