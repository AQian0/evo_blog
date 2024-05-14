<template>
  <div>
    <Transition name="fade" mode="out-in">
      <div v-if="!isMenuExpand">
        <div
          :class="menuIcons[0].label"
          cursor-pointer
          opacity-50
          transition
          hover:opacity-100
          @click="menuIcons[0].method"
        />
      </div>
      <div v-else space-y-3>
        <div
          v-for="menuIcon in menuIcons.slice(1)"
          :class="menuIcon.label"
          cursor-pointer
          opacity-50
          hover:opacity-100
          @click="menuIcon.method"
        />
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
