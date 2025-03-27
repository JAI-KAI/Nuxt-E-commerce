<template>
    <div>
        <!-- 遮罩層 -->
        <div v-if="showCart" class="fixed inset-0 bg-black/50" @click="closeCart"></div>

        <!-- 購物車抽屜 -->
        <aside
            class="fixed right-0 top-0 h-full w-80 bg-white shadow-lg p-4 transform transition-transform duration-300"
            :class="showCart ? 'translate-x-0' : 'translate-x-full'">
            <h2 class="text-lg font-bold mb-4">購物車</h2>
            <ul v-if="cartItems.length > 0">
                <li v-for="item in cartItems" :key="item.id" class="flex justify-between p-2 border-b">
                    <span>{{ item.name }}</span>
                    <span>${{ item.price }}</span>
                </li>
            </ul>
            <p v-else class="text-gray-500">購物車是空的</p>
            <button class="mt-4 w-full bg-blue-600 text-white p-2 rounded cursor-pointer" @click="checkout">
                結帳
            </button>
        </aside>
    </div>
</template>

<script setup>
import { ref } from "vue";

const showCart = useState('showCart', () => false);

const closeCart = () => {
    showCart.value = false
}

const cartItems = ref([
    { id: 1, name: "商品 A", price: 100 },
    { id: 2, name: "商品 B", price: 200 },
]);

const checkout = () => {
    console.log("進行結帳");
    // Stripe API 整合點
};

</script>