// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false
  },
  app: {
    baseURL: "/Nuxt-E-commerce/", // GitHub Pages 需要設定 baseURL
  },
  nitro: {
    prerender: {
      routes: ["/"], // 預渲染首頁
    },
  },
})