export const useAuthFetch = () => {
    const headers: Record<string, string> = {}
    const tokenCookie = useCookie('user-token')
    if (tokenCookie) {
        headers['Authorization'] = `Bearer ${tokenCookie}`
    }
    const { data: products, error, status, refresh } = useFetch('https://fakestoreapi.com/products', { headers })

    // [Error Interceptor 邏輯] 檢查錯誤響應狀態碼是否為 401
    if(error.value && error.value.status === 401) {
        tokenCookie.value = null
        navigateTo('/login')
    }

    return { products, error, status, refresh }
}  