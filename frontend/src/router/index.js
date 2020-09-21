import { createRouter } from "vue-router";

import Main from '@/views/Main'
import Cables from '@/views/Cables'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/cables',
    name: 'cables',
    component: Cables
  }
];

const router = createRouter({
  routes
});

export default router;
