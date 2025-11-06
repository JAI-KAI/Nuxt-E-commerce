export const useAuth = () => {
    const isLoggedIn = useState('isLoggedIn', () => false)

    // 在客戶端初始化時同步登入狀態
    if (import.meta.client) {
        const token = localStorage.getItem('token')
        isLoggedIn.value = !!token
    }

    const currentUserEmail = useState('currentUserEmail', () => '')
    if (import.meta.client) {
        currentUserEmail.value = localStorage.getItem('currentUserEmail') || ''
    }

    const setCurrentUserEmail = (userEmail) => {
        if (import.meta.client) {
            localStorage.setItem('currentUserEmail', userEmail)
            currentUserEmail.value = userEmail
        }
    }

    const login = (userEmail) => {
        if (import.meta.client) {
            localStorage.setItem('token', Date.now().toString())
            setCurrentUserEmail(userEmail)
            isLoggedIn.value = true
        }
        navigateTo('/')
    }

    const logout = () => {
        if (import.meta.client) {
            localStorage.removeItem('currentUserEmail')
            localStorage.removeItem('token')
            currentUserEmail.value = ''
        }
        isLoggedIn.value = false
        navigateTo('/login')
    }

    return { isLoggedIn, setCurrentUserEmail, login, logout }
}