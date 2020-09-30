import { createRouter, createWebHistory } from "vue-router";

import UnitList from '../components/branch/UnitList';
import CableList from '../components/unit/CableList';

const routes = [
  {
    path: '/',
    component: UnitList
  },
  {
    path: '/unit/:id/cables',
    component: CableList
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
