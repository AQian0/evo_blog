// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'evo_blog',
      htmlAttrs: {
        lang: 'zh-CN',
      },
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
    '@nuxtjs/html-validator',
    '@nuxt/image',
    'dayjs-nuxt',
    '@nuxt/eslint',
    'nuxt-typed-router',
  ],
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/base.css',
    '~/assets/content.css',
    'highlight.js/styles/github-dark.min.css',
  ],
  devtools: { enabled: true },
  supabase: {
    redirect: false,
  },
  typescript: {
    strict: true,
  },
  htmlValidator: {
    options: {
      rules: {
        'text-content': 'off',
      },
    },
  },
});
