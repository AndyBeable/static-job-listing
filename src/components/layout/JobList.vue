<template>
  <section>
    <base-card>
      <ul>
        <li v-for="job in filteredJobs" :key="job.id">{{ job.position }}</li>
      </ul>
    </base-card>
  </section>
</template>

<script>
export default {
  computed: {
    filteredJobs() {
      return this.$store.getters.jobs;
    },
  },
};
</script>
