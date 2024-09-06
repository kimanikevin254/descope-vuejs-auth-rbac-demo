import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import JobsView from '@/views/JobsView.vue'
import JobDetailsView from '@/views/JobDetailsView.vue'
import AdminDashboardView from '@/views/AdminDashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/jobs/:id',
      name: 'jobDetails',
      component: JobDetailsView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/admin',
      name: 'adminDashboard',
      component: AdminDashboardView,
      meta: {
        requiresAuth: true,
        requiresAdminDashboardAccessPermission: true
      }
    }
  ]
})

export default router
