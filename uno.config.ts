import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
} from 'unocss';

export default defineConfig({
  shortcuts: {
    'evo-primary-text-color': 'text-black dark:text-white',
    'evo-primary-bg-color': 'bg-zinc-100 dark:bg-zinc-900',
    'evo-scrollBar-bg-color': 'bg-zinc-700 dark:bg-zinc-300',
    'evo-post-bg-color':
      'bg-zinc-50 hover:bg-zinc-300 dark:bg-zinc-950 dark:hover:bg-zinc-700',
    'evo-post-border-color': 'border-zinc-200 dark:border-zinc-800',
    'evo-post-text-color':
      'group-hover:text-white dark:text-zinc-100 dark:group-hover:text-black',
    'evo-post-date-text-color': 'text-zinc dark:text-zinc-600',
    'evo-post-mask': 'from-transparent  to-zinc-100 dark:to-zinc-900',
    'evo-nav-bg-color': 'bg-neutral-100 dark:bg-neutral-900',
    'evo-pagination-text-color': 'text-zinc dark:text-zinc-600',
    // 无法单独设定自定义阴影颜色
    'evo-primary-shadow':
      'shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_15px_-3px_rgba(255,255,255,0.1),0_4px_6px_-4px_rgba(255,255,255,0.1)]',
    'evo-input-bg-color': 'bg-white dark:bg-black',
  },
  presets: [
    presetUno({
      attributifyPseudo: true,
    }),
    presetAttributify(),
    presetIcons({
      collections: {
        ri: () =>
          import('@iconify-json/ri/icons.json')
            .then((i) => i.default)
            .catch((err) => {
              throw err;
            }),
      },
    }),
  ],
});
