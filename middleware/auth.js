export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.client) {
        const isLoggedIn = useState('isLoggedIn')
        const token = localStorage.getItem('token')

        // 防止已登入用戶回到登入頁面
        if (to.path === '/login' && isLoggedIn.value && token) {
            alert('您已登入，將為您導航回首頁')
            return navigateTo('/')
        }

        // 防止未登入用戶訪問受保護頁面
        // if (!isLoggedIn.value && !token) {
        //     // alert('請先登入以繼續操作')
        //     return navigateTo('/login')
        // }
    }
})
