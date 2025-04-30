export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  app: {
    head: {
      title: 'Personal',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      bodyAttrs: { class: 'bg-neutral-100 dark:bg-neutral-900' },
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },
});
