<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
    <div class="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
      <Icon name="i-material-symbols-check-circle-rounded" class="text-green-500 text-6xl mb-4" />
      <h2 class="text-2xl font-semibold text-gray-800">訂購成功！</h2>
      <p class="text-gray-600 mt-2">感謝您的購買，您的訂單已成功建立。</p>

      <div class="mt-4 bg-gray-100 p-4 rounded-md">
        <p class="text-gray-700">您的訂單編號：</p>
        <p class="font-mono text-lg font-bold text-gray-900">{{ orderId }}</p>
      </div>

      <NuxtLink to="/"
        class="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
        返回首頁
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const orderId = ref(`ORD-${Math.floor(100000 + Math.random() * 900000)}`);
</script>