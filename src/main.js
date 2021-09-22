import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

import BaseCard from './components/ui/BaseCard.vue';
import JobList from './components/layout/JobList.vue';

const app = createApp(App);
const store = createStore({
  state() {
    return {};
  },
});

app.component('base-card', BaseCard);
app.component('job-list', JobList);

app.mount('#app');
