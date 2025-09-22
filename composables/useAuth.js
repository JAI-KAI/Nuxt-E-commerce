export const useAuth = () => {
    const isLoggedIn = useState('isLoggedIn', () => {
        if (import.meta.client) {
            return localStorage.getItem('isLoggedIn') === 'true'
        }
    })

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
            localStorage.setItem('isLoggedIn', true)
        }
        setCurrentUserEmail(userEmail)
        localStorage.setItem('token', Date.now().toString())
        isLoggedIn.value = true
        navigateTo('/')
    }

    const logout = () => {
        if (import.meta.client) {
            localStorage.setItem('isLoggedIn', false)
            localStorage.removeItem('currentUserEmail')
            localStorage.removeItem('token')
            currentUserEmail.value = ''
        }
        isLoggedIn.value = false
        navigateTo('/login')
    }

    return { setCurrentUserEmail, login, logout }
}