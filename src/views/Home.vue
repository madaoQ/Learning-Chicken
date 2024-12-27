<template>
  <div class="pb-16">
    <!-- Search Bar -->
    <div class="p-4">
      <div class="relative">
        <SearchIcon
          class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
        />
        <input
          type="text"
          placeholder="搜索资料"
          class="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
    </div>

    <!-- Categories -->
    <div class="overflow-x-auto whitespace-nowrap px-4 mb-4">
      <div class="inline-flex space-x-4">
        <button
          v-for="category in categories"
          :key="category.id"
          :class="{
            'text-yellow-500 border-b-2 border-yellow-500': selectedCategory === category.id,
          }"
          class="pb-2"
          @click="selectedCategory = category.id"
        >
          {{ category.name }}
        </button>
      </div>
    </div>

    <!-- Question Lists -->
    <div class="space-y-4 px-4">
      <div
        v-for="item in questionItems"
        :key="item.id"
        class="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm"
      >
        <div class="w-12 h-12 flex-shrink-0">
          <component :is="item.icon" class="w-full h-full text-blue-500" />
        </div>
        <div class="flex-grow">
          <h3 class="text-lg font-medium">{{ item.title }}</h3>
          <p class="text-sm text-gray-500">{{ item.count }} 题</p>
        </div>
        <ChevronRightIcon class="w-5 h-5 text-gray-400" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SearchIcon, ChevronRightIcon, CodeIcon, DatabaseIcon, ServerIcon } from 'lucide-vue-next'

const selectedCategory = ref('hot')

const categories = [
  { id: 'hot', name: '热门' },
  { id: 'backend', name: '后端' },
  { id: 'frontend', name: '前端' },
  { id: 'java', name: 'Java' },
  { id: 'cpp', name: '高数' },
  { id: 'python', name: '线代' },
  { id: 'go', name: 'Go' },
]

const questionItems = [
  {
    id: 1,
    title: 'Java 热门面试题 200 道',
    count: 200,
    icon: CodeIcon,
  },
  {
    id: 2,
    title: 'Java 基础面试题',
    count: 150,
    icon: ServerIcon,
  },
  {
    id: 3,
    title: 'Java 集合面试题',
    count: 100,
    icon: DatabaseIcon,
  },
]
</script>
