export default defineNuxtConfig({
  modules: ['@owdproject/nuxt'],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
  i18n: {
    strategy: 'no_prefix',
  },
  devtools: { enabled: true },
  compatibilityDate: 'latest',
  ssr: false,
  // npm-installed OWD apps use the engine's auto-imported composables/stores
  // without an explicit `#imports` import. Nuxt's auto-import transform skips
  // node_modules unless the file matches `imports.transform.include`.
  imports: {
    transform: {
      include: [/[\\/]@owdproject[\\/]nuxt-app-[^\\/]+[\\/]/],
    },
  },
})
