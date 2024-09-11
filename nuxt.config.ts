export default defineNuxtConfig({
  app: {
    head: {
      title: 'Personal',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      bodyAttrs: { class: 'bg-gray-100 dark:bg-gray-900' },
    },
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint'],
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },
});
