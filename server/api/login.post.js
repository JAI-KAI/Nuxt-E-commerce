export default defineEventHandler((event) => {
    let tokenCookie = getCookie(event, 'user-token')
    tokenCookie = Date.now().toString()

    setCookie(event, 'user-token', tokenCookie)
    return { success: true }
})
