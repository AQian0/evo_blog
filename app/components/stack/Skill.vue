<template>
  <div
    class="bg-accented/50 flex h-20 w-20 cursor-pointer items-center justify-center rounded transition hover:bg-accented"
    @click="goExternal"
  >
    <Icon v-if="icon" size="2rem" class="text-default" :name="`i-${icon.prefix}-${icon.name}`" />
    <span v-else class="text-toned">{{ name }}</span>
  </div>
</template>

<script lang="ts" setup>
import type { Skill } from "~/types";

const { name, icon, url } = defineProps<Skill>();
const goExternal = async (): Promise<void> => {
  if (!url) {
    return
  }
  await navigateTo(url, {
    open: {
      target: "_blank",
    },
  });
};
</script>
