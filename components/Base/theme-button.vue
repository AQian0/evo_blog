<template>
  <div cursor-pointer opacity-50 transition hover:opacity-100>
    <Transition name="fade" mode="out-in" @click="toggleDark(!isDark)">
      <div v-if="!isDark" i-ri-sun-fill />
      <div v-else i-ri-moon-fill />
    </Transition>
  </div>
</template>
<script lang="ts" setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<style scoped></style>
