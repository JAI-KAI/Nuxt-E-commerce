<template>
  <LightBox />
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-blue-600 text-white py-4 px-4 lg:px-8 shadow-lg">
      <div class="container mx-auto flex justify-between items-center px-4">
        <nav class="flex space-x-6 lg:space-x-10">
          <nuxt-link to="/" class="hover:text-gray-200 font-semibold">首頁</nuxt-link>
          <nuxt-link to="/about" class="hover:text-gray-200 font-semibold">關於</nuxt-link>
        </nav>

        <div class="flex items-center space-x-5">
          <button @click="isLoggedIn ? logout() : navigateTo('/login')"
            class="hover:text-gray-200 font-semibold cursor-pointer">
            {{ isLoggedIn ? '登出' : '登入' }}
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 container mx-auto p-4 lg:p-6">
      <slot></slot>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center py-4">
      <p>JAIKAI All rights reserved {{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { logout, isLoggedIn } = useAuth()


</script>