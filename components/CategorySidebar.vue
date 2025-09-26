<template>
    <aside class="w-32 p-2 lg:w-64 lg:p-4 bg-gray-100  ">
        <h2 class="text-lg font-bold mb-4">商品分類</h2>
        <ul>
            <li v-for="category in categories" :key="category" class="mb-2">
                <button class="w-full text-left p-2 rounded hover:bg-gray-200 cursor-pointer" @click="selectCategory(category)">
                    {{ category }}
                </button>
            </li>
        </ul>
    </aside>
</template>

<script setup>
defineProps({ categories: Array });

const category = useState('category');

const selectCategory = (newCategory) => {
    category.value = newCategory
}

</script>