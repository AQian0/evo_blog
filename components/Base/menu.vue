<template>
  <div opacity-50>
    <Transition name="fade" mode="out-in">
      <div v-if="!isMenuExpand">
        <div
          @click="menuIcons[0].method"
          :class="menuIcons[0].label"
          cursor-pointer
        ></div>
      </div>
      <div space-y-2 v-else>
        <div
          v-for="menuIcon in menuIcons.slice(1)"
          @click="menuIcon.method"
          :class="menuIcon.label"
          cursor-pointer
        ></div>
      </div>
    </Transition>
  </div>
</template>
<script lang="ts" setup>
const isMenuExpand = ref(false);
const menuIcons = ref([
  {
    label: 'i-ri-menu-fill',
    method: () => {
      isMenuExpand.value = true;
    },
  },
  {
    label: 'i-ri-close-circle-line',
    method: () => {
      isMenuExpand.value = false;
    },
  },
  {
    label: 'i-ri-home-8-line',
    method: async () => {
      await navigateTo('/');
    },
  },
  {
    label: 'i-ri-file-list-line',
    method: async () => {
      await navigateTo({
        path: '/',
        query: {
          type: 'article',
        },
      });
    },
  },
  {
    label: 'i-ri-book-2-line',
    method: async () => {
      await navigateTo({
        path: '/',
        query: {
          type: 'book',
        },
      });
    },
  },
]);
</script>
<style scoped></style>
