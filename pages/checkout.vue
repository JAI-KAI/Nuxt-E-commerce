<template>
  <div class="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
    <h1 class="text-2xl font-bold mb-4">結帳頁面</h1>

    <div v-if="cartItems.length > 0">
      <ul>
        <li v-for="item in cartItems" :key="item.id" class="flex items-center border-b py-4">
          <!-- 商品圖片 -->
          <img :src="item.image" alt="商品圖片" class="w-16 h-16 object-contain rounded-lg mr-4" />

          <!-- 商品資訊 -->
          <div class="flex-1">
            <h2 class="text-lg font-semibold">{{ item.title }}</h2>
            <p class="text-gray-500">${{ item.price }} x {{ item.amount }}</p>
          </div>

          <!-- 數量控制 -->
          <div class="flex items-center space-x-2">
            <button class="p-2 bg-gray-200 hover:bg-gray-300 rounded" :disabled="item.amount <= 1"
              @click="updateQuantity(item, -1)">
              <Icon name="i-ic-round-minus" class="text-lg" />
            </button>
            <span class="text-lg">{{ item.amount }}</span>
            <button class="p-2 bg-gray-200 hover:bg-gray-300 rounded" :disabled="item.amount >= 10"
              @click="updateQuantity(item, 1)">
              <Icon name="i-ic-round-add" class="text-lg" />
            </button>
          </div>

          <!-- 小計 -->
          <p class="w-20 text-right font-semibold">${{ (item.price * item.amount).toFixed(2) }}</p>
        </li>
      </ul>

      <!-- 總金額 -->
      <div class="flex justify-between items-center mt-6 text-xl font-bold">
        <span>總金額：</span>
        <span>${{ totalPrice.toFixed(2) }}</span>
      </div>

      <!-- 結帳按鈕 -->
      <nuxt-link
        class="block text-center mt-6 w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition cursor-pointer"
        @click="checkout">
        確認結帳
      </nuxt-link>
    </div>

    <div v-else>
      <p class="text-center text-gray-500">購物車內沒有商品</p>
      <nuxt-link to="/" class="block text-center mt-6 w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition cursor-pointer">
        前往商品頁面進行選購
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>

const cartItems = useState('cartItems')

// 計算總金額
const totalPrice = computed(() =>
  cartItems.value.reduce((sum, item) => sum + item.price * item.amount, 0)
);

// 結帳按鈕動作
const checkout = () => {
  alert('前往 Stripe 付款...');
};
</script>