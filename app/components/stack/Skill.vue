<template>
  <div
    :title="name"
    :aria-label="name"
    role="link"
    tabindex="0"
    class="bg-accented/50 hover:bg-accented flex h-20 w-20 cursor-pointer items-center justify-center rounded transition"
    @click="goExternal"
    @keydown.enter="goExternal"
  >
    <Icon v-if="icon" size="2rem" :name="`i-${icon.prefix}-${icon.name}`" />
    <span v-else class="text-toned text-center">{{ name }}</span>
  </div>
</template>

<script lang="ts" setup>
import type { Skill } from "~/types";

const { name, icon, url } = defineProps<Skill>();
const goExternal = async (): Promise<void> => {
  if (!url) {
    return;
  }
  await navigateTo(url, {
    open: {
      target: "_blank",
    },
  });
};
</script>
