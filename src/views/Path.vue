<template>
  <div class="pb-16">
    <!-- Path Categories -->
    <div class="overflow-x-auto whitespace-nowrap px-4 mb-4 border-b">
      <div class="inline-flex space-x-4">
        <button
          v-for="path in paths"
          :key="path.id"
          :class="{ 'text-yellow-500 border-b-2 border-yellow-500': selectedPath === path.id }"
          class="pb-2"
          @click="selectedPath = path.id"
        >
          {{ path.name }}刷题路线
        </button>
      </div>
    </div>

    <!-- Path List -->
    <div class="space-y-4 px-4">
      <div v-for="item in pathItems" :key="item.id" class="bg-white p-4 rounded-lg shadow-sm">
        <h3 class="text-xl font-medium mb-2">{{ item.title }}</h3>
        <p class="text-sm text-gray-600 mb-4">{{ item.description }}</p>
        <div class="flex items-center text-sm text-gray-500">
          <span class="mr-4">{{ item.category }}</span>
          <span class="flex items-center">
            <EyeIcon class="w-4 h-4 mr-1" />
            {{ item.views }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { EyeIcon } from 'lucide-vue-next'

const selectedPath = ref('java')

const paths = [
  { id: 'java', name: 'Java' },
  { id: 'frontend', name: '前端' },
  { id: 'cpp', name: 'C++' },
  { id: 'go', name: 'Go' },
]

const pathItems = [
  {
    id: 1,
    title: 'Java 校招/应届刷题知识路线',
    description:
      '扎实计算机网络、操作系统基础、Java基础、深入理解Java集合与并发、掌握Java虚拟机原理，以及熟悉常用的数据结构与算法',
    category: 'Java刷题路线',
    views: 3222,
  },
  {
    id: 2,
    title: 'Java 1-5 年刷题知识路线',
    description:
      '深入理解Java高级特性与并发编程、优化JVM性能、熟练使用Spring系列框架与微服务架构、优化数据库与缓存的使用',
    category: 'Java刷题路线',
    views: 2875,
  },
]
</script>
