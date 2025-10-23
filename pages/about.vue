<template>
    <div class="bg-gray-100 min-h-screen px-8 sm:px-16 lg:px-24 py-12">
        <!-- 主標題 -->
        <h1 class="text-4xl font-bold text-blue-600 text-center mb-8">關於網站</h1>

        <!-- 內容區域 -->
        <div class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <p class="text-lg text-gray-800 mb-4">本網站使用以下技術構建：</p>

            <!-- 技術列表 -->
            <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li><span class="font-semibold text-blue-500">Nuxt.js:</span> 基於 Vue.js、Nitro 與 Vite 的 Web應用框架，實作路由、資料串接與狀態管理。</li>
                <li><span class="font-semibold text-blue-500">Fake Store API:</span> 串接外部 API，模擬電商商品資料來源。</li>
                <li><span class="font-semibold text-blue-500">Tailwind CSS:</span> 以 Utility-first 方式快速設計響應式 UI。</li>
                <li><span class="font-semibold text-blue-500">使用者驗證:</span> 實作模擬登入 / 註冊流程，前端格式驗證（Email、密碼）、Token 保存與驗證。</li>
                <li><span class="font-semibold text-blue-500">錯誤處理與例外狀況:</span> API 呼叫失敗時提供錯誤提示與重新整理功能。</li>
                <li><span class="font-semibold text-blue-500">部署:</span> 部署至 Vercel，提供可線上存取的成品展示。</li>
            </ul>

            <!-- 其他作品連結 -->
            <div class="mt-6">
                <p class="text-lg text-gray-800 mb-2">更多作品：</p>
                <a href="https://github.com/JAI-KAI" target="_blank"
                    class="text-blue-500 hover:text-blue-700 font-semibold transition duration-200">
                    前往我的 GitHub 查看更多作品
                </a>
            </div>
        </div>
    </div>
</template>