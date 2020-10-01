import { createApp } from "vue";
import App from "./App.vue";
import VueFormulate from '@brain/vue-formulate';
import { ru } from '@brain/vue-formulate-i18n';

import router from "./router";
import '@/assets/css/tailwind.css';

createApp(App)
  .use(router)
  .use(VueFormulate, plugins: [ ru ])
  .mount("#app");
