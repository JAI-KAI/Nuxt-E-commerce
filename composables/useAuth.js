export const useAuth = () => {
    const isLoggedIn = useState('isLoggedIn', () => false)

    const currentUserEmail = (userEmail) => {
        localStorage.setItem('currentUserEmail', userEmail)
    }

    const login = () => {
        localStorage.setItem('isLoggedIn', true)
        isLoggedIn.value = true
    }

    const logout = () => {
        localStorage.setItem('isLoggedIn', false)
        isLoggedIn.value = false
        localStorage.removeItem('currentUserEmail')
    }

    return { currentUserEmail, login, logout }
}