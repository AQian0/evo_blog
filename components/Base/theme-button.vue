<template>
  <div class="opacity-50 transition hover:opacity-100 leading-0">
    <Transition name="fade" mode="out-in" @click="toggleDark(!isDark)">
      <button v-if="!isDark">
        <Icon name="i-ri-sun-fill" />
      </button>
      <button v-else>
        <Icon name="i-ri-moon-fill" />
      </button>
    </Transition>
  </div>
</template>
<script lang="ts" setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
<style scoped></style>
