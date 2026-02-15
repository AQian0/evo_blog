<template>
  <div class="flex flex-col items-center gap-4 py-16">
    <div class="flex w-5xl flex-col items-end" v-for="kind in kinds">
      <span class="font-bold opacity-50">{{ kind.name }}</span>
      <Separator class="my-4" />
      <div class="flex w-full flex-row-reverse flex-wrap gap-4">
        <stack-skill v-for="skill in kind.skills" v-bind="skill" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Kind } from "~/types";

const kinds = ref<Kind[]>([
  {
    name: "语言",
    skills: [
      {
        name: "JavaScript",
        icon: {
          prefix: "catppuccin",
          name: "javascript",
        },
        url: "https://developer.mozilla.org/en-US/docs/Glossary/JavaScript"
      },
      {
        name: "TypeScript",
        icon: {
          prefix: "catppuccin",
          name: "typescript"
        },
        url: "https://www.typescriptlang.org"
      },
      {
        name: "CSS",
        icon: {
          prefix: "catppuccin",
          name: "css3"
        },
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
      },
      {
        name: "HTML",
        icon: {
          prefix: "catppuccin",
          name: "html"
        },
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML"
      },
      {
        name: "Rust",
        icon: {
          prefix: "catppuccin",
          name: "rust-alt"
        },
        url: "rust-lang.org"
      }
    ],
  },
  {
    name: "库",
    skills: [
      {
        name: "Vue",
        icon: {
          prefix: "catppuccin",
          name: "vue"
        },
        url: "https://vuejs.org"
      },
      {
        name: "Nuxt",
        icon: {
          prefix: "catppuccin",
          name: "nuxt"
        },
        url: "https://nuxt.com"
      },
      {
        name: "VueUse",
        url: "https://vueuse.org"
      },
      {
        name: "TailwindCSS",
        icon: {
          prefix: "catppuccin",
          name: "tailwind",
        },
        url: "https://tailwindcss.com"
      },
      {
        name: "UnoCSS",
        icon: {
          prefix: "catppuccin",
          name: "unocss"
        },
        url: "https://unocss.dev"
      }
    ],
  },
  {
    name: "环境",
    skills: [
      {
        name: "Mac OS",
        icon: {
          prefix: "catppuccin",
          name: "macos"
        },
        url: "https://www.apple.com/os/macos",
      },
      {
        name: "Arch Linux",
        url: "https://archlinux.org",
      },
      {
        name: "Bun",
        icon: {
          prefix: "catppuccin",
          name: "bun"
        },
        url: "https://bun.com"
      },
      {
        name: "NodeJS",
        icon: {
          prefix: "catppuccin",
          name: "package-json"
        },
        url: "https://nodejs.org"
      }
    ],
  },
  {
    name: "工具",
    skills: [
      {
        name: "Git",
        icon: {
          prefix: "catppuccin",
          name: "git"
        },
        url: "https://git-scm.com"
      },
      {
        name: "Jujutsu",
        url: "https://www.jj-vcs.dev/latest"
      },
      {
        name: "Docker",
        icon: {
          prefix: "catppuccin",
          name: "docker"
        },
        url: "https://www.docker.com/"
      }
    ],
  },
]);
</script>
