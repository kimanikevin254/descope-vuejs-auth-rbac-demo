import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import JobsView from '@/views/JobsView.vue'
import JobDetailsView from '@/views/JobDetailsView.vue'
import AdminDashboardView from '@/views/AdminDashboardView.vue'
import { getJwtRoles, routeGuard } from "@descope/vue-sdk";

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
        requiresAdminRole: true
      }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = await routeGuard();
  const roles = isAuthenticated && getJwtRoles();

  if (to.meta.requiresAuth && !isAuthenticated) {
      next({ name: "login" });
  } else if (to.fullPath.includes("login") && isAuthenticated) {
      next({ name: "home" });
  } else if (to.meta.requiresAdminRole && !roles.includes("admin")) {
      next(from.path);
  } else {
      next();
  }
});

export default router
