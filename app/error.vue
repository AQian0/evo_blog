<template>
  <div class="flex h-screen w-full flex-col gap-2 p-12">
    <div class="text-[3rem] font-bold">似乎遇到了一些问题……</div>
    <div class="flex items-center text-[2rem]">
      <span>错误代码：</span>
      <span :class="codeColor">{{ error.statusCode }}</span>
      <div class="ml-auto flex items-center gap-2">
        <button
          v-for="button in buttonGroup"
          class="flex cursor-pointer items-center justify-center gap-2 rounded-full p-2"
          @click="button.method"
        >
          <Icon size="1.5rem" :name="button.icon" />
        </button>
      </div>
    </div>
    <OverlayScrollbarsComponent defer class="bg-muted flex-1 rounded">
      <div class="flex flex-col gap-2 p-4">
        <span>信息：{{ error.message }}</span>
        <span v-if="error?.statusMessage">状态信息：{{ error?.statusText }}</span>
        <span v-if="error?.data">数据：{{ error?.data }}</span>
        <span v-if="error?.cause">原因：{{ error?.cause }}</span>
      </div>
    </OverlayScrollbarsComponent>
  </div>
</template>
<script lang="ts" setup>
import type { NuxtError } from "#app";
import { match, P } from "ts-pattern";

const { error } = defineProps<{
  error: NuxtError;
}>();

const codeColor = computed(() =>
  match(error.statusCode)
    .returnType<string>()
    .with(P.nullish, () => "")
    .when(
      c => c < 400,
      () => "text-warning",
    )
    .with(P.number, () => "text-error")
    .exhaustive(),
);
const buttonGroup = [
  {
    icon: "i-ri-home-2-line",
    method: async (): Promise<void> => {
      await clearError({
        redirect: "/",
      });
    },
  },
  {
    icon: "i-ri-github-line",
    method: async (): Promise<void> => {
      await navigateTo("https://github.com/AQian-Cup/evo_blog/issues", {
        external: true,
        open: {
          target: "_blank",
        },
      });
    },
  },
];
</script>
<style scoped></style>
