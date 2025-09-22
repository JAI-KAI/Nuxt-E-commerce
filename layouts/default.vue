<template>
  <LightBox />
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-blue-600 text-white py-4 px-10 shadow-lg">
      <div class="container mx-auto flex justify-between items-center px-4">
        <nav class="flex space-x-6">
          <nuxt-link to="/" class="hover:text-gray-200 font-semibold">首頁</nuxt-link>
          <nuxt-link to="/about" class="hover:text-gray-200 font-semibold">關於</nuxt-link>
        </nav>

        <div class="flex items-center space-x-5">
          <span>{{ currentUserEmail }}</span>
          <button @click="isLoggedIn ? logout() : navigateTo('/login')"
            class="hover:text-gray-200 font-semibold cursor-pointer">
            {{ isLoggedIn ? '登出' : '登入' }}
          </button>
          <!-- 購物車 Icon -->
          <button v-if="isLoggedIn" class="flex items-center relative cursor-pointer" @click="handleClick">
            <icon class="text-3xl text-white-500" name="i-material-symbols-shopping-cart-rounded" />
            <span class="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-2">
              {{ cartAmount }}
            </span>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 container mx-auto p-6">
      <slot></slot>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center py-4">
      <p>JAIKAI All rights reserved {{ new Date().getFullYear() }}</p>
    </footer>
  </div>
  <CartDrawer v-if="isLoggedIn" />
</template>

<script setup>
const { login, logout } = useAuth()

const currentUserEmail = useState('currentUserEmail')
const currentUserCart = useState('currentUserCart')
const isLoggedIn = useState('isLoggedIn')
const showCart = useState('showCart', () => false)
const showLightBox = useState('showLightBox', () => false)
const category = useState('category', () => 'ALL')

const cartAmount = computed(() => {
    if (!import.meta.client) return 0
    const email = currentUserEmail.value
    if (!isLoggedIn.value || !email || !currentUserCart.value || !currentUserCart.value[email]) return 0
    const cart = currentUserCart.value[email]
    return Array.isArray(cart) ? cart.reduce((sum, item) => sum + item.amount, 0) : 0
})

const handleClick = () => {
  showCart.value = true
}

</script>