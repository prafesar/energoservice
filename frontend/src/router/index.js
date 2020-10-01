import { createRouter, createWebHistory } from "vue-router";

import BranchUnitList from '../components/branch/BranchUnitList';
import UnitCableList from '../components/unit/UnitCableList';
import CableCard from '@/components/cable/CableCard';

const routes = [
  {
    path: '/',
    component: BranchUnitList
  },
  {
    path: '/branch',
    component: BranchUnitList,
  },
  {
    path: '/branch/:id',
    component: BranchUnitList,
    name: 'branch-unit-list'
  },
  {
    path: '/unit/:id/cables',
    component: UnitCableList
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
