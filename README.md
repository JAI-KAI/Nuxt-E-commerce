## Nuxt 電商購物網站
本專案以 **Nuxt 3** 為核心，結合 **Fake Store API** 製作的模擬電商網站。
實作商品列表、購物車、模擬登入與 **Token** 管理等功能，並使用 **Vercel** 部署。
透過 **Composable** 管理全域狀態，模擬真實前後端協作流程。

## 功能特色
- **商品瀏覽**：從 Fake Store API 取得商品資料並顯示
- **購物車功能**：支援商品新增、刪除、數量調整（1～10）
- **動態提示訊息**（Lightbox）：操作回饋（新增成功、超過數量限制）
- **模擬登入 / 註冊系統**：
    Email 與密碼格式驗證。  
    模擬登入成功後產生 Token 並儲存於 LocalStorage。   
    後續 API 請求自動帶入 Token 模擬授權。
- **錯誤與例外處理**：
    API 呼叫失敗時提供錯誤提示與重新整理功能。

## 使用技術
- **Nuxt 3**
- **Tailwind CSS**
- **Fake Store API**
- **Composable + useState**
- **Vercel**

## 技術挑戰
在購物車功能的開發中，運用 Vue composables 將購物車資料、操作邏輯（如增減商品、刪除商品）抽離成可重用函式，成功解決了多個元件間資料共享與操作邏輯重複的問題，讓專案架構更清晰、維護更便利。

## Demo 
🔗 [線上試用](https://nuxt-e-commerce-eta.vercel.app)

