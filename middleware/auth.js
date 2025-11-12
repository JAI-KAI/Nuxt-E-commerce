export default defineNuxtRouteMiddleware((to, from) => {
    if (process.server) return

    const { addMessage } = useMessage()
    // 從 Composable 中獲取狀態
    const { isLoggedIn } = useAuth()

    // 防止已登入用戶回到登入頁面
    if (to.path === '/login' && isLoggedIn.value) {
        addMessage('您已登入，將為您導航回首頁')
        return navigateTo('/')
    }

    // 防止未登入用戶訪問受保護頁面
    if (to.path === '/' && !isLoggedIn.value) {
        addMessage('請先登入以繼續操作')
        return navigateTo('/login')
    }
})
