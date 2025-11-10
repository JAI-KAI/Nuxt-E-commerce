## Nuxt 電商購物網站

本專案是一個使用 **Nuxt 3** 搭配 **Tailwind CSS** 開發的現代化電商網站 **SPA (Single Page Application)** 模擬應用。
實作商品列表、購物車、模擬登入與 **Token 授權管理**等核心功能。**透過 Nuxt Composable 實現全域狀態管理與邏輯複用**，並部署於 **Vercel** 實現 **CI/CD** 自動化流程，高度模擬真實商業應用情境。

## 功能特色
- **商品瀏覽**：從 Fake Store API 取得商品資料並顯示
- **購物車功能**：支援商品新增、刪除、數量調整（1～10）
- **動態提示訊息**（Lightbox）：操作回饋（新增成功、超過數量限制）
- **模擬登入 / 註冊系統**：
    Email 與密碼格式驗證
    使用 useCookie 儲存 Token，確保在伺服器端即可存取狀態
    利用 Nuxt 中介層 (Middleware) 模擬路由保護，確保未登入用戶無法訪問特定頁面
- **錯誤與例外處理**：
   實作 API Interceptor 概念（透過 Composables 實現），統一處理 API 呼叫失敗、網絡錯誤

## 使用技術
- **Nuxt 3**
- **Tailwind CSS**
- **Fake Store API**
- **Nuxt Composable (狀態、邏輯抽象)**
- **Vercel**

## 技術挑戰
在購物車功能的開發中，運用 Vue composables 將購物車資料、操作邏輯（如增減商品、刪除商品）抽離成可重用函式，成功解決了多個元件間資料共享與操作邏輯重複的問題，讓專案架構更清晰、維護更便利。

## Demo 
🔗 [線上試用](https://nuxt-e-commerce-eta.vercel.app)

