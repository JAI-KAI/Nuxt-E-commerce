export default defineEventHandler((event) => {
    setCookie(event, 'user-token', '', { maxAge: 0 })
    return { success: true }
})
