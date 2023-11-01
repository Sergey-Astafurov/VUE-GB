import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import Project from '@/views/Project.vue'
import Blog from '@/views/Blog.vue'
import NotFoud from '@/views/404.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component : Home
  },
  {
    path: '/project',
    name: 'Project',
    component : Project
  },
  {
    path: '/Blog',
    name: 'Blog',
    component : Blog
  },
  {
    path: '/:CatchAll(.*)',
    name: '404',
    component : NotFoud
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
