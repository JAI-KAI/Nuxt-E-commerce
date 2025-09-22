<template>
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h1 class="text-2xl font-bold mb-4">結帳頁面</h1>

    <div v-if="Array.isArray(currentUserCart[currentUserEmail]) && currentUserCart[currentUserEmail].length > 0">
      <ul>
        <li v-for="item in currentUserCart[currentUserEmail]" :key="item.id" class="flex items-center w-full border-b py-4 space-x-3">
          <!-- 商品圖片 -->
          <img :src="item.image" alt="商品圖片" class="w-1/12 h-16 object-contain rounded-lg mr-4" />

          <!-- 商品資訊 -->
          <div class="flex-1">
            <h2 class="text-lg font-semibold">{{ item.title }}</h2>
            <p class="text-gray-500">${{ item.price }} x {{ item.amount }}</p>
          </div>

          <!-- 數量控制 -->
          <div class="flex items-center w-2/12 space-x-2">
            <button
              class="flex items-center p-2 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer disabled:cursor-not-allowed"
              :disabled="item.amount <= 1" @click="minusAmount(item)">
              <Icon name="i-ic-round-minus" class="text-lg" />
            </button>
            <span class="text-lg">{{ item.amount }}</span>
            <button
              class="flex items-center p-2 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer disabled:cursor-not-allowed"
              :disabled="item.amount >= 10" @click="addAmount(item)">
              <Icon name="i-ic-round-add" class="text-lg" />
            </button>
          </div>

          <!-- 小計 -->
          <p class="w-1/12 text-right font-semibold">${{ (item.price * item.amount).toFixed(2) }}</p>
          <button class="flex item-center w-1/12 text-red-500 rounded-full hover:text-red-600 cursor-pointer"
            @click="deleteItem(item)">
            <Icon name="i-material-symbols-delete-rounded" class="text-2xl" />
          </button>
        </li>
      </ul>

      <!-- 總金額 -->
      <div class="flex justify-between items-center mt-6 text-xl font-bold">
        <span>總金額：</span>
        <span>${{ totalPrice.toFixed(2) }}</span>
      </div>

      <!-- 結帳按鈕 -->
      <nuxt-link to="/orderComplete"
        class="block text-center mt-6 w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition cursor-pointer"
        @click="handleCheckout"
        >
        確認結帳
      </nuxt-link>
    </div>

    <p v-else class="text-center text-gray-500">購物車內沒有商品</p>
  </div>
  <nuxt-link v-show="Array.isArray(currentUserCart[currentUserEmail]) && currentUserCart[currentUserEmail].length === 0" to="/"
    class="max-w-3xl mx-auto block text-center mt-6 w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition cursor-pointer">
    前往商品頁面進行選購
  </nuxt-link>
</template>

<script setup>
const { minusAmount, addAmount, deleteItem, handleCheckout } = useCart()

const currentUserCart = useState('currentUserCart')
const currentUserEmail  = useState('currentUserEmail')

// 計算總金額
const totalPrice = computed(() =>
  currentUserCart.value[currentUserEmail.value].reduce((sum, item) => sum + item.price * item.amount, 0)
)

</script>