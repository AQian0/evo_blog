import { addComponent, defineNuxtModule } from "@nuxt/kit"

export default defineNuxtModule({
  meta: {
    name: 'overlayscrollbars-nuxt',
    configKey: 'overlayscrollbars',
  },
  setup() {
    addComponent({
      name: 'OverlayScrollbarsComponent',
      filePath: 'overlayscrollbars-vue',
      export: 'OverlayScrollbarsComponent',
      mode: 'client',
    })
  }
})
