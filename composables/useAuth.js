export const useAuth = () => {
    const isLoggedIn = useState('isLoggedIn', () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('isLoggedIn') === 'true'
        }
    })

    const setCurrentUserEmail = (userEmail) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('currentUserEmail', userEmail)
        }
    }

    const getCurrentUserEmail = () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('currentUserEmail') || ''
        }
        return ''
    }

    const login = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('isLoggedIn', true)
        }
        isLoggedIn.value = true
    }

    const logout = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('isLoggedIn', false)
            localStorage.removeItem('currentUserEmail')
        }
        isLoggedIn.value = false
        navigateTo('/login')
    }

    return { setCurrentUserEmail, getCurrentUserEmail, login, logout }
}