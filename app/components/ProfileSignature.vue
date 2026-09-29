<template>
  <svg
    viewBox="12 4 284 96"
    fill="none"
    stroke="currentColor"
    stroke-width="2.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    role="img"
    aria-label="AQian 手写签名"
    class="text-primary"
  >
    <title>AQian</title>
    <Motion
      v-for="stroke in STROKE"
      :key="stroke.d"
      as="path"
      :d="stroke.d"
      :stroke-width="stroke.width"
      :initial="{ pathLength: 0, opacity: 0 }"
      :animate="{ pathLength: 1, opacity: 1 }"
      :transition="{
        duration: stroke.duration,
        delay: stroke.delay,
        ease: 'easeInOut',
        opacity: { duration: 0, delay: stroke.delay },
      }"
    />
  </svg>
</template>

<script setup lang="ts">
// Custom strokes for the GitHub display name AQian, in handwriting order.
const STROKE = [
  {
    d: "M20 79 Q45 38 78 10 Q82 7 79 18 L62 80",
    duration: 0.55,
    delay: 0.2,
    width: 3,
  },
  {
    d: "M23 57 Q49 50 82 47",
    duration: 0.2,
    delay: 0.7,
    width: 2.6,
  },
  {
    d: "M115 17 C138 0 151 12 143 34 C137 55 110 85 96 75 C80 65 96 26 115 17",
    duration: 0.65,
    delay: 0.85,
    width: 2.8,
  },
  {
    d: "M105 59 C121 65 127 79 141 79",
    duration: 0.22,
    delay: 1.45,
    width: 2.8,
  },
  {
    d: "M161 46 Q147 67 152 69 Q157 72 172 59 C179 48 189 41 194 48 C189 40 173 54 171 64 C168 76 183 68 191 51 L196 45 C188 64 186 71 194 67 L205 57 L213 45 Q215 44 205 65 C217 49 230 38 227 49 L224 58 C220 71 249 60 272 49",
    duration: 0.85,
    delay: 1.65,
    width: 2.6,
  },
  {
    d: "M165 33 L166 32",
    duration: 0.1,
    delay: 2.45,
    width: 3.8,
  },
  {
    d: "M42 94 Q166 78 290 87",
    duration: 0.5,
    delay: 2.6,
    width: 1.8,
  },
] as const;
</script>
