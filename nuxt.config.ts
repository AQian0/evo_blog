// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'evo_blog',
    },
  },
  modules: ['@nuxtjs/eslint-module', '@unocss/nuxt', '@vueuse/nuxt'],
  css: ['@unocss/reset/tailwind.css'],
  devtools: { enabled: true },
});
