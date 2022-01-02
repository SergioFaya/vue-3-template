// bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
// vue loading overlay config
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';

createApp(App)
  .use(VueLoading)
  .use(router)
  .mount('#app');

// eslint-disable-next-line
import 'bootstrap/dist/js/bootstrap.js';
