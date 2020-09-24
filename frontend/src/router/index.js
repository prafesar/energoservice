import { createRouter, createWebHistory } from "vue-router";

import Main from '@/views/Main'
import Cables from '@/views/Cables'
import Contact from '@/views/Contact'
import Pricing from '@/views/Pricing'
import Events from '@/views/Events'
import DevPage from '@/views/DevPage'

export const test = 'asdfdasf';

export const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
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
  {
    path: '/pricing',
    name: 'pricing',
    component: Pricing
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/dev',
    name: 'devPage',
    component: DevPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
