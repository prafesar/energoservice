import { createRouter, createWebHistory } from "vue-router";

import BranchCables from '@/views/BranchCables';
import Cable from '@/views/Cable';


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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
