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
    '@nuxtjs/supabase',
  ],
  css: ['@unocss/reset/tailwind.css'],
  devtools: { enabled: true },
  supabase: {
    redirect: false,
  },
  typescript: {
    strict: true,
  },
});
