<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const login = () => {
  router.push({ name: 'login' })
}

const handleLogout = () => {
  console.log('Log out');
}
</script>

<template>
  <nav class="border-b p-4">
    <div class="container mx-auto flex items-center justify-between">
      <RouterLink to="/" class="text-2xl font-bold"> JobBoard Pro </RouterLink>

      <div class="flex items-center space-x-4">
        <button
          @click="login"
          class="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-500 transition duration-300 ease-in-out"
        >
          Get Started
        </button>

        <button
          @click="handleLogout"
          class="bg-gray-600 text-white px-4 py-2 rounded-md shadow hover:bg-gray-500 transition duration-300 ease-in-out"
        >
          Log Out
        </button>
      </div>
    </div>
  </nav>
</template>
