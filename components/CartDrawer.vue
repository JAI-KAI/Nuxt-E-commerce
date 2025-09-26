<template>
    <div class="text-xs xl:text-base">
        <!-- 遮罩層 -->
        <div v-show="showCart" class="fixed inset-0 bg-black/50" @click="closeCart"></div>

        <!-- 購物車抽屜 -->
        <aside
            class="fixed right-0 top-0 h-full w-4/5 lg:w-115 bg-white shadow-lg p-2 lg:p-4 transition-transform duration-300 overflow-y-scroll"
            :class="showCart ? 'translate-x-0' : 'translate-x-full'">
            <h2 class="text-sm lg:text-lg font-bold mb-4">🛒購物車</h2>
            <ul v-if="Array.isArray(currentUserCart[currentUserEmail]) && currentUserCart[currentUserEmail].length > 0">
                <li v-for="item in currentUserCart[currentUserEmail]" :key="item.id"
                    class="flex justify-between items-center space-x-1 p-2 lg:space-x-3 lg:p-3 border-b">
                    <span class="flex-1">{{ item.title }}</span>
                    <span class="w-2/12 text-gray-600">${{ item.price }}</span>
                    <div class="flex lg:w-3/12 items-center space-x-1 lg:space-x-2">
                        <button
                            class="flex items-center p-1 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            :disabled="item.amount <= 1" @click="minusAmount(item)">
                            <Icon name="i-ic-round-minus" class="text-xs lg:text-xl" />
                        </button>
                        <span>{{ item.amount }}</span>
                        <button
                            class="flex items-center p-1 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            :disabled="item.amount >= 10" @click="addAmount(item)">
                            <Icon name="i-ic-round-add" class="text-xs lg:text-xl" />
                        </button>
                    </div>
                    <button class="flex w-1/12 item-center text-red-500 rounded-full hover:text-red-600 cursor-pointer"
                        @click="deleteItem(item)">
                        <Icon name="i-material-symbols-delete-rounded" class="text-lg lg:text-2xl" />
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
                <nuxt-link :to="Array.isArray(currentUserCart[currentUserEmail]) && currentUserCart[currentUserEmail].length > 0 ? '/checkout' : '/'" @click="() => showCart = false"
                    class="block text-center mt-4 w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition cursor-pointer">
                    {{ Array.isArray(currentUserCart[currentUserEmail]) && currentUserCart[currentUserEmail].length > 0 ? '前往結帳' : '前往選購' }}
                </nuxt-link>
            </div>
            <div class="mt-4 pt-4">
                <p>
                    ※ 同一商品數量不得大於10
                </p>
            </div>
        </aside>
    </div>
</template>

<script setup>
const { minusAmount, addAmount, deleteItem } = useCart();

const showCart = useState('showCart')
const currentUserCart = useState('currentUserCart')
const currentUserEmail  = useState('currentUserEmail')

const totalPrice = computed(() =>
    Array.isArray(currentUserCart.value[currentUserEmail.value])
    ? currentUserCart.value[currentUserEmail.value].reduce((sum, item) => sum + item.amount * item.price, 0).toFixed(2)
    : 0
)

const closeCart = () => {
    showCart.value = false
}

</script>