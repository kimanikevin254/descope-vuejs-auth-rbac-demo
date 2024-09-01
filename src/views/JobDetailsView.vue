<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const job = ref(null)
const isLoading = ref(true)
const error = ref(null)

const fetchJob = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:3000/jobs/${id}`)
    job.value = data
  } catch (err) {
    console.log('Unable to fetch job details', err.message)

    if (err.response && err.response.status === 404) {
      error.value = 'A job with the provided ID does not exist.'
    } else {
      error.value = err.message || 'Unable to fetch job details'
    }
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  const jobId = route.params.id
  if (jobId) {
    fetchJob(jobId)
  } else {
    error.value = 'No job ID provided'
    isLoading.value = false
  }
})

const goBack = () => {
  router.push({ name: 'jobs' })
}
</script>

<template>
  <div class="min-h-screen bg-white p-8">
    <div v-if="isLoading" class="text-center">
      <p>Loading job details...</p>
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      <p>Error loading job: {{ error }}</p>
    </div>
    <div v-else>
      <h1 class="text-4xl font-bold text-gray-900 mb-6">{{ job.title }}</h1>
      <p class="mb-4">{{ job.description }}</p>
      <p class="text-gray-700 mb-4">
        <span class="font-semibold">Company:</span> {{ job.company }}
      </p>
      <p class="text-gray-700 mb-4">
        <span class="font-semibold">Location:</span> {{ job.location }}
      </p>
      <p class="text-gray-700 mb-4">
        <span class="font-semibold">Salary:</span> {{ job.salaryRange }}
      </p>
      <p class="text-gray-700 mb-4">
        <span class="font-semibold">Job Type:</span> {{ job.jobType }}
      </p>

      <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Responsibilities</h2>
      <ul class="list-disc pl-6 text-gray-700 mb-8">
        <li v-for="responsibility in job.responsibilities" :key="responsibility">
          {{ responsibility }}
        </li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Qualifications</h2>
      <ul class="list-disc pl-6 text-gray-700 mb-8">
        <li v-for="qualification in job.qualifications" :key="qualification">
          {{ qualification }}
        </li>
      </ul>

      <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Benefits</h2>
      <ul class="list-disc pl-6 text-gray-700">
        <li v-for="benefit in job.benefits" :key="benefit">{{ benefit }}</li>
      </ul>

      <button
        @click="goBack"
        class="mt-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-500 transition duration-300 ease-in-out"
      >
        Back to Jobs
      </button>
    </div>
  </div>
</template>
