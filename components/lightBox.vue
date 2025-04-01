<template >
    <div v-show="showMessage"
        class="fixed top-5 left-1/2 -translate-x-1/2 bg-white px-20 py-10 rounded shadow-lg transition-opacity duration-1000 z-50"
        :class="{ 'opacity-100': showMessage, 'opacity-0': !showMessage}">
        <span>商品數量超過限制</span>
    </div>
</template>

<script setup>

const showMessage = useState('showMessage');

</script>