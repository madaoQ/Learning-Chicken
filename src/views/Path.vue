<template>
  <div class="flex flex-col flex-grow bg-gray-100">
    <!-- Path Categories -->
    <div class="overflow-x-auto whitespace-nowrap px-4 py-2 bg-white shadow-sm">
      <div class="inline-flex space-x-4">
        <button
          v-for="path in paths"
          :key="path.id"
          :class="{ 'text-blue-600 border-b-2 border-blue-600': selectedPath === path.id }"
          class="pb-2 transition-colors duration-200"
          @click="selectedPath = path.id"
        >
          {{ path.name }}学习路线
        </button>
      </div>
    </div>

    <!-- Chat Area -->
    <div class="flex-1 overflow-y-auto px-4 py-6 space-y-3" ref="chatArea">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="[
          'max-w-3/4 p-3 rounded-lg',
          message.isUser ? 'ml-auto bg-blue-600 text-white' : 'bg-white text-gray-800 shadow-sm',
        ]"
      >
        {{ message.content }}
      </div>
    </div>

    <!-- Message Input -->
    <div class="p-4 bg-white border-t fixed bottom-[56px] left-0 right-0 z-20">
      <div class="flex space-x-2">
        <input
          v-model="userInput"
          @keyup.enter="sendMessage"
          type="text"
          placeholder="Ask a question about the selected path..."
          class="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          @click="sendMessage"
          class="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <SendIcon class="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { SendIcon } from 'lucide-vue-next'

// Explicitly define the type of chatArea to HTMLElement | null
const chatArea = ref<HTMLElement | null>(null)

const selectedPath = ref('java')
const userInput = ref('')
const messages = ref([{ content: '让我来帮你规划学习路线吧，想学习些什么？', isUser: false }])

const paths = [
  { id: 'java', name: 'Java' },
  { id: 'frontend', name: '前端' },
  { id: 'cpp', name: 'C++' },
  { id: 'go', name: 'Go' },
]

const sendMessage = async () => {
  // Validate user input
  if (userInput.value.trim() === '') return

  // Add user message and clear input
  messages.value.push({ content: userInput.value, isUser: true })
  userInput.value = ''

  // Simulate AI response using Promise for better async handling
  await new Promise((resolve) =>
    setTimeout(() => {
      const aiResponse = `这是我提供的关于 ${selectedPath.value} 学习路线推荐: ...`
      messages.value.push({ content: aiResponse, isUser: false })
      resolve(null)
    }, 1000),
  )

  // Scroll to bottom after adding new messages
  scrollToBottom()
}

const scrollToBottom = () => {
  nextTick(() => {
    chatArea.value?.scrollTo({ top: chatArea.value.scrollHeight, behavior: 'smooth' })
  })
}

onMounted(scrollToBottom)
</script>

<style scoped>
/* Add any additional styles here */
</style>
