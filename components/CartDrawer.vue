<template>
    <div>
        <!-- 遮罩層 -->
        <div v-if="showCart" class="fixed inset-0 bg-black/50" @click="closeCart"></div>

        <!-- 購物車抽屜 -->
        <aside class="fixed right-0 top-0 h-full w-115 bg-white shadow-lg p-4 transition-transform duration-300"
            :class="showCart ? 'translate-x-0' : 'translate-x-full'">
            <h2 class="text-lg font-bold mb-4">🛒購物車</h2>

            <ul v-if="cartItems.length > 0">
                <li v-for="item in cartItems" :key="item.id"
                    class="flex justify-between items-center space-x-5 p-3 border-b">
                    <span class="flex-1">{{ item.title }}</span>
                    <span class="text-gray-600">${{ item.price }}</span>
                    <div class="flex items-center space-x-2">
                        <button
                            class="flex items-center p-1 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            :disabled="item.amount <= 1" @click="minusAmount(item)">
                            <Icon name="i-ic-round-minus" class=" text-xl" />
                        </button>
                        <span>{{ item.amount }}</span>
                        <button 
                            class="flex items-center p-1 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            :disabled="item.amount >= 10" @click="addAmount(item)">
                            <Icon name="i-ic-round-add" class="text-xl" />
                        </button>
                    </div>
                    <button 
                        class="flex item-center text-red-500 rounded-full hover:text-red-600 cursor-pointer"
                        @click="deleteItem(item)">
                        <Icon name="i-material-symbols-delete-rounded" class="text-2xl"/>
                    </button>
                </li>
            </ul>

            <p v-else class="text-gray-500">購物車是空的</p>

            <!-- 總金額 -->
            <div class="mt-4 pt-4">
                <div class="flex justify-between text-lg font-semibold">
                    <span>總計</span>
                    <span>${{ totalPrice }}</span>
                </div>
                <button class="mt-4 w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
                    前往結帳
                </button>
            </div>
        </aside>
    </div>
</template>

<script setup>

const showCart = useState('showCart');

const cartItems = useState('cartItems');

const totalPrice = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.amount * item.price, 0)
)

const minusAmount = (item) => {
    if (item.amount > 1) {
        item.amount -= 1
    }
}

const addAmount = (item) => {
    if (item.amount < 10) {
        item.amount += 1
    }
}

const deleteItem = (item) => {
    cartItems.value = cartItems.value.filter(cartItem => cartItem.id !== item.id);
}

const closeCart = () => {
    showCart.value = false
}

</script>