<template>
  <section>
    <base-card>
      <h1>{{}}</h1>
    </base-card>
  </section>
</template>

<script>
export default {
  computed: {
    filteredJobs() {
      return this.$store.jobs;
    },
  },
};
</script>
