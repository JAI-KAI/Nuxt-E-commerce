<template>
    <div class="products-page">
        <!-- 錯誤狀態 -->
        <div v-if="error" class="error-container min-h-[50vh] flex items-center justify-center">
            <div class="text-center">
                <p class="text-xl mb-6">伺服器錯誤，請稍後再試</p>
                <button @click="doRefresh" class="px-6 py-2 bg-red-400 rounded cursor-pointer hover:opacity-70">
                    重新整理
                </button>
            </div>
        </div>

        <!-- 無商品狀態 -->
        <div v-else-if="products && products.length === 0"
            class="empty-container min-h-[50vh] flex items-center justify-center">
            <p class="text-xl text-gray-500">找不到商品</p>
        </div>

        <!-- 主要商品列表 -->
        <div v-else class="products-container flex">
            <CategorySidebar :categories="products ? ['ALL', ...new Set(products.map(p => p.category))] : ['ALL']" />
            <div class="container mx-auto p-6">
                <h1 class="text-2xl font-bold mb-6">商品列表</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div v-for="product in filteredProducts" :key="product.id"
                        class="flex flex-col bg-white shadow-lg rounded-lg p-4">
                        <div class="relative w-full h-48 overflow-hidden rounded-md">
                            <img :src="product.image" alt="商品圖片"
                                class="w-full h-full object-contain hover:scale-125 transition rounded-md" />
                        </div>
                        <h2 class="text-lg font-semibold mt-2">{{ product.title }}</h2>
                        <div class="mt-auto space-y-3">
                            <p class="text-gray-600 mt-1">${{ product.price }}</p>
                            <button
                                class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                                @click="addToCart(product)">
                                加入購物車
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const { addToCart } = useCart()
const { addMessage } = useMessage()
const category = useState('category')

definePageMeta({
    middleware: ['auth']
})

const { products, error, status, refresh } = useAuthFetch()

const filteredProducts = computed(() => {
    // 商品分類顯示
    if (!products?.value) return []
    if (category.value === 'ALL') return products.value
    return products.value.filter(product => product.category === category.value)
})

const doRefresh = () => {
    if (refresh) refresh()
    if (status?.value == 'pending') {
        addMessage('重新整理中...')
    }
}
</script>