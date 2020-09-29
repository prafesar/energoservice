import { createRouter, createWebHistory } from "vue-router";

import Units from '@/views/Units'
import Cables from '@/views/Cables'
import Events from '@/views/Events'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Events
  },
  {
    path: '/units/:unitId',
    name: 'units',
    component: Units,
    children: [
      { path: '/cables', component: Cables}
    ]
  },
  {
    path: '/cables',
    name: 'cables',
    component: Cables
  },
  {
    path: '/events',
    name: 'events',
    component: Events
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
