<template>
    <div class="flex">
        <CategorySidebar :categories="['ALL', ...new Set(products.map(p => p.category))]"/>
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
                    <p class="text-gray-600 mt-1">${{ product.price }}</p>
                    <button
                        class="mt-auto w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                        @click="addToCart(product)">
                        加入購物車
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CategorySidebar from '~/components/CategorySidebar.vue';

const category =  useState('category');

const { data: products } = useFetch('https://fakestoreapi.com/products');

const filteredProducts = computed(() => {
    if(category.value === 'ALL') return products.value;
    return products.value.filter(product => product.category === category.value)
})
</script>