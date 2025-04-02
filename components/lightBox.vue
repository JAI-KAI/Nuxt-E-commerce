<template>
    <transition name="fade">
        <div v-show="showMessage"
            class="fixed top-5 left-1/2 -translate-x-1/2 bg-white px-20 py-10 rounded shadow-lg z-50">
            <span>商品數量超過限制</span>
        </div>
    </transition>

</template>

<script setup>

const showMessage = useState('showMessage');

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

</style>