import { createApp } from 'vue';

import App from './App.vue';

import BaseCard from './components/ui/BaseCard.vue';
import JobList from './components/layout/JobList.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('job-list', JobList);

app.mount('#app');
