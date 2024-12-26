<template>
  <div class="min-h-screen bg-gray-50 px-4 py-8">
    <!-- Logo and Title -->
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold mb-2">面试鸭</h1>
      <p class="text-gray-500">刷题学习提升能力</p>
    </div>

    <!-- Login Form -->
    <div class="bg-white rounded-lg shadow-sm p-6 max-w-md mx-auto">
      <form @submit.prevent="handleLogin" class="space-y-6">
        <!-- Phone Input -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"> 手机号码 </label>
          <div class="relative">
            <PhoneIcon
              class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            />
            <input
              v-model="phone"
              type="tel"
              placeholder="请输入手机号码"
              class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>

        <!-- Verification Code -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"> 验证码 </label>
          <div class="flex space-x-4">
            <div class="relative flex-1">
              <KeyIcon
                class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              />
              <input
                v-model="code"
                type="text"
                placeholder="请输入验证码"
                class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <button
              type="button"
              :disabled="countdown > 0"
              @click="sendCode"
              class="px-4 py-2 border border-yellow-500 text-yellow-500 rounded-lg whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ countdown > 0 ? `${countdown}s后重试` : '获取验证码' }}
            </button>
          </div>
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-yellow-500 text-white py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
        >
          登录
        </button>

        <!-- Agreement Text -->
        <div class="text-center text-sm text-gray-500">
          登录即代表同意
          <a href="#" class="text-yellow-500">《用户协议》</a>
          和
          <a href="#" class="text-yellow-500">《隐私政策》</a>
        </div>
      </form>

      <!-- Other Login Methods -->
      <div class="mt-8">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">其他登录方式</span>
          </div>
        </div>

        <div class="mt-6 flex justify-center space-x-8">
          <button class="p-2 rounded-full border border-gray-200">
            <WheatIcon class="w-6 h-6 text-green-500" />
          </button>
          <button class="p-2 rounded-full border border-gray-200">
            <Github class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
g

<script setup lang="ts">
import { ref } from 'vue'
import { PhoneIcon, KeyIcon, WheatIcon, Github } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()
const phone = ref('')
const code = ref('')
const countdown = ref(0)

const sendCode = () => {
  if (countdown.value > 0) return

  // 开始倒计时
  countdown.value = 60
  const timer = setInterval(() => {
    countdown.value--
    if (countdown.value <= 0) {
      clearInterval(timer)
    }
  }, 1000)

  // TODO: 实际发送验证码的逻辑
}

const handleLogin = () => {
  // TODO: 实际登录逻辑
  router.push('/home')
}
</script>
