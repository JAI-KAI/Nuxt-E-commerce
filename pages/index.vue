<template>
    <LightBox />
    <div v-if="error" class="text-center mt-10">
        <p class="text-xl">伺服器錯誤，請稍後再試</p>
        <button @click="doRefresh" class="mt-10 px-3 py-2 bg-red-400 rounded cursor-pointer hover:opacity-70">
            重新整理
        </button>
    </div>
    <div v-else-if="products && products.length === 0">
        <p>找不到商品</p>
    </div>
    <div class="flex" v-else>
        <CategorySidebar :categories="['ALL', ...new Set(products.map(p => p.category))]" />
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
</template>

<script setup>
const { setCurrentUserEmail, getCurrentUserEmail, login, logout } = useAuth()
const { addMessage } = useMessage();

const isLoggedIn = useState('isLoggedIn');
const category = useState('category');
const cartItems = useState('cartItems');

if (import.meta.client) {
    if (!isLoggedIn.value) {
        alert('請先登入')
        navigateTo('/login')
    }
}


const { data: products, error, status, refresh } = await useFetch('https://fakestoreapi.com/products');

const filteredProducts = computed(() => {
    // 商品分類顯示
    if (category.value === 'ALL') return products.value;
    return products.value.filter(product => product.category === category.value)
})

const addToCart = (productItem) => {
    const product = cartItems.value.find(cartItems => cartItems.id === productItem.id);
    if (!product) {
        cartItems.value.push({ ...productItem, amount: 1 });
        addMessage('成功加入購物車');
    } else if (product.amount >= 10) {
        addMessage('商品數量超過限制');
    } else {
        product.amount += 1
        addMessage('成功加入購物車');
    }
}
const doRefresh = () => {
    refresh()
    if (status.value == 'pending') {
        addMessage('重新整理中...')
    }
}
</script>