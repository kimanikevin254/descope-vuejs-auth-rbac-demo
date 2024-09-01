<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const jobs = ref([])
const isLoading = ref(true)
const error = ref(null)

const fetchJobs = async () => {
  try {
    const response = await axios.get('http://localhost:3000/jobs')
    jobs.value = response.data
  } catch (err) {
    error.value = err.message || 'Failed to load jobs'
  } finally {
    isLoading.value = false
  }
}

const togglePublished = async (job) => {
  try {
    const updatedJob = { ...job, published: !job.published }
    await axios.put(`http://localhost:3000/jobs/${job.id}`, updatedJob)
    job.published = !job.published
  } catch (err) {
    console.error('Error updating job status', err)
    alert('Failed to update job status.')
  }
}

onMounted(fetchJobs)
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <h1 class="text-4xl font-bold text-gray-900 mb-10 text-center">Admin Dashboard</h1>
    <div v-if="isLoading" class="text-center">
      <p>Loading jobs...</p>
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      <p>Error loading jobs: {{ error }}</p>
    </div>
    <div v-else>
      <table class="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr class="bg-gray-800 text-white">
            <th class="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left">Title</th>
            <th class="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left">Company</th>
            <th class="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left">Location</th>
            <th class="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left">Salary</th>
            <th class="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left">Status</th>
            <th class="w-1/6 py-3 px-4 uppercase font-semibold text-sm text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="job in jobs" :key="job.id" class="hover:bg-gray-100">
            <td class="py-3 px-4">{{ job.title }}</td>
            <td class="py-3 px-4">{{ job.company }}</td>
            <td class="py-3 px-4">{{ job.location }}</td>
            <td class="py-3 px-4">{{ job.salaryRange }}</td>
            <td class="py-3 px-4">
              <span :class="{ 'text-green-600': job.published, 'text-red-600': !job.published }">
                {{ job.published ? 'Published' : 'Unpublished' }}
              </span>
            </td>
            <td class="py-3 px-4">
              <button
                @click="togglePublished(job)"
                class="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-500 transition duration-300 ease-in-out"
              >
                {{ job.published ? 'Unpublish' : 'Publish' }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
