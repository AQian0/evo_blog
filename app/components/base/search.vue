<template>
  <div class="w-3xl text-base" @keyup.enter="search">
    <InputGroup>
      <InputGroupInput ref="inputRef" v-model="content" type="text" :placeholder="placeholder" />
      <InputGroupAddon align="inline-start">
        <Icon name="i-ri-search-line" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>K</Kbd>
        </KbdGroup>
      </InputGroupAddon>
    </InputGroup>
  </div>
</template>
<script lang="ts" setup>
const placeholder = ref("在此搜索");
const route = useRoute();
const content = ref((route.query.search as string) || "");

const inputRef = ref<{ $el: HTMLInputElement } | null>(null);

onKeyStroke("k", e => {
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
