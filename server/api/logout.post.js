export default defineEventHandler((event) => {
    let tokenCookie = getCookie(event, 'user-token')
    tokenCookie = null
    
    setCookie(event, 'user-token', tokenCookie)
    return { success: true }
})
