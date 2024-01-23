// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    shim: false,
    typeCheck: true
  },
  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@vee-validate/nuxt',
    '@vueuse/nuxt'
  ],
  quasar: {
    plugins: ['Notify'],
    extras: {
      fontIcons: ['material-icons']
    }
  }
  // imports: {
  //   dirs: ['./stores']
  // },
  // pinia: {
  //   autoImports: ['defineStore', 'acceptHMRUpdate']
  // }
})
