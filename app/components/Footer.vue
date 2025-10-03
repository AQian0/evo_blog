<template>
  <div class="h-20 flex items-center mt-auto">
    <!-- 令人迷惑的一点——外层Unocss设置的透明度不会和内层的实现互动
    因此内层的hover效果并不会生效
    所以无奈地在每一个元素中添加了透明度 -->
    <div class="flex items-center gap-4 font-bold">
      <NuxtLink
        to="https://creativecommons.org/licenses/by-nc/4.0/deed.zh-hans"
        target="_blank"
        external
        class="opacity-25 transition hover:opacity-100"
      >
        CC BY-NC 4.0
      </NuxtLink>
      <span class="opacity-25">2024-PRESENT</span>
      <span class="opacity-25">© AQian</span>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped></style>
