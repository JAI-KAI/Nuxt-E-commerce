export const useAuth = () => {
    const { addMessage } = useMessage()
    const tokenCookie = useCookie('user-token')
    const isLoggedIn = computed(() => !!tokenCookie.value)

    const emailCookie = useCookie('user-email')
    const currentUserEmail = computed(() => {
        return emailCookie.value || ''
    })

    const setCurrentUserEmail = (userEmail) => {
        emailCookie.value = userEmail
    }

    const login = async (userEmail) => {
        let { success } = await $fetch('/api/login', { method: 'POST' })
        if (success) {
            addMessage('登入成功')
            setCurrentUserEmail(userEmail)
            navigateTo('/')
        }
    }

    const logout = async () => {
        await $fetch('/api/logout', { method: 'POST' })
        emailCookie.value = null
        navigateTo('/login')
    }

    return { tokenCookie, isLoggedIn, currentUserEmail, setCurrentUserEmail, login, logout }
}