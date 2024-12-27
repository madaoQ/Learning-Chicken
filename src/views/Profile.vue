<template>
  <div class="pb-16">
    <!-- User Profile -->
    <div class="bg-white p-4 mb-4">
      <div class="flex items-center space-x-4">
        <div class="w-16 h-16 bg-gray-200 rounded-full"></div>
        <div>
          <h2 class="text-lg font-medium">学习鸡1672</h2>
          <p class="text-sm text-gray-500">普通用户</p>
        </div>
      </div>
    </div>

    <!-- Menu Items -->
    <div class="space-y-2 px-4">
      <div
        v-for="item in menuItems"
        :key="item.id"
        class="flex items-center justify-between bg-white p-4 rounded-lg"
      >
        <div class="flex items-center space-x-3">
          <component :is="item.icon" class="w-6 h-6 text-yellow-500" />
          <span>{{ item.title }}</span>
        </div>
        <ChevronRightIcon class="w-5 h-5 text-gray-400" />
      </div>
    </div>

    <!-- Share Button -->
    <div class="px-4 mt-8">
      <button class="w-full bg-yellow-500 text-white py-3 rounded-lg font-medium">
        分享给朋友
      </button>
    </div>

    <!-- Footer Links -->
    <div class="mt-4 text-center text-sm text-gray-500">
      <p>学习鸡网页刷题：mianshiya.com</p>
      <p>JetBrains IDE 刷题插件</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ChevronRightIcon,
  DiamondIcon,
  BookmarkIcon,
  EyeIcon,
  MessageSquareIcon,
  SettingsIcon,
} from 'lucide-vue-next'

const menuItems = [
  { id: 1, title: '会员', icon: DiamondIcon },
  { id: 2, title: '题目收藏', icon: BookmarkIcon },
  { id: 3, title: '刷题记录', icon: EyeIcon },
  { id: 4, title: '求职交流', icon: MessageSquareIcon },
  { id: 5, title: '刷题设置', icon: SettingsIcon },
]
</script>
