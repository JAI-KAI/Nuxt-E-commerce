## Nuxt 電商購物網站
本專案以 Nuxt 3 為核心，結合 Fake Store API 製作的模擬電商網站。
實作商品列表、購物車、模擬登入與 Token 管理等功能，並使用 Vercel 部署。
透過 Composable 管理全域狀態，模擬真實前後端協作流程。

## 功能特色
- 商品瀏覽：從 Fake Store API 取得商品資料並顯示
- 購物車功能：支援商品新增、刪除、數量調整（1～10）
- 動態提示訊息（Lightbox）：操作回饋（新增成功、超過數量限制）
- 模擬登入 / 註冊系統：
    Email 與密碼格式驗證。
    模擬登入成功後產生 Token 並儲存於 LocalStorage。
    後續 API 請求自動帶入 Token 模擬授權。
- 錯誤與例外處理：
    模擬 API 404 / 500 錯誤與網路斷線。
    顯示錯誤提示並提供「重新整理」按鈕。
- 使用mockAPI模擬CRUD操作

## 使用技術
- Nuxt 3：基於 Vue.js 的全端框架，結合 Nitro 與 Vite。
- Tailwind CSS：以 Utility-first 方式快速設計響應式 UI。
- Fake Store API：模擬商品資料來源。
- Composable + useState：取代傳統 Pinia 的狀態管理方式。
- Vercel：快速部署前端應用並自動 CI/CD。

## Demo 網址
🔗 [線上試用](https://nuxt-e-commerce-eta.vercel.app)

