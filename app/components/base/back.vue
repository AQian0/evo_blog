<template>
  <div
    class="absolute top-4 left-6 z-10 flex cursor-pointer items-center space-x-1 opacity-50 transition hover:opacity-100"
    @click="back"
  >
    <button class="leading-0">
      <Icon size="2rem" name="i-ri-arrow-left-double-fill" />
    </button>
    <div>{{ text }}</div>
  </div>
</template>
<script lang="ts" setup>
type Props = {
  text?: string;
  onBack?: () => void;
};

const { text = "返回", onBack } = defineProps<Props>();

const router = useRouter();

const back = (): void => {
  if (onBack) {
    onBack();
    return;
  }
  router.back();
};
</script>
<style scoped></style>
