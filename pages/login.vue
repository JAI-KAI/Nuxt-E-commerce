<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto"
        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="onSubmit" class="space-y-6" action="">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
          <div class="mt-2">
            <input v-model="userEmail" type="email" name="email" id="email" autocomplete="email" required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
            <div class="text-sm">
              <button @click="isOnSignIn = !isOnSignIn" type="button" class="font-semibold"
                :class="isOnSignIn ? 'text-teal-600 hover:text-teal-500' : 'text-indigo-600 hover:text-indigo-500'">
                {{ isOnSignIn ? '去註冊' : '去登入' }}
              </button>
            </div>
          </div>
          <div class="mt-2">
            <input v-model="userPassWord" type="password" name="password" id="password" pattern=".{6,8}"
              title="密碼必須是 6 到 8 個字元" autocomplete="current-password" required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <button type="submit"
            class="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 "
            :class="isOnSignIn 
            ? 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600' 
            : 'bg-teal-600 hover:bg-teal-500 focus-visible:outline-teal-600'">
            {{isOnSignIn ? '登入' : '註冊'}}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const { login, logout } = useAuth()
const { addMessage } = useMessage()

const isLoggedIn = useState('isLoggedIn')
const isOnSignIn = ref(true)
const userEmail = ref('')
const userPassWord = ref('')
const userInfos = ref()

onMounted(() => {
  if (isLoggedIn.value) {
    navigateTo('/')
  }
})

if (import.meta.client) {
  userInfos.value = JSON.parse(localStorage.getItem('userInfos')) || []
}
const onSubmit = () => {
  isOnSignIn.value ? onSignIn() : onSignUp()
}

// 登入
const onSignIn = () => {
  setTimeout(() => {
    const currentUserInfo = userInfos.value.filter(e => e.userEmail === userEmail.value)
    if (currentUserInfo.length == 1) {
      if (currentUserInfo[0].userPassWord === userPassWord.value) {
        login(userEmail.value)
        addMessage('登入成功')
      } else {
        addMessage('密碼錯誤')
      }
    } else {
      addMessage('帳號信箱錯誤')
    }
  }, 500)
}

// 註冊
const onSignUp = () => {
  const userInput = {
    userEmail: userEmail.value,
    userPassWord: userPassWord.value
  }
  setTimeout(() => {
    if (!userInfos.value.map(e => e.userEmail).includes(userEmail.value)) {
      userInfos.value.push(userInput)
      localStorage.setItem('userInfos', JSON.stringify(userInfos.value))
      isOnSignIn.value = true
      addMessage('註冊成功 請登入')
    } else {
      addMessage('此帳號已註冊過')
    }
  }, 500)
}

</script>