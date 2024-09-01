<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="bg-gray-100">
    <div class="container mx-auto">
      <Navbar />

      <RouterView />
    </div>
  </div>
</template>
