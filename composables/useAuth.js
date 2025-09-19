export const useAuth = () => {
    const isLoggedIn = useState('isLoggedIn', () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('isLoggedIn') === 'true'
        }
    })

    const currentUserEmail = useState('currentUserEmail', () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('currentUserEmail')
        }
    })

    const setCurrentUserEmail = (userEmail) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('currentUserEmail', userEmail)
            currentUserEmail.value = userEmail
        }
    }

    const login = (userEmail) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('isLoggedIn', true)
        }
        setCurrentUserEmail(userEmail)
        isLoggedIn.value = true
        navigateTo('/')
    }

    const logout = () => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('isLoggedIn', false)
            localStorage.removeItem('currentUserEmail')
            currentUserEmail.value = ''
        }
        isLoggedIn.value = false
        navigateTo('/login')
    }

    return { setCurrentUserEmail, login, logout }
}