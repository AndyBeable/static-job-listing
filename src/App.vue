<template>
  <the-header></the-header>
  <job-list></job-list>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import JobList from './components/layout/JobList.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    JobList,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@200;400;500&display=swap');

html {
  font-family: 'Spartan', sans-serif;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #effafa;
}
</style>
