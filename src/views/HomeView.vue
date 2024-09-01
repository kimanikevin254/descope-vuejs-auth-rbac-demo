<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToJobs = () => {
  router.push({ name: 'jobs' })
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
    <header class="text-center">
      <h1 class="text-5xl font-bold text-gray-900 mb-6">Welcome to JobBoard Pro</h1>
      <p class="text-lg text-gray-700 mb-10">
        Your gateway to a world of opportunities. Explore top jobs and connect with leading
        companies.
      </p>
      <button
        @click="goToJobs"
        class="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md shadow hover:bg-blue-500 transition duration-300 ease-in-out"
      >
        View Available Jobs
      </button>
    </header>
    <section class="mt-16 w-full max-w-4xl text-center">
      <h2 class="text-3xl font-semibold text-gray-800 mb-4">Why Choose JobBoard Pro?</h2>
      <p class="text-gray-600 leading-relaxed">
        We offer a curated list of job opportunities from top employers in various industries. Our
        platform ensures that you get the best job offers tailored to your skills and preferences.
        Join now and take the next step in your career journey.
      </p>
    </section>
    <footer class="mt-16 text-center text-gray-500 text-sm">
      &copy; 2024 JobBoard Pro. All rights reserved.
    </footer>
  </div>
</template>
