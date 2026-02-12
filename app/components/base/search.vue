<template>
  <div class="relative w-3xl text-base" @keyup.enter="search">
    <Input ref="inputRef" v-model="content" type="text" :placeholder="placeholder" />
    <div class="absolute top-[50%] right-3 translate-y-[-50%] flex items-center gap-2">
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>K</Kbd>
      </KbdGroup>
      <button
        type="button"
        class="cursor-pointer leading-0 opacity-50 transition hover:opacity-100"
        @click="search"
      >
        <Icon name="i-ri-search-line" />
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup>
const placeholder = ref("在此搜索");
const route = useRoute();
const content = ref((route.query.search as string) || "");

const inputRef = ref<{ $el: HTMLInputElement } | null>(null);

onKeyStroke("k", (e) => {
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault();
    inputRef.value?.$el.focus();
  }
});

const search = async (): Promise<void> => {
  await navigateTo({
    path: "/",
    query: {
      search: content.value,
    },
  });
};
</script>
<style scoped></style>
