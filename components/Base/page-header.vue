<template>
  <div
    v-show="!isRoot"
    absolute
    left-6
    top-4
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
    <div i-ri-arrow-left-double-fill text-8 />
    <div>返回</div>
  </div>
</template>
<script lang="ts" setup>
const route = useRoute();
const router = useRouter();
const isRoot = computed(() => {
  return route.path === '/';
});
const goBack = () => {
  router.back();
};
</script>
<style scoped></style>
