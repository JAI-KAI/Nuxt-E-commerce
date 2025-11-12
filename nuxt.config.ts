// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false
  },
  ssr: true,
  app: {
    baseURL: "/", // // Vercel 預設根目錄
    buildAssetsDir: '/_nuxt/', // 預設
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