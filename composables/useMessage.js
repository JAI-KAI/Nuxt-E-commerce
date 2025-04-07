const messages = ref([]);

export const useMessage = () => {
    const addMessage = (text) => {
        const id = Date.now();
        messages.value.push({ id, text });

        setTimeout(() => {
            messages.value = messages.value.filter(msg => msg.id !== id)
        }, 2000)
    };

    return {
        messages,
        addMessage
    }
}
