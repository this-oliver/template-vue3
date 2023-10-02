import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import { setupPinia, setupVuetify } from '@/plugins';

import './assets/styles/main.css';

const app = createApp(App);

app.use(setupPinia());
app.use(setupVuetify());
app.use(router);
app.mount('#app');
