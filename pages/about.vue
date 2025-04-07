<template>
    <div class="bg-gray-100 min-h-screen px-8 sm:px-16 lg:px-24 py-12">
        <!-- 主標題 -->
        <h1 class="text-4xl font-bold text-blue-600 text-center mb-8">關於網站</h1>

        <!-- 內容區域 -->
        <div class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <p class="text-lg text-gray-800 mb-4">本網站使用以下技術構建：</p>

            <!-- 技術列表 -->
            <ul class="list-disc list-inside text-gray-700 space-y-2">
                <li><span class="font-semibold text-blue-500">Nuxt.js:</span> 基於Vue.js、Nitro以及Vite的Web應用框架。</li>
                <li><span class="font-semibold text-blue-500">Pexels API:</span> 獲取電商類型相關資料。</li>
                <li><span class="font-semibold text-blue-500">Tailwind CSS:</span> 便利的設計工具。</li>
                <li><span class="font-semibold text-blue-500">GitHub Pages:</span> 部署靜態網站託管服務。</li>
            </ul>
            <!-- 其他作品鏈接 -->
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