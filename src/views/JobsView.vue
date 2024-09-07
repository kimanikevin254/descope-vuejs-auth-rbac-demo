<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { getJwtPermissions } from "@descope/vue-sdk";

const router = useRouter()
const permissions = getJwtPermissions()

const jobs = ref([])
const isLoading = ref(true)
const error = ref(null)

const fetchJobs = async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/jobs')
    jobs.value = data
  } catch (error) {
    console.log(error)
    error.value = error.message || 'Unable to fetch jobs'
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchJobs)

// Filter to only show published jobs
const publishedJobs = computed(() => jobs.value.filter((job) => job.published))

// Navigate to job details page
const viewJobDetails = (jobId) => {
  router.push({ name: 'jobDetails', params: { id: jobId } })
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="flex items-center justify-between mb-10">
      <h1 class="text-4xl font-bold text-gray-900">Available Jobs</h1>
      <RouterLink
          v-if="permissions?.includes('Admin Dashboard Access')"
          to="/admin"
          class="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-500 transition duration-300 ease-in-out"
      >
          Go to Admin Dashboard
      </RouterLink>
    </div>
    <div v-if="isLoading" class="text-center">
      <p>Loading jobs...</p>
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      <p>Error loading jobs: {{ error }}</p>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="job in publishedJobs" :key="job.id" class="bg-white shadow-lg rounded-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">{{ job.title }}</h2>
        <p class="text-gray-600 mb-2">
          <span class="font-semibold">Company:</span> {{ job.company }}
        </p>
        <p class="text-gray-600 mb-2">
          <span class="font-semibold">Location:</span> {{ job.location }}
        </p>
        <p class="text-gray-600 mb-2">
          <span class="font-semibold">Salary:</span> {{ job.salaryRange }}
        </p>
        <p class="text-gray-600 mb-4">
          <span class="font-semibold">Job Type:</span> {{ job.jobType }}
        </p>
        <button
          @click="viewJobDetails(job.id)"
          class="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-500 transition duration-300 ease-in-out"
        >
          View Details
        </button>
      </div>
    </div>
  </div>
</template>
