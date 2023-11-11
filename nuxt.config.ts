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
    '@nuxtjs/eslint-module',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
    '@nuxtjs/html-validator',
    '@nuxt/image',
  ],
  css: ['@unocss/reset/tailwind.css'],
  devtools: { enabled: true },
  supabase: {
    redirect: false,
  },
  typescript: {
    strict: true,
  },
  image: {
    providers: {
      imageProvider: {
        name: 'imageProvider',
        provider: '~/utils/imageProvider.ts',
        options: {
          baseURL:
            'https://raw.githubusercontent.com/Cupkiller-vip/evo_blog_images/main/',
        },
      },
    },
  },
  htmlValidator: {
    options: {
      rules: {
        'text-content': 'off',
      },
    },
  },
});
