import tailwindcss from "@tailwindcss/vite" 
 
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Evo Blog',
      htmlAttrs: {
        lang: 'zh-CN',
      },
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/html-validator',
    '@nuxt/image',
    'dayjs-nuxt',
    '@nuxt/eslint',
    'nuxt-typed-router',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@pinia/colada-nuxt',
  ],

  css: [
    '~/assets/base.css',
    '~/assets/content.css',
    'highlight.js/styles/github-dark.min.css',
    'overlayscrollbars/overlayscrollbars.css',
  ],

  devtools: { enabled: true },

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

  icon: {
    serverBundle: {
      collections: ['ri']
    }
  },

  imports: {
    presets: [
      {
        from: 'overlayscrollbars',
        imports: ['OverlayScrollbars', 'ScrollbarsHidingPlugin', 'SizeObserverPlugin', 'ClickScrollPlugin'],
      },
      {
        from: 'overlayscrollbars-vue',
        imports: ['useOverlayScrollbars'],
      }
    ],
  },

  fonts: {
    experimental: {
      processCSSVariables: true,
    },
    defaults: {
      weights: [400, 700],
    },
  },

  compatibilityDate: '2025-02-05',
});
