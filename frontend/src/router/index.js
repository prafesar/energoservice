import { createRouter, createWebHistory } from "vue-router";

import UnitList from '../components/branch/UnitList';
import CableList from '../components/unit/CableList';
import CableCard from '@/components/cable/CableCard';

const routes = [
  {
    path: '/',
    component: UnitList
  },
  {
    path: '/unit/:id/cables',
    component: CableList
  },
  {
    path: '/cable/:id/',
    name: 'cable-card',
    component: CableCard
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
