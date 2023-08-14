// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/eslint-module', '@unocss/nuxt', '@vueuse/nuxt'],
  css: ['@unocss/reset/tailwind.css'],
  devtools: { enabled: true },
});
