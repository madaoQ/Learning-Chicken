<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Top status bar -->
    <div class="bg-white px-4 py-2 flex items-center justify-between">
      <div class="text-xl font-bold">学习鸡</div>
      <div class="flex items-center space-x-2">
        <button class="p-2">
          <MoreHorizontal class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Main content -->
    <router-view></router-view>

    <!-- Bottom Navigation -->
    <nav
      v-if="!isLoginPage"
      class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10"
    >
      <div class="flex justify-around">
        <router-link
          to="/home"
          class="flex flex-col items-center py-2 px-4"
          :class="{ 'text-yellow-500': currentRoute === '/' }"
        >
          <LayoutListIcon class="w-6 h-6" />
          <span class="text-xs mt-1">题库</span>
        </router-link>
        <router-link
          to="/path"
          class="flex flex-col items-center py-2 px-4"
          :class="{ 'text-yellow-500': currentRoute === '/path' }"
        >
          <MapIcon class="w-6 h-6" />
          <span class="text-xs mt-1">路线</span>
        </router-link>
        <router-link
          to="/profile"
          class="flex flex-col items-center py-2 px-4"
          :class="{ 'text-yellow-500': currentRoute === '/profile' }"
        >
          <UserIcon class="w-6 h-6" />
          <span class="text-xs mt-1">我的</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { MoreHorizontal, LayoutListIcon, MapIcon, UserIcon } from 'lucide-vue-next'

const route = useRoute()
const currentRoute = ref('/')

watch(
  () => route.path,
  (newPath) => {
    currentRoute.value = newPath
  },
)

onMounted(() => {
  currentRoute.value = route.path
})

// 计算属性，用于判断当前页面是否为登录页
const isLoginPage = computed(() => {
  return route.path == '/login'
})
</script>

<style>
body {
  @apply text-gray-900;
}
</style>
