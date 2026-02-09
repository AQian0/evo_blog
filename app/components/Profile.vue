<template>
  <Motion
    layout
    as="div"
    class="bg-muted flex flex-col items-center justify-center overflow-hidden shadow-lg transition-all"
    :transition="{ type: 'tween' }"
  >
    <nuxt-picture
      class="mb-16 aspect-square w-64 overflow-hidden rounded-full"
      src="/images/avatar.jpg"
      height="256"
      width="256"
      alt="avatar"
      preload
      :imgAttrs="{
        fetchpriority: 'high',
      }"
    />
    <ul class="mb-8 flex flex-col space-y-4">
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
    path: "https://github.com/AQian0",
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
