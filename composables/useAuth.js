export const useAuth = () => {
    const tokenCookie = useCookie('user-token')
    const isLoggedIn = computed(() => !!tokenCookie.value)

    const emailCookie = useCookie('user-email')
    const currentUserEmail = computed(() => {
        return emailCookie.value || ''
    })

    const setCurrentUserEmail = (userEmail) => {
        emailCookie.value = userEmail
    }

    const login = (userEmail) => {
        tokenCookie.value = Date.now().toString()
        setCurrentUserEmail(userEmail)
        navigateTo('/')
    }

    const logout = () => {
        emailCookie.value = null
        tokenCookie.value = null
        navigateTo('/login')
    }

    return { isLoggedIn, currentUserEmail, setCurrentUserEmail, login, logout }
}