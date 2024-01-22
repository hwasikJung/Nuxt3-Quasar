// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true // or false to disable
  },
  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@vee-validate/nuxt'
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
