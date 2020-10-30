import { createRouter, createWebHistory } from "vue-router";

import BranchCables from '@/views/BranchCables';
import Cable from '@/views/Cable';
import LoginPage from '@/views/LoginPage';


const routes = [
  {
    path: '/',
    redirect: '/branch/molEs/cables/'
  },
  {
    path: '/branch/:branchId/cables',
    component: BranchCables,
    name: 'branch-cables'
  },
  {
    path: '/unit/:unitId/cable/:cableId/',
    component: Cable,
    name: 'cable'
  },
  {
    path: '/login',
    component: LoginPage,
    name: 'login-page'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
