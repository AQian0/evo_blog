<template>
  <Motion
    layout
    as="div"
    class="flex flex-col items-center justify-center transition-all overflow-hidden shadow-lg bg-background"
    :transition="{ type: 'tween' }"
  >
    <nuxt-picture
      class="mb-16 aspect-square overflow-hidden w-64 rounded-full"
      src="/images/avatar.jpg"
      height="256"
      width="256"
      alt="avatar"
      preload
      :imgAttrs="{
        fetchpriority: 'high',
      }"
    />
    <ul class="flex flex-col mb-8 space-y-4">
      <li
        v-for="option in nav"
        class="cursor-pointer opacity-50 transition hover:opacity-100"
        @click="option.method"
      >
        {{ option.label }}
      </li>
    </ul>
    <ul class="flex space-x-4 leading-0">
      <li
        v-for="icon in icons"
        class="cursor-pointer opacity-50 transition hover:opacity-100"
        @click="goExternal(icon.path)"
      >
        <Icon size="1.5rem" :name="icon.label" />
      </li>
    </ul>
  </Motion>
</template>
<script lang="ts" setup>
const nav = ref([
  {
    label: "关于",
    method: async (): Promise<void> => {
      await navigateTo("/about");
    },
  },
  {
    label: "支持",
    method: async (): Promise<void> => {
      await navigateTo("/support");
    },
  },
]);
const icons = ref([
  {
    label: "i-ri-github-line",
    path: "https://github.com/AQian-Cup",
  },
  {
    label: "i-ri-netease-cloud-music-line",
    path: "",
  },
]);
const goExternal = async (path: string): Promise<void> => {
  await navigateTo(path, {
    open: {
      target: "_blank",
    },
  });
};
</script>
<style scoped></style>
