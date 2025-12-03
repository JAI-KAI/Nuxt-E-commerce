const messages = ref<Array<{id: number; text: string}>>([]);

export const useMessage = () => {
    const addMessage = (text: string) => {
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
