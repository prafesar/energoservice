import { createRouter, createWebHistory } from "vue-router";

import BranchUnitList from '../components/branch/BranchUnitList';
import UnitCableList from '../components/unit/UnitCableList';
import Cable from '@/views/Cable';
import Branch from '@/views/Branch';
import Unit from '@/views/Unit';

const routes = [
  {
    path: '/',
    component: BranchUnitList
  },
  {
    path: '/branch/:branchId',
    component: Branch,
    name: 'branch'
  },
  {
    path: '/unit/:unitId',
    component: Unit,
    name: 'unit'
  },
  {
    path: '/unit/:unitId/cables',
    component: UnitCableList
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
