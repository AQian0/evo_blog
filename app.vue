<template>
  <div min-h-screen w-full flex bg-zinc-100>
    <Nav overflow-hidden></Nav>
    <NuxtLoadingIndicator :height="1"></NuxtLoadingIndicator>
    <NuxtPage class="flex-[3]"></NuxtPage>
    <div fixed top-4 right-6 text-6 z-10 opacity-50>
      <Transition name="fade" mode="out-in">
        <div v-if="!isMenuExpand">
          <div
            @click="menuIcons[0].method"
            :class="menuIcons[0].label"
            cursor-pointer
          ></div>
        </div>
        <div space-y-1 v-else>
          <div
            v-for="menuIcon in menuIcons.slice(1)"
            @click="menuIcon.method"
            :class="menuIcon.label"
            cursor-pointer
          ></div>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script lang="ts" setup>
const router = useRouter();
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
    method: () => {
      router.push('/');
    },
  },
  {
    label: 'i-ri-file-list-line',
    method: () => {
      router.push({
        path: '/',
        query: {
          type: 'article',
        },
      });
    },
  },
  {
    label: 'i-ri-book-2-line',
    method: () => {
      router.push({
        path: '/',
        query: {
          type: 'book',
        },
      });
    },
  },
]);
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
