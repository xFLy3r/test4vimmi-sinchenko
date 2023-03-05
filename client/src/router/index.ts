import { createRouter, createWebHistory } from 'vue-router'
import UserListView from '@/views/UserListView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/:pathMatch(.*)*', 
      name: 'not-found', 
      component: NotFoundView
    },
    {
      path: '/',
      name: 'users',
      component: UserListView
    },
    {
      path: '/users',
      redirect: { name: 'users' },
    },
    {
      path: '/users/:id(\\d+)',
      name: 'user-details',
      component: () => import('../views/UserDetailsView.vue')
    }
  ]
})

export default router;
