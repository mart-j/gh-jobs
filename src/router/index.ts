import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../pages/Home.vue';
import Positions from '../pages/Positions.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/positions/:jobId?',
    name: 'Positions',
    component: Positions,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
