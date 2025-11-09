export const useAuthFetch = () => {
    const headers = {}
    const tokenCookie = useCookie('user-token').value
    if (tokenCookie) {
        headers['Authorization'] = `Bearer ${tokenCookie}`
    }
    const { data: products, error, status, refresh } = useFetch('https://fakestoreapi.com/products', { headers })

    return { products, error, status, refresh }
}  