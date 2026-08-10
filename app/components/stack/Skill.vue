<template>
  <a
    :title="name"
    :aria-label="name"
    :href="url"
    target="_blank"
    rel="noopener"
    class="bg-accented/50 hover:bg-accented flex h-20 w-20 cursor-pointer items-center justify-center rounded transition"
  >
    <Icon v-if="icon" size="2rem" :name="`i-${icon.prefix}-${icon.name}`" />
    <span v-else class="text-toned text-center">{{ name }}</span>
  </a>
</template>

<script lang="ts" setup>
import type { Skill } from "~/types";

const { name, icon, url } = defineProps<Skill>();
</script>
