import withNuxt from './.nuxt/eslint.config.mjs';
import unocss from '@unocss/eslint-config/flat';

export default withNuxt([
  unocss,
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/require-v-for-key': 'off',
      'vue/valid-v-for': 'off',
      'vue/no-v-html': 'off',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
          },
        },
      ],
    },
    ignores: ['node_modules/*', 'dist/*', '.nuxt/*'],
  },
]);
