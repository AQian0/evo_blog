import tailwindcss from "@tailwindcss/vite" 
 
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Evo Blog',
      htmlAttrs: {
        lang: 'zh-CN',
      },
      meta: [
        {
          name: 'description',
          content: 'A blog that documents programming-related content such as JavaScript, Vue, and Rust, which, like you and me, will get better.',
        }
      ],
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
    'nuxt-typed-router',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@pinia/colada-nuxt',
    '@nuxt/content',
    '@nuxt/ui',
    'shadcn-nuxt',
    'motion-v/nuxt'
  ],

  css: [
    '~/assets/base.css',
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

  image: {
    screens: {
      icon: 40,
      icon2x: 80,
      icon4x: 160,
    }
  },

  icon: {
    serverBundle: {
      collections: ['ri', 'catppuccin'],
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
      },
      {
        from: '@formkit/tempo',
        imports: ['format', 'parse'],
      }
    ],
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark-default',
        }
      }
    }
  },

  shadcn: {
    prefix: '',
    componentDir: './app/components/ui'
  },

  compatibilityDate: '2025-02-05',
});
