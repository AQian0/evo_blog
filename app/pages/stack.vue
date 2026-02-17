<template>
  <div class="flex flex-col items-center gap-4 py-16">
    <div class="flex w-5xl flex-col items-end" v-for="kind in stacks?.kinds">
      <span class="font-bold opacity-50">{{ kind.name }}</span>
      <Separator class="my-4" />
      <div class="flex w-full flex-row-reverse flex-wrap gap-4">
        <stack-skill v-for="skill in kind.skills" v-bind="skill" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: stacks } = await useAsyncData("stacks", () => queryCollection("stacks").first());
</script>
