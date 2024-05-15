import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
} from 'unocss';

export default defineConfig({
  shortcuts: {
    'evo-primary-bg-color': 'bg-zinc-100',
    'evo-scrollBar-bg-color': 'bg-zinc-700',
    'evo-post-bg-color': 'bg-zinc-50 hover:bg-zinc-300',
    'evo-post-border-color': 'border-zinc-200',
    'evo-post-text-color': 'group-hover:text-white',
    'evo-post-date-text-color': 'text-zinc',
    'evo-nav-bg-color': 'bg-neutral-100',
    'evo-pagination-text-color': 'text-zinc',
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
