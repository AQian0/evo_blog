// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'evo_blog',
    },
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/supabase',
  ],
  css: ['@unocss/reset/tailwind.css'],
  devtools: { enabled: true },
});
