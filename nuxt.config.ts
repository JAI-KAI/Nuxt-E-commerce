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
    buildAssetsDir: '/static/',
    head: {
      title: '購物車電商網站',
      meta: [
        { name: 'description', content: '模擬使用者登入、串接商品API、購物車功能網站' },
      ],
    }
  },
  nitro: {
    prerender: {
      routes: ["/"], // 預渲染首頁
    },
  },
})