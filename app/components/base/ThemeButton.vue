<template>
  <button class="opacity-50 transition hover:opacity-100" @click="handleToggle">
    <AnimatePresence mode="wait">
      <Motion
        :key="isDark ? 'moon' : 'sun'"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0 }"
      >
        <Icon :name="isDark ? 'i-ri-moon-fill' : 'i-ri-sun-fill'" />
      </Motion>
    </AnimatePresence>
  </button>
</template>
<script lang="ts" setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);

const handleToggle = () => {
  if (!document.startViewTransition) {
    toggleDark(!isDark.value);
    return;
  }
  document.startViewTransition(() => {
    toggleDark(!isDark.value);
  });
};
</script>
<style scoped></style>
