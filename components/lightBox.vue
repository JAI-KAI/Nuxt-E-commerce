<template>
    <div class="fixed top-5 left-1/2 -translate-x-1/2 z-50">
        <transition-group 
            name="fade" 
            tag="div" 
            class="space-y-2">
            <div v-for="msg of messages" 
                :key="msg.id"
                class=" bg-white px-6 py-3 rounded shadow-md text-center min-w-[240px]">
                {{ msg.text }}
            </div>
        </transition-group>
    </div>

</template>

<script setup>
const { messages } = useMessage();

const isAllLeaving = ref(false);

watchEffect(() => {
  isAllLeaving.value = messages.value.length === 1;
});
</script>

<style scoped>
.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}

.fade-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.fade-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

/* 有bug會造成元素偏移 */
/* .fade-leave-active {
    position: absolute;
    :class="{'left-[-120px]': isAllLeaving}"
} */
</style>